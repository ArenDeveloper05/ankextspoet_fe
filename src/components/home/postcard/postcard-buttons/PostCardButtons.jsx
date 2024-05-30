import { AiFillHeart } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { addLike, deleteLike, getFromLocalStorage } from "../../../../api/api";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../../../router/router";

const PostCardButtons = ({
  setOpenAddComent,
  id,
  getAllPostsFunction,
  is_liked,
}) => {
  const navigate = useNavigate();
  async function likeFunction() {
    if (getFromLocalStorage("isAuth") === "true") {
      if (is_liked) {
        await deleteLike(getFromLocalStorage("accessToken"), id);
      } else {
        await addLike(id, {
          user_id: JSON.parse(getFromLocalStorage("userData")).id,
        });
      }
      getAllPostsFunction();
    } else {
      navigate(ROUTER.LOGIN_ROUTE);
    }
  }

  return (
    <div className="home-content-posts-post-buttons">
      <div className="like" onClick={likeFunction}>
        <AiFillHeart style={{ color: is_liked ? "red" : "#ff927f" }} />
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
