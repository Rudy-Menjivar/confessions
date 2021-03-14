import React from "react";
import "./style.css";

function PostCard({ children }) {
    return (
        <div className="postCard">
            {children}
        </div>
    );
};

export default PostCard;
