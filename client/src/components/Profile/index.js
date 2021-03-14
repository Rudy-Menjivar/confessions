import React, { useEffect, useState } from "react";
import NavBarMember from "../NavBarMember";
import API from "../../utils/API";
import PostCard from "../PostCard";

function Profile() {
    // Setting initial state of confession posts
    const [posts, setConfessions] = useState([]);

    // Load all confessions and store them with setConfessions
    useEffect(() => {
        loadConfessions()
    }, []);

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
            <section>
                <p>Username: </p>
                <p>Info: </p>
            </section>
            <section>
                {posts.length ? (
                    <div>
                        {posts.map(post => (
                            <PostCard key={post._id}>
                                {post.content}
                            </PostCard>
                        ))}
                    </div>
                ) : (
                    <h3>You have no post yet!</h3>
                )}
            </section>
        </div>
    );

};

export default Profile;
