import { Link } from "react-router-dom";
import { getFromLocalStorage, getMostLiked } from "../../../api/api";
import { useEffect, useState } from "react";

import parse from "html-react-parser";
import Atropos from "atropos/react";

import "atropos/css";

const TopPosts = () => {
  const [tops, setTops] = useState([]);
  const getMostLikedFunction = async () => {
    try {
      const { data } = await getMostLiked(getFromLocalStorage("accessToken"));
      console.log(data);
      setTops(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getMostLikedFunction();
  }, []);

  return (
    <aside className="home-top">
      <h1>Թոփ գրվածքներ</h1>

      <div className="home-top-list">
        {tops &&
          tops.map(({ id, title, description, username }) => {
            return (
              <Atropos activeOffset={40} shadowScale={1} key={id}>
                <div className="home-top-list-item">
                  <h1>{title && title}</h1>
                  <p>{description && parse(description)}</p>
                  <span>
                    <Link to={"/"}>{username ? username : ""}</Link>
                  </span>
                </div>
              </Atropos>
            );
          })}
      </div>
    </aside>
  );
};

export default TopPosts;
