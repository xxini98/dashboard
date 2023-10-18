import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Gnb from "./Gnb";
import {  Heading } from "@chakra-ui/react";
import DividerCustom from "../../common/DividerCustom";
// function Header() {}
const Header = () => {
  return (
    <HeaderWapper>
      {/* as 사용시 그 옆에 속성을 넣어도 안 넣으니 as 사용시에는 따로 스타일지정해줄 것! */}
      <HeaderStyle as="h1" className="logo">
        <Link to="/">
          <span className="horizon">HORIZON</span>
          <span className="free">FREE</span>
        </Link>
      </HeaderStyle>
      <DividerCustom />
      <Gnb />
    </HeaderWapper>
  );
};

// Router를 사용할 때에는 링크 연결 시 a 태그가 아닌 Link 태그로 사용한다.

// 변수 이름을 설정할 때에는 대문자로 시작하고 그렇다고 태그 이름이랑 같으면 x styled.header (태그이름을 쓰면 된다.)
// const 변수명 = styled.태그명``;

// Heading은 샤크라 ui 이다.

const HeaderStyle = styled(Heading)`
  padding: 25px;
  color: var(--primary-dark);
  white-space: nowrap;
  text-align: center;
  transition: color 0.3s ease-in-out;
  span {
    font-size: 26px;
    font-style: normal;
    line-height: 100%;
  }
  .horizon {
    font-weight: 700;
    margin-right: 5px;
  }
  .free {
    font-weight: 400;
  }
  &:hover {
    color: var(--primary);
  }
`;

const HeaderWapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: var(--white);
  width: 290px;
  padding: 30px;
`;

export default Header;
