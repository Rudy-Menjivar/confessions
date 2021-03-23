import React, { useState, useEffect } from 'react';
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../utils/profileAPI";

function CreateCommentBox(props) {

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState();

    const handleCommentsForm = (event) => {
        event.preventDefault();
    const newComments = [...comments, newComment]
        if (comments) {
            API.submitComment(
                props.id,
                {comments: newComments}
            ).then(res => {
                setComments(newComments)
                setNewComment("")
                loadComments();
            })
                .catch(err => console.log(err));
        }
    };

    const updateComments = (event) => {
        setNewComment(event.target.value);
    }

    //load comments and store them
    useEffect(() => {
        loadComments();
    }, []);

    function loadComments() {
        API.getConfession(props.id)
            .then(res => {
                console.log(res.data)
                setComments(res.data.comment)
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="CreateCommentBox">
            {comments.map((comment, i) => <p key={`comment${i}`}>{comment}</p>)}
            <Form>
                <Form.Group controlId="formBasicComment">
                    <Form.Label>Comment:</Form.Label>
                    <Form.Control onChange={(e) => updateComments(e)} as="textarea" rows={2} placeholder="Leave a comment." value={newComment} />
                </Form.Group>
                <Button onClick={handleCommentsForm} variant="primary" type="submit">
                    Submit Comment
                </Button>
            </Form>
        </div>
    );
};

export default CreateCommentBox;
