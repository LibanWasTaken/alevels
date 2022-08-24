import React from "react";
import Tree from "./../components/Tree/Tree";
import { Wrapper, Theme } from "./subjectStyles";

import Yearly from "./paperSearch";

export default function App() {
  function file(fileName, fileUrl) {
    return (
      <a className="link" target="_blank" href={fileUrl}>
        <Tree.File name={fileName} />
      </a>
    );
  }
  const subjectCode = 9618;

  return (
    <Theme>
      <div className={localStorage.getItem("theme")}>
        <Wrapper color={"#5560ee"}>
          <div className="App">
            <div className="title">
              <h2>Computer</h2>
              <div className="underline"></div>
            </div>
            <div class="typewriter">
              <h1>Perhaps a possible possibility?</h1>
            </div>
            <div className="tree">
              <Tree>
                <Tree.Folder name="Books">
                  <div className="tip">
                    <Tree.File
                      name={"The green book is followed from 2021.tip"}
                    />
                  </div>
                  {file(
                    "Green Coursebook.pdf",
                    "https://drive.google.com/file/d/13neGiSDP7MZxGtydA8OEfBWpM5WG-ZX9/view?usp=sharing"
                  )}
                  {file(
                    "Purple Coursebook.pdf",
                    "https://drive.google.com/file/d/1Huckq_AxTUcR_9L0rOI8w49wwNklb16W/view?usp=sharing"
                  )}
                  {file(
                    "Blue Coursebook.pdf",
                    "https://drive.google.com/file/d/1Y5-B0wZV8uICz34xle_IFtegATMm1uVx/view?usp=sharing"
                  )}
                </Tree.Folder>
                {file(
                  "Syllabus.pdf",
                  "https://www.cambridgeinternational.org/Images/502962-2021-2023-syllabus.pdf"
                )}
              </Tree>
            </div>
          </div>
          <Yearly data={subjectCode} />
        </Wrapper>
      </div>
    </Theme>
  );
}
