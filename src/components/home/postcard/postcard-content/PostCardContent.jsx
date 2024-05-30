import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../../../../router/router";
import {
  normalizedSentence,
  recursiveString,
  timeAgo,
} from "../../../../helpers/helpers";

import parse from "html-react-parser";

import noImage from "../../../../assets/images/no-image.png";

const PostCardContent = ({
  title,
  description,
  username,
  authorId,
  user,
  created_at,
}) => {
  const [more, setMore] = useState(true);

  const text = Array.isArray(parse(description))
    ? recursiveString(parse(description))
    : parse(description).props.children;

  const charsCount = 30;

  const normalVersion = normalizedSentence(text, charsCount);
  const lengthsAreTheSame = text && normalVersion.length === text.length;

  return (
    <div className="home-content-posts-post-content">
      <h1>{title}</h1>
      <p>
        {text && text.length > charsCount && more && !lengthsAreTheSame
          ? normalVersion + "..."
          : parse(description)}
      </p>

      {text && text.length > charsCount && !lengthsAreTheSame && (
        <b
          className="home-content-posts-post-content-more"
          onClick={() => {
            setMore((prev) => !prev);
          }}
        >
          {more ? "կարդալ ավելին..." : "փակել..."}
        </b>
      )}

      <Link
        className="home-content-posts-post-content-author"
        to={authorId === user?.id ? ROUTER.ACCOUNT_ROUTE : `/user/${authorId}`}
      >
        <div className="home-content-posts-post-content-author-image">
          <img src={noImage} alt="profile" />
        </div>
        <div className="home-content-posts-post-content-author-info">
          <p>{username}</p>
          <span>{timeAgo(created_at)}</span>
        </div>
      </Link>
    </div>
  );
};

export default PostCardContent;
