import React, { useState } from "react";
import { Link } from 'react-router-dom'
import HeartIcon from "../Comment/icons/Heart";
import "./post.scss";

function Post(props) {
    const { title, text, userName, userId } = props;
    const [liked, setLiked] = useState(false);
    const handleLike = () => {
        setLiked(!liked);
    }
    return (
        <div className="postCard">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                <h2  > {title} </h2>  {" "} <span onClick={handleLike} style={liked ? {color: "red "} : null} > <HeartIcon  /> </span>
            </div>
            <Link to={{ pathname: '/users/' + userId }}>
                <span style={{ color: "green" }}> {userId}  {" Author : "}
                    {userName.toUpperCase()} </span>
            </Link>
            <p>{text}</p>

        </div>
    )

}

export default Post;