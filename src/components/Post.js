import React from "react";
import { createDangerousHTML } from "../settings";
const Post = ({ post }) => {
  return (
    <article className="post" key={post.id}>
      <h2 className="entry-title">
        <a
          href="#ffff"
          dangerouslySetInnerHTML={createDangerousHTML(post.title.rendered)}
        />
      </h2>
      <div
        className="entry-content"
        dangerouslySetInnerHTML={(() => ({ __html: post.content.rendered }))()}
        // dangerouslySetInnerHTML={createDangerousHTML(post.content.rendered)}
      />
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
