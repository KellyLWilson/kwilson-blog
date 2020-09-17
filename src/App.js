import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Home from './home.js';
import Projects from './projects.js';
import Blog from './blog.js'
import BlogPosts from './blogposts.js';
import Postblog from './Postblog.js';

import {
  BrowserRouter as Router,
  useHistory,
  useParams,
  useRouteMatch,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
 
  const [posts, setPosts] = useState([]);
  const [blogPage, setBlogPage] = useState("");
  const [blogQAPage, setBlogQAPage] = useState("")

  useEffect(() => {

     axios.get('http://127.0.0.1:8000/api/blog_posts')
       .then(response => setPosts(response.data.data))
       .catch(error => console.log(error))
       console.log(posts)
       

   }, []);

   
  
  return (

    <>
      <Router>
        <div>
          <ul>
            <li className="black">
              <Link to="/">Home</Link>
            </li>
            <li className="black">
              <Link to="/Projects">Projects</Link>
            </li>
            <li className="black">
              <Link to="/Blog">Blog Posts</Link>
            </li>
            <li className="black">
              <Link to="/Postblog">Thoughts After Boot Camp</Link>
            </li>
          </ul>

        


          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Projects">
              <Projects />
            </Route>
            <Route path="/Blog">
              <Blog setBlogPage={setBlogPage} posts={posts} />
            </Route>
            <Route path="/BlogPosts">
              <BlogPosts setBlogQAPage={setBlogPage} posts={posts} />
            </Route>
            <Route path="/PostBlog">
            <Postblog setBlogPage={setBlogPage} posts={posts} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}
