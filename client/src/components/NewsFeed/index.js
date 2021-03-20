import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/newsfeedAPI";
import NavBarMember from "../NavBarMember";
import NewsFeedCard from "../NewsFeedCard";
import LikeButton from "../ButtonLike";
import DislikeButton from "../ButtonDislike";
import ReportButton from "../ButtonReport";

function NewsFeed() {
    // Setting initial state of confession posts by all users
    const [confessions, setConfessions] = useState([]);

    // Load all confessions and store them with setConfessions
    useEffect(() => {
        loadConfessions();
    }, []);

    // Load all confession posts and set them to confessions
    function loadConfessions() {
        API.getConfessions()
            .then(res => {
                setConfessions(res.data)
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <NavBarMember />
            <h1>News Feed</h1>
            {confessions.length ? (
                <div>
                    {confessions.map(confession => (
                        <NewsFeedCard key={confession._id}>
                            <div className="newsfeed-card">
                                <div className="post-owner">
                                    <span>Owner of this post: </span>
                                </div>
                                <div className="newsfeed-posts">
                                    <p>{confession.content}</p>
                                </div>
                                <div className="reaction-box">
                                    <LikeButton
                                        className="like"
                                        id={confession._id}
                                        value={confession.likes}
                                        loadConfessions={loadConfessions}
                                    />
                                    <DislikeButton className="dislike"><span>Dislikes: {confession.dislikes}</span></DislikeButton>
                                    <ReportButton className="report"><span>Report!</span></ReportButton>
                                </div>
                                <div className="comment-box">
                                    <span className="comments">Comments: </span>
                                </div>
                            </div>
                        </NewsFeedCard>
                    ))}
                </div>
            ) : (
                <h3>Nothing in your newsfeed yet!</h3>
            )}
        </div>
    );
};

export default NewsFeed;
