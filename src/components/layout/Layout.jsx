import React from "react";
import Header from "./header/Header";
// import Footer from "./footer/Footer";
import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import History from "../common/History";
import Title from "../common/Title";

// const Layout은 꼭 대문자로 해야지만 컴포넌트라고 인식을 한다 소문자는 html로 인식함

const Layout = ({ title, pagename, children }) => {
  // const { pagename, children } = props;

  return (
    <Wrap>
      <Header />
      <main id="main">
        <Box p=" 0  0  50px 10px">
          <History pagename={pagename} />
          <Title title={title} />
        </Box>
        {children}
      </main>
      {/* <Footer /> */}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  display: flex;
  padding-left: 290px;
  background-color: var(--secondary-grey-300, #f4f7fe);
  #main {
    width: 100%;
    min-height: 100vh;
    padding: 55px 20px;
  }
`;

export default Layout;
