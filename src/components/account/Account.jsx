import { getFromLocalStorage } from "../../api/api";
import { RiAccountCircleFill } from "react-icons/ri";

import "./Account.scss";

const Account = () => {
  const userName = JSON.parse(getFromLocalStorage("userData")).name;
  const email = JSON.parse(getFromLocalStorage("userData")).email;

  return (
    <div className="my-account">
      <aside className="my-account-sidebar">
        <div className="my-account-sidebar-avatar">
          <RiAccountCircleFill />
        </div>
        <p>{userName}</p>
        <p>{email}</p>
      </aside>
      <div className="my-account-content">
        <div className="my-account-content-inner">
          <h1>My Account</h1>
          <div className="my-account-content-inner-row">
            <span>Username:</span>
            <span>{userName}</span>
          </div>
          <div className="my-account-content-inner-row">
            <span>Email:</span>
            <span>{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
