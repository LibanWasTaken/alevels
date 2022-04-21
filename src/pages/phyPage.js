import React from "react";
import { Wrapper } from "./subjectSyles";
import Tree from "./../components/Tree/Tree";

export default function App() {
  function file(fileName, fileUrl) {
    return (
      <a className="link" target="_blank" href={fileUrl}>
        <Tree.File name={fileName} />
      </a>
    );
  }

  return (
    <Wrapper color={"#fa1e38"}>
      <div className="App">
        <div className="title">
          <h2>Physics</h2>
          <div className="underline"></div>
        </div>
        <Tree>
          <Tree.Folder name="Notes">
            <Tree.Folder name="Mamun Sir"></Tree.Folder>
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
          </Tree.Folder>
          {file(
            "Syllabus.pdf",
            "https://www.cambridgeinternational.org/Images/554625-2022-2024-syllabus.pdf"
          )}
        </Tree>
      </div>
    </Wrapper>
  );
}
