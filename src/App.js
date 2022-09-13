import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route } from "react-router-dom";
import Post from "./components/Post/Post";
import User from "./components/User/User";
import PostForm from "./components/Post/PostForm";


function App() {
  return (
    <div className="App">
       <Navbar />
       <Routes>
       <Route exact path="/" element={ <Home />} />
        <Route exact path="/users/:userId" element={<User />} />
        <Route exact path="/postform" element={<PostForm />} />
      </Routes>

    </div>
  );
}

export default App;
