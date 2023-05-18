import type { ISubjectGrade } from '$lib/types.js';
import { error } from '@sveltejs/kit';

export const load = async ({ locals: { supabase }, parent, params }) => {
	await parent();

	const { data, error: err } = await supabase
		.from('subjects')
		.select(
			`
        *,
				grades(
					grade,
					date_exam
				)
				
			`
		)
		.eq('grades.student_id', params.studentId)
		.order('subject_id', { ascending: true });

	if (err) {
		throw error(500, { message: 'Something went wrong!' });
	}

	const studentGrades = data.map((item) => {
		const { subject_id, subject, grades } = item;
		return {
			subject_id,
			subject,
			grade: grades.length ? grades[0].grade : null,
			date_exam: grades.length ? grades[0].date_exam : null
		};
	});

	return {
		studentGrades: studentGrades as Array<ISubjectGrade>
	};
};
