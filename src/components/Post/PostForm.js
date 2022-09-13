import React, { useState, useEffect } from 'react'
import "./postForm.scss";
const PostForm = (props) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [userId, setUserId] = useState(1);



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

    const handleTitle = (value) => {
        setTitle(value);
    }
    const handleText = (value) => {
        setText(value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        savePost();
    }

    return (
        <div className="postForm">
            <form>
                <h1>PostForm</h1>
                <label>
                    <h3>Title</h3>
                    <input type="text" name="title" onChange={(i) => handleTitle(i.target.value)} />
                </label> <br />
                <label>
                    <h3>Text</h3>
                    <textarea onChange={(i) => handleText(i.target.value)} />
                </label> <br /><br />
                <select>
                    <option value="grapefruit">Grapefruit</option>
                    <option defaultValue="lime">Lime</option>

                </select> <br /><br />
                <input onClick={handleSubmit} type="submit" value="Post" />
            </form>
        </div>
    )
}


export default PostForm;