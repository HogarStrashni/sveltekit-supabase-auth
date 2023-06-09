import { SupabaseClient, Session } from '@supabase/supabase-js';
import { IUniqueStudent, ISubjectGrade } from './lib/types';

declare global {
	declare namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient;
			getSession(): Promise<Session | null>;
		}
		interface PageData {
			session: Session | null;
			supabase: SupabaseClient;
			allStudents: Array<IUniqueStudent>;
			studentGrades: Array<ISubjectGrade>;
		}
		// interface Platform {}
	}
}

export {};
