import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../../../../router/router";
import parse from "html-react-parser";

import noImage from "../../../../assets/images/no-image.png";

const PostCardContent = ({ title, description, username, authorId, user }) => {
  const [more, setMore] = useState(true);

  const text = Array.isArray(parse(description))
    ? recursiveString(parse(description))
    : parse(description).props.children;

  const charsCount = 30;

  function normalizedSentence(str, count) {
    let part = "";
    for (let i = count; i < str.length; i++) {
      if (!str[i].trim()) {
        break;
      } else {
        part += str[i];
      }
    }

    return str.slice(0, count) + part;
  }

  function recursiveString(arr) {
    let str = "";
    arr.forEach((element) => {
      if (typeof element === "string") {
        str += element;
      } else {
        if (Array.isArray(element.props.children)) {
          str += recursiveString(element.props.children);
        } else {
          str += element.props.children;
        }
      }
    });
    return str;
  }

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
        <p>{username}</p>
      </Link>
    </div>
  );
};

export default PostCardContent;
