import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import PostCardCommentsSettings from "./postcard-comments-settings/PostCardCommentsSettings";

const PostCardCommentsComment = ({ id, comment, getAllPostsFunction }) => {
  const [openPostSettings, setOpenPostSettings] = useState(false);

  return (
    <div key={id} className="home-content-posts-post-comments-comment">
      <div className="home-content-posts-post-comments-comment-header">
        <h3>{comment.username}</h3>
        <BsThreeDotsVertical
          onClick={() => {
            setOpenPostSettings((prev) => !prev);
          }}
        />
      </div>
      <div className="home-content-posts-post-comments-comment-desc">
        <h3>{comment.description}</h3>
        <p>{comment.created_at}</p>
      </div>
      {openPostSettings && (
        <PostCardCommentsSettings
          username={comment.username}
          getAllPostsFunction={getAllPostsFunction}
          id={id}
        />
      )}
    </div>
  );
};

export default PostCardCommentsComment;
