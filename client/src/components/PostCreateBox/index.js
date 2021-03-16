import React from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function PostCreateBox() {
    return (
        <div className="PostCreateBox">
            <Form>
                <Form.Label>New confession: </Form.Label>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Header: </Form.Label>
                    <Form.Control type="email" placeholder="A short summary of what your confession is about." />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Details: </Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="What's on your mind?"/>
                    </Form.Group>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Post
                </Button>
            </Form>
        </div>
    );
};

export default PostCreateBox;
