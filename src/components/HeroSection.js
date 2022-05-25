import React from "react";
import styled from "styled-components";
import bgImageDesk from "../assets/bg-curvy-desktop.svg";
import bgImageMob from "../assets/bg-curvy-mobile.svg";

const HeroStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 0;
  background-color: var(--bg-el1);
  color: var(--font-color);
  padding-bottom: 0%;
  background-image: url(${bgImageDesk});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  z-index: 0;
  @media (max-width: 580px) {
    background-image: url(${bgImageMob});
    background-position: bottom 50% right 0px;
    &::before{
      content: "";
      height: 40%;
      width: 100%;
      background: red;
      position: absolute;
      bottom: 0px;
      z-index: -1;
      background-color: var(--bg-main);
    }
  }
  & #hero-img {
    margin: 32px;
    max-width: 90%;
  }
  h1 {
    font-size: min(2.5em, max(7vw, 1em));
    text-align: center;
    max-width: 900px;
    font-family: var(--font-body);
    font-weight: 700;
    margin-bottom: 32px;
    line-height: 1.6em;
  }
  p {
    font-size: min(1.4em, max(4vw, 1em));
    width: 90%;
    max-width: 700px;
    text-align: center;
    font-family: var(--font-body);
    font-weight: 400;
    margin-bottom: 32px;
    line-height: 1.5em;
  }
  button {
    font-family: var(--font-header);
    padding: 16px 100px;
    font-size: 1em;
    font-weight: 700;
    color: white;
    background-image: var(--gradient);
    background-color: none;
    border: none;
    border-radius: 32px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    transition: transform 0.5s;
    &:before {
      content: "";
      height: 100%;
      width: 200%;
      position: absolute;
      background-image: linear-gradient(
        90deg,
        var(--brand-1) 0%,
        var(--brand-1) 50%,
        var(--brand-2) 100%
      );
      z-index: -1;
      right: 0;
      top: 0;
      transition: transform 0.5s;
    }
    &:hover {
      transform: scale(1.1);
      &::before {
        transform: translateX(50%);
      }
    }
    &:active {
      transition: transform 0.1s;
      transform: scale(1);
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyled>
      <img
        id='hero-img'
        src={process.env.PUBLIC_URL + "/images/illustration-intro.png"}
        alt='Access and Share you files with friends, family, and co-workers.'
      />
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends, family, and
        co-workers.
      </p>
      <button>Get Started</button>
    </HeroStyled>
  );
}
