import { useState } from "react";
import { getFromLocalStorage } from "../../../api/api";

import PostCardAddComment from "./postcard-addcomment/PostCardAddComment";
import PostCardButtons from "./postcard-buttons/PostCardButtons";
import PostCardContent from "./postcard-content/PostCardContent";
import PostCardLikes from "./postcard-likes/PostCardLikes";
import PostCardComments from "./postcard-comments/PostCardComments";
import Atropos from "atropos/react";

import "atropos/css";
import CopyrightIcon from "../../common/copyright-icon/CopyrightIcon";

const PostCard = ({
  title,
  description,
  likes,
  username,
  comments,
  id,
  getAllPostsFunction,
  is_liked,
  authorId,
}) => {
  const [openAddComment, setOpenAddComent] = useState(false);
  const [openComments, setOpenComments] = useState(false);

  const user = JSON.parse(getFromLocalStorage("userData"));

  return (
    <Atropos activeOffset={10} shadowScale={1.02} duration={100}>
      <div className="home-content-posts-post">
        <PostCardContent
          title={title}
          description={description}
          username={username}
          authorId={authorId}
          user={user}
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
        {authorId === user?.id && <CopyrightIcon title={"հեղինակային"} />}
      </div>
    </Atropos>
  );
};

export default PostCard;
