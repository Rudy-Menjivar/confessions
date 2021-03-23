import React from "react";
import "./style.css";

function ProfileInfo(props) {
    return (
        <div className="profileInfo-container">
            <p><strong>Username: {props.user}</strong></p>
            <p><strong>Info: (...)</strong></p>
        </div>
    );
};

export default ProfileInfo;
