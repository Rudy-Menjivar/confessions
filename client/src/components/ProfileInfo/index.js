import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/userAPI";

function ProfileInfo() {

    const [userData, setUserData] = useState([]);

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
            {/* {userData.map(data => (
                <div className="profileInfo-container">
                    <p>Welcome {data.user.username}</p>
                    <p>Info: (...)</p>
                </div>))} */}
        </div>
    );
};

export default ProfileInfo;
