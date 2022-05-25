import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg"

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  background-color: var(--bg-el1);
  color: var(--font-color);
  padding: min(64px, 6%);
  font-family: var(--font-header);
  & > ul {
    display: flex;
    list-style: none;
    margin-left: auto;
    gap: min(5em, 4vw);
    & a { 
      text-decoration: none;
      color: var(--font-color-opac);
      cursor: pointer;
      &:hover{
        color: var(--font-color);
        text-decoration: underline;
      }
    }
  }
`;

const LogoStyled = styled.img`
  fill: var(--font-color);
  max-width: 30%; 
`;

export default function Nav() {
  return (
    <NavBar>
      <LogoStyled src={logo} alt="Fylo"/>
      <ul>
        <li>
          <a href=''>Features</a>
        </li>
        <li>
          <a href=''>Teams</a>
        </li>
        <li>
          <a href=''>Sign In</a>
        </li>
      </ul>
    </NavBar>
  );
}
