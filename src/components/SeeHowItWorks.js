import React from "react";
import styled from "styled-components";

const CTAStyled = styled.section`
  display: flex;
  align-items: center;
  background-color: var(--bg-main);
  color: var(--font-color);
  justify-content: center;
  gap: 64px;
  padding: 64px 0px;
  & > div {
    width: 560px;
    & h1 {
      font-size: 2em;
      font-family: var(--font-header);
      width: 60%;
      margin-bottom: 20px;
    }
    & p {
      font-size: 1em;
      font-family: var(--font-body);
      margin-bottom: 16px;
      line-height: 1.5em;
    }
    & button {
        color: var(--brand-1);
        background: none;
        border: none;
        border-bottom: 1px solid var(--brand-1);
        font-family: var(--font-body);
        padding: 4px 0px;
        font-size: 1em;
    }
  }
`;

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
        <button>
          See how Fylo works{" "}
          <img src={process.env.PUBLIC_URL + "/images/icon-arrow.svg"} alt='' />
        </button>
      </div>
    </CTAStyled>
  );
}
