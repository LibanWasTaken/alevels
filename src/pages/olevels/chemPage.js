import React from "react";
import Tree from "./../../components/Tree/Tree";
import { Wrapper, Theme } from "./../subjectStyles";
import Yearly from "./../paperSearch";

export default function App() {
  function file(fileName, fileUrl = "#") {
    return (
      <a className="link" target="_blank" href={fileUrl}>
        <Tree.File name={fileName} />
      </a>
    );
  }
  const subjectCode = 5070;

  return (
    <Theme>
      <div className={localStorage.getItem("theme")}>
        <Wrapper color={"#fc6d27"}>
          <div className="App">
            <div className="title">
              <h2>Chemistry</h2>
              <div className="underline"></div>
            </div>
            <div className="tree">
              <Tree>
                <Tree.Folder name="Notes">
                  {file(
                    "Acid & Bases.pdf",
                    "https://drive.google.com/file/d/19HOCoyGiJXpXgxfZYCiaNybQG2idiN9V/view?usp=sharing"
                  )}
                  {file(
                    "Ammonia.pdf",
                    "https://drive.google.com/file/d/18pwd0ZIRcVymFUybpvly2OKKNL_jTkOK/view?usp=sharing"
                  )}
                  {file(
                    "Covalent & Metallic Bonding.pdf",
                    "https://drive.google.com/file/d/18PlRJMDOH9bR_s5ptVJLur7evwcTFTfL/view?usp=sharing"
                  )}
                  {file(
                    "Electrolysis.pdf",
                    "https://drive.google.com/file/d/19CDV_7GKaWL32mpwmR5rmTBxB1KvsGY8/view?usp=sharing"
                  )}
                  {file(
                    "Energy Changes.pdf",
                    "https://drive.google.com/file/d/193pja6uPbQuRsBi_Iblv01D_HNTYoxwR/view?usp=sharing"
                  )}
                  {file(
                    "Ionic Bonding.pdf",
                    "https://drive.google.com/file/d/18VaJqMJjOzyc7XBnxeFonxvVWkMFgIOm/view?usp=sharing"
                  )}
                  {file(
                    "Metals.pdf",
                    "https://drive.google.com/file/d/19FOsTI2N8dFaRyx6Hx7XcDwSgSpwwn9C/view?usp=sharing"
                  )}
                  {file(
                    "Oxidation and Reduction.pdf",
                    "https://drive.google.com/file/d/196ECmEYDSw18wzi9EVaU_MJMXeLSZapH/view?usp=sharing"
                  )}
                  {file(
                    "Periodic Table.pdf",
                    "https://drive.google.com/file/d/19iAdU9rYUCu3Rv0WYmEbLLr13yjLpf9v/view?usp=sharing"
                  )}
                  {file(
                    "Salts.pdf",
                    "https://drive.google.com/file/d/19FQI9IpML0372dBCgulLa655bMH0dX3u/view?usp=sharing"
                  )}
                  {file(
                    "Speed of Reactions.pdf",
                    "https://drive.google.com/file/d/190IJmuZ3ugQhSGNKUCBlZCi6AABvZI4o/view?usp=sharing"
                  )}
                  {file(
                    "The Atmosphere and Environment.pdf",
                    "https://drive.google.com/file/d/18VqIRiM63_52MbS40np1AcUFHEo7L_BV/view?usp=sharing"
                  )}
                  <Tree.Folder name="Organic">
                    {file(
                      "Organic Chemistry Introduction.pdf",
                      "https://drive.google.com/file/d/1A9gyUkUyq-4Pm6qbQ_uSgaX6nWEKMhik/view?usp=sharing"
                    )}
                    {file(
                      "Alkanes & Alkenes.pdf",
                      "https://drive.google.com/file/d/1A8bYXK8pJadsHQt6kw81esMHfp-HU5B2/view?usp=sharing"
                    )}
                    {file(
                      "Alcohols & Carboxylic Acids.pdf",
                      "https://drive.google.com/file/d/1A7p67NKSGwzyg_7gcujhUtpKj2NRqf3y/view?usp=sharing"
                    )}
                    {file(
                      "Macro-molecules.pdf",
                      "https://drive.google.com/file/d/19zZwQbikgwwi5byRDoSL8TnBlpqc8Evo/view?usp=sharing"
                    )}
                  </Tree.Folder>
                </Tree.Folder>

                {file(
                  "Syllabus.pdf",
                  "https://www.cambridgeinternational.org/Images/554616-2022-2024-syllabus.pdf"
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
