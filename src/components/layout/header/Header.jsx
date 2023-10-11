import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Gnb from "./Gnb";
// function Header() {}
const Header = () => {
  return (
    <HeaderWapper>
      <Logo>
        <Link to="/">logo</Link>
      </Logo>
      <Gnb />
    </HeaderWapper>
  );
};

// Router를 사용할 때에는 링크 연결 시 a 태그가 아닌 Link 태그로 사용한다.

// 변수 이름을 설정할 때에는 대문자로 시작하고 그렇다고 태그 이름이랑 같으면 x styled.header (태그이름을 쓰면 된다.)
// const 변수명 = styled.태그명``;

const Logo = styled.h1`
  font-size: 30px;
  color: lightblue;
`;

const HeaderWapper = styled.header`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  height: 70px;
  align-items: center;
`;

export default Header;
