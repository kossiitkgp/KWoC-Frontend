import axios from 'axios';
import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { makeOAuthRequest } from '../util/backend';

interface IUserAuthData {
	username: string;
	name: string;
	email: string;
	type: 'student' | 'mentor';
}

interface ILocalStorageAuthObj {
	jwt: string;
	userData: IUserAuthData
}
const DEFAULT_AUTH_OBJ: ILocalStorageAuthObj = {
	// Random defaults
	jwt: '',
	userData: {
		username: '',
		name: '',
		email: '',
		type: 'student'
	}
}

interface IAuthContext {
	isAuthenticated: boolean;
	jwt: string;
	userData: IUserAuthData;
	onLogin: (auth: ILocalStorageAuthObj) => void;
	onLogout: () => void;
};

const AuthContext = createContext<IAuthContext>({
	isAuthenticated: false,
	// Random defaults
	userData: DEFAULT_AUTH_OBJ.userData,
	jwt: DEFAULT_AUTH_OBJ.jwt,
	onLogin: () => {},
	onLogout: () => {}
})

export const useAuthContext = () => useContext(AuthContext);

export function AuthProvider({children}: {children: React.ReactNode}) {
	const navigate = useNavigate();

	const [isAuthenticated, setIsAuthenticated] = useState(
		localStorage.getItem('jwt') !== null
	)
	const [userAuth, setUserAuth] = useState<ILocalStorageAuthObj>(DEFAULT_AUTH_OBJ);

	const onLogin = (auth: ILocalStorageAuthObj) => {
		// Set the JWT in the local storage
		localStorage.setItem('auth', JSON.stringify(auth));
		// Set the authorization headers
		axios.defaults.headers['Bearer'] = auth.jwt;

		setIsAuthenticated(true);
		setUserAuth(auth);
	}

	const onLogout = () => {
		localStorage.removeItem('auth');
		delete axios.defaults.headers['Bearer'];

		setIsAuthenticated(false);
		setUserAuth(DEFAULT_AUTH_OBJ);
	};

	useEffect(
		() => {
			const lsAuthKey = localStorage.getItem('auth');

			if (lsAuthKey !== null) {
				const auth = JSON.parse(lsAuthKey) as ILocalStorageAuthObj;
				setUserAuth(auth);
			}
		},
		[navigate]
	)

	const value = useMemo(
		() => ({ isAuthenticated, userData: userAuth.userData, jwt: userAuth.jwt, onLogin, onLogout }),
		[isAuthenticated, userAuth, onLogin, onLogout]
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}