import React from "react";
import "./style.css";

function LikeButton(props) {
    return (
        <button {...props}></button>
        // <button {...props} role="button">{props.children}</button>
    );
};

export default LikeButton;
