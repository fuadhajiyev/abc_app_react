import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import HeartIcon from "../../icons/Heart";
import CommentIcon from "../../icons/Comment";
import Comment from "../Comment/Comment";
import "./post.scss";
import CommentFrom from "../Comment/CommentFrom";

function Post(props) {
    const { title, text, userName, userId, postId } = props;
    const [liked, setLiked] = useState(false);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [commentList, setCommentList] = useState([]);
    const isInitialMount = useRef(true);

    const refreshComments = () => {
        fetch("/comments?postId=" + postId)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCommentList(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );

    }

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {

            console.log("refreshComments");
        }

    }, [commentList])


    const handleLike = () => {
        setLiked(!liked);
    }
    return (
        <div className="postCard">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                <h2  > {title} </h2>  {" "} <span onClick={handleLike} style={liked ? { color: "red " } : null} > <HeartIcon /> </span>
            </div>
            <Link to={{ pathname: '/users/' + userId }}>
                <span style={{ color: "green" }}> {userId}  {" Author : "}
                    {userName.toUpperCase()} </span>
            </Link>
            <p>{text}</p>
            <span onClick={refreshComments} > <CommentIcon /> </span> 
            
            <CommentFrom userId={1} userName={"USER"} postId={postId} />


            {error ? "error" : isLoaded ? commentList.map(comment => (

                <Comment key={comment.id} userId={1} userName={"USER"} text={comment.text} />

            )) : "Click"}
        </div>
    )

}

export default Post;