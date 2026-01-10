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
import { ROUTER_PATHS, GITHUB_OAUTH_URL } from "./constants";

type MENTOR_FORM = typeof ROUTER_PATHS.MENTOR_FORM;
type STUDENT_FORM = typeof ROUTER_PATHS.STUDENT_FORM;
type MENTOR_DASHBOARD = typeof ROUTER_PATHS.MENTOR_DASHBOARD;
type STUDENT_DASHBOARD = typeof ROUTER_PATHS.STUDENT_DASHBOARD;

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
  formLink: STUDENT_FORM | MENTOR_FORM;
  dashboardLink: STUDENT_DASHBOARD | MENTOR_DASHBOARD;
  setUserType: (type: UserType) => void;
  updateUserData: (
    name: string,
    email: string,
    college: string | undefined,
  ) => void;
  onLogin: (auth: ILocalStorageAuthObj) => void;
  onRegister: (auth: IUserAuthData) => void;
  onLogout: () => void;
  handleOAuthLogin: (userType: string) => void;
}

// ✨ NEW: Generate random state for OAuth CSRF protection
const generateRandomState = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array))
    .replace(/[^a-zA-Z0-9]/g, "")
    .slice(0, 43);
};

const AuthContext = createContext<IAuthContext | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<UserType>("student");
  const [isRegistered, setIsRegistered] = useState(false);
  const [userData, setUserData] = useState<IUserAuthData>(
    DEFAULT_AUTH_OBJ.userData
  );

  // Load auth from localStorage on mount
  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      const auth: ILocalStorageAuthObj = JSON.parse(storedAuth);
      setUserData(auth.userData);
      setUserType(auth.userData.type);
      setIsRegistered(auth.isRegistered);
    }
  }, []);

  const jwt = useMemo(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      const auth: ILocalStorageAuthObj = JSON.parse(storedAuth);
      return auth.jwt;
    }
    return "";
  }, []);

  //  Newchange: OAuth login handler - centralized from HeroSection
  const handleOAuthLogin = (userType: string) => {
    setUserType(userType as UserType);

    // Generate random state for CSRF protection
    const randomState = generateRandomState();

    // Store state and timestamp in localStorage
    localStorage.setItem("oauthState", randomState);
    localStorage.setItem("oauthStateTimestamp", Date.now().toString());

    // Redirect to GitHub OAuth with state parameter
    const oauthUrl = `${GITHUB_OAUTH_URL}&state=${randomState}`;
    window.location.href = oauthUrl;
  };

  const setUserTypeFunc = (type: UserType) => {
    setUserType(type);
  };

  const updateUserData = (
    name: string,
    email: string,
    college: string | undefined
  ) => {
    const newUserData = {
      ...userData,
      name,
      email,
      college,
    };
    setUserData(newUserData);
  };

  const onLogin = (auth: ILocalStorageAuthObj) => {
    localStorage.setItem("auth", JSON.stringify(auth));
    setUserData(auth.userData);
    setUserType(auth.userData.type);
    setIsRegistered(auth.isRegistered);
  };

  const onRegister = (auth: IUserAuthData) => {
    setUserData(auth);
    setUserType(auth.type);
    setIsRegistered(true);
  };

  const onLogout = () => {
    localStorage.removeItem("auth");
    setUserData(DEFAULT_AUTH_OBJ.userData);
    setUserType("student");
    setIsRegistered(false);
    navigate("/");
  };

  const formLink: STUDENT_FORM | MENTOR_FORM =
    userType === "mentor"
      ? ROUTER_PATHS.MENTOR_FORM
      : ROUTER_PATHS.STUDENT_FORM;

  const dashboardLink: STUDENT_DASHBOARD | MENTOR_DASHBOARD =
    userType === "mentor"
      ? ROUTER_PATHS.MENTOR_DASHBOARD
      : ROUTER_PATHS.STUDENT_DASHBOARD;

  const value: IAuthContext = {
    isAuthenticated: jwt !== "",
    isRegistered,
    jwt,
    userData,
    formLink,
    dashboardLink,
    setUserType: setUserTypeFunc,
    updateUserData,
    onLogin,
    onRegister,
    onLogout,
    handleOAuthLogin, //  Newfile : Exported OAuth handler
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}
