import {React, useState, useEffect} from 'react'
import styled from "styled-components"

function Header() {
  return (
    <Nav>
      <NavMenu>
        <a href="/">
          <span>Home</span>
        </a>
        <a href="/experience">
          <span>Experience</span>
        </a>  
        <a href="/projects">
          <span>Projects</span>
        </a>
        <a href="/hobbies">   
          <span>Hobbies</span>
        </a>
        <a href='https://github.com/rohan-sagar1' target="_blank" rel="noreferrer">
          <img src="/assets/github-mark.png" alt="github" />
        </a>
        <a href='https://www.linkedin.com/in/rohan-sagar3/' target="_blank" rel="noreferrer">
          <img src="/assets/LI-In-Bug.png" alt="linkedin"/>
        </a>
      </NavMenu>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
    justify-content: flex-end;
`

const NavMenu = styled.div`
    display: flex;
    margin-right: 25px;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    a {
        display: flex; 
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            margin-right: 12px;
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0; 
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`