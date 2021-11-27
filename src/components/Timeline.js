import React from "react";
import timelinedata from "../data/timelineData";

const colors = ["red", "green", "blue", "grey"];

const TimelineItem = ({ data, color }) => (
  <div className="timeline-item">
    <div className="timeline-item-content multicolor" color={color}>
      <h2 className="time">{data.date}</h2>
      <p>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle"></span>
    </div>
  </div>
);
const Timeline = () =>
  timelinedata.length > 0 && (
    <div className="timeline-container">
      {timelinedata.map((data, idx) => (
        <TimelineItem data={data} key={idx} color={colors[idx % 4]} />
      ))}
    </div>
  );

export default Timeline;
