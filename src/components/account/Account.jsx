import { getFromLocalStorage } from "../../api/api";

import "./Account.scss";

const Account = () => {
  return (
    <div className="my-account">
      <div className="my-account-inner">
        <h1>My Account</h1>
        <div className="my-account-inner-row">
          <span>Username:</span>
          <span>{JSON.parse(getFromLocalStorage("userData")).name}</span>
        </div>
        <div className="my-account-inner-row">
          <span>Email:</span>
          <span>{JSON.parse(getFromLocalStorage("userData")).email}</span>
        </div>
      </div>
    </div>
  );
};

export default Account;
