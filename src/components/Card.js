import React from "react";
import "../styles/Card.scss";

export default function Card(props) {
  let taglist = props.tags
    ? props.tags.map((tag) => {
        /*Structure of tag:
        {value: <Tag Title>, type: <Tag Type added as a class>}
        */
        return (
          <li className={["card-tag-item", "card-tag-" + tag.type].join(" ")}>
            {tag.value}
          </li>
        );
      })
    : "";

  let tagDiv =
    taglist === "" ? (
      ""
    ) : (
      <div className="card-tag-container">
        <ul className="card-tags">{taglist}</ul>
      </div>
    );

  let headDiv = props.heading ? (
    <div className="card-head">
      <h1>{props.heading}</h1>
    </div>
  ) : (
    ""
  );

  let bodyDiv = props.body ? (
    <div className="card-body">
      <p>{props.body}</p>
    </div>
  ) : (
    ""
  );

  let imgDiv = props.img ? (
    <div className={["card-img", "card-img-" + props.img.style].join(" ")}>
      <img src={props.img.link} alt={props.img.alt} />
    </div>
  ) : (
    ""
  );

  return (
    <div className="card-container">
      {imgDiv}
      {headDiv}
      {bodyDiv}
      {tagDiv}
    </div>
  );
}
