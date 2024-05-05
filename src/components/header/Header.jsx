import { Link } from "react-router-dom";
import { ROUTER } from "../../router/index";
import { getFromLocalStorage } from "../../api/api";

import TypeWriterEffect from "react-typewriter-effect";
import HeaderAccount from "./header-account/HeaderAccount";
import HeaderLogin from "./header-login/HeaderLogin";
import HeaderAddPost from "./header-addpost/HeaderAddPost";

import "./Header.scss";
import { navConfig } from "../../config";

const Header = () => {
  const myAppRef = null;
  return (
    <div className="header" ref={myAppRef}>
      <header>
        <nav>
          <ul>
            {navConfig &&
              navConfig.map(({ id, title, link }) => {
                return (
                  <li key={id}>
                    <Link to={link ? link : "/"}>{title ? title : ""}</Link>
                  </li>
                );
              })}
          </ul>
        </nav>
        <div className="account">
          {getFromLocalStorage("isAuth") === "true" ? (
            <>
              <HeaderAddPost />
              <HeaderAccount />
            </>
          ) : (
            <HeaderLogin text="Մուտք" />
          )}
        </div>
      </header>

      <TypeWriterEffect
        textStyle={{
          fontFamily: "var(--ff2)",
          textShadow: "10px 8px 10px black",
          color: "wheat",
          fontWeight: 800,
          fontSize: "50px",
          lineHeight: "80px",
          letterSpacing: "6px",
        }}
        startDelay={100}
        cursorColor="white"
        multiText={[
          "Ո՜ւշ-ո՜ւշ են գալիս, բայց ո՛չ ուշացած.",
          "Ծնվում են նրանք ճի՛շտ ժամանակին:",
          "Եվ ժամանակից առաջ են ընկնում,",
          "Դրա համար էլ չեն ներում նրանց:",
        ]}
        typeSpeed={100}
        scrollArea={myAppRef}
        loop={true}
        nextTextDelay={1000}
      />
    </div>
  );
};

export default Header;
