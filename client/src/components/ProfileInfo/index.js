import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/userAPI";

function ProfileInfo() {

    const [ setUserData ] = useState([]);

    useEffect(() => {
        loadUserData();
    });

    function loadUserData() {
        API.getUserData()
            .then(res =>
                setUserData(res.data.user._id))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div className="profileInfo-container">
                <p>Welcome </p>
                <p>Info: (...)</p>
            </div>
        </div>
    );
};

export default ProfileInfo;
