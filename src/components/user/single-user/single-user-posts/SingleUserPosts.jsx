import parse from "html-react-parser";

import "./SingleUserPosts.scss";

const SingleUserPosts = ({ posts }) => {
  return (
    <div className="single-user-posts">
      {posts &&
        posts.map(
          ({ id, authorId, comments, description, is_liked, likes, title }) => {
            return (
              <div key={id} className="single-user-posts-item">
                <div className="single-user-posts-item-head">
                  <h2>{title}</h2>
                  <p>{parse(description)}</p>
                </div>
                <div className="single-user-posts-item-body">
                  <p>{likes} հավանում</p>
                  <p>{comments?.length} մեկնաբանություն</p>
                </div>
              </div>
            );
          }
        )}
    </div>
  );
};

export default SingleUserPosts;
