import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import location from "../assets/icon-location.svg";
import phone from "../assets/icon-phone.svg";
import email from "../assets/icon-email.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const FooterStyled = styled.footer`
  background-color: var(--bg-footer);
  padding: 164px 10% 64px;
  padding-top: 300px;
  a {
    font-family: var(--font-header);
    text-decoration: none;
    max-width: 320px;
    display: block;
    display: flex;
    color: var(--font-color-opac);
    cursor: pointer;
    &:hover {
      color: var(--font-color);
      font-weight: 700;
    }
    img {
      margin-right: 8px;
      object-fit: none;
      padding-top: 4px;
    }
  }
  & #footer-info {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    flex-wrap: wrap;
    gap: 32px;
    @media (max-width: 485px) {
      flex-direction: column;
    }
    ul {
      list-style-type: none;
      li {
        margin-bottom: 16px;
      }
    }
  }
  & #socLinkCont {
    display: flex;
    @media (max-width: 485px) {
      align-self: center;
    }
  }
`;
export const SocLink = styled.a`
  margin-left: 16px;
  border: 1px solid white;
  border-radius: 50%;
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 1px solid var(--brand-1);
    svg {
      color: var(--brand-1);
    }
  }
  svg {
    height: 50%;
  }
`;
export default function Footer() {
  return (
    /* footer>img+div>(div>img+a)+(ul>li*2>img+a)+(ul>li*4>a)+(ul>li*3>a)+div>img*3 */
    <FooterStyled>
      <img src={logo} alt='' />
      <div id='footer-info'>
        <div>
          <a href=''>
            <img src={location} alt='' style={{ alignSelf: "flex-start" }} />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
              perspiciatis minus labore earum corporis adipisci.
            </p>
          </a>
        </div>
        <ul>
          <li>
            <a href=''>
              <img src={phone} alt='' />
              +1-543-123-4567
            </a>
          </li>
          <li>
            <a href=''>
              <img src={email} alt='' />
              example@fylo.com
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href=''>About Us</a>
          </li>
          <li>
            <a href=''>Jobs</a>
          </li>
          <li>
            <a href=''>Press</a>
          </li>
          <li>
            <a href=''>Blog</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href=''>Contact Us</a>
          </li>
          <li>
            <a href=''>Terms</a>
          </li>
          <li>
            <a href=''>Privacy</a>
          </li>
        </ul>
        <div id='socLinkCont'>
          <SocLink href='#'>
            <FontAwesomeIcon icon={faFacebookF} size='lg' />
          </SocLink>
          <SocLink href='#'>
            <FontAwesomeIcon icon={faTwitter} size='lg' />
          </SocLink>
          <SocLink href='#'>
            <FontAwesomeIcon icon={faInstagram} size='lg' />
          </SocLink>
        </div>
      </div>
    </FooterStyled>
  );
}
