import styled from "styled-components";

export const Wrapper = styled.main`
  --color: ${(props) => props.color};

  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  margin-bottom: 5rem;
  user-select: none;

  a,
  a:visited {
    text-decoration: none;
    color: #102a42;
  }
  .link {
    white-space: nowrap;
  }
  .link:hover {
    transition: 0.25s;
    color: var(--color, black);
  }
  .App {
    /* width: 100%; */
    font-size: 1.5rem;
  }

  .title {
    text-align: center;
    margin: 5rem 0;
  }
  .title .underline {
    width: 6rem;
    height: 0.25rem;
    /* background: #fc6d27; */
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

  @media screen and (max-width: 800px) {
    .App {
      /* min-width: 100%; */
    }
    .tree {
      margin-left: 25%;
    }
  }
`;
