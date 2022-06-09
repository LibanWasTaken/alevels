import React from "react";
import { Wrapper, Theme } from "./subjectStyles";
import Tree from "./../components/Tree/Tree";
import Yearly from "./paperSearch";

export default function App() {
  function file(fileName, fileUrl) {
    return (
      <a className="link" target="_blank" href={fileUrl}>
        <Tree.File name={fileName} />
      </a>
    );
  }

  const subjectCode = 9709;

  return (
    <Theme>
      <div className={localStorage.getItem("theme")}>
        <Wrapper color={"#55acee"}>
          <div className="App">
            <div className="title">
              <h2>Maths</h2>
              <div className="underline"></div>
            </div>
            <div className="tree">
              <Tree>
                <Tree.Folder name="Notes">
                  <Tree.Folder name="Pure Maths">
                    {file(
                      "Quadratics.pdf",
                      "https://drive.google.com/file/d/1-OCWY4ex4IVqF7n4UbiucTMkKar9tpR-/view?usp=sharing"
                    )}
                    {file(
                      "Coordinate Geometry.pdf",
                      "https://drive.google.com/file/d/1-VAvOKy5ss0Id4g9OQU6xHVNH-oVwVZT/view?usp=sharing"
                    )}
                    {file(
                      "Circular Measure.pdf",
                      "https://drive.google.com/file/d/1EhUztIzh0s4BTnVQa99CbBUvPzDsYbHb/view?usp=sharing"
                    )}
                    {file(
                      "Binomial Theorem.pdf",
                      "https://drive.google.com/file/d/1-kyxiz9vz70JCOKq7zZ9ycg69orcV6s9/view?usp=sharing"
                    )}
                    {file(
                      "Functions.pdf",
                      "https://drive.google.com/file/d/1-RbstdfvpDHrIFFckwVrrzTn2etqqity/view?usp=sharing"
                    )}
                    {file(
                      "Sequence.pdf",
                      "https://drive.google.com/file/d/1-VzatYG3kxB4Ij3e0bHdGp5lY4ZSTrK2/view?usp=sharing"
                    )}
                    {file(
                      "Trigonometry.pdf",
                      "https://drive.google.com/file/d/1-Rz90UEzhEw-2X_k1TSd7z6lFzLUXHg3/view?usp=sharing"
                    )}
                    {file(
                      "Differentiation.pdf",
                      "https://drive.google.com/file/d/1-iBivGAWYlPBc9sW7cTXEeqX3wfWqhAk/view?usp=sharing"
                    )}
                    {file(
                      "Integration.pdf",
                      "https://drive.google.com/file/d/1-lMHbax_kPwUKYkIEcQkyuxoQfB8AMk0/view?usp=sharing"
                    )}
                  </Tree.Folder>
                  <Tree.Folder name="Mechanics">
                    {file(
                      "Zainematics.dropbox",
                      "https://www.dropbox.com/sh/pyjinozmj4dtvcr/AAAE0UQpf82wL1Dbe7L222wRa/NOTES/M1?dl=0&subfolder_nav_tracking=1"
                    )}
                  </Tree.Folder>
                  <Tree.Folder name="S1"></Tree.Folder>
                  <Tree.Folder name="p3"></Tree.Folder>
                </Tree.Folder>
                {file(
                  "Syllabus.pdf",
                  "https://www.cambridgeinternational.org/Images/415060-2020-2022-syllabus.pdf"
                )}
                {file(
                  "M19 Formulas.pdf",
                  "https://www.cambridgeinternational.org/Images/417318-list-of-formulae-and-statistical-tables.pdf"
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
