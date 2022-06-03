import React from "react";
import styled from "styled-components";
import { FaSquareRootAlt, FaRocket, FaFlask, FaShapes } from "react-icons/fa";

const Olevels = () => {
  return (
    <Theme>
      <div className={localStorage.getItem("theme")}>
        <Wrapper>
          <ul>
            <li className="addmathsTab">
              <a href="/olevels/addmaths">
                <h3>Add Maths</h3>
                <p> Pure Mathematics basics</p>
                <i className="fa fa-dribbble">
                  <FaSquareRootAlt />
                </i>
              </a>
            </li>
            <li className="chemistryTab">
              <a href="/olevels/chemistry">
                <h3>Chemistry</h3>
                <p>And so it begins.</p>
                <i className="fa fa-github">
                  <FaFlask />
                </i>
              </a>
            </li>

            <li className="mathsTab">
              <a href="/olevels/mathsd">
                <h3>Maths D</h3>
                <p>Deez nuts</p>
                <i className="fa fa-dribbble">
                  <FaShapes />
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
    /* position: absolute; */
    /* top: 50%; */
    /* left: 50%; */
    /* transform: translate(-50%, -50%); */
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
      &.addmathsTab:hover {
        background-color: #5560ee;
      }
      &.chemistryTab:hover {
        background-color: #fc6d27;
      }
      &.physicsTab:hover {
        background-color: #ce2029;
      }
      &.computerTab:hover {
        background-color: #009b77;
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
      padding: 2rem 0;
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
    background-color: #010409;
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

export default Olevels;
