import React from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignUp(props) {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control {...props} type="email" placeholder="Please enter your email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else
                </Form.Text>
            </Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control {...props} type="username" placeholder="Please enter your username" />
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control {...props} type="password" placeholder="Password" />
            </Form.Group>
            <Button {...props} variant="primary" type="submit">Submit</Button>
        </Form>
    );
};

export default SignUp
