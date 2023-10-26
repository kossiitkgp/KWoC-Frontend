import { useEffect, useState } from 'react';
import { IErrorResponse, makeOAuthRequest } from '../util/backend';
import { useAuthContext } from '../components/useAuthContext';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

function OAuth() {
	const authContext = useAuthContext();
	const [error, setError] = useState<string|null>(null);
	const navigate = useNavigate();

	const loginHandler = async (code: string) => {
		try {
			const auth = await makeOAuthRequest(code, 'student');

			authContext.onLogin({
				jwt: auth.jwt,
				userData: {
					username: auth.username,
					name: auth.name,
					email: auth.email,
					type: auth.type
				}
			})

			navigate(`/${auth.type}/${auth.is_new_user ? 'form' : 'dashboard'}`);
		}
		catch (e) {
			const error = e as AxiosError<IErrorResponse>;

			if ('response' in error) {
				if ('data' in error.response!) {
					setError(error.response?.data.message);
				}
			}
			else {
				setError('An error occured.');
			}
		}
	}

	useEffect(() => {
		const urlParams = new URLSearchParams(location.search);

		if (urlParams.get('code') === null) {
			setError('No OAuth code found. Redirecting to home page.');
			navigate('/');
		}
		else {
			loginHandler(urlParams.get('code') as string);
		}
	})

	return <div>
		{
			error ?? ''
		}
	</div>
}

export default OAuth;
