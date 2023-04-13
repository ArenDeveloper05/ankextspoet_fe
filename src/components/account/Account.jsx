import React from "react";
import "./Account.scss";
import { getFromLocalStorage } from "../../api/api";

const Account = () => {
  return (
    <div className="account">
      <h1>My Account</h1>
      <div className="account-row">
        <span>Username</span>
        <span>{JSON.parse(getFromLocalStorage("userData")).name}</span>
      </div>
      <div className="account-row">
        <span>email</span>
        <span>{JSON.parse(getFromLocalStorage("userData")).email}</span>
      </div>
    </div>
  );
};

export default Account;
