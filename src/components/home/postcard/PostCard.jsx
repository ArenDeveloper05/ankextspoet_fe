import { useState } from "react";

import PostCardAddComment from "./postcard-addcomment/PostCardAddComment";
import PostCardButtons from "./postcard-buttons/PostCardButtons";
import PostCardContent from "./postcard-content/PostCardContent";
import PostCardLikes from "./postcard-likes/PostCardLikes";
import PostCardComments from "./postcard-comments/PostCardComments";
import Atropos from "atropos/react";

import "atropos/css";

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
    <Atropos className="my-atropos" activeOffset={40} shadowScale={1.05}>
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
            setOpenAddComent={setOpenAddComent}
          />
        )}
      </div>
    </Atropos>
  );
};

export default PostCard;
