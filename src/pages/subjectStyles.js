import styled from "styled-components";

export const Wrapper = styled.main`
  --color: ${(props) => props.color};

  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;

  a,
  a:visited {
    text-decoration: none;
    color: #102a42;
  }
  .link {
    white-space: nowrap;
  }
  .link:hover {
    transition: 0.15s;
    color: var(--color, black);
  }
  .App {
    font-size: 1.5rem;
  }

  .title {
    text-align: center;
    margin: 5rem 0;
    margin-top: 8rem;
  }
  .title .underline {
    width: 6rem;
    height: 0.25rem;
    background: var(--color, black);
    margin-left: auto;
    margin-right: auto;
    /* animation: hovering 5s infinite ease-in-out; */
  }

  @keyframes hovering {
    0% {
      width: 6rem;
    }
    50% {
      width: 8rem;
    }
    100% {
      width: 6rem;
    }
  }

  .tip {
    font-style: italic;
    opacity: 0.5;
    font-size: 1rem;
  }

  .btnRec {
    z-index: 10;
  }

  .critic-link {
    text-decoration: underline;
  }

  .tree {
  }
  @media screen and (max-width: 800px) {
    .tree {
      font-size: 1.25rem;
    }

    .title {
      margin: 5rem 0;
    }

    .tree__file {
      white-space: nowrap;
      width: 300px;
      overflow-x: scroll;
      text-overflow: ellipsis;
    }

    .tree__file::-webkit-scrollbar {
      max-width: 10px;
      display: none;
    }
  }

  /* typewriter */

  .typewriter h1 {
    color: #333;

    font-family: monospace;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid orange; /* The typwriter cursor */
    white-space: nowrap;
    margin: 5rem auto; /* Gives that scrolling effect as the typing happens */
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

export const Theme = styled.main`
  .dark {
    overflow: hidden;
    margin: auto;

    background-color: #222;
    .tree,
    .link {
      color: #f2f5f7;
    }
    .link:hover {
      transition: 0.15s;
      color: var(--color, black);
    }
    .title {
      /* color: var(--color, #f2f5f7); */
      color: #f2f5f7;
    }
    .tree {
      /* color: #f2f5f7; */
      /* background-color: red; */
    }
    .typewriter h1 {
      color: #fff;
    }
  }
`;
