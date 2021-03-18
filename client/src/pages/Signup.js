import React, { useState } from "react";
import NavBarWelcome from "../components/NavBarMember";
import SignUp from "../components/SignUp"
import API from "../utils/userAPI.js";

function Signuppage() {
 const [formObject] = useState({})

 function handleSignupForm(event) {
     event.preventDefault();
     if(formObject.username && formObject.password) {
         API.getSignup({
             username: formObject.title,
             password: formObject.password
         })
            .catch(err => console.log(err));
     }
 };
    return (
        <div>
            <NavBarWelcome />
            <SignUp 
                onClick={handleSignupForm}
            />

        </div>
    );
};


export default Signuppage;