import React from "react";
import NavBarWelcome from "../components/NavBarWelcome";
import Jumbotron from "../components/Jumbotron";

function Welcome() {
    return (
        <div>
            <NavBarWelcome />
            <Jumbotron />
            <h1>Welcome</h1>
        </div>
    );
};

export default Welcome;
