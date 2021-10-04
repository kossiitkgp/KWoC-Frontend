import React, { useState } from "react";
import * as K from "../../constants/constants";
import "../../styles/Form.scss";

export default function EndEvalsForm() {
  const [blogLink, setBlogLink] = useState("");
  const [feedback, setFeedback] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const URL = `${K.STATS_API}/endevals/form`;
    const data = {
      username: localStorage.getItem("student_username"),
      blogLink: blogLink,
      feedback: feedback,
    };

    fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200)
          alert("You have submitted the form successfully");
      })
      .catch((err) => {});
  }

  return (
    <div className="box">
      <h2>End Evals Form</h2>
      <div className="field">
        <label className="label">Blog Link</label>
        <div className="control">
          <input
            className="input is-rounded is-info"
            type="text"
            placeholder="Link of blog"
            defaultValue=""
            onChange={(e) => setBlogLink(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Feedback</label>
        <div className="control">
          <input
            className="input is-rounded is-info"
            type="text"
            placeholder="Suggestions for us to improve"
            defaultValue=""
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
      </div>
      <div>
        <a
          class="button is-info is-rounded is-fullWidth column is-full"
          onClick={handleSubmit}
        >
          Submit
        </a>
      </div>
    </div>
  );
}
