import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import styled from "styled-components";

// const Layout은 꼭 대문자로 해야지만 컴포넌트라고 인식을 한다 소문자는 html로 인식함

const Layout = (props) => {
  return (
    <Wrap>
      <Header />
      <main id="main">{props.children}</main>
      <Footer />
    </Wrap>
  );
};

const Wrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  #main {
    flex: 1;
    padding: 30px;
  }
`;

export default Layout;
