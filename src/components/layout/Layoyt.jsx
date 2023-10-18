import React from "react";
import Header from "./header/Header";
// import Footer from "./footer/Footer";
import styled from "styled-components";

// const Layout은 꼭 대문자로 해야지만 컴포넌트라고 인식을 한다 소문자는 html로 인식함

const Layout = (props) => {
  return (
    <Wrap>
      <Header />
      <main id="main">{props.children}</main>
      {/* <Footer /> */}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding-left: 290px;
  background-color: var(--secondary-grey-300, #f4f7fe);
  #main {
    flex: 1;
    padding: 55px 20px;
  }
`;

export default Layout;
