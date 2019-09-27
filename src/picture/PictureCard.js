import React from "react";

export default function PictureCard(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.url} />
            <p>{props.explanation}</p>
            <p>Date: {props.date}</p>
            <p>Copyright: {props.copyright}</p>
        </div>
    );
}

// Image: props.url
// Date: props.date
// Copyright: props.copyright
// Title: props.title
// Explanation: props.explanation