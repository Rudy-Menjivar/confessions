import React from "react";
import NavBarWelcome from "../components/NavBarWelcome";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
    return (
        <div>
            <NavBarWelcome />
            <Jumbotron />
            <h1>404 Page Not Found</h1>
        </div>
    );
};

export default NoMatch;
