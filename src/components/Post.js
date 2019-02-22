import React from "react";

const Post = props => {
  return (
    <article className="post">
      <h2 className="entry-title">
        <a href="#ffff">ffff</a>
      </h2>
      <div className="entry-content">
        <p>fff</p>
      </div>
      <a href="#edit-post" className="edit">
        Edit
      </a>
      <a href="#delete-post" className="delete-post">
        Delete
      </a>
    </article>
  );
};
export default Post;
