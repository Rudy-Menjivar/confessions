import React, { useState } from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../utils/profileAPI";

function PostCreateBox() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleCreateConfessionForm = (event) => {
        event.preventDefault();
        if (title && content) {
            API.saveConfession({
                title, 
                content
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
                <Form.Label>New confession: </Form.Label>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Header: </Form.Label>
                    <Form.Control onChange={(event) => updateTitle(event)} type="email" placeholder="A short summary of what your confession is about." />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Details: </Form.Label>
                        <Form.Control onChange={(event) => updateContent(event)}  as="textarea" rows={3} placeholder="What's on your mind?"/>
                    </Form.Group>
                </Form.Group>
                <Button onClick={handleCreateConfessionForm} variant="primary" type="submit">
                    Post
                </Button>
            </Form>
        </div>
    );
};

export default PostCreateBox;
