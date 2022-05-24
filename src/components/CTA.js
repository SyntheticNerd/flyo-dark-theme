import React, { useState } from "react";
import styled from "styled-components";

const CTAStyled = styled.section`
  background-color: var(--bg-main);
  color: var(--font-color);
  padding-top: 64px;
  & form {
    background-color: var(--bg-el2);
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.5);
    width: 900px;
    margin: auto;
    padding: 58px 80px;
    border-radius: 8px;
    text-align: center;
    font-family: var(--font-body);
    transform: translateY(40%);
    h1 {
      font-size: 2em;
    }
    p {
      line-height: 1.5em;
      margin: 26px;
    }
    input[type="email"] {
      background-color: white;
      border: none;
      padding: 16px 32px;
      width: 60%;
      border-radius: 32px;
      outline: none;
    }
    input[type="submit"] {
      border: none;
      padding: 16px;
      width: 30%;
      margin-left: 8%;
      border-radius: 32px;
      font-family: var(--font-body);
      color: var(--font-color);
      background-image: var(--gradient);
      font-weight: 700;
    }
  }
`;

export default function CTA() {
  const [email, setEmail] = useState("");

  function submitForm(e) {
    e.preventDefault();
    console.log(e.target[0].value);
  }
  return (
    <CTAStyled>
      <form onSubmit={(e) => submitForm(e)}>
        <h1>Get early access today</h1>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. I you have any questions, our support team would
          be happy to help you.
        </p>
        <input
          type='email'
          placeholder='email@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type='submit' value='Get Started For Free' />
      </form>
    </CTAStyled>
  );
}
