import { BACKEND_URL } from './constants';
import axios, { AxiosResponse } from 'axios';

export interface IErrorResponse {
	code: number;
	message: string;
}

async function makeBackendRequest(
	endpoint: string,
	method: 'get' | 'post',
	body?: Object,
): Promise<AxiosResponse> {
	switch (method) {
		case 'get':
			return await axios({
				url: `${BACKEND_URL}/${endpoint}/`,
				method: 'get'
			})
		case 'post':
			return await axios({
				url: `${BACKEND_URL}/${endpoint}/`,
				method: 'post',
				data: body
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
): Promise<IOAuthResponse> {
	const response = await makeBackendRequest(
		'oauth',
		'post',
		{code, type},
	)
	return response.data;
}