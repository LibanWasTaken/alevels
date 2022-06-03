import React from "react";
import { Wrapper, Theme } from "./../subjectStyles";
import Tree from "./../../components/Tree/Tree";
import Yearly from "./../paperSearch";

export default function App() {
  function file(fileName, fileUrl) {
    return (
      <a className="link" target="_blank" href={fileUrl}>
        <Tree.File name={fileName} />
      </a>
    );
  }

  const subjectCode = 4024;

  return (
    <Theme>
      <div className={localStorage.getItem("theme")}>
        <Wrapper color={"#55acee"}>
          <div className="App">
            <div className="title">
              <h2>Maths D</h2>
              <div className="underline"></div>
            </div>
            <div className="tree">
              <Tree>
                <Tree.Folder name="Notes">
                  <div className="tip">
                    <Tree.File name={"Mathematica stuff.tip"} />
                  </div>
                  {file(
                    "Coordinate Geometry.drive",
                    "https://drive.google.com/drive/folders/1mHhcRh-C5OLko1DSF-cd8VblMsyVb3t7?usp=sharing"
                  )}
                  {file(
                    "Graphs.drive",
                    "https://drive.google.com/drive/folders/1e5gCYe48_LPN1QthKKA9taPoVzFzI11f?usp=sharing"
                  )}

                  {file(
                    "Probability.drive",
                    "https://drive.google.com/drive/folders/14SUuMZWI8hLk7wMF5bJYfvqGlNkwSsfe?usp=sharing"
                  )}
                  {file(
                    "Sets.drive",
                    "https://drive.google.com/drive/folders/134y2waE7LrHG4ksLQ4crNzvRARpUqnBO?usp=sharing"
                  )}
                  {file(
                    "Transformation.drive",
                    "https://drive.google.com/drive/folders/1W43-i5zbA9mvNNYLfI1PyuAlYOusyk_G?usp=sharing"
                  )}
                </Tree.Folder>
                {file(
                  "Syllabus.pdf",
                  "https://www.cambridgeinternational.org/Images/557161-2022-2024-syllabus.pdf"
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
