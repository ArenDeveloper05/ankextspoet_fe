import { Link } from "react-router-dom";
import { ROUTER } from "../../../../router";
import { getFromLocalStorage } from "../../../../api/api";
import CopyrightIcon from "../../../common/copyright-icon/CopyrightIcon";

const TopUsersItem = ({ item: { avatar, id, likes_count, name } }) => {
  const user = JSON.parse(getFromLocalStorage("userData"));

  return (
    <div className="home-poets-list-poet">
      <div className="home-poets-list-poet-image">
        <img
          src={
            avatar
              ? avatar
              : "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"
          }
          alt="poetImage"
        />
      </div>
      <h2 className="home-poets-list-poet-fullname">
        <Link to={id === user?.id ? ROUTER.ACCOUNT_ROUTE : `user/${id}`}>
          {name}
        </Link>
      </h2>
      <p className="home-poets-list-poet-likes">{likes_count} հավանում</p>
      {id === user?.id && <CopyrightIcon />}
    </div>
  );
};

export default TopUsersItem;
