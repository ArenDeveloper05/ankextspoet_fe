import React from "react";
import { ROUTER } from "../../../router";
import { Link } from "react-router-dom";

const HeaderLogin = ({ text }) => {
  return (
    <div className="account-button">
      <Link to={ROUTER.LOGIN_ROUTE}>
        <button>{text}</button>
      </Link>
    </div>
  );
};

export default HeaderLogin;
