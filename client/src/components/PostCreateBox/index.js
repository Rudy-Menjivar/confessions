import React, { useState, useEffect } from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../utils/profileAPI";
import APIuser from "../../utils/userAPI";

function PostCreateBox() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [ owner, setOwner ] = useState("");

    useEffect(() => {
        loadUserData();
    });

    function loadUserData() {
        APIuser.getUserData()
            .then(res =>
                setOwner(res.data.user.username)
            )
            .catch(err => console.log(err));
    };

    const handleCreateConfessionForm = (event) => {
        event.preventDefault();
        if (title && content) {
            API.saveConfession({
                title, 
                content, 
                owner
            })
            .then(window.location.reload(false))
            .catch(err => console.log(err));
        };
    };

    const updateTitle = (event) => {
        setTitle(event.target.value);
    };

    const updateContent = (event) => {
        setContent(event.target.value)
    };

    return (
        <div className="PostCreateBox">
            <Form>
                <Form.Label className="newc"><strong>New confession: </strong></Form.Label>
                <Form.Group className="box" controlId="formBasicEmail">
                    <Form.Label className="header">Header: </Form.Label>
                    <Form.Control className="headerbox" onChange={(event) => updateTitle(event)} type="email" placeholder="A short summary of what your confession is about." />
                </Form.Group>

                <Form.Group className="details" controlId="formBasicPassword">
                    <Form.Group className="details" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="details">Details: </Form.Label>
                        <Form.Control className="details" onChange={(event) => updateContent(event)}  as="textarea" rows={3} placeholder="What's on your mind?"/>
                    </Form.Group>
                </Form.Group>
                <Button className="post-button" onClick={handleCreateConfessionForm} variant="dark" type="submit">
                    Post
                </Button>
            </Form>
        </div>
    );
};

export default PostCreateBox;
