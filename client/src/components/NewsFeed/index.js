import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/newsfeedAPI";
import NavBarMember from "../NavBarMember";
import NewsFeedCard from "../NewsFeedCard";
import LikeButton from "../ButtonLike";
import DislikeButton from "../ButtonDislike";
import ReportButton from "../ButtonReport";
import CreateCommentBox from "../CommentBox";

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
        <div className="newsfeed-background">
            <NavBarMember />
            <h1>News Feed</h1>
            {confessions.length ? (
                <div>
                    {confessions.map(confession => (
                        <NewsFeedCard key={confession._id}>
                            <div className="newsfeed-card">
                                <div className="post-owner">
                                    <h5>Username: </h5>
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
                                    <DislikeButton
                                        className="dislike"
                                        id={confession._id}
                                        value={confession.dislikes}
                                        loadConfessions={loadConfessions}
                                    />
                                    <ReportButton 
                                        className="report"
                                        id={confession._id}
                                        value={confession.reported}
                                        loadConfessions={loadConfessions}
                                    />
                                    <CreateCommentBox
                                        className="comment" 
                                        onClick={() => CreateCommentBox()}
                                        id={confession._id}>Comments: {confession.comments}
                                        </CreateCommentBox>
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
