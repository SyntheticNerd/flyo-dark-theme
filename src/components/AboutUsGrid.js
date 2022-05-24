import React from "react";
import styled from "styled-components";

const AboutUsStyled = styled.section`
background-color: var(--bg-main);
color: var(--font-color);
padding-bottom: 64px;
  & ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    list-style: none;
    width: fit-content;
    margin: auto;
    gap: 100px;
    & li{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 460px;
        gap: 16px;
        & img{
            height: 100px;
            width: 100px;
            object-fit: none;
        }
        & h1{
            font-family: var(--font-header);
            font-size: 2em;
        }
        & p{
            font-family: var(--font-body);
            line-height: 1.5em;
            font-size: 1.2em;
        }
    }
  }
`;

export default function AboutUsGrid() {
  return (
    <AboutUsStyled>
      <ul>
        <li>
          <img
            src={process.env.PUBLIC_URL + "/images/icon-access-anywhere.svg"}
            alt=''
          />
          <h1>Access your files, anywhere</h1>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </li>
        <li>
          <img
            src={process.env.PUBLIC_URL + "/images/icon-security.svg"}
            alt=''
          />
          <h1>Security you can trust</h1>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </li>
        <li>
          {" "}
          <img
            src={process.env.PUBLIC_URL + "/images/icon-collaboration.svg"}
            alt=''
          />
          <h1>Real-time collaboration</h1>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </li>
        <li>
          <img
            src={process.env.PUBLIC_URL + "/images/icon-any-file.svg"}
            alt=''
          />
          <h1>Store any type of file</h1>
          <p>
            Whether you're sharing holiday photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </li>
      </ul>
    </AboutUsStyled>
  );
}
