import { useState } from "react";
import { timeAgo } from "../../../../../helpers/helpers";
import { BsThreeDotsVertical } from "react-icons/bs";

import PostCardCommentsSettings from "./postcard-comments-settings/PostCardCommentsSettings";

import noImage from "../../../../../assets/images/no-image.png";

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
        <div className="home-content-posts-post-comments-comment-desc-image">
          <img src={noImage} alt="profile" />
        </div>
        <div className="home-content-posts-post-comments-comment-info">
          <h3>{comment.description}</h3>
          <p>{timeAgo(comment.created_at)}</p>
        </div>
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
