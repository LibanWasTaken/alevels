import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>404</h1>
        <h3>Sorry, wtf are you doing here</h3>
        <Link to="/" className="btn">
          go back home twat
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  /* background: var(--clr-primary-10); */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 5rem 0;
  padding: 2rem;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  .btn {
    margin-top: 5rem;
  }
`;

export default ErrorPage;
