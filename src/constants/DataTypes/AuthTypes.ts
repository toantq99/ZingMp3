export interface User {
	id: number;
	username: string;
	password: string;
	fullName: string;
	email: string;
}

export interface Action_Login {
	type: string;
	payload: {
		error?: { message: string };
		user?: User;
		token?: string;
	};
}

export interface Action_Signup {
	type: string;
	payload: {
		error?: { message: string };
		user?: User;
		token?: string;
	};
}
