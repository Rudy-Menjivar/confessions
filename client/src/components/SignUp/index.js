import React, { useState } from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../utils/userAPI.js";

function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignupForm = (event) => {
        event.preventDefault();
        if (username && password) {
            API.signup({
                username,
                password
            })
                .catch(err => console.log(err));
        }
    };

    const updateUsername = (event) => {
        setUsername(event.target.value);
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
    }

    return (
        <Form>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={(e) => updateUsername(e)} type="username" placeholder="Please enter your username" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e) => updatePassword(e)} type="password" placeholder="Password" />
            </Form.Group>
            <Button onClick={handleSignupForm} variant="primary" type="submit">Submit</Button>
        </Form>
    );
};

export default SignUp
