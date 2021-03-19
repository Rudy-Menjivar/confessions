import React from "react";

function EditButton(props) {
    return (
        <button>
            <span {...props} role="button">Edit</span>
        </button>
    );
};

export default EditButton;
