import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "./types";
import { ROUTER_PATHS } from "./constants";

interface IUserAuthData {
  username: string;
  name: string;
  email: string;
  type: UserType;
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
  },
};

interface IAuthContext {
  isAuthenticated: boolean;
  isRegistered: boolean;
  jwt: string;
  userData: IUserAuthData;
  formLink: ROUTER_PATHS.STUDENT_FORM | ROUTER_PATHS.MENTOR_FORM;
  dashboardLink: ROUTER_PATHS.STUDENT_DASHBOARD | ROUTER_PATHS.MENTOR_DASHBOARD;
  setUserType: (type: UserType) => void;
  updateUserData: (name: string, email: string) => void;
  onLogin: (auth: ILocalStorageAuthObj) => void;
  onRegister: (auth: IUserAuthData) => void;
  onLogout: () => void;
}

const DEFAULT_AUTH_CONTEXT: IAuthContext = {
  isAuthenticated: false,
  isRegistered: false,
  // Random defaults
  userData: DEFAULT_AUTH_OBJ.userData,
  formLink: ROUTER_PATHS.STUDENT_FORM,
  dashboardLink: ROUTER_PATHS.STUDENT_DASHBOARD,
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

  const [formLink, setFormLink] = useState<IAuthContext["formLink"]>(
    userAuth.userData.type === "mentor"
      ? ROUTER_PATHS.MENTOR_FORM
      : ROUTER_PATHS.STUDENT_FORM,
  );
  const [dashboardLink, setDashboardLink] = useState<
    IAuthContext["dashboardLink"]
  >(
    userAuth.userData.type === "mentor"
      ? ROUTER_PATHS.MENTOR_DASHBOARD
      : ROUTER_PATHS.STUDENT_DASHBOARD,
  );

  const setUserType = (type: UserType) => {
    setUserAuth({
      ...userAuth,
      userData: {
        ...userAuth.userData,
        type,
      },
    });
    setFormLink(
      type === "student" ? ROUTER_PATHS.STUDENT_FORM : ROUTER_PATHS.MENTOR_FORM,
    );
    setDashboardLink(
      type === "student"
        ? ROUTER_PATHS.STUDENT_DASHBOARD
        : ROUTER_PATHS.MENTOR_DASHBOARD,
    );
  };

  const updateUserData = (name: string, email: string) => {
    setUserAuth({
      ...userAuth,
      userData: {
        ...userAuth.userData,
        name: name,
        email: email,
      },
    });
  };

  const updateAuth = (auth: ILocalStorageAuthObj) => {
    setUserAuth(auth);
    setFormLink(
      userAuth.userData.type === "student"
        ? ROUTER_PATHS.STUDENT_FORM
        : ROUTER_PATHS.MENTOR_FORM,
    );
    setDashboardLink(
      userAuth.userData.type === "student"
        ? ROUTER_PATHS.STUDENT_DASHBOARD
        : ROUTER_PATHS.MENTOR_DASHBOARD,
    );
  };

  const onLogin = (auth: ILocalStorageAuthObj) => {
    setIsAuthenticated(true);
    updateAuth(auth);
  };

  const onRegister = (userData: IUserAuthData) => {
    setIsRegistered(true);

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
      formLink,
      dashboardLink,
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
