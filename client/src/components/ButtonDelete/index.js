import React from "react";

function DeleteButton(props) {
    return (
        <button>
            <span {...props} role="button">Delete</span>
        </button>
    );
};

export default DeleteButton;
