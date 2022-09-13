import React, { useState, useEffect } from "react";
import Post from "../Post/Post";


import "./home.scss";

const Home = (props) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPostList(result);
        }, (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

  }, [])

  if (error) { return <div> error ! ! !</div> }
  else if (!isLoaded) { return <div> Loading . . .</div> }
  else {
    return (
      <div className='container'>
       
    

        {postList.map(post => (
         
         <Post userId={post.userId} userName={post.userName} title={post.title} text={post.text} key={post.id}/>


        )
        )}

      </div>

    );
  }

}

export default Home;