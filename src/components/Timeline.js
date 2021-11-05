import React from "react";
import timelinedata from "../data/timelineData";
import TimelineItem from "./TimelineItem";

const Timeline = () =>
  timelinedata.length > 0 && (
    <div className="timeline-container">
      {timelinedata.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

export default Timeline;
