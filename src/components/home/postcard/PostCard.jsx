import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const PostCard = ({ title, description }) => {
  return (
    <div className="home-content-posts-post">
      <div className="home-content-posts-post-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <span>
          <Link to={"/"}>V.Teryan</Link>
        </span>
      </div>
      <div className="home-content-posts-post-buttons">
        <div className="like">
          <AiFillHeart />
          <span>Հավանել</span>
        </div>
        <div className="comment">
          <FaCommentAlt />
          <span>Մեկնաբանել</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
