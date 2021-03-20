import React from "react";
import API from "../../utils/newsfeedAPI";
import "./style.css";

function LikeButton(props) {
    const handleLikeClickEvent = (e) => {
        const body = {
            likes: parseInt(e.target.value) + 1
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
            onClick={(e) => handleLikeClickEvent(e)}>
            Likes: {props.value}
        </button>
    );
};

export default LikeButton;
