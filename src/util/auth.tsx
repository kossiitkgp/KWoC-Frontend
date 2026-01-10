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
