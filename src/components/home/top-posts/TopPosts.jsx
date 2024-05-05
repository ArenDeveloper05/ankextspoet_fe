import { Link } from "react-router-dom";
import { getFromLocalStorage, getMostLiked } from "../../../api/api";
import { useEffect, useState } from "react";
import { ROUTER } from "../../../router";
import CopyrightIcon from "../../common/copyright-icon/CopyrightIcon";

import parse from "html-react-parser";
import Atropos from "atropos/react";

import "atropos/css";
import "./TopPosts.scss";

const TopPosts = () => {
  const user = JSON.parse(getFromLocalStorage("userData"));

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
          tops.map(({ id, title, description, username, user_id }) => {
            return (
              <Atropos activeOffset={40} shadowScale={1} key={id}>
                <div className="home-top-list-item">
                  <h1>{title && title}</h1>
                  <p>{description && parse(description)}</p>
                  <span>
                    {user_id === user?.id ? (
                      <Link to={ROUTER.ACCOUNT_ROUTE}>{username}</Link>
                    ) : (
                      <Link to={`/user/${user_id}`}>{username}</Link>
                    )}
                  </span>
                  {user_id === user?.id && (
                    <CopyrightIcon title={"հեղինակային"} />
                  )}
                </div>
              </Atropos>
            );
          })}
      </div>
    </aside>
  );
};

export default TopPosts;
