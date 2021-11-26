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
      <h2>Student Form</h2>
      <h3>Welcome {username}</h3>

      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input is-rounded "
            type="text"
            placeholder="Name"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-rounded "
            type="email"
            placeholder="Email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="icon is-large is-left" id="fontello-icon">
            <i className="icon-mail-alt" />
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Name of Institution</label>
        <div className="control">
          <input
            className="input is-rounded "
            type="text"
            placeholder="College name"
            onChange={(e) => setCollege(e.target.value)}
          />
        </div>
      </div>

      <div>
        <a
          class="button  is-rounded is-fullWidth column is-full"
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
        >
          Submit
        </a>
      </div>
    </div>
  );
}
