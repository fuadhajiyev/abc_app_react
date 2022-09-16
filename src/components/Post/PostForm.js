import React, { useState, useEffect } from 'react'
import "./postForm.scss";
const PostForm = (props) => {
    const { refreshPosts } = props;
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [userId, setUserId] = useState(1);
    const [isSent, setIsSet] = useState(false);


    const savePost = () => {
        fetch("/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                text: text,
                userId: userId
            }),

        })
            .then((res) => res.json())
            .catch((err) => console.log("error"))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        savePost();
        setIsSet(true);
        setTitle("");
        setText("")
        refreshPosts(); 
    }

    const handleTitle = (value) => {
        setTitle(value);
        setIsSet(false);
    }
    const handleText = (value) => {
        setText(value);
        setIsSet(false);

    }


    const handleClose = () => {
        if (isSent) {
            return <span style={{ color: "green" }}> Your Post is Sent !</span>
        }
        else { return " " }

    }

    return (
        <div className="postForm">
            <form>
                <h1>PostForm</h1>
                <div > {handleClose()} </div>

                <label>
                    <h3>Title</h3>
                    <input type="text" name="title" value={title} onChange={(i) => handleTitle(i.target.value)} />
                </label>
                <label>
                    <h3>Text</h3>
                    <textarea value={text} onChange={(i) => handleText(i.target.value)} />
                </label> <br /><br />

                <input onClick={handleSubmit} type="submit" value="Post" />

            </form>
        </div>
    )
}


export default PostForm;