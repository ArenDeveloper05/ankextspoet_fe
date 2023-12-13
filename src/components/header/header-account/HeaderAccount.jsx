import { useState, useEffect, useRef } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { getFromLocalStorage } from "../../../api/api";

import HeaderAccountModal from "./header-account-modal/HeaderAccountModal";

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
      <HeaderAccountModal ref={accountModalRef} accountOpen={accountOpen} />
    </>
  );
};

export default HeaderAccount;
