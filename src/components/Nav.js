import React from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  background-color: var(--bg-el1);
  color: var(--font-color);
  padding: 64px;
  font-family: var(--font-header);
  & > ul {
    display: flex;
    list-style: none;
    margin-left: auto;
    gap: 5em;
  }
`;
export default function Nav() {
  return (
    <NavBar>
      <img src={process.env.PUBLIC_URL + "./images/logo.svg"} alt='' />
      <ul>
        <li>Features</li>
        <li>Teams</li>
        <li>Sing In</li>
      </ul>
    </NavBar>
  );
}
