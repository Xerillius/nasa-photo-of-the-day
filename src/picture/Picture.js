import React, { useEffect, useState } from "react";
import PictureCard from "./PictureCard.js";
import axios from "axios";

export default function Picture(props) {
    const [picture, setPicture] = useState([]);

    const getPicture = async function() {
        const temp = await axios.get("https://api.nasa.gov/planetary/apod?api_key=PDscuGuizWtf6X0WPIJuREi3i9SNXnAVqJHLXKQI")
        setPicture(temp.data);
    }

    useEffect(() => {
        getPicture();
    }, []);
    return (
        <>
            <PictureCard 
                title={picture.title}
                url={picture.url}
                explanation={picture.explanation}
                date={picture.date}
                copyright={picture.copyright}
            />
        </>
    );
}

//result.data

// Image: props.url
// Date: props.date
// Copyright: props.copyright
// Title: props.title
// Explanation: props.explanation