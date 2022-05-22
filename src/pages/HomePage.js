import React from "react";
import styled from "styled-components";
import { FaCalculator, FaRocket, FaFlask } from "react-icons/fa";

const HomePage = () => {
  return (
    <Wrapper>
      <ul>
        <li className="physicsTab">
          <a href="/physics">
            <h3>Physics</h3>
            <p>Paper 1 &amp; 2, P3 is easy.</p>
            <i className="fa fa-github">
              <FaRocket />
            </i>
          </a>
        </li>
        <li className="chemistryTab">
          <a href="/chemistry">
            <h3>Chemistry</h3>
            <p>I have no idea why tf would you pick this.</p>
            <i className="fa fa-github">
              <FaFlask />
            </i>
          </a>
        </li>

        <li className="mathsTab">
          <a href="/maths">
            <h3>Maths</h3>
            <p>Pure Mathematics 1 &amp; 3, Mechanics and Statistics</p>
            <i className="fa fa-dribbble">
              <FaCalculator />
            </i>
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  @mixin breakpoint($point) {
    @media (max-width: $point) {
      @content;
    }
  }
  user-select: none;

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #f2f2f2;
    line-height: 1.2;
  }

  ul {
    width: 60vw;
    padding: 0;
    margin: 0;
    list-style: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    li {
      border-bottom: 2px solid #e6e6e6;
      position: relative;
      overflow: hidden;
      transition: 0.2s ease-in-out;
      a {
        display: block;
        padding: 30px;
        text-decoration: none;
        color: #222;
        transition: 0.2s ease-in-out;
        h3 {
          margin: 0 0 15px;
          font-size: 30px;
          font-weight: 900;
        }
        p {
          margin: 0;
          font-size: 20px;
          max-width: calc(100% - 110px);
        }
        i {
          position: absolute;
          top: 50%;
          right: 50px;
          transform: translatey(-50%);
          font-size: 80px !important;
          opacity: 0.25;
        }
      }
      &.mathsTab:hover {
        background-color: #55acee;
      }
      &.chemistryTab:hover {
        background-color: #fc6d27;
      }
      &.physicsTab:hover {
        background-color: #333;
      }
      &:hover {
        box-shadow: 0 10px 15px 0 #e6e6e6;
        > a {
          color: white;
          > p {
            color: white;
          }
        }
      }
      &:first-child {
        border-top: 2px solid #e6e6e6;
      }
    }
  }

  @media screen and (max-width: 800px) {
    p {
      display: none;
    }
    i {
      display: none;
    }
    h3 {
      padding: 2rem 0;
      transform: translateY(5px);
      text-align: center;
    }
  }
`;

export default HomePage;
