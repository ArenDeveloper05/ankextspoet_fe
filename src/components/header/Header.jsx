import { Link } from "react-router-dom";
import "./Header.scss";
import TypeWriterEffect from "react-typewriter-effect";
import { ROUTER } from "../../router/index";
import { getFromLocalStorage } from "../../api/api";
import HeaderAccount from "./header-account/HeaderAccount";
import HeaderLogin from "./header-login/HeaderLogin";

const Header = () => {
  const myAppRef = null;
  return (
    <div className="header" ref={myAppRef}>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={ROUTER.HOME_ROUTE}>Home</Link>
            </li>
            <li>
              <Link to={""}>About</Link>
            </li>
            <li>
              <Link to={""}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="account">
          {getFromLocalStorage("isAuth") === "true" ? (
            <HeaderAccount />
          ) : (
            <HeaderLogin text="Մուտք" />
          )}
        </div>
      </header>

      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "#c3b9b9",
          fontWeight: 800,
          fontSize: "60px",
        }}
        startDelay={100}
        cursorColor="white"
        multiText={[
          "Ո՜ւշ-ո՜ւշ են գալիս, բայց ո՛չ ուշացած.",
          "Ծնվում են նրանք ճի՛շտ ժամանակին:",
          "Եվ ժամանակից առաջ են ընկնում,",
          "Դրա համար էլ չեն ներում նրանց:",
        ]}
        typeSpeed={50}
        scrollArea={myAppRef}
        loop={true}
        nextTextDelay={1000}
      />
    </div>
  );
};

export default Header;
