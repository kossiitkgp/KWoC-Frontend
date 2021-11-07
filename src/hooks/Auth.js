import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";
import { BACKEND_URL } from "../constants";

const authConnector = {
  isAuthenticated: false,
  // registerUser(data, cb, cbe) {
  //   authConnector.isAuthenticated = true;
  //   axios
  //     .post(`${BACKEND_URL}/oauth`, data)
  //     .then((response) => {
  //       cb(response.data);
  //     })
  //     .catch((error) => cbe(error));
  // },

  login(data, cb, cbe) {
    authConnector.isAuthenticated = true;
    axios
      .post(`${BACKEND_URL}/oauth`, data)
      .then((response) => {
        cb(response);
      })
      .catch((error) => {
        cbe(error);
      });
  },

  signout(cb) {
    authConnector.isAuthenticated = false;
    cb();
  },
};

export const authContext = createContext(null);

function ProvideAuth(props) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}> {props.children} </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(getUserFromLocalStorage());
  let history = useHistory();

  // const registerUser = (data, cb, cbe) => {
  //   return authConnector.registerUser(
  //     data,
  //     (user) => {
  //       setUser(user);
  //       localStorage.setItem("user", JSON.stringify(user));
  //       cb();
  //     },
  //     cbe
  //   );
  // };

  // const authHeader = () => {
  //   if (user !== null) {
  //     return {
  //       headers: {
  //         Authorization: `Bearer ${user?.access_token}`,
  //       },
  //     };
  //   }
  // };

  const login = (data, cb, cbe) => {
    return authConnector.login(
      data,
      (response) => {
        let user = {
          username: response.username,
          name: response.name,
          email: response.email,
          // TODO(@sahil-shubham): better way of handling multiple user types
          // is_student: response.type === "student" ? "true" : "false",
          // is_mentor: response.type === "mentor" ? "true" : "false",
          // jwt: response.jwt,
        };

        // this is only till multiple users types gets sorted, after that user.jwt everywhere
        if (response.type === "student") {
          user.student_jwt = response.jwt;
        } else {
          user.mentor_jwt = response.jwt;
        }
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));

        history.push(`/dashboard/${response.type}`);
        cb();
      },
      cbe
    );
  };

  const signout = (cb) => {
    return authConnector.signout(() => {
      setUser(null);
      localStorage.removeItem("");
      cb();
    });
  };

  return {
    user,
    login,
    // registerUser,
    // authHeader,
    signout,
  };
}

function getUserFromLocalStorage() {
  let userJSON = localStorage.getItem("user");
  if (userJSON) {
    return JSON.parse(userJSON);
  }

  return null;
}

export { ProvideAuth, useAuth };
