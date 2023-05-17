import { error } from '@sveltejs/kit';

export const load = async ({ locals: { supabase }, parent, params }) => {
	await parent();

	const { data } = await supabase
		.from('grades')
		.select(
			`
        grade,
        date_exam,
        subjects (
          subject
        )
      `
		)
		.eq('student_id', params.studentId);

	if (!data) {
		throw error(500, 'No data');
	}

	return {
		uniqueStudent: data
	};
};
