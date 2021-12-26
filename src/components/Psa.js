import React, { useState } from "react";

function Psa(props) {
  const [removeNotif, setRemoveNotif] = useState(false);
  let memory = JSON.parse(localStorage.getItem("confirmedPsa")) ?? [];

  const closePsa = () => {
    memory.push(props.announcement);
    localStorage.setItem("confirmedPsa", JSON.stringify(memory));
    setRemoveNotif(true);
  };

  return (
    <>
      {memory.includes(props.announcement) || removeNotif ? (
        ""
      ) : (
        <div className="psa">
          <div className="psa-confirm" onClick={() => closePsa()}>
            <span></span>
            <span></span>
          </div>

          <div className="psa-content">{props.announcement}</div>
        </div>
      )}
    </>
  );
}

export default Psa;
