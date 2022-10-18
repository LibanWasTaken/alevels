import React from "react";
import Tree from "./../components/Tree/Tree";
import { Wrapper, Theme } from "./subjectStyles";

import Yearly from "./paperSearch";

export default function App() {
  function file(fileName, fileUrl = "#") {
    return (
      <a className="link" target="_blank" href={fileUrl}>
        <Tree.File name={fileName} />
      </a>
    );
  }
  const subjectCode = 9701;

  function records(fileName, fileUrl, password) {
    return (
      <div className="link">
        <Tree.File
          name={fileName}
          customCommand={() => {
            navigator.clipboard.writeText(password);
            setTimeout(function () {
              window.open(fileUrl);
            }, 500);
          }}
        />
      </div>
    );
  }

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
                  <div className="tip">
                    <Tree.File name={"AS Levels.tip"} />
                  </div>
                  <Tree.Folder name="Inorganic">
                    {file(
                      "Atomic Structure.pdf",
                      "https://drive.google.com/file/d/1QFfdL0W0FmwVm5A5YDn06XcVTvuM5LOm/view?usp=sharing"
                    )}
                    {file(
                      "Bonding.pdf",
                      "https://drive.google.com/file/d/1QDcaIiPTb3N1Phpzic5FRLYVjgAO5f6d/view?usp=sharing"
                    )}
                    {file(
                      "Chemical Energetics.pdf",
                      "https://drive.google.com/file/d/1SBcTEB1Aa-E4wVYGjrng2pHwtYHthW7o/view?usp=sharing"
                    )}
                    {file(
                      "Equilibria.pdf",
                      "https://drive.google.com/file/d/1SD7QHROuEEeOcxH3A9YkBIyOP21mAju2/view?usp=sharing"
                    )}
                    {file(
                      "Moles.pdf",
                      "https://drive.google.com/file/d/1QHscu-eJpaodUXHxZKUKy_octHeGfU7g/view?usp=sharing"
                    )}
                    {file(
                      "Nitrogen & Sulfur.pdf",
                      "https://drive.google.com/file/d/1KsYsyBkOA17us5A0qRQNhjmxHxU3URfe/view?usp=sharing"
                    )}
                    {file(
                      "States of Matter.pdf",
                      "https://drive.google.com/file/d/1S8XIc5lqauwMQ5Qzr95PKmG33H_b3ZaR/view?usp=sharing"
                    )}
                    {file(
                      "Periodicity.pdf",
                      "https://drive.google.com/file/d/1gOrJk3oA3CltS4o35n_eAugDuDyxE5aB/view?usp=sharing"
                    )}
                    {file(
                      "Rate of Reaction.pdf",
                      "https://drive.google.com/file/d/1-tecLoROUYA3ZQmaRIhZs5aJAOBq0yN1/view?usp=sharing"
                    )}
                    {file(
                      "Mass Spectroscopy.pdf",
                      "https://drive.google.com/file/d/1KMeQMRbq38pjC1U2JYLd_ZH-RHJdlCRq/view?usp=sharing"
                    )}
                    {file(
                      "Instrumental Test.pdf",
                      "https://drive.google.com/file/d/1LEe-ja4HaOpT5h-F0mCLD3nWa_K9zALg/view?usp=sharing"
                    )}
                  </Tree.Folder>
                  <Tree.Folder name="Organic">
                    {file(
                      "Alcohol, Acids, Carbonyl, Hydroxy etc.pdf",
                      "https://drive.google.com/file/d/1S5jDkOOFv71wtlXlmjTlie24TEraLzDN/view?usp=sharing"
                    )}
                    {file(
                      "Hybridization.pdf",
                      "https://drive.google.com/file/d/1TrcU3ggNrlypOUawjd7LFoNHqSN9EyVq/view?usp=sharing"
                    )}
                    {file(
                      "Hydrocarbons.pdf",
                      "https://drive.google.com/file/d/1SBB5YGp4qDR6AXuZTWbDCduKjU9d37ND/view?usp=sharing"
                    )}
                    <Tree.Folder name="Revision">
                      {file(
                        "Organic Chemistry.pdf",
                        "https://drive.google.com/file/d/1Ff98hA7m72-RIPlAIOs61S1Pqb0BIT4j/view?usp=sharing"
                      )}
                    </Tree.Folder>
                  </Tree.Folder>
                  <div className="tip">
                    <Tree.File name={"A2 Levels.tip"} />
                  </div>
                  {file(
                    "Lattice Energy.pdf",
                    "https://drive.google.com/file/d/18yfU1qLe7fsBQ7VPrsE86u5XFHtSYcYx/view?usp=sharing"
                  )}
                </Tree.Folder>
                <Tree.Folder name="Recordings">
                  <div className="tip">
                    <Tree.File
                      name={"Passwords are automatically copied.tip"}
                    />
                  </div>

                  <Tree.Folder name="Organic Revision">
                    {records(
                      "Day 1.zoom",
                      "https://us02web.zoom.us/rec/share/hH54ylC29UDxaqokQx93fkH-wTcSOsz9UarVE2deoM7BQWkeMdEjojRVH7GC3Q1W.7Bi3ZTsNhOR5iBPg",
                      ".aY8b?gf"
                    )}
                    {records(
                      "Day 2.zoom",
                      "https://us02web.zoom.us/rec/share/b8Uqkt0hecfHlMnaZGeUmdc5HFj_-eR06NL3k5ff3oTw4RSSd2F5dNnKvWNRtkyZ.BgRDz3egCAx6P0Qr",
                      "+$w3AhV2"
                    )}
                    {records(
                      "Day 3.zoom",
                      "https://us02web.zoom.us/rec/share/z8b8jiBR1jSniNq-BGAyrtLw0Tg8dIvIjNjB8vS2R_NHRKvNwQ6pbCJcJPTm8cZ9.Bk7ldX-OLAV68FP7",
                      "f5c^MgT9"
                    )}
                    {records(
                      "Day 4.zoom",
                      "https://us02web.zoom.us/rec/share/J7yIE_ZAr_S2IC3q1xAOnvS-TlcMGErDoYLNLO5e2Pn0TjHqsld7x9n9iZCdXgLu.s1bVpCblO7jwLio2",
                      "#j2md&CX"
                    )}
                    {records(
                      "Day 5.zoom",
                      "https://us02web.zoom.us/rec/share/IsuHzty0328iiOia1tBG8BxWNj1OcqJ6C3C6nuT88rb9bcSzO5pZ5U4lz9vmM34S.3UTMjGoDQEABORma",
                      "e&3U2=lB"
                    )}
                    {records(
                      "Day 6.zoom",
                      "https://us02web.zoom.us/rec/share/E_w0FiMThkwO7Rw0jFs9cfo_Ae5KN_0Z5ztlbnF70KZFsUrOcUmcORh0SYnY0kDv.FrR7rhNP3HrTSyPg",
                      "0aPq%8Wa"
                    )}
                  </Tree.Folder>
                </Tree.Folder>
                {file(
                  "Data Booklet.pdf",
                  "https://www.cambridgeinternational.org/Images/164870-2016-specimen-data-booklet.pdf"
                )}
                {file(
                  "Syllabus.pdf",
                  "https://www.cambridgeinternational.org/Images/554616-2022-2024-syllabus.pdf"
                )}
                {file(
                  "Content Overview",
                  "https://shrib.com/?v=nc#Shane2rM0bYb"
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
