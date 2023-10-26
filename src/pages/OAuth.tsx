import { useEffect, useState } from 'react';
import { makeOAuthRequest } from '../util/backend';
import { useAuthContext } from '../util/auth';
import { useNavigate } from 'react-router-dom';

function OAuth() {
	const authContext = useAuthContext();
	const [error, setError] = useState<string|null>(null);
	const navigate = useNavigate();

	const loginHandler = async (oauthCode: string) => {
		// Assuming type is already set when login is started
		const type = authContext.userData.type;
		const auth = await makeOAuthRequest(oauthCode, type);

		if ('code' in auth) {
			setError(auth.message);
		}
		else {
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
