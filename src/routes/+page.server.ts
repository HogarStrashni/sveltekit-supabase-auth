import { error, fail, redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ locals: { supabase } }) => {
		const { data, error: err } = await supabase.auth.signInWithOAuth({ provider: 'google' });

		if (err) {
			return fail(400, { message: 'Something went wrong' });
		}

		throw redirect(303, data.url);
	},

	logout: async ({ locals: { supabase } }) => {
		const { error: err } = await supabase.auth.signOut();

		if (err) {
			throw error(500, { message: 'Something went wrong' });
		}

		throw redirect(303, '/');
	}
};
