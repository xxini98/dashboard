import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

// const Layout은 꼭 대문자로 해야지만 컴포넌트라고 인식을 한다 소문자는 html로 인식함

const Layout = (props) => {
  return (
    <div className="wrap">
      <Header />
      <main id="main">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
