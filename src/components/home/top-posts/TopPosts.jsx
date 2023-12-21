import { Link } from "react-router-dom";
import { getFromLocalStorage, getMostLiked } from "../../../api/api";
import { useEffect, useState } from "react";

const TopPosts = () => {
  const [tops, setTops] = useState([]);
  const getMostLikedFunction = async () => {
    try {
      const { data } = await getMostLiked(getFromLocalStorage("accessToken"));
      console.log(data);
      setTops(data.data);
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
          tops.map(({ id, title }) => {
            return (
              <div className="home-top-list-item" key={id}>
                <h1>Title</h1>
                <p>{title && title}</p>
                <span>
                  <Link to={"/"}>V.Teryan</Link>
                </span>
              </div>
            );
          })}
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
  );
};

export default TopPosts;
