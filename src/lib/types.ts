export interface IUniqueStudent {
	student_id: string;
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
}

export interface ISubjectGrade {
	subject_id: string;
	subject: string;
	grade: number | null;
	date_exam: string | null;
}
