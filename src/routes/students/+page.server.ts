import type { IUniqueStudent } from '$lib/types.js';
import { error } from '@sveltejs/kit';

export const load = async ({ parent, locals: { supabase } }) => {
	await parent();

	const { data, error: err } = await supabase.from('students').select();

	if (err) {
		throw error(500, { message: 'Something went wrong!' });
	}

	return {
		allStudents: data as Array<IUniqueStudent>
	};
};
