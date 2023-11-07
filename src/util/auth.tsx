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
  userData: IUserAuthData;
}
const DEFAULT_AUTH_OBJ: ILocalStorageAuthObj = {
  // Random defaults
  jwt: "",
  userData: {
    username: "",
    name: "",
    email: "",
    type: "student",
  }
};

interface IAuthContext {
  isAuthenticated: boolean;
  jwt: string;
  userData: IUserAuthData;
  formLink: ROUTER_PATHS.STUDENT_FORM | ROUTER_PATHS.MENTOR_FORM;
  dashboardLink: ROUTER_PATHS.STUDENT_DASHBOARD | ROUTER_PATHS.MENTOR_DASHBOARD;
  setUserType: (type: UserType) => void;
  onLogin: (auth: ILocalStorageAuthObj) => void;
  onLogout: () => void;
}

const DEFAULT_AUTH_CONTEXT: IAuthContext = {
  isAuthenticated: false,
  // Random defaults
  userData: DEFAULT_AUTH_OBJ.userData,
  formLink: ROUTER_PATHS.STUDENT_FORM,
  dashboardLink: ROUTER_PATHS.STUDENT_DASHBOARD,
  jwt: DEFAULT_AUTH_OBJ.jwt,
  setUserType: () => {},
  onLogin: () => {},
  onLogout: () => {},
}

const AuthContext = createContext<IAuthContext>(DEFAULT_AUTH_CONTEXT);

export const useAuthContext = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userAuth, setUserAuth] =
    useState<ILocalStorageAuthObj>(DEFAULT_AUTH_OBJ);
  const [formLink, setFormLink] = useState(DEFAULT_AUTH_CONTEXT.formLink);
  const [dashboardLink, setDashboardLink] = useState(DEFAULT_AUTH_CONTEXT.dashboardLink);

  const setUserType = (type: UserType) => {
    setUserAuth({
      ...userAuth,
      userData: {
        ...userAuth.userData,
        type,
      },
    });
    setFormLink(type === 'student' ? ROUTER_PATHS.STUDENT_FORM : ROUTER_PATHS.MENTOR_FORM);
    setDashboardLink(type === 'student' ? ROUTER_PATHS.STUDENT_DASHBOARD : ROUTER_PATHS.MENTOR_DASHBOARD);

    localStorage.setItem("auth", JSON.stringify(userAuth));
  };

  const onLogin = (auth: ILocalStorageAuthObj) => {
    // Set the JWT in the local storage
    localStorage.setItem("auth", JSON.stringify(auth));

    setIsAuthenticated(true);
    setFormLink(auth.userData.type === 'student' ? ROUTER_PATHS.STUDENT_FORM : ROUTER_PATHS.MENTOR_FORM);
    setDashboardLink(auth.userData.type === 'student' ? ROUTER_PATHS.STUDENT_DASHBOARD : ROUTER_PATHS.MENTOR_DASHBOARD);
    setUserAuth(auth);
  };

  const onLogout = () => {
    localStorage.removeItem("auth");

    setIsAuthenticated(false);
    setUserAuth(DEFAULT_AUTH_OBJ);
  };

  useEffect(() => {
    const lsAuthKey = localStorage.getItem("auth");

    if (lsAuthKey !== null) {
      const auth = JSON.parse(lsAuthKey) as ILocalStorageAuthObj;
      setUserAuth(auth);

      if(auth.jwt !== "") setIsAuthenticated(true);
    }
  }, [navigate]);

  const value = useMemo(
    () => ({
      isAuthenticated,
      userData: userAuth.userData,
      formLink,
      dashboardLink,
      jwt: userAuth.jwt,
      setUserType,
      onLogin,
      onLogout,
    }),
    [isAuthenticated, userAuth, onLogin, onLogout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
