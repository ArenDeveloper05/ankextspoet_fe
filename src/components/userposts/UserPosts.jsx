import { useState } from "react";
import "./UserPosts.scss";
import UserPostsCard from "./userpostscard/UserPostsCard";
import { getFromLocalStorage, getUserPosts } from "../../api/api";
import { useEffect } from "react";
import ReactLoading from "react-loading";
import { CONFIG } from "../../config";

const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeField, setActiveField] = useState(CONFIG.myPostsConfig[0]);

  async function getData() {
    try {
      const { data } = await getUserPosts(getFromLocalStorage("accessToken"));
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="user-posts" style={{ position: "relative" }}>
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <ReactLoading
            type={"bubbles"}
            color={"gray"}
            height={200}
            width={200}
          />
        </div>
      )}
      <aside className="user-posts-sidebar">
        {CONFIG.myPostsConfig.map(({ title, id, type }) => {
          return (
            <div
              key={id}
              className="user-posts-sidebar-item"
              style={
                activeField.id === id
                  ? { boxShadow: "black -4px 2px 10px" }
                  : {}
              }
              onClick={() => {
                setActiveField({
                  id,
                  type,
                  title,
                });
              }}
            >
              {title}
            </div>
          );
        })}
      </aside>
      <div className="user-posts-container">
        <h1 className="user-posts-container-title">{activeField.title}</h1>
        <div className="user-posts-container-cards">
          {activeField.type === "public"
            ? posts
                .filter((post) => post.type === "public")
                .map((post) => {
                  return (
                    <UserPostsCard
                      post={post}
                      key={post.id}
                      id={post.id}
                      getData={getData}
                    />
                  );
                })
            : posts
                .filter((post) => post.type === "private")
                .map((post) => {
                  return (
                    <UserPostsCard
                      post={post}
                      key={post.id}
                      id={post.id}
                      getData={getData}
                    />
                  );
                })}
        </div>
      </div>
    </div>
  );
};

export default UserPosts;
