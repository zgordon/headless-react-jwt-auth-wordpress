import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div id="primary" className="content-area">
      <main id="main" className="site-main">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
};
export default Posts;
