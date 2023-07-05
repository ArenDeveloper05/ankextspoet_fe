import PostCardAddComment from "./postcard-addcomment/PostCardAddComment";
import { useState } from "react";
import PostCardButtons from "./postcard-buttons/PostCardButtons";
import PostCardContent from "./postcard-content/PostCardContent";
import PostCardLikes from "./postcard-likes/PostCardLikes";
import PostCardComments from "./postcard-comments/PostCardComments";

const PostCard = ({
  title,
  description,
  likes,
  username,
  comments,
  id,
  getAllPostsFunction,
  is_liked,
}) => {
  const [openAddComment, setOpenAddComent] = useState(false);
  const [openComments, setOpenComments] = useState(false);

  return (
    <div className="home-content-posts-post">
      <PostCardContent
        title={title}
        description={description}
        username={username}
      />
      <PostCardLikes
        likes={likes}
        comments={comments}
        setOpenComments={setOpenComments}
      />
      <PostCardButtons
        setOpenAddComent={setOpenAddComent}
        id={id}
        getAllPostsFunction={getAllPostsFunction}
        is_liked={is_liked}
      />
      {openComments && (
        <PostCardComments
          comments={comments}
          getAllPostsFunction={getAllPostsFunction}
        />
      )}
      {openAddComment && (
        <PostCardAddComment
          id={id}
          getAllPostsFunction={getAllPostsFunction}
          setOpenComments={setOpenComments}
        />
      )}
    </div>
  );
};

export default PostCard;
