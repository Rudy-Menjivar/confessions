import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/userAPI";

function ProfileInfo() {

    const [ username, setusername ] = useState([]);

    useEffect(() => {
        loadUserData();
    });

    function loadUserData() {
        API.getUserData()
            .then(res =>
                // console.log(res.data.user.username),
                setusername(res.data.user.username)
            )
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div className="profileInfo-container">
                <p>Hello {username}</p>
                <p>Info: (...)</p>
            </div>
        </div>
    );
};

export default ProfileInfo;
