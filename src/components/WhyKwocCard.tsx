import React from "react";
import "../styles/whyKwoc.css"

interface CardProps {
    heading: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ heading, description }) => {
    return (
        <div className="kwocCard">
            <h2>{heading}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Card;
