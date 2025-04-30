import React  from "react";

import "../styles/PostCard.css";

const PostCard = (probs)=>{
    return (
        <div className="card-container">
            <div className="card">
            <h1>UserId : {probs.userId}</h1>
            <h2>ID : {probs.id}</h2>
            <p><i>Title</i> : {probs.title}</p>
            <p>{probs.body}</p>
        </div>
        </div>
    )
}

export default PostCard;