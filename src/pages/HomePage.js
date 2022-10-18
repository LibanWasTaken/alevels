import React, { useState } from "react";
import styled from "styled-components";
import { FaCalculator, FaRocket, FaFlask, FaLaptopCode } from "react-icons/fa";
import LoadingBar from "react-top-loading-bar";

const HomePage = () => {
  const [progress, setProgress] = useState(0);
  const [loadingColor, setLoadingColor] = useState(0);
  function loadBar(color) {
    setLoadingColor(color);
    setProgress(progress + 30);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
  }

  return (
    <Theme>
      <div className={localStorage.getItem("theme")}>
        <Wrapper>
          <LoadingBar
            color={loadingColor}
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
            shadow={false}
            height={5}
          />
          <ul>
            <li className="mathsTab">
              <a
                href="/maths"
                onClick={() => {
                  loadBar("#55acee");
                }}
              >
                <h3>Maths</h3>
                <p>Pure Maths 1 &amp; 3 and Statistics</p>
                <i className="fa fa-dribbble">
                  <FaCalculator />
                </i>
              </a>
            </li>
            <li className="chemistryTab">
              <a
                href="/chemistry"
                onClick={() => {
                  loadBar("#fc6d27");
                }}
              >
                <h3>Chemistry</h3>
                <p>Why tf would you pick this.</p>
                <i className="fa fa-github">
                  <FaFlask />
                </i>
              </a>
            </li>
            <li className="physicsTab">
              <a
                href="/physics"
                onClick={() => {
                  loadBar("#ce2029");
                }}
              >
                <h3>Physics</h3>
                <p>shorts/BL8Oe9oh7mY</p>
                <i className="fa fa-github">
                  <FaRocket />
                </i>
              </a>
            </li>
            <li className="computerTab">
              <a
                href="/computer"
                onClick={() => {
                  loadBar("#5560ee");
                }}
              >
                <h3>Computer</h3>
                <p>A failed possibility.</p>
                <i className="fa fa-dribbble">
                  <FaLaptopCode />
                </i>
              </a>
            </li>
          </ul>
        </Wrapper>
      </div>
    </Theme>
  );
};

const Wrapper = styled.main`
  @mixin breakpoint($point) {
    @media (max-width: $point) {
      @content;
    }
  }

  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;

  ul {
    width: 60vw;
    padding: 0;
    margin: 0;
    list-style: none;
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
        background-color: #ce2029;
      }
      &.computerTab:hover {
        background-color: #5560ee;
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
        /* margin-top: 5rem; */
      }
      &:last-child {
        border-bottom: none;
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
      padding: 1rem 0;
      transform: translateY(5px);
      text-align: center;
    }
  }
  @media screen and (max-height: 550px) {
    @media screen and (orientation: landscape) {
      align-content: stretch;
      ul {
        margin-top: 5rem;
      }
    }
  }

  /* theming */
`;

const Theme = styled.main`
  .dark {
    transition: 2s;
    background-color: #222;
    h3,
    i {
      color: white;
    }
    p {
      color: #f2f5f7;
    }
    li:hover {
      box-shadow: 0 0px 5px 0 #e6e6e6;
    }
  }
`;

export default HomePage;
