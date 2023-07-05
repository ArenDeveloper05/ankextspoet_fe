import PostCardCommentsComment from "./postcard-comments-comment/PostCardCommentsComment";

const PostCardComments = ({ comments, getAllPostsFunction }) => {
  return (
    <div className="home-content-posts-post-comments">
      {comments &&
        comments.map((comment) => {
          return (
            <PostCardCommentsComment
              key={comment.id}
              comment={comment}
              id={comment.id}
              getAllPostsFunction={getAllPostsFunction}
            />
          );
        })}
    </div>
  );
};

export default PostCardComments;
