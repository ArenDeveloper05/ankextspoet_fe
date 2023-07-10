import { LoadingButton } from "@mui/lab";
import { deleteComment, getFromLocalStorage } from "../../../../../../api/api";

const PostCardCommentsSettings = ({ getAllPostsFunction, id, username }) => {
  return (
    <div className="home-content-posts-post-comments-comment-settings">
      {username === JSON.parse(getFromLocalStorage("userData")).name && (
        <>
          <LoadingButton
            variant="outlined"
            color="error"
            className="home-content-posts-post-comments-comment-settings-delete"
            onClick={async () => {
              await deleteComment(id);
              await getAllPostsFunction();
            }}
          >
            Delete
          </LoadingButton>
          <LoadingButton
            className="home-content-posts-post-comments-comment-settings-edit"
            variant="outlined"
          >
            Edit
          </LoadingButton>
        </>
      )}
      {username !== JSON.parse(getFromLocalStorage("userData")).name && (
        <LoadingButton
          className="home-content-posts-post-comments-comment-settings-report"
          variant="outlined"
        >
          Report
        </LoadingButton>
      )}
    </div>
  );
};

export default PostCardCommentsSettings;
