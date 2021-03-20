import React from "react";
import API from "../../utils/profileAPI";
import "./style.css";

function DislikeButton(props) {
    const handleDislikeClickEvent = (e) => {
        const body = {
            dislikes: parseInt(e.target.value) + 1
        };
        API.updateConfession(props.id, body)
            .then(res => {
                props.loadConfessions();
            })
            .catch(err => console.log(err));
    };

    return (
        <button
            className={props.className}
            value={props.value}
            onClick={(e) => handleDislikeClickEvent(e)}>
            Dislikes: {props.value}
        </button>
    );
};

export default DislikeButton;
