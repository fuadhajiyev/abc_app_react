import React, { useState } from 'react'

export default function CommentFrom(props) {
  const { userId, postId } = props;
  const [text, setText] = useState("");


  const saveComment = () => {
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId:postId,
        userId: userId,
        text: text,
      }),

    })
      .then((res) => res.json())
      .catch((err) => console.log(err," = error"))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    saveComment();
    setText("");

  }

  const handleChange = (value) => {
    setText(value);
  }



  return (
    <div>
      <form>
        <label>Enter comment:
          <input type="text" value={text} onChange={(i) => handleChange(i.target.value)} />
          <input type="submit" onClick={handleSubmit} />
        </label>
      </form>
    </div>
  )
}
