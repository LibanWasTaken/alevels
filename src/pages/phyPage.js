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
  const subjectCode = 9702;

  return (
    <Theme>
      <div className={localStorage.getItem("theme")}>
        <Wrapper color={"#ce2029"}>
          <div className="App">
            <div className="title">
              <h2>Physics</h2>
              <div className="underline"></div>
            </div>
            <div className="tree">
              <Tree>
                <Tree.Folder name="Notes">
                  <div className="tip">
                    <Tree.File name={"AS.tip"} />
                  </div>
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
                  <Tree.Folder name="W/s">
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
                  <div className="tip">
                    <Tree.File name={"A2.tip"} />
                  </div>
                  {file(
                    "Motion in a circle.pdf",
                    "https://drive.google.com/file/d/1Hj15M1tbLP6j_UAJY9nCGUByUolDLw7o/view?usp=sharing"
                  )}
                  {file(
                    "Gravitational fields.pdf",
                    "https://drive.google.com/file/d/1oUAGZa0K_pxa3rg-znEjqo4pzzO5vLm6/view?usp=sharing"
                  )}
                  <a style={{ color: "red", opacity: "20%" }}>
                    <Tree.File name={"Temperature.pdf"} />
                  </a>
                  {file(
                    "Ideal Gases.pdf",
                    "https://drive.google.com/file/d/1o-hf5ucPFk1_njN2II0x6NAMzHEovvld/view?usp=sharing"
                  )}
                  {file(
                    "Thermodynamics.pdf",
                    "https://drive.google.com/file/d/11MTnaQzOnhRR2jMWyrPL6Pf09sonNrTy/view?usp=sharing"
                  )}
                  {file(
                    "Oscillations.pdf",
                    "https://drive.google.com/file/d/1eL2KIMC9q6leIqKbiH1ITEcQyfYFElcX/view?usp=sharing"
                  )}
                  {file(
                    "Electrical fields.pdf",
                    "https://drive.google.com/file/d/1uHyCIbSR4xE0Rt_TKUQLdmyFHMeTVgOQ/view?usp=sharing"
                  )}
                  {file(
                    "Capacitance.pdf",
                    "https://drive.google.com/file/d/11iPKKebYgzUcTWlVEWFtDeveOus4jIDm/view?usp=sharing"
                  )}
                  {file(
                    "Magnetic fields.pdf",
                    "https://drive.google.com/file/d/1mEYlvjvHmaSD54zuavI9RxiPaNtkvUOS/view?usp=share_link"
                  )}
                  {file(
                    "Alternating Current.pdf",
                    "https://drive.google.com/file/d/11U2Z5YRE6cPpHyKqJxbhG8i3KrfgMCcJ/view?usp=sharing"
                  )}
                  {file(
                    "Quantum physics.pdf",
                    "https://drive.google.com/file/d/1Qe8JKLx5Eijba9sGZkUCUumCxz7JnG7f/view?usp=share_link"
                  )}
                  {file(
                    "Nuclear physics.pdf",
                    "https://drive.google.com/file/d/1Qg0co2Ipl11Mec2tFsfSqkchOw9onnCb/view?usp=share_link"
                  )}
                  {file(
                    "Medical physics.pdf",
                    "https://drive.google.com/file/d/1Qg9He3XA2w_hGW27kg71h1_qz8Kznv2j/view?usp=share_link"
                  )}
                  {file(
                    "Astronomy and cosmology.pdf",
                    "https://drive.google.com/file/d/1QiMOKK69ssa-AUniOxpDz7WnyTYkvLV6/view?usp=share_link"
                  )}
                </Tree.Folder>
                <Tree.Folder name="Handy">
                  {file(
                    "savemyexams.com",
                    "https://www.savemyexams.co.uk/a-level/physics/cie/22/"
                  )}
                  {file(
                    "Science Shorts.yt",
                    "https://www.youtube.com/c/ScienceShorts/playlists?view=50&sort=dd&shelf_id=2"
                  )}
                  {file(
                    "physicsandmathstutor.com",
                    "https://www.physicsandmathstutor.com/physics-revision/a-level-caie/"
                  )}
                  {file(
                    "Physics blogspot.com",
                    "https://9702-physics.blogspot.com/"
                  )}
                </Tree.Folder>
                {file(
                  "Syllabus.pdf",
                  "https://www.cambridgeinternational.org/Images/554625-2022-2024-syllabus.pdf"
                )}
                {file(
                  "A2 Formulas.drive",
                  "https://drive.google.com/file/d/1LhmOVfY45g9xPoEPWoQHHmyMmnBhT3og/view?usp=share_link"
                )}
                {file(
                  "A2 Definations.excel",
                  "https://docs.google.com/spreadsheets/d/18SJul4tv5pfKQpgLne8l_0FM59gp_p_s2f6RIN0jGg0/edit?usp=sharing"
                )}
                {file(
                  "Data and Formulae provided.pdf",
                  "https://drive.google.com/file/d/1UXIFSrjwuCqB433LLbMex5iRSFiZ-Bmt/view?usp=share_link"
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
