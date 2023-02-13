import React, { useState } from 'react'
import styled from "styled-components"

function Header() {
  return (
    <Nav>
      <NavMenu>
        <LeftMenu>
          <a href="/">
            <span>HOME</span>
          </a>
          <a href="/experience">
            <span>EXPERIENCE</span>
          </a>  
          <a href="/projects">
            <span>PROJECTS</span>
          </a>
          <a href="/hobbies">   
            <span>HOBBIES</span>
          </a>
        </LeftMenu>
        <a href="/">
          <Logo>RS</Logo>
        </a>
        <RightMenu>
          <a href='https://github.com/rohan-sagar1' target="_blank" rel="noreferrer">
            <span>
              <img src="/assets/github-mark.png" alt="github" />
            </span>
          </a>
          <a href='https://www.linkedin.com/in/rohan-sagar3/' target="_blank" rel="noreferrer">
            <span>
              <img src="/assets/LI-In-Bug.png" alt="linkedin"/>
            </span>
          </a>
          <a href='mailto:rsagar@purdue.edu' target="_blank" rel="noreferrer">
            <span>
              <img src="/assets/icons8-mail-53.png" alt="email"/>
            </span>
          </a>
        </RightMenu>
      </NavMenu>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 75px;
  border-radius: 1px;
  width: 85%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3;

  @media (max-width: 1200px) {
    width: 85%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    color: black;
    text-decoration: none;
    span {
      display: flex;
      font-size: 1.11111rem;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: red;
        color: red;
        border-radius: 0px 0px 4px 4px;
        bottom: -40px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 450ms ease-in-out;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      color: red;
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media only screen and (max-width: 1255px) {
    margin-right: 0px;
  }
`;

const Logo = styled.span`
  font-size: 2.51111rem !important;
  font-family: "NewFont";
  display: flex;
  align-items: center;
  margin-right: 80px;
  cursor: pointer;
  &:before {
    background-color: red;
    color: red;
    border-radius: 0px 0px 4px 4px;
    bottom: -20px !important;
    content: "";
    height: 2px;
    left: 0px;
    opacity: 0;
    position: absolute;
    right: 0px;
    transform-origin: left center;
    transform: scaleX(0);
    transition: all 450ms ease-in-out;
    visibility: hidden;
    width: auto;
  }
  &:hover {
    color: red;
    &:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }
`;

const LeftMenu = styled.div`
  display: flex;
  align-items: center;
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  img {
    padding: 0 12px;
    height: 25px;
  }
`;

