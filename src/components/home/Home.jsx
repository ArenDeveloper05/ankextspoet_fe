import { Link } from "react-router-dom";
import "./Home.scss";
import { AiFillHeart } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home">
      <aside className="home-top"></aside>
      <div className="home-content">
        <h1>Home</h1>
        <div className="home-content-posts">
          <div className="home-content-posts-post">
            <div className="home-content-posts-post-content">
              <h1>Title</h1>
              <p>
                Ցրտահա՜ր, հողմավա՚ր. Դողացին մեղմաբար Տերևները դե ղին, Պատեցին
                իմ ուղին...
              </p>
              <span>
                <Link to={"/"}>V.Teryan</Link>
              </span>
            </div>
            <div className="home-content-posts-post-buttons">
              <div className="like">
                <AiFillHeart />
                <span>Հավանել</span>
              </div>
              <div className="comment">
                <FaCommentAlt />
                <span>Մեկնաբանել</span>
              </div>
            </div>
          </div>
          <div className="home-content-posts-post">
            <div className="home-content-posts-post-content">
              <h1>Title</h1>
              <p>
                Ցրտահա՜ր, հողմավա՚ր. Դողացին մեղմաբար Տերևները դե ղին, Պատեցին
                իմ ուղին...
              </p>
              <span>
                <Link to={"/"}>V.Teryan</Link>
              </span>
            </div>
            <div className="home-content-posts-post-buttons">
              <div className="like">
                <AiFillHeart />
                <span>Հավանել</span>
              </div>
              <div className="comment">
                <FaCommentAlt />
                <span>Մեկնաբանել</span>
              </div>
            </div>
          </div>

          <div className="home-content-posts-post"></div>
          <div className="home-content-posts-post"></div>
          <div className="home-content-posts-post"></div>
        </div>
      </div>
      <aside className="home-news"></aside>
    </section>
  );
};

export default Home;
