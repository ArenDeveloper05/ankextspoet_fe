import parse from "html-react-parser";

const UserPostsCard = ({ post }) => {
  return (
    <div className="user-posts-container-cards-card">
      <div className="user-posts-container-cards-card-title">
        <h1>{post.title}</h1>
      </div>
      <div className="user-posts-container-cards-card-description">
        {parse(post.description)}
        <br />
        <br />
        <p>{post.created_at}</p>
      </div>
    </div>
  );
};

export default UserPostsCard;
