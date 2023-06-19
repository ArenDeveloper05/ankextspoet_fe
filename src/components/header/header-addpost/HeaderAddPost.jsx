import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../../router";

const HeaderAddPost = () => {
  const navigate = useNavigate();
  return (
    <div className="add-post" onClick={() => navigate(ROUTER.ADD_POST_ROUTE)}>
      <FaPlusCircle />
    </div>
  );
};

export default HeaderAddPost;
