import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../constants";

export default function Form(props) {
  const [isSubmitDisabled, disableSubmit] = useState(false);

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");

  useEffect(() => {
    const { username, name, email } = props.location.state;
    // filling the default values in the form using the data obtained from github OAuth
    setUsername(username);
    setName(name);
    setEmail(email);
  }, [props.location.state]);

  function handleSubmit(e) {
    e.preventDefault();
    disableSubmit(true);

    const URL = `${BACKEND_URL}/student/form`;
    const data = {
      username: username,
      name: name,
      email: email,
      college: college,
    };

    fetch(URL, {
      method: "POST",
      headers: {
        Bearer: localStorage.getItem("student_jwt"),
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res === "success") props.history.push("/dashboard/student");
      })
      .catch((err) => {
        disableSubmit(false);
      });
  }

  return (
    <div className="box">
      <h2>Registrations for this year have ended.</h2>
    </div>
  );
}
