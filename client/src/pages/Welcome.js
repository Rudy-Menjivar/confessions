import React from "react";
import NavBarWelcome from "../components/NavBarWelcome";
import Jumbotron from "../components/Jumbotron";
import LogIn from "../components/LogIn";

function Welcome() {
    return (
        <div>
            <NavBarWelcome />
            <Jumbotron />
            <h1>Welcome</h1>
            <LogIn />
        </div>
    );
};

export default Welcome;
