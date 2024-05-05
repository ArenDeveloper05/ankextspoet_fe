import { AiFillHeart } from "react-icons/ai";

const PostCardLikes = ({ likes, comments, setOpenComments }) => {
  return (
    <div className="home-content-posts-post-likes">
      <p>
        <AiFillHeart />
        <span>{likes}</span>
      </p>
      <p
        className="home-content-posts-post-likes-commentsCount"
        onClick={() => {
          if (comments.length !== 0) {
            setOpenComments((prev) => !prev);
          }
        }}
      >
        {comments.length} մեկնաբանություն
      </p>
    </div>
  );
};

export default PostCardLikes;
