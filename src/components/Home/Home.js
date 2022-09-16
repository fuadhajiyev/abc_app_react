import React, { useState, useEffect } from "react";
import Post from "../Post/Post";
import PostForm from "../Post/PostForm";


import "./home.scss";

const Home = (props) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [postList, setPostList] = useState([]);
  // page load olmamış yeni page-ə keçid etdikde request sonlansın state update olmasın
  let isCancelled = false;

  const refreshPosts = () => {


    fetch("/posts")
      .then(res => res.json())
      .then(
        (result) => {
          if (!isCancelled) {
            setIsLoaded(true);
            setPostList(result);
          }
        }, (error) => {
          console.log(error);
          setIsLoaded(true);
          setError(error);
        }
      );

  }

  useEffect(() => {

    refreshPosts();
    console.log("useEffect working");
    return () => {
      isCancelled = true;
    }

  }, [])


  if (error) { return <h1  style={{textAlign: "center"}}> error ! ! !</h1> }
  else if (!isLoaded) { return <h1 style={{textAlign: "center"}}> Loading . . .</h1> }

  else {
    return (<div>
      <PostForm refreshPosts={refreshPosts} />

      <div className='container'>



        {postList.map(post => (

          <Post
            postId={post.id}
            userId={post.userId}
            userName={post.userName}
            title={post.title} text={post.text} key={post.id
            }

          />


        )
        )}

      </div>

    </div>

    );
  }

}

export default Home;