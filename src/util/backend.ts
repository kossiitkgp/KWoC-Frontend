import { BACKEND_URL } from './constants';

export interface IErrorResponse {
	code: number;
	message: string;
}

async function makeBackendRequest(
	endpoint: string,
	method: 'get' | 'post',
	jwt: string | null,
	body: Object | null
): Promise<Response> {
	const headers: {
		'Content-Type'?: string,
		'Bearer'?: string
	} = new Object();

	if (jwt !== null) headers['Bearer'] = jwt;
	if (body !== null) headers['Content-Type'] = 'application/json';

	switch (method) {
		case 'get':
			return await fetch(`${BACKEND_URL}/${endpoint}/`, {
				method: 'get',
				headers
			})
		case 'post':
			return await fetch(`${BACKEND_URL}/${endpoint}/`, {
				method: 'post',
				headers,
				body: JSON.stringify(body ?? {})
			})
	}
}

export interface IOAuthResponse {
	email: string;
	is_new_user: boolean;
	jwt: string;
	name: string;
	type: 'student' | 'mentor';
	username: string;
}
export async function makeOAuthRequest(
	code: string,
	type: 'mentor' | 'student'
): Promise<IErrorResponse | IOAuthResponse> {
	const response = await makeBackendRequest(
		'oauth',
		'post',
		null,
		{code, type},
	)

	return await response.json() as IOAuthResponse | IErrorResponse;
}