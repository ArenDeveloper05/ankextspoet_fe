import { Link } from "react-router-dom";
import { getFromLocalStorage } from "../../api/api";
import { navConfig } from "../../config";
import { useEffect, useRef } from "react";

import TypeWriterEffect from "react-typewriter-effect";
import HeaderAccount from "./header-account/HeaderAccount";
import HeaderLogin from "./header-login/HeaderLogin";
import HeaderAddPost from "./header-addpost/HeaderAddPost";

import "./Header.scss";

const Header = ({ header, scroll }) => {
  const myAppRef = null;

  const scrollRef = useRef(false);
  const headerRef = useRef(null);

  function handleScroll() {
    if (window.scrollY > scroll) {
      if (scrollRef.current === false) {
        headerRef.current.style.backdropFilter = "blur(20px)";
        scrollRef.current = true;
      }
    } else {
      if (scrollRef.current) {
        headerRef.current.style.backdropFilter = "blur(0px)";
        scrollRef.current = false;
      }
    }
  }
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <header ref={headerRef}>
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
      {header && (
        <div className="header" ref={myAppRef}>
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
      )}
    </>
  );
};

export default Header;
