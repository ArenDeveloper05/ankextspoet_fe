import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { getFromLocalStorage } from "../../../api/api";
import { Link, useNavigate } from "react-router-dom";
import { ROUTER } from "../../../router";
import { useState } from "react";
import HeaderAccountModal from "./header-account-modal/HeaderAccountModal";
import { useEffect } from "react";
import { useRef } from "react";

const HeaderAccount = () => {
  const iconRef = useRef();
  const accountModalRef = useRef();
  const [accountOpen, setAccountOpen] = useState(false);

  function handle(e) {
    if (iconRef.current && iconRef.current.contains(e.target)) {
      setAccountOpen((prev) => !prev);
    } else {
      if (
        accountModalRef.current &&
        accountModalRef.current.contains(e.target)
      ) {
      } else {
        setAccountOpen(false);
      }
    }
  }

  useEffect(() => {
    document.addEventListener("click", handle);

    return () => {
      document.removeEventListener("click", handle);
    };
  });

  return (
    <>
      <div
        className="account-login"
        title={JSON.parse(getFromLocalStorage("userData")).name}
        ref={iconRef}
      >
        <RiAccountCircleFill />
      </div>
      {accountOpen && <HeaderAccountModal ref={accountModalRef} />}
    </>
  );
};

export default HeaderAccount;
