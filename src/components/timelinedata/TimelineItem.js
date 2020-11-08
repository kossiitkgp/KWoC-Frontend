import React from "react";
const TimelineItem = ({ data }) => (
	<div className="timeline-item">
		<div className="timeline-item-content">
			<strong><span className="time">{data.date}</span></strong>
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
export default TimelineItem;
