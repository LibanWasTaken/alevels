import React, { useState } from "react";
import styled from "styled-components";

const Yearly = (props) => {
  const [sbjCode, setSbjCode] = useState(props.data);
  const [variant, setVariant] = useState("");
  const [year, setYear] = useState("");
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  function getBatch() {
    var par = document.getElementsByName("batches")[0];
    var index = par.selectedIndex;
    var b = par.options[index].text;
    if (b === "Summer" || !b) {
      return "s";
    } else if (b === "Winter") {
      return "w";
    } else if (b === "March") {
      return "m";
    }
  }

  const list = {
    9706: "Accounting (9706)",
    9679: "Afrikaans (9679)",
    8779: "Afrikaans - First Language (AS Level only) (8779)",
    8679: "Afrikaans - Language (AS Level only) (8679)",
    9713: "Applied Information and Communication Technology (9713)",
    9680: "Arabic (9680)",
    8680: "Arabic - Language (AS Level only) (8680)",
    9479: "Art & Design (9479)",
    9704: "Art & Design (9704)",
    9700: "Biology (9700)",
    9609: "Business (9609)",
    9707: "Business Studies (9707)",
    9980: "Cambridge International Project Qualification (9980)",
    9701: "Chemistry (9701)",
    9715: "Chinese (A Level only) (9715)",
    8681: "Chinese - Language (AS Level only) (8681)",
    9274: "Classical Studies (9274)",
    9608: "Computer Science (9608)",
    9618: "Computer Science (for first examination in 2021) (9618)",
    9691: "Computing (9691)",
    9631: "Design & Textiles (9631)",
    9705: "Design and Technology (9705)",
    9481: "Digital Media & Design (9481)",
    9011: "Divinity (9011)",
    8041: "Divinity (AS Level only) (8041)",
    9482: "Drama (9482)",
    9708: "Economics (9708)",
    9093: "English - Language AS and A Level (9093)",
    8695: "English - Language and Literature (AS Level only) (8695)",
    9695: "English - Literature (9695)",
    8021: "English General Paper (AS Level only) (8021)",
    8291: "Environmental Management (AS only) (8291)",
    9336: "Food Studies (9336)",
    9716: "French (A Level only) (9716)",
    8682: "French - Language (AS Level only) (8682)",
    8670: "French - Literature (AS Level only) (8670)",
    8001: "General Paper 8001 (AS Level only) (8001)",
    8004: "General Paper 8004 (AS Level only) (8004)",
    9696: "Geography (9696)",
    9717: "German (A Level only) (9717)",
    8683: "German - Language (AS Level only) (8683)",
    9239: "Global Perspectives & Research (9239)",
    9687: "Hindi (A Level only) (9687)",
    8687: "Hindi - Language (AS Level only) (8687)",
    8675: "Hindi - Literature (AS Level only) (8675)",
    9014: "Hinduism (9014)",
    9487: "Hinduism (9487)",
    8058: "Hinduism (AS level only) (8058)",
    9489: "History (9489)",
    9389: "History (for final examination in 2021) (9389)",
    9626: "Information Technology (9626)",
    8053: "Islamic Studies (9013 &(8053)",
    9488: "Islamic Studies (9488)",
    8281: "Japanese Language (AS Level only) (8281)",
    9084: "Law (9084)",
    9693: "Marine Science (9693)",
    9709: "Mathematics (9709)",
    9231: "Mathematics - Further (9231)",
    9607: "Media Studies (9607)",
    9483: "Music (9483)",
    9703: "Music (9703)",
    8663: "Music (AS Level only) (8663)",
    8024: "Nepal Studies (AS Level only) (8024)",
    9396: "Physical Education (9396)",
    9702: "Physics (9702)",
    9718: "Portuguese (A Level only) (9718)",
    8684: "Portuguese - Language (AS Level only) (8684)",
    8672: "Portuguese - Literature (AS Level only) (8672)",
    9698: "Psychology (9698)",
    9990: "Psychology (9990)",
    9699: "Sociology (9699)",
    9719: "Spanish (A Level only) (9719)",
    8665: "Spanish - First Language (AS Level only) (8665)",
    8685: "Spanish - Language (AS Level only) (8685)",
    8673: "Spanish - Literature (AS Level only) (8673)",
    9689: "Tamil (9689)",
    8689: "Tamil - Language (AS Level only) (8689)",
    9694: "Thinking Skills (9694)",
    9395: "Travel and Tourism (9395)",
    9676: "Urdu (A Level only) (9676)",
    9686: "Urdu - Pakistan only (A Level only) (9686) ",

    7707: "Accounting (7707)",
    5038: "Agriculture (5038)",
    3180: "Arabic (3180)",
    6090: "Art & Design (6090)",
    7094: "Bangladesh Studies (7094)",
    3204: "Bengali (3204)",
    5090: "Biology (5090)",
    7115: "Business Studies (7115)",
    5070: "Chemistry (5070)",
    7100: "Commerce (7100)",
    7101: "Commercial Studies (7101)",
    2210: "Computer Science (2210)",
    7010: "Computer Studies (7010)",
    7048: "Design and Communication (7048)",
    6043: "Design and Technology (6043)",
    2281: "Economics (2281)",
    1123: "English (1123)",
    5014: "Environmental Management (5014)",
    6130: "Fashion and Textiles (6130)",
    6065: "Food and Nutrition (6065)",
    3015: "French (3015)",
    2217: "Geography (2217)",
    3025: "German (3025)",
    2069: "Global Perspectives (2069)",
    2055: "Hinduism (2055)",
    2147: "History (2147)",
    2134: "History (Modern World Affairs) (2134)",
    2158: "History World Affairs, 1917-1991 (2158)",
    2056: "Islamic Religion and Culture (2056)",
    2068: "Islamic Studies (2068)",
    2058: "Islamiyat (2058)",
    2010: "Literature in English (2010)",
    5180: "Marine Science (5180)",
    4037: "Mathematics - Additional (4037)",
    4024: "Mathematics D (4024)",
    3202: "Nepali (3202)",
    2059: "Pakistan Studies (2059)",
    5054: "Physics (5054)",
    7110: "Principles of Accounts (7110)",
    2048: "Religious Studies (2048)",
    5129: "Science - Combined (5129)",
    3158: "Setswana (3158)",
    3205: "Sinhala (3205)",
    2251: "Sociology (2251)",
    3035: "Spanish (3035)",
    4040: "Statistics (4040)",
    3162: "Swahili (3162)",
    3226: "Tamil (3226)",
    7096: "Travel and Tourism (7096)",
    3247: "Urdu - First Language (3247)",
    3248: "Urdu - Second Language (3248)",
  };

  function openLink(type) {
    if (!sbjCode) {
      setSbjCode(props.data);
    } else if (!(sbjCode in list)) {
      setText("Subject code doesn't exist");
    } else if (variant === "") {
      setText("variant empty");
    } else if (year === "" || parseInt(year) < 1 || parseInt(year) > 21) {
      setText("year out of range");
    } else {
      setText("Loading...");
      setText2("(or not I dont know..)");

      const url = `https://papers.gceguide.com/${
        parseInt(sbjCode) < 8000 ? "O" : "A"
      }%20Levels/${list[parseInt(sbjCode)].replaceAll(
        " ",
        "%20"
      )}/20${year}/${sbjCode}_${getBatch()}${year}_${type}_${variant}.pdf`;

      window.open(url);
    }
  }
  return (
    <Theme>
      <div className={localStorage.getItem("theme")}>
        <Wrappers>
          <section>
            <div className="searchApp">
              <div className="row">
                <h1>Find Papers:</h1>
                <span className="inpSpan">
                  <input
                    className="basic-slide"
                    id="sbjCode"
                    onChange={(e) => setSbjCode(e.target.value)}
                    type="number"
                    placeholder="9702 / 9691"
                    min="9000"
                    max="9999"
                    defaultValue={props.data}
                  />
                  <label htmlFor="sbjCodes">Code</label>
                </span>
                <span className="inpSpan">
                  <input
                    className="basic-slide"
                    id="variant"
                    value={variant}
                    onChange={(e) => setVariant(e.target.value)}
                    type="number"
                    placeholder="21 / 12 / 11"
                    min={11}
                    max={43}
                  />
                  <label htmlFor="variant">Variant</label>
                </span>
                <span className="inpSpan">
                  <input
                    className="basic-slide"
                    id="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    type="number"
                    placeholder="09 / 17 / 21"
                    min="1"
                    max="21"
                  />
                  <label htmlFor="year">Year</label>
                </span>
                <select name="batches" id="batches">
                  <option value="summer">Summer</option>
                  <option value="winter">Winter</option>
                  <option value="march">March</option>
                </select>
                <div className="buttons">
                  <button
                    type="submit"
                    className=" qpBtn"
                    onClick={() => openLink("qp")}
                  >
                    search qp
                  </button>
                  <button
                    type="submit"
                    className=" msBtn"
                    onClick={() => openLink("ms")}
                  >
                    search ms
                  </button>
                </div>
                {/* <h4>{text}</h4>
                <h6>{text2}</h6> */}
              </div>
            </div>
          </section>
        </Wrappers>
      </div>
    </Theme>
  );
};

const Wrappers = styled.main`
  --color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 5rem 0;
  padding: 2rem;
  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  h4 {
    margin-top: 2rem;
  }
  button {
    margin: 1rem;
    margin-top: 2rem;
    text-transform: uppercase;
    font-family: Poppins;
    font-size: 1rem;
    border: none;
    outline: none;
    padding: 0.5rem 0.75rem;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.1) 0px 1px 8px 0px;
  }

  .qpBtn {
    background-color: white;
    color: #00cca3;

    /* border: 2px #00cca3 solid; */
  }
  .qpBtn:hover {
    background-color: #00cca3;
    color: white;
    transition: 0.25s;
  }
  .msBtn {
    background-color: white;
    color: #ff5050;
    /* border: 2px #ff5050 solid; */
  }
  .msBtn:hover {
    background-color: #ff5050;
    color: white;
    transition: 0.25s;
  }

  #batches {
    margin: 1rem;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 10px;
    font-family: "Poppins", sans-serif;
    border-radius: 5px;
  }
  #batches:hover {
    cursor: pointer;
  }

  .row {
    border-radius: 10px;
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 30px;
    background: #f7f7f7;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    text-align: center;
    position: relative;
    z-index: 1;
    &:before {
      position: absolute;
      content: "";
      display: block;
      top: 0;
      left: -5000px;
      height: 100%;
      width: 15000px;
      z-index: -1;
      @content;
    }
  }
  /* FIXME: Maybe these spans are the problem */
  /* TODO: clean up the excess css */
  span {
    position: relative;
    display: inline-block;
    margin: 20px 10px;
    box-shadow: rgba(99, 99, 99, 0.1) 0px 1px 8px 0px;
  }
  .inpSpan {
    position: relative;
    display: inline-block;
    margin: 20px 10px;
  }
  .basic-slide {
    display: inline-block;
    width: 215px;
    padding: 10px 0 10px 15px;
    font-weight: 400;
    font-size: 1rem;
    background: #fff;
    height: 41px;
    border: 0;
    border-radius: 3px;
    outline: 0;
    text-indent: 70px; // Arbitrary.
    transition: all 0.3s ease-in-out;
    font-family: "Poppins", sans-serif;

    &::-webkit-input-placeholder {
      color: #ddd;
      text-indent: 50;
      font-weight: 300;
    }

    + label {
      display: inline-block;
      color: white;
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px 15px;
      text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
      background: var(--color, #7ab893);
      transition: all 0.3s ease-in-out;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
  }
  .basic-slide:focus,
  .basic-slide:active {
    text-indent: 30px;
    background: #fff;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &::-webkit-input-placeholder {
      color: #aaa;
    }
    + label {
      transform: translateX(-50%);
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

  #variant {
    padding-left: 30px;
  }
`;

const Theme = styled.main`
  .dark {
    overflow: hidden;
    h1 {
      color: white;
    }
    .row {
      background-color: #161b22;
    }
    input,
    select,
    option {
      color: black;
    }
    .basic-slide {
      &::-webkit-input-placeholder {
        color: #888;
      }
    }
    .basic-slide:focus,
    .basic-slide:active {
      &::-webkit-input-placeholder {
        color: #777;
      }
    }
  }
`;

export default Yearly;
