import React, { useState } from "react";
import styled from "styled-components";

const CTAStyled = styled.section`
  display: flex;
  align-items: center;
  background-color: var(--bg-main);
  color: var(--font-color);
  justify-content: center;
  gap: 64px;
  padding-bottom: 64px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  & > img {
    max-width: 80%;
  }
  & > div {
    width: 560px;
    max-width: 80%;
    & h1 {
      font-family: var(--font-header);
      width: 60%;
      margin-bottom: 20px;
      font-size: min(2em, max(4.6vw, 0.8em));
      @media (max-width: 700px) {
        width: 100%;
      }
    }
    & p {
      font-size: 1em;
      font-family: var(--font-body);
      margin-bottom: 16px;
      line-height: 1.5em;
      font-size: min(1em, max(3.5vw, 0.8em));
    }
    & button {
      color: var(--brand-1);
      background: none;
      border: none;
      border-bottom: 1px solid var(--brand-1);
      font-family: var(--font-body);
      padding: 4px 0px;
      font-size: 1em;
      svg {
        margin-left: 4px;
      }
      &:hover {
        color: var(--font-color);
        border-bottom: 1px solid var(--font-color);
      }
    }
  }
`;

const Arrow = () => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      See how Fylo works
      <svg
        width='16'
        height='16'
        xmlns='http://www.w3.org/2000/svg'
        // xmlns='http://www.w3.org/1999/xlink'
      >
        <defs>
          <circle id='b' cx='6' cy='6' r='6' />
          <filter
            x='-25%'
            y='-25%'
            width='150%'
            height='150%'
            filterUnits='objectBoundingBox'
            id='a'
          >
            <feOffset in='SourceAlpha' result='shadowOffsetOuter1' />
            <feGaussianBlur
              stdDeviation='1'
              in='shadowOffsetOuter1'
              result='shadowBlurOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0'
              in='shadowBlurOuter1'
            />
          </filter>
        </defs>
        <g fill='none' fillRule='evenodd'>
          <g transform='translate(2 2)'>
            <use fill='#000' filter='url(#a)' href='#b' />
            <use fill={hover ? "white" : "#62E0D9"} href='#b' />
          </g>
          <path
            d='M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z'
            fill='#1B2330'
          />
        </g>
      </svg>
    </button>
  );
};

export default function SeeHowItWorks() {
  return (
    <CTAStyled>
      <img
        src={
          process.env.PUBLIC_URL + "/images/illustration-stay-productive.png"
        }
        alt=''
      />
      <div>
        <h1>Stay productive, wherever you are</h1>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachment required.
        </p>
        <Arrow />
      </div>
    </CTAStyled>
  );
}
