import React from 'react'
import CommentFrom from './CommentFrom';

const Comment = (props) => {
    const { title, text, userName, userId, postId, commentId } = props;

    return (
        <div>
            <h3>{userName}</h3>
            <p >{text}</p>
  
        </div>
    )
}

export default Comment;