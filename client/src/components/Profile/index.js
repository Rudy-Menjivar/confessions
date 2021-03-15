import React, { useEffect, useState } from "react";
import "./style.css";
import NavBarMember from "../NavBarMember";
import API from "../../utils/API";
import ProfileInfo from "../ProfileInfo";
import PostCreateBox from "../PostCreateBox";
import PostCard from "../PostCard";

function Profile() {
    // Setting initial state of confession posts
    // const [profileInfo, setProfileInfo] = useState([]);
    const [posts, setConfessions] = useState([]);

    // Load all confessions and store them with setConfessions
    useEffect(() => {
        loadConfessions()
    }, []);

    // Load profile info for user who currently signed in
    // function loadProfileInfo() {

    // };

    // Loads all confession posts and set them to confessions
    function loadConfessions() {
        API.getConfessions()
            .then(res =>
                setConfessions(res.data)
            )
            .catch(err => console.log(err));
    };

    return (
        <div>
            <NavBarMember />
            <div className="profile-container">
                <h1>This page is private to you</h1>
                <section>
                    <ProfileInfo />
                </section>
                {/* <section>
                {posts.map(post => (
                    <ProfileInfo key={post._id}>
                        {post.content}
                    </ProfileInfo>
                ))}
            </section> */}
                <section>
                    <PostCreateBox />
                </section>
                <section>
                    {posts.length ? (
                        <div>
                            {posts.map(post => (
                                <PostCard key={post._id}>
                                    <p>{post.content}</p>
                                    <button>
                                        Edit
                                    </button>
                                    <button>
                                        Delete
                                    </button>
                                </PostCard>
                            ))}
                        </div>
                    ) : (
                        <h3>You have no post yet!</h3>
                    )}
                </section>
            </div>
        </div>
    );

};

export default Profile;
