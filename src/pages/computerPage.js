import React from "react";
import styled from "styled-components";

export default function App() {
  return (
    <Theme>
      <div className={localStorage.getItem("theme")}>
        <Wrapper color={"#55acee"}>
          <div class="typewriter">
            <h1>Perhaps a possible possibility.</h1>
          </div>
        </Wrapper>
      </div>
    </Theme>
  );
}

const Wrapper = styled.main`
  /* background: #fff; */
  height: 100vh;
  padding-top: 30vh;
  display: flex;
  overflow: hidden;
  justify-content: center;

  /* DEMO-SPECIFIC STYLES */
  .typewriter h1 {
    color: #333;

    font-family: monospace;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid orange; /* The typwriter cursor */
    white-space: nowrap;
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }

  @media screen and (max-width: 800px) {
    .typewriter h1 {
      font-size: 1rem;
    }
  }
`;

const Theme = styled.main`
  .dark {
    background: #333;
    .typewriter h1 {
      color: #fff;
    }
  }
`;
