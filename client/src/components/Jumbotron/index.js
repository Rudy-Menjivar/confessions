import React from "react";
import logoImg from "../../images/logo.PNG";
import "./style.css";

function Jumbotron(){
    return (
        <div className ="jumbotron text-center">
            <img id="logo" src={logoImg} alt="App Logo"></img>
        </div>
    );

}

export default Jumbotron;
