import { Link } from "react-router-dom";
import { getFromLocalStorage } from "../../../../api/api";
import { ROUTER } from "../../../../router";
import parse from "html-react-parser";

const PostCardContent = ({ title, description, username, authorId }) => {
  return (
    <div className="home-content-posts-post-content">
      <h1>{title}</h1>
      <div>{parse(description)}</div>
      <span>
        {authorId === JSON.parse(getFromLocalStorage("userData")).id ? (
          <Link to={ROUTER.ACCOUNT_ROUTE}>{username}</Link>
        ) : (
          <Link to={`/user/${authorId}`}>{username}</Link>
        )}
      </span>
    </div>
  );
};

export default PostCardContent;
