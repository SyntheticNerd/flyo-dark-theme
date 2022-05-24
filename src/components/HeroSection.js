import React from "react";
import styled from "styled-components";

const HeroStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 0;
  background-color: var(--bg-el1);
  color: var(--font-color);
  padding-bottom: 15vw;
  & #hero-img {
    margin: 32px;
  }
  & #bg-image-hero {
    position: absolute;
    width: 100%;
    z-index: -1;
    bottom: 0;
  }
  h1 {
    font-size: 2.5em;
    text-align: center;
    max-width: 900px;
    font-family: var(--font-header);
    font-weight: 700;
    margin-bottom: 32px;
  }
  p {
    font-size: 1.4em;
    width: 700px;
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
      <img
        id='bg-image-hero'
        src={process.env.PUBLIC_URL + "/images/bg-curvy-desktop.svg"}
        alt=''
      />
    </HeroStyled>
  );
}
