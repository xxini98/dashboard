import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Gnb = () => {
  return (
    <GnbWapper>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
    </GnbWapper>
  );
};

const GnbWapper = styled.nav`
  ul {
    display: flex;
    li {
      margin-left: 10px;
      a {
        color: #333;
        &:hover {
          color: #ffaad2;
          font-weight: 700;
        }
      }
    }
  }
`;

export default Gnb;
