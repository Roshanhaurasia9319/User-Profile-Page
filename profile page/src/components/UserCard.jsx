import React from 'react';
import '../styles/UserCard.css';

const UserCard = (probs)=>{
    return (
        <div className="random-user-container">
            <div className="user-card">
                <div className="profile-piture">
                     <img src={probs.img} alt="" />
                </div>
                <h1>{probs.name}</h1>
                <h2>{probs.email}</h2>
                <h3>{probs.phone}</h3>
                <h4>{probs.location}</h4>
                <h5>gender : {probs.gender}</h5>

                <h5>age : {probs.age}</h5>
            </div>
        </div>
    )
}

export default UserCard;