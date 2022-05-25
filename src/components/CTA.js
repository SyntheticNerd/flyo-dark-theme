import React, { useState } from "react";
import styled from "styled-components";

const CTAStyled = styled.section`
  background-color: var(--bg-main);
  color: var(--font-color);
  & form {
    background-color: var(--bg-el2);
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.5);
    width: 85%;
    max-width: 900px;
    margin: auto;
    padding: 58px min(80px, 5vw);
    border-radius: 8px;
    text-align: center;
    font-family: var(--font-body);
    transform: translateY(40%);
    h1 {
      font-size: min(2em, max(6vw, 1em));
    }
    p {
      margin: 26px auto;
      line-height: 1.5em;
      font-size: min(1em, max(4vw, 0.8em));

    }
    #emailInputWrapper {
      position: relative;
      display: inline-block;
      width: 60%;
      @media (max-width: 828px) {
        display: block;
        width: 100%;
        margin-bottom: 2.5em;
      }
      &::after {
        content: "Please enter a valid email address";
        position: absolute;
        left: 32px;
        bottom: -2em;
        font-style: var(--font-header);
        font-weight: 700;
        font-size: 0.8em;
        color: var(--error);
        z-index: -1;
        transition: transform 0.5s;
        transform: ${({ valid }) =>
          valid ? "translateY(-200%)" : "translateY(0%)"};
      }
    }
    input[type="email"] {
      background-color: white;
      border: none;
      padding: 16px 32px;
      border-radius: 32px;
      width: 100%;
      outline: none;
    }
    button[type="submit"] {
      border: none;
      padding: 16px;
      width: 30%;
      margin-left: 8%;
      border-radius: 32px;
      font-family: var(--font-body);
      color: var(--font-color);
      background-image: var(--gradient);
      font-weight: 700;
      position: relative;
      z-index: 0;
      overflow: hidden;
      transition: transform 0.5s;
      @media (max-width: 828px) {
        width: 100%;
        margin: 0;
      }
      &::before {
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
  }
`;

export default function CTA() {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(true);

  function submitForm(e) {
    e.preventDefault();
    if (!e.target[0].checkValidity() || e.target[0].length < 1) {
      setValid(false);
      return;
    } else {
      setValid(true);
      alert("Success doesn't actually do anything though");
      setEmail("");
    }
  }

  return (
    <CTAStyled valid={valid}>
      <form onSubmit={(e) => submitForm(e)} noVaalidate='novalidate'>
        <h1>Get early access today</h1>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. I you have any questions, our support team would
          be happy to help you.
        </p>
        <div id='emailInputWrapper'>
          <input
            type='email'
            placeholder='email@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit'>Get Started For Free</button>
      </form>
    </CTAStyled>
  );
}
