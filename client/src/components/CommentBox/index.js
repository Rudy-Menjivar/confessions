import React, { useState, useEffect } from 'react';
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../utils/profileAPI";

function CreateCommentBox() {

    const [comments, setComments] = useState([]);

    //load comments and store them
    useEffect(() => {
        loadComments();
    }, []);

    function loadComments() {
        API.getConfessions()
            .then(res =>
                setComments(res.data)
            )
            .catch(err => console.log(err));
    };

    return (
        <div className="CreateCommentBox">
            <Form>
                <Form.Label>Comment:</Form.Label>
                <Form.Group controlId="formBasicComment">
                    <Form.Control as="textarea" rows={2} placeholder="Leave a comment." />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit Comment
                </Button>
            </Form>
        </div>
    );
};

export default CreateCommentBox;
