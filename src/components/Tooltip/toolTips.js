import React from "react";
import styled from "styled-components";

const App = () => {
  return (
    <Wrapper>
      <main>
        <div>
          <span tooltip="I'm up above it!">Up</span>
        </div>
        <div>
          <span tooltip="Slide to the left" flow="left">
            Left
          </span>
          <span tooltip="Slide to the right" flow="right">
            Right
          </span>
        </div>
        <div>
          <span tooltip="Get Down." flow="down">
            <div className="asda">
              <h1>asdad</h1>
              h2asd
            </div>
          </span>
        </div>
      </main>
    </Wrapper>
  );
};

function tt(value, text, direction = "right") {
  return (
    <Wrapper>
      <main>
        <div>
          <span tooltip={text} flow={direction}>
            {value}
          </span>
        </div>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  /* START TOOLTIP STYLES */
  [tooltip] {
    position: relative; /* opinion 1 */
  }

  /* Applies to all tooltips */
  [tooltip]::before,
  [tooltip]::after {
    text-transform: none; /* opinion 2 */
    font-size: 0.9em; /* opinion 3 */
    line-height: 1;
    user-select: none;
    pointer-events: none;
    position: absolute;
    display: none;
    opacity: 0;
  }
  [tooltip]::before {
    content: "";
    border: 5px solid transparent; /* opinion 4 */
    z-index: 1001; /* absurdity 1 */
  }
  [tooltip]::after {
    content: attr(tooltip); /* magic! */

    /* most of the rest of this is opinion */
    font-family: Helvetica, sans-serif;
    text-align: center;

    /* 
    Let the content set the size of the tooltips 
    but this will also keep them from being obnoxious
    */

    min-width: 3em;
    max-width: 21em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 1ch 1.5ch;
    border-radius: 0.3ch;
    box-shadow: 0 1em 2em -0.5em rgba(0, 0, 0, 0.35);
    background: #333;
    color: #fff;
    z-index: 1000;
  }

  /* Make the tooltips respond to hover */
  [tooltip]:hover::before,
  [tooltip]:hover::after {
    display: block;
  }

  /* don't show empty tooltips */
  [tooltip=""]::before,
  [tooltip=""]::after {
    display: none !important;
  }

  /* FLOW: UP */
  [tooltip]:not([flow])::before,
  [tooltip][flow^="up"]::before {
    bottom: 100%;
    border-bottom-width: 0;
    border-top-color: #333;
  }
  [tooltip]:not([flow])::after,
  [tooltip][flow^="up"]::after {
    bottom: calc(100% + 5px);
  }
  [tooltip]:not([flow])::before,
  [tooltip]:not([flow])::after,
  [tooltip][flow^="up"]::before,
  [tooltip][flow^="up"]::after {
    left: 50%;
    transform: translate(-50%, -0.5em);
  }

  /* FLOW: DOWN */
  [tooltip][flow^="down"]::before {
    top: 100%;
    border-top-width: 0;
    border-bottom-color: #333;
  }
  [tooltip][flow^="down"]::after {
    top: calc(100% + 5px);
  }
  [tooltip][flow^="down"]::before,
  [tooltip][flow^="down"]::after {
    left: 50%;
    transform: translate(-50%, 0.5em);
  }

  /* FLOW: LEFT */
  [tooltip][flow^="left"]::before {
    top: 50%;
    border-right-width: 0;
    border-left-color: #333;
    left: calc(0em - 5px);
    transform: translate(-0.5em, -50%);
  }
  [tooltip][flow^="left"]::after {
    top: 50%;
    right: calc(100% + 5px);
    transform: translate(-0.5em, -50%);
  }

  /* FLOW: RIGHT */
  [tooltip][flow^="right"]::before {
    top: 50%;
    border-left-width: 0;
    border-right-color: #333;
    right: calc(0em - 5px);
    transform: translate(0.5em, -50%);
  }
  [tooltip][flow^="right"]::after {
    top: 50%;
    left: calc(100% + 5px);
    transform: translate(0.5em, -50%);
  }

  /* KEYFRAMES */
  @keyframes tooltips-vert {
    to {
      opacity: 0.9;
      transform: translate(-50%, 0);
    }
  }

  @keyframes tooltips-horz {
    to {
      opacity: 0.9;
      transform: translate(0, -50%);
    }
  }

  /* FX All The Things */
  [tooltip]:not([flow]):hover::before,
  [tooltip]:not([flow]):hover::after,
  [tooltip][flow^="up"]:hover::before,
  [tooltip][flow^="up"]:hover::after,
  [tooltip][flow^="down"]:hover::before,
  [tooltip][flow^="down"]:hover::after {
    animation: tooltips-vert 300ms ease-out forwards;
  }

  [tooltip][flow^="left"]:hover::before,
  [tooltip][flow^="left"]:hover::after,
  [tooltip][flow^="right"]:hover::before,
  [tooltip][flow^="right"]:hover::after {
    animation: tooltips-horz 300ms ease-out forwards;
  }

  /* UNRELATED to tooltips
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    background: #ededed;
  }
  main {
    flex: 1 1 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  main div {
    text-align: center;
    color: #353539;
  }
  main span {
    padding: 0.5em 1em;
    margin: 0.5em;
    display: inline-block;
    background: #dedede;
  }

  aside a {
    color: inherit;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    padding: 0.4em 1em;
  } */
`;

// export default App;
export { App, tt };
