import React from "react";
import Post from "./Post";

const Posts = props => {
  return (
    <div id="primary" className="content-area">
      <main id="main" className="site-main">
        <Post />
      </main>
    </div>
  );
};
export default Posts;
