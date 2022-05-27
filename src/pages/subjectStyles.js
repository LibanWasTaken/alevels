import styled from "styled-components";

export const Wrapper = styled.main`
  --color: ${(props) => props.color};

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
  }

  .tip {
    font-style: italic;
    opacity: 0.5;
    font-size: 1rem;
  }

  .btnRec {
    z-index: 10;
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
`;

export const Theme = styled.main`
  .dark {
    overflow: hidden;
    background-color: #333;
    * {
      color: #f2f5f7;
    }
    .title {
      /* color: var(--color, #f2f5f7); */
      color: #f2f5f7;
    }
    .tree {
      /* color: #f2f5f7; */
      /* background-color: red; */
    }
  }
`;
