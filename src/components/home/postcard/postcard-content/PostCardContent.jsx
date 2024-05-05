import { Link } from "react-router-dom";
import { ROUTER } from "../../../../router";
import parse from "html-react-parser";

const PostCardContent = ({ title, description, username, authorId, user }) => {
  return (
    <div className="home-content-posts-post-content">
      <h1>{title}</h1>
      <div>{parse(description)}</div>
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
