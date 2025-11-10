import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "./types";
import { makeRequest } from "./backend";

// const MENTOR_FORM = "/mentor/form" as const;
// const STUDENT_FORM = "/student/form" as const;
// const MENTOR_DASHBOARD = "/mentor/dashboard" as const;
// const STUDENT_DASHBOARD = "/student/dashboard" as const;

// type MENTOR_FORM = typeof MENTOR_FORM;
// type STUDENT_FORM = typeof STUDENT_FORM;
// type MENTOR_DASHBOARD = typeof MENTOR_DASHBOARD;
// type STUDENT_DASHBOARD = typeof STUDENT_DASHBOARD;

interface IUserAuthData {
  username: string;
  name: string;
  email: string;
  type: UserType;
  college: string | undefined;
}

interface ILocalStorageAuthObj {
  jwt: string;
  isRegistered: boolean;
  userData: IUserAuthData;
}
const DEFAULT_AUTH_OBJ: ILocalStorageAuthObj = {
  // Random defaults
  jwt: "",
  isRegistered: false,
  userData: {
    username: "",
    name: "",
    email: "",
    type: "mentor",
    college: "",
  },
};

interface IAuthContext {
  isAuthenticated: boolean;
  isRegistered: boolean;
  jwt: string;
  userData: IUserAuthData;
  // formLink: STUDENT_FORM | MENTOR_FORM;
  // dashboardLink: STUDENT_DASHBOARD | MENTOR_DASHBOARD;
  setUserType: (type: UserType) => void;
  updateUserData: (
    name: string,
    email: string,
    college: string | undefined,
  ) => void;
  onLogin: (auth: ILocalStorageAuthObj) => void;
  onRegister: (auth: IUserAuthData) => void;
  onLogout: () => void;
}

const DEFAULT_AUTH_CONTEXT: IAuthContext = {
  isAuthenticated: false,
  isRegistered: false,
  // Random defaults
  userData: DEFAULT_AUTH_OBJ.userData,
  jwt: DEFAULT_AUTH_OBJ.jwt,
  setUserType: () => {},
  updateUserData: () => {},
  onLogin: () => {},
  onRegister: () => {},
  onLogout: () => {},
};

const getLsAuthObj = () => {
  const lsAuthKey = localStorage.getItem("auth");

  if (lsAuthKey !== null) {
    const auth = JSON.parse(lsAuthKey) as ILocalStorageAuthObj;
    return auth;
  }

  return null;
};

const getLsAuthJwt = () => {
  const auth = getLsAuthObj();
  if (auth === null) return null;
  else return auth.jwt;
};

const AuthContext = createContext<IAuthContext>(DEFAULT_AUTH_CONTEXT);

export const useAuthContext = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const lsAuthJwt = getLsAuthJwt();
  const [isAuthenticated, setIsAuthenticated] = useState(
    lsAuthJwt !== null && lsAuthJwt !== "",
  );

  const [userAuth, setUserAuth] = useState<ILocalStorageAuthObj>(
    getLsAuthObj() ?? DEFAULT_AUTH_OBJ,
  );

  const [isRegistered, setIsRegistered] = useState(userAuth.isRegistered);

  const setUserType = (type: UserType) => {
    setUserAuth({
      ...userAuth,
      userData: {
        ...userAuth.userData,
        type,
      },
    });
  };

  const updateUserData = (
    name: string,
    email: string,
    college: string | undefined = undefined,
  ) => {
    setUserAuth({
      ...userAuth,
      userData: {
        ...userAuth.userData,
        name: name,
        email: email,
        college: college,
      },
    });
  };

  const updateAuth = (auth: ILocalStorageAuthObj) => {
    setUserAuth(auth);
  };

  const onLogin = (auth: ILocalStorageAuthObj) => {
    setIsAuthenticated(true);
    setUserType(auth.userData.type);
    updateAuth(auth);
  };

  const onRegister = (userData: IUserAuthData) => {
    setIsRegistered(true);
    setUserType(userData.type);

    const newUserAuth = {
      ...userAuth,
      userData,
      isRegistered: true,
    };

    updateAuth(newUserAuth);
  };

  const onLogout = () => {
    localStorage.removeItem("auth");

    setIsAuthenticated(false);
    setIsRegistered(false);
    setUserAuth(DEFAULT_AUTH_OBJ);
  };

  // Load the profile once
  useEffect(() => {
    if (isAuthenticated) {
      makeRequest("profile", "get", null, userAuth.jwt)
        .then(({ response, is_ok }) => {
          if (is_ok) {
            onRegister({
              username: response.username,
              name: response.name,
              email: response.email,
              college: userAuth.userData.college,
              type: response.type,
            });
          } else {
            if (response.status_code === 400) {
              setIsRegistered(false);
            } else {
              onLogout();
            }
          }
        })
        .catch((err) => {
          console.log("Error fetching profile from the backend: ", err);
        });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(userAuth));
  }, [userAuth]);

  useEffect(() => {
    const auth = getLsAuthObj();

    if (auth !== null) {
      setUserAuth(auth);
      if (auth.jwt !== "" && auth.jwt !== null) setIsAuthenticated(true);
      setIsRegistered(auth.isRegistered);
    }
  }, [navigate]);

  const value = useMemo(
    () => ({
      isAuthenticated,
      isRegistered,
      userData: userAuth.userData,
      jwt: userAuth.jwt,
      setUserType,
      onLogin,
      onRegister,
      onLogout,
      updateUserData,
    }),
    [isAuthenticated, userAuth, onLogin, onRegister, onLogout, updateUserData],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
