import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { addLike, deleteLike, getFromLocalStorage } from "../../../../api/api";

const PostCardButtons = ({
  setOpenAddComent,
  id,
  getAllPostsFunction,
  is_liked,
}) => {
  async function likeFunction() {
    if (is_liked) {
      await deleteLike(id);
    } else {
      await addLike(id, {
        user_id: JSON.parse(getFromLocalStorage("userData")).id,
      });
    }
    getAllPostsFunction();
  }

  return (
    <div className="home-content-posts-post-buttons">
      <div className="like" onClick={likeFunction}>
        <AiFillHeart style={{ color: is_liked ? "red" : "tomato" }} />
        <span>Հավանել</span>
      </div>
      <div
        className="comment"
        onClick={() => {
          setOpenAddComent((prev) => !prev);
        }}
      >
        <FaCommentAlt />
        <span>Մեկնաբանել</span>
      </div>
    </div>
  );
};

export default PostCardButtons;
