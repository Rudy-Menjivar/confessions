import React from "react";
import "./style.css";

function ProfileInfo(props) {
    return (
        <div className="profileInfo-container">
            <p>Username: {props.user}</p>
            <p>Info: (...)</p>
        </div>
    );
};

export default ProfileInfo;
