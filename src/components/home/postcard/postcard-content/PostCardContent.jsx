import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../../../../router/router";
import parse from "html-react-parser";

const PostCardContent = ({ title, description, username, authorId, user }) => {
  // console.log(parse(description));
  const [more, setMore] = useState(true);

  const charsCount = 10;
  const isDescriptionOkay =
    description &&
    parse(description) &&
    parse(description).props &&
    parse(description).props.children;

  // function normalizedSentence(str, count) {
  //   let part = "";
  //   for (let i = count; i < str.length; i++) {
  //     if (str[i] === " ") {
  //       break;
  //     }
  //     part += str[i];
  //   }
  //   return str.slice(0, count) + part;
  // }

  function normalizedSentence(str, count) {
    let part = "";
    if (Array.isArray(str)) {
      str = recursiveString(str);
    }
    for (let i = count; i < str.length; i++) {
      if (str[i] === " ") {
        break;
      }
      part += str[i];
    }
    return str.slice(0, count) + part;
  }

  function recursiveString(arr) {
    // console.log(arr);
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

  // if (authorId === 28) {
  //   if (Array.isArray(parse(description))) {
  //     console.log(parse(description));
  //     const res = normalizedSentence(parse(description));
  //     console.log(res);
  //   }
  // }

  // normalizedSentence(parse(description));
  const normalVersion = normalizedSentence(
    Array.isArray(parse(description))
      ? parse(description)
      : parse(description).props.children,
    charsCount
  );
  console.log(normalVersion);
  const lengthsAreTheSame =
    isDescriptionOkay &&
    normalVersion.length === parse(description).props.children.length;

  return (
    <div className="home-content-posts-post-content">
      <h1>{title}</h1>
      {/* <div>{parse(description)}</div> */}
      <p>
        {isDescriptionOkay &&
        parse(description).props.children.length > charsCount &&
        more &&
        !lengthsAreTheSame
          ? normalVersion + "..."
          : isDescriptionOkay && parse(description).props.children}
      </p>

      {isDescriptionOkay &&
        parse(description).props.children.length > charsCount &&
        !lengthsAreTheSame && (
          <b
            className="home-content-posts-post-content-more"
            onClick={() => {
              setMore((prev) => !prev);
            }}
          >
            {more ? "կարդալ ավելին..." : "փակել..."}
          </b>
        )}

      <span>
        {authorId === user?.id ? (
          <Link to={ROUTER.ACCOUNT_ROUTE}>{username}</Link>
        ) : (
          <Link to={`/user/${authorId}`}>{username}</Link>
        )}
      </span>
    </div>
  );
};

export default PostCardContent;
