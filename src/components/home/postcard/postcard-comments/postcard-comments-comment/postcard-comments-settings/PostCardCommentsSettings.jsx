import { deleteComment, getFromLocalStorage } from "../../../../../../api/api";

const PostCardCommentsSettings = ({ getAllPostsFunction, id, username }) => {
  return (
    <div className="home-content-posts-post-comments-comment-settings">
      {username === JSON.parse(getFromLocalStorage("userData")).name && (
        <>
          <div
            className="home-content-posts-post-comments-comment-settings-delete"
            onClick={async () => {
              await deleteComment(id);
              await getAllPostsFunction();
            }}
          >
            Delete
          </div>
          <div className="home-content-posts-post-comments-comment-settings-edit">
            Edit
          </div>
        </>
      )}
      {username !== JSON.parse(getFromLocalStorage("userData")).name && (
        <div className="home-content-posts-post-comments-comment-settings-report">
          Report
        </div>
      )}
    </div>
  );
};

export default PostCardCommentsSettings;
