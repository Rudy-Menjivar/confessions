import React from "react";

function DeleteButton(props) {
    return (
        <div>
            <span {...props} role="button">Delete</span>
        </div>
    );
};

export default DeleteButton;
