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

  const subjectCode = 4037;

  return (
    <Theme>
      <div className={localStorage.getItem("theme")}>
        <Wrapper color={"#2B62AB"}>
          <div className="App">
            <div className="title">
              <h2>Add Maths</h2>
              <div className="underline"></div>
            </div>
            <div className="tree">
              <Tree>
                <Tree.Folder name="Notes">
                  <div className="tip">
                    <Tree.File name={"Mathematica stuff.tip"} />
                  </div>
                  {file(
                    "Differentiation.drive",
                    "https://drive.google.com/drive/folders/1yVqnZSZ38FhrVtGi2M5fTA_xPj3ouHxb?usp=sharing"
                  )}
                  {file(
                    "Inequalities.drive",
                    "https://drive.google.com/drive/folders/14rMiRj0ITD_uEuhyaNTYaQpEfIxhm_87?usp=sharing"
                  )}
                  {file(
                    "Kinematics.drive",
                    "https://drive.google.com/drive/folders/1goNzok_qI0hcmHzSyJlux2xU_hE0xYO_?usp=sharing"
                  )}
                  {file(
                    "Logarithms.drive",
                    "https://drive.google.com/drive/folders/1ejvbJo2qGdqbEJ0JL5EIc5AVyrHlYYZw?usp=sharing"
                  )}
                  {file(
                    "Quadratic Functions.drive",
                    "https://drive.google.com/drive/folders/1hdLSxFELT5HU05mP5ox1hYseq4aj58Td?usp=sharing"
                  )}
                  {file(
                    "Quadratic Sequence.drive",
                    "https://drive.google.com/drive/folders/1S41sXStg3KOywbIWO_9qwJ5IQ3NngoZs?usp=sharing"
                  )}
                  {file(
                    "Trigonometry.drive",
                    "https://drive.google.com/drive/folders/1YsqH15XL3ljzNI81_-q9YIMrVrMFhF0E?usp=sharing"
                  )}
                </Tree.Folder>
                {file(
                  "Syllabus.pdf",
                  "https://www.cambridgeinternational.org/Images/414712-2020-2022-syllabus.pdf"
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
