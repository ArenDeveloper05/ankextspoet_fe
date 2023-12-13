import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../../../../api/api";
import { accountModalConfig } from "../../../../config";

import magaxatImg from "../../../../assets/images/account/magaxat.png";

const HeaderAccountModal = forwardRef((props, ref) => {
  const navigate = useNavigate();
  // const styles = props.accountOpen ? { height: "415px" } : { height: "0px" };

  return (
    <div
      ref={ref}
      className="account-modal"
      style={props.accountOpen ? { height: "415px" } : { height: "0px" }}
    >
      <img
        src={magaxatImg}
        alt="account"
        className="account-modal-image"
        style={props.accountOpen ? { height: "415px" } : { height: "0px" }}
      />
      <div
        className="account-modal-list"
        style={props.accountOpen ? { height: "auto" } : { height: "0px" }}
      >
        {accountModalConfig &&
          accountModalConfig.map(({ id, title, icon, isLogout, to }) => {
            const Icon = icon;
            return (
              <div
                className="account-modal-list-field"
                style={{
                  opacity: props.accountOpen ? "1" : "0",
                  transition: props.accountOpen ? "0.4s" : "none",
                }}
                onClick={() => {
                  if (isLogout) {
                    localStorage.removeItem("isAuth");
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("userData");
                    window.location.reload();
                  } else {
                    getFromLocalStorage("isAuth") === "true" && navigate(to);
                  }
                }}
                key={id}
              >
                {<Icon />}
                <p>{title ? title : ""}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
});

export default HeaderAccountModal;
