import { React } from "react";

import styled from "styled-components";

const DarkMode = () => {
  const setDark = () => {
    localStorage.setItem("theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
  };

  if (!localStorage.getItem("theme")) {
    setLight();
  }

  const switchTheme = () => {
    localStorage.getItem("theme") === "dark" ? setLight() : setDark();
  };

  return (
    <Wrapper>
      <a href="" className="modeBtn" onClick={switchTheme}>
        {localStorage.getItem("theme") === "light" ? "dark" : "light"} Mode
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .modeBtn {
    cursor: pointer;
  }
`;

export default DarkMode;
