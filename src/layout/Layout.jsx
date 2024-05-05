import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import "./Layout.scss";

const Layout = ({ children, header, scroll }) => {
  return (
    <>
      <Header header={header} scroll={scroll} />
      <main style={!header ? { marginTop: "100px" } : {}}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
