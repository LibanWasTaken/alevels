import styled from "styled-components";

export const Wrapper = styled.main`
  --color: ${(props) => props.color};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  /* user-select: none; */

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
