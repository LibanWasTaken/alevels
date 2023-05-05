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
                  <Tree.Folder name="Pure Maths 1">
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
                    <div className="tip">
                      <Tree.File name={"Handy folder.tip"} />
                    </div>
                  </Tree.Folder>
                  <Tree.Folder name="Pure Maths 3">
                    {file(
                      "Algebra.pdf",
                      "https://drive.google.com/file/d/1kqejvaCA9zTv-0-mCGnf-i-U8q1G9pwe/view?usp=share_link"
                    )}
                    {file(
                      "Logarithm.pdf",
                      "https://drive.google.com/file/d/1lIIH0SHouAyHBPCxctcy3ifUDZc_DfhI/view?usp=share_link"
                    )}
                    {file(
                      "Trigonometry.pdf",
                      "https://drive.google.com/file/d/1lHS97vJUusAAWD8gauVEghEXgP8bvtVu/view?usp=share_link"
                    )}
                    {file(
                      "Differentiation.pdf",
                      "https://drive.google.com/file/d/1x1OswATH_PIuhvSJ5VL7TO8npKNsswYL/view?usp=share_link"
                    )}
                    {file(
                      "Integration.pdf",
                      "https://drive.google.com/file/d/1l4SzRr-Xq-MZzg9TwKN8ZMUSX-21v4GT/view?usp=share_link"
                    )}
                    {file(
                      "Numerical solution.pdf",
                      "https://drive.google.com/file/d/1ktSwI4UPjmtlOaRLCtY20c-rB3-p_uTF/view?usp=share_link"
                    )}
                    {file(
                      "Vectors.pdf",
                      "https://drive.google.com/file/d/1l0_UaB9qQrp7x5aTkj2GMY0ZQT1k0Ani/view?usp=share_link"
                    )}
                    {file(
                      "Differential equations.pdf",
                      "https://drive.google.com/file/d/1kql20DAo8dX3cpKdNuKY5aNnA1f0jAnS/view?usp=share_link"
                    )}
                    {file(
                      "Complex numbers.pdf",
                      "https://drive.google.com/file/d/1kqDgDnPihtrfU09x4TDEVgm4KPO6dbtq/view?usp=share_link"
                    )}
                  </Tree.Folder>
                  <Tree.Folder name="Statistics 1">
                    <a style={{ color: "#55acee", opacity: "35%" }}>
                      <Tree.File name={"Representation of data.pdf"} />
                    </a>
                    {file(
                      "Permutations & combinations.pdf",
                      "https://drive.google.com/file/d/1kZuwuu-QbxoUFiQpPU_ijscRlcO1Cfrb/view?usp=share_link"
                    )}
                    {file(
                      "Probability.pdf",
                      "https://drive.google.com/file/d/1kaRnLTNcOU8kR-zM8atZ42FNrKNGhpoc/view?usp=share_link"
                    )}
                    {file(
                      "Discrete random variables.pdf",
                      "https://drive.google.com/file/d/1kX1enXDyypUBJawgEqn33CuE78lZyhem/view?usp=share_link"
                    )}
                    {file(
                      "Normal distribution.pdf",
                      "https://drive.google.com/file/d/1kVeGys0mEg4avoSOtlY7B-UPx7hZLOWY/view?usp=share_link"
                    )}
                  </Tree.Folder>
                </Tree.Folder>
                <Tree.Folder name="Books">
                  <div className="tip">
                    <a className="critic-link" href="/critics">
                      <Tree.File name={"Send a critic for AS.tip"} />
                    </a>
                  </div>
                  {file(
                    "P2 and P3 Coursebook.pdf",
                    "https://drive.google.com/file/d/1OvsVTxKQZqO-QpfR4ztfGkm5jI4Ys1Af/view?usp=sharing"
                  )}
                  {file(
                    "Probability and Statistics Coursebook.pdf",
                    "https://drive.google.com/file/d/1stHH-Fri81DKUrWl7HumKr5qqB5NPObt/view?usp=sharing"
                  )}
                </Tree.Folder>
                <Tree.Folder name="Handy">
                  {file(
                    "Zainematics.yt",
                    "https://www.youtube.com/c/ZAINEMATICS/playlists"
                  )}
                  {file(
                    "Zainematics notes.dropbox",
                    "https://www.dropbox.com/sh/pyjinozmj4dtvcr/AAChXE8XGwJXQRKvteNIcJJSa?dl=0"
                  )}
                  {file("photomath.com", "https://photomath.com/en")}
                  <div className="tip">
                    <Tree.File name={"Use Incognito for free trials.tip"} />
                  </div>
                  {file(
                    "P1  physicsandmathstutor.com",
                    "https://www.savemyexams.co.uk/a-level/maths_pure-1/cie/20/revision-notes/"
                  )}
                  {file(
                    "M1  physicsandmathstutor.com",
                    "https://www.savemyexams.co.uk/a-level/maths_mechanics/cie/20/revision-notes/"
                  )}
                  {file(
                    "P3  physicsandmathstutor.com",
                    "https://www.savemyexams.co.uk/a-level/maths_pure-3/cie/20/revision-notes/"
                  )}
                  {file(
                    "S1 physicsandmathstutor.com",
                    "https://www.savemyexams.co.uk/a-level/maths_probability--statistics-1/cie/20/revision-notes/"
                  )}
                </Tree.Folder>
                {file(
                  "Syllabus.pdf",
                  "https://www.cambridgeinternational.org/Images/597421-2023-2025-syllabus.pdf"
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
