import React from "react";
import { forwardRef } from "react";
import { ROUTER } from "../../../../router";
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../../../../api/api";

const HeaderAccountModal = forwardRef((props, ref) => {
  const navigate = useNavigate();
  return (
    <div className="account-modal" ref={ref}>
      <p
        onClick={() => {
          console.log(getFromLocalStorage("isAuth"));
          getFromLocalStorage("isAuth") === "true" &&
            navigate(ROUTER.ACCOUNT_ROUTE);
        }}
      >
        My Account
      </p>
      <p
        onClick={() => {
          localStorage.removeItem("isAuth");
          window.location.reload();
        }}
      >
        Logout
      </p>
    </div>
  );
});

export default HeaderAccountModal;
