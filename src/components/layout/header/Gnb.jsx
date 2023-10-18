import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  FaHouse,
  FaCartShopping,
  FaChartSimple,
  FaUserLarge,
  FaUnlockKeyhole,
} from "react-icons/fa6";
import { BsGrid1X2Fill } from "react-icons/bs";

const Gnb = () => {
  const location = useLocation();

  return (
    <GnbWapper>
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">
            <FaHouse /> DASHBOARD
          </Link>
        </li>
        <li className={location.pathname === "/market" ? "active" : ""}>
          <Link to="/market">
            <FaCartShopping />
            NFT Marketplace
          </Link>
        </li>
        <li className={location.pathname === "/tables" ? "active" : ""}>
          <Link to="/tables">
            <FaChartSimple />
            Tables
          </Link>
        </li>
        <li className={location.pathname === "/kanban" ? "active" : ""}>
          <Link to="/kanban">
            <BsGrid1X2Fill />
            Kanban
          </Link>
        </li>
        <li className={location.pathname === "/profile" ? "active" : ""}>
          <Link to="/profile">
            <FaUserLarge />
            Profile
          </Link>
        </li>
        <li className={location.pathname === "/signin" ? "active" : ""}>
          <Link to="/signin">
            <FaUnlockKeyhole />
            Sign In
          </Link>
        </li>
      </ul>
    </GnbWapper>
  );
};

const GnbWapper = styled.nav`
  position: absolute;
  top: 18%;
  left: 12%;
  ul {
    li {
      position: relative;
      margin-bottom: 16px;
      &::after {
        content: "";
        transform: translate(-50%, -50%);
        position: absolute;
        top: 50%;
        left: 252px;
        width: 4px;
        height: 36px;
        border-radius: 25px;
        background: var(--primary);
        opacity: 0;
        transition: all 0.3s;
      }
      &.active {
        a {
          color: var(--primary-dark);
          font-weight: 700;
          svg {
            color: var(--primary);
          }
        }
        &::after {
          opacity: 1;
        }
      }
      a {
        display: flex;
        gap: 10px;
        align-items: center;
        line-height: 40px;
        font-weight: 500;
        color: var(--secondary);
        &:hover {
          color: var(--secondary-grey-600);
          svg {
            color: var(--primary);
          }
        }
        svg {
          font-size: 20px;
        }
      }
    }
  }
`;

export default Gnb;
