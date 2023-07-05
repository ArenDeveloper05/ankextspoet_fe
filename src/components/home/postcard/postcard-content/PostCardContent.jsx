import { Link } from "react-router-dom";
import parse from "html-react-parser";

const PostCardContent = ({ title, description, username }) => {
  return (
    <div className="home-content-posts-post-content">
      <h1>{title}</h1>
      <div>{parse(description)}</div>
      <span>
        <Link to={"/"}>{username}</Link>
      </span>
    </div>
  );
};

export default PostCardContent;
