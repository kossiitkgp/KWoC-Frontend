import React from "react";

// TODO: we should show these messages in a better way
export function MidsFail() {
  return (
    <h3>
      Sorry, you had no commit till now, hence you have failed Mid evals. If any
      issues contact at KOSS@EMAIL.com
    </h3>
  );
}

export function MidsCleared() {
  return <h3>You have cleared your Midevals, congrats :party-parrot:</h3>;
}

export function EndEvalsFormSubmitted() {
  return (
    <h3>
      You have submitted your End evals form. Thanks for participating in KWoC,
      see u next yr. Keep following koss on facebook
    </h3>
  );
}
