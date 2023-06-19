import { Link } from "react-router-dom";
import "./Home.scss";
import { AiFillHeart } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { getFromLocalStorage } from "../../api/api";
import PostCard from "./postcard/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const { data } = await getAllPosts(getFromLocalStorage("accessToken"));
  //       console.log(data);
  //       setPosts(data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  //   getData();
  // }, []);
  return (
    <section className="home">
      <aside className="home-top">
        <h1>Թոփ գրվածքներ</h1>

        <div className="home-top-list">
          <div className="home-top-list-item">
            <h1>Title</h1>
            <p>
              Ցրտահա՜ր, հողմավա՚ր. Դողացին մեղմաբար Տերևները դե ղին, Պատեցին իմ
              ուղին...
            </p>
            <span>
              <Link to={"/"}>V.Teryan</Link>
            </span>
          </div>
          <div className="home-top-list-item">
            <h1>Title</h1>
            <p>
              Ցրտահա՜ր, հողմավա՚ր. Դողացին մեղմաբար Տերևները դե ղին, Պատեցին իմ
              ուղին...
            </p>
            <span>
              <Link to={"/"}>V.Teryan</Link>
            </span>
          </div>
        </div>
      </aside>
      <div className="home-content">
        <h1>Home</h1>
        <div className="home-content-posts">
          {/* {posts &&
            posts.map(({ title, id, description }) => {
              return (
                <PostCard title={title} key={id} description={description} />
              );
            })} */}
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

          {/* <div className="home-content-posts-post"></div> */}
          {/* <div className="home-content-posts-post"></div>
          <div className="home-content-posts-post"></div> */}
        </div>
      </div>
      <aside className="home-poets">
        <h1>Թոփ Պոետներ</h1>
        <div className="home-poets-list">
          <div className="home-poets-list-poet">
            <div className="home-poets-list-poet-image">
              <img
                src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"
                alt="poetImage"
              />
            </div>
            <h2 className="home-poets-list-poet-fullname">
              <Link to={""}>Poet Poetyan</Link>
            </h2>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Home;
