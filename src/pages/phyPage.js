import React from "react";
import { Wrapper } from "./subjectSyles";
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
  const subjectCode = 9702;

  return (
    <Wrapper color={"#ce2029"}>
      <div className="App">
        <div className="title">
          <h2>Physics</h2>
          <div className="underline"></div>
        </div>
        <div className="tree">
          <Tree>
            <Tree.Folder name="Notes">
              <Tree.Folder name="Self">
                {file(
                  "Physical Quantities and Uncertainties.pdf",
                  "https://drive.google.com/file/d/1VJ4JA9i4BxthwC8BiuIO7f3SYMgTapV9/view?usp=sharing"
                )}
                {file(
                  "Kinematics.pdf",
                  "https://drive.google.com/file/d/1Vfs3b48XzG1idkQ6za25pv0Ccq4IF8W8/view?usp=sharing"
                )}
                {file(
                  "Deformation.pdf",
                  "https://drive.google.com/file/d/1V_QCcmRQwo6eiICW4_L5AuI_N1eMf1LR/view?usp=sharing"
                )}
                {file(
                  "Waves.pdf",
                  "https://drive.google.com/file/d/1VsAm1y5wQqiWX8bl_jwpI4pZFiA6QKe3/view?usp=sharing"
                )}
                {file(
                  "Electricity.pdf",
                  "https://drive.google.com/file/d/1VknpBJTor-x5FTSyV3c5eWF1EzesYDjO/view?usp=sharing"
                )}
                {file(
                  "Radioactivity.pdf",
                  "https://drive.google.com/file/d/1W-cQPRNRS2Q5lsxy9v2JBvaGVG7EHV4c/view?usp=sharing"
                )}
              </Tree.Folder>
              <Tree.Folder name="Mamun Sir">
                {file(
                  "Physical Quantities and Uncertainties.pdf",
                  "https://drive.google.com/file/d/1Ym63L92RA2x82gLGAKf4R7c9Tp4ALl-n/view?usp=sharing"
                )}
                {file(
                  "Measurement Techniques.pdf",
                  "https://drive.google.com/file/d/15w97KyX8VaktzS9gr_hNNiBx0_uJR-Bn/view?usp=sharing"
                )}
                {file(
                  "Kinematics.pdf",
                  "https://drive.google.com/file/d/1Mvf6C4XuMy5-9_lpwAh31KEbBkhn8wCg/view?usp=sharing"
                )}
                {file(
                  "Dynamics.pdf",
                  "https://drive.google.com/file/d/1rUsVED_iQBPGXnMHIItHOvVrQFa2GZDo/view?usp=sharing"
                )}
                {file(
                  "Deformation of Solids.pdf",
                  "https://drive.google.com/file/d/1Mwa-PXEaQXNjKAVsOBKAGC8_FneFlRRi/view?usp=sharing"
                )}
                {file(
                  "Waves.pdf",
                  "https://drive.google.com/file/d/1ctZ5h9_Wrh3HRcB7JgAFDEWtXmjXK7xQ/view?usp=sharing"
                )}
                {file(
                  "Superposition of Waves.pdf",
                  "https://drive.google.com/file/d/1r6LIaJdFzkqaVb0RvEkHKtbT31zfgNCD/view?usp=sharing"
                )}
                {file(
                  "Current of Electricity.pdf",
                  "https://drive.google.com/file/d/1AExvgvk3BwnG6sxGIgQmvSyZsoBWrKYg/view?usp=sharing"
                )}
                {file(
                  "DC Circuits.pdf",
                  "https://drive.google.com/file/d/1N5A1jC4xZ6Vv4iiT0ERSoy8MSYAQR6PL/view?usp=sharing"
                )}
              </Tree.Folder>
            </Tree.Folder>
            {file(
              "Syllabus.pdf",
              "https://www.cambridgeinternational.org/Images/554625-2022-2024-syllabus.pdf"
            )}
          </Tree>
        </div>
      </div>
      <Yearly data={subjectCode} />
    </Wrapper>
  );
}
