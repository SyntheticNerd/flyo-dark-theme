import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: var(--bg-footer);
  padding: 164px 10% 64px;
  padding-top: 164px;
  a {
    color: var(--font-color);
    font-family: var(--font-header);
    text-decoration: none;
    max-width: 320px;
    display: block;
    display: flex;
    align-items: flex-start;
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
    ul {
      list-style-type: none;
      li {
        margin: 16px;
      }
    }
  }
`;
export default function Footer() {
  return (
    /* footer>img+div>(div>img+a)+(ul>li*2>img+a)+(ul>li*4>a)+(ul>li*3>a)+div>img*3 */
    <FooterStyled>
      <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt='' />
      <div id='footer-info'>
        <div>
          <a href=''>
            <img
              src={process.env.PUBLIC_URL + "/images/icon-location.svg"}
              alt=''
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
              perspiciatis minus labore earum corporis adipisci.
            </p>
          </a>
        </div>
        <ul>
          <li>
            <a href=''>
              <img
                src={process.env.PUBLIC_URL + "/images/icon-phone.svg"}
                alt=''
              />
              +1-543-123-4567
            </a>
          </li>
          <li>
            <a href=''>
              <img
                src={process.env.PUBLIC_URL + "/images/icon-email.svg"}
                alt=''
              />
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
        <div>
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
        </div>
      </div>
    </FooterStyled>
  );
}
