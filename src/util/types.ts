export type UserType = 'mentor' | 'student';

export interface IHTTPMessage {
	status_code: number;
	message: string;
}

export interface IEndpointTypes {
	'oauth': {
		request: {
			code: string,
			type: UserType
		},
		response: {
			email: string;
			is_new_user: boolean;
			jwt: string;
			name: string;
			type: UserType;
			username: string;
		}
	},
	'student/form': {
		request: {
			username: string;
			name: string;
			email: string;
			college: string;
		},
		response: IHTTPMessage
	}
}