import React from "react";
import NavBarWelcome from "../components/NavBarWelcome";
import Jumbotron from "../components/Jumbotron";
import Login from "../components/Login";

function Welcome() {
    return (
        <div>
            <NavBarWelcome />
            <Jumbotron />
            <h1>Welcome</h1>
            <Login />
        </div>
    );
};

export default Welcome;
