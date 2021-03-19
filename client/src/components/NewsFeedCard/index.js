import React from "react";
import "./style.css";

function NewsFeedCard({ children }) {
    return (
        <div className="newsfeed-confessions">
            { children }
        </div>
    );
};

export default NewsFeedCard;
