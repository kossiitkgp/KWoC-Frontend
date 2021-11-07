import React, { useEffect } from "react";
import { useAuth } from "../hooks/Auth";

function OAuth() {
  let auth = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const data = {
      code: params.get("code"),
      state: params.get("state"),
    };

    // TODO: test things by changing redirect uri
    auth.login(
      data,
      () => {
        // TODO: use react-hot-toast for login, announcement etc. notifs
        console.log("succex");
      },
      (e) => {
        console.log(e);
        alert("Server Error! Please try again");
      }
    );

    // DOUBT(@rakaar): what is the need for this?
    // if (!res["isNewUser"]) props.history.push("/dashboard/mentor");
  }, []);

  return (
    <div>
      <h1>Loading ...</h1>
    </div>
  );
}

export default OAuth;
