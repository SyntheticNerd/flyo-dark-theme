import React from "react";
import styled from "styled-components";

const quoteData = [
  {
    img: process.env.PUBLIC_URL + "/images/profile-1.jpg",
    name: "Satish Patel",
    title: "Founder & CEO, Huddle",
    body: `Fylo has improved our team productivity by an order of magnitude. 
  Since making the switch our team has become a well-oiled collaboration 
  machine.`,
  },
  {
    img: process.env.PUBLIC_URL + "/images/profile-2.jpg",
    name: "Bruce McKenzie",
    title: "Founder & CEO, Huddle",
    body: `Fylo has improved our team productivity by an order of magnitude. 
  Since making the switch our team has become a well-oiled collaboration 
  machine.`,
  },
  {
    img: process.env.PUBLIC_URL + "/images/profile-3.jpg",
    name: "Iva Boyd",
    title: "Founder & CEO, Huddle",
    body: `Fylo has improved our team productivity by an order of magnitude. 
  Since making the switch our team has become a well-oiled collaboration 
  machine.`,
  },
];

const QuotesStyled = styled.section`
  background-color: var(--bg-main);
  color: var(--font-color);
  padding: 64px 0px;
  font-family: var(--font-body);
  & ul {
    display: flex;
    list-style-type: none;
    width: 1200px;
    max-width: 80%;
    gap: min(64px, 8vw);
    margin: auto;
    position: relative;
    @media(max-width: 1000px){
      flex-direction: column;
    }
    & li {
      background-color: var(--bg-el2);
      padding: 40px 26px 26px;
      border-radius: 4px;
      z-index: 1;
      & > p{
        line-height: 1.5em;
        font-size: min(0.9em, max(2vw, 0.8em));
      }
      & .personInfo{
        display: flex;
        margin-top: 32px;
        & h3{
          font-size: 1em;
        }
        & p{
          font-size: 0.8em;
        }
        & img{
          border-radius: 50%;
          height: 32px;
          width: 32px;
          margin-right: 16px;
        }
      }
    }
  }
  & #quoteImg {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-12%, -80%);
    z-index: 0;
  }
`;

export default function Quotes() {
  return (
    <QuotesStyled>
      <ul>
        <img
          id='quoteImg'
          src={process.env.PUBLIC_URL + "/images/bg-quotes.png"}
          alt=''
        />

        {quoteData.map((quote, i) => (
          <li key={i}>
            <p>{quote.body}</p>
            <div className='personInfo'>
              <img src={quote.img} alt='' />
              <div>
                <h3>{quote.name}</h3>
                <p>{quote.title}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </QuotesStyled>
  );
}
