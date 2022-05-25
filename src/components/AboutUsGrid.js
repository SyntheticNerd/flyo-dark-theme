import React from "react";
import styled from "styled-components";
import { ReactComponent as AccessAnywhere } from "../assets/icon-access-anywhere.svg";
import { ReactComponent as Security } from "../assets/icon-security.svg";
import { ReactComponent as Collaboration } from "../assets/icon-collaboration.svg";
import { ReactComponent as AnyFile } from "../assets/icon-any-file.svg";

const AboutUsStyled = styled.section`
  background-color: var(--bg-main);
  color: var(--font-color);
  padding-top: 160px;
  padding-bottom: 64px;
  & ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    list-style: none;
    width: fit-content;
    margin: auto;
    gap: 100px;
    padding: 10%;
    @media (max-width: 700px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
    }
    & li {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      max-width: 460px;
      gap: 16px;
      & img {
        height: 100px;
        width: 100px;
        object-fit: none;
      }
      & h2 {
        font-family: var(--font-header);
        font-size: 2em;
        font-size: min(2em, max(5vw, 1em));
      }
      & p {
        font-family: var(--font-body);
        line-height: 1.5em;
        font-size: 1.2em;
        font-size: min(1.2em, max(3.5vw, 0.8em));
      }
    }
  }
`;

const aboutUsData = [
  {
    img: <AccessAnywhere />,
    title: "Access your files, anywhere",
    body: `The ability to use a smartphone, tablet, or computer to access your
     account means your files follow you everywhere.`,
  },
  {
    img: <Security />,
    title: "Security you can trust",
    body: `2-factor authentication and user-controlled encryption are just a
    couple of the security features we allow to help secure your files.`,
  },
  {
    img: <Collaboration />,
    title: "Store any type of file",
    body: `Securely share files and folders with friends, family and colleagues
    for live collaboration. No email attachments required.`,
  },
  {
    img: <AnyFile />,
    title: "Real-time collaboration",
    body: `Whether you're sharing holiday photos or work documents, Fylo has
    you covered allowing for all file types to be securely stored and
    shared.`,
  },
];

export default function AboutUsGrid() {
  return (
    <AboutUsStyled>
      <ul>
        {aboutUsData.map((data, i) => (
          <li key={i}>
            {data.img}
            <h2>{data.title}</h2>
            <p>{data.body}</p>
          </li>
        ))}
      </ul>
    </AboutUsStyled>
  );
}
