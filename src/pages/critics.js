import React, { useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { db } from "../firebase";
import {
  addDoc,
  setDoc,
  collection,
  query,
  getDocs,
  doc,
  getDoc,
  orderBy,
} from "firebase/firestore";

export default function ContactUs() {
  const [end, setEnd] = useState("");
  const [critics, setCritics] = useState([]);
  const [loading, setLoading] = useState(true);

  function ending(e) {
    e.preventDefault();

    setEnd(true);
    setTimeout(() => {
      window.location.replace("/");
    }, 3000);
  }

  const sendEmail = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const formData = {
      name,
      email,
      message,
      time: String(Date()),
    };

    try {
      console.log(formData);
      const timestamp = String(new Date().getTime());

      await setDoc(doc(db, "critics", timestamp), formData);
      ending(e);
    } catch (error) {
      console.log(error);
      alert("Error sending critic");
    }
  };

  async function getFSData() {
    try {
      setLoading(true);
      const queryReceived = query(collection(db, `/critics/`));
      const querySnapshot = await getDocs(queryReceived);

      const criticsDocs = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      // Reverse the array to set the critics in the opposite order
      const reversedCritics = criticsDocs.reverse();

      console.log(reversedCritics);
      setCritics(reversedCritics);
      // setLastPost(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setLoading(false);
    } catch (error) {
      setCritics([{ msg: "Error" }]);
      setLoading(false);
    }
  }

  function formatTimestampToDateString(timestamp) {
    const formattedDateTime = new Date(timestamp).toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    return formattedDateTime;
  }

  function generateCritics(critics) {
    return critics.map((critic) => {
      return (
        <div className="critic" key={critic.id}>
          <div className="msg">{critic.message && critic.message}</div>
          <p className="date">
            {critic.time && formatTimestampToDateString(critic.time)}
          </p>
          {critic.response && <div className="answer">- {critic.response}</div>}
        </div>
      );
    });
  }

  useEffect(() => {
    getFSData();
  }, []);

  return (
    <Wrapper className="criticsPage">
      {/* <div class="container"> */}
      <form onSubmit={sendEmail} id="contact">
        <h3>Critics Form</h3>
        {end ? (
          <h4>
            "Thanks" for the submission <br />
            You'll be redirected in 3..2..
          </h4>
        ) : (
          <h4>
            Write anything you want honestly <br />
            (it works now)
          </h4>
        )}

        <div className={end ? "hidden" : ""}>
          <fieldset>
            <input
              placeholder="Your name"
              type="text"
              tabindex="1"
              required
              autofocus
              name="name"
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Email Address (optional)"
              type="email"
              tabindex="2"
              name="email"
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Type your message here..."
              tabindex="5"
              name="message"
              required
              maxLength={1000}
            ></textarea>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
              value="Send Message"
            >
              Submit
            </button>
          </fieldset>
        </div>
      </form>
      <div className="responses">
        <h4>Messages:</h4>
        {loading ? (
          <span class="loader"></span>
        ) : (
          <div className="critics">{generateCritics(critics)}</div>
        )}
      </div>

      {/* </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  flex-direction: row;
  overflow: hidden;
  background-attachment: fixed;
  background-size: cover;
  background-color: #ecf4ff;

  .responses {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    /* padding: 3rem 1rem; */

    background-color: white;
    max-height: 50rem;
    width: 30vw;
    overflow-y: scroll;

    h4 {
      margin: 2rem;
      /* padding-top: 2rem; */
    }
    .date {
      font-size: 0.75rem;
    }
    .critics {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;
      /* overflow-y: scroll; */
      .critic {
        /* margin: 2rem; */
        /* padding-top: 2rem; */
        padding-bottom: 2rem;
        padding-left: 1rem;
        width: 95%;

        border-bottom: 1px solid #ddd;
        .answer {
          font-style: italic;
          margin-top: 10px;
          color: gray;
        }
      }
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
  }

  .hidden {
    display: none;
  }

  body {
    font-weight: 100;
    font-size: 12px;
    line-height: 30px;
    color: #777;
    background: #4caf50;
  }

  form {
    /* max-width: 500px; */
    width: 40vw;
    min-width: 350px;

    margin: 0 auto;
    position: relative;
  }

  #contact {
    background: #f9f9f9;
    padding: 25px;
    margin: 150px 0;
    /* box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24); */
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 10px;
  }

  #contact h3 {
    display: block;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 10px;
  }

  #contact h4 {
    margin: 10px 0 4rem;
    display: block;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5rem;
  }

  fieldset {
    border: medium none !important;
    margin: 0 0 10px;
    min-width: 100%;
    padding: 0;
    width: 100%;
  }

  #contact input[type="text"],
  #contact input[type="email"],
  #contact textarea {
    width: 100%;
    border: 1px solid #ccc;
    background: #fff;
    margin: 0 0 5px;
    padding: 10px;
  }

  #contact input[type="text"]:hover,
  #contact input[type="email"]:hover,
  #contact textarea:hover {
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
  }

  #contact textarea {
    height: 100px;
    max-width: 100%;
    resize: none;
  }

  #contact button[type="submit"] {
    cursor: pointer;
    width: 100%;
    border: none;
    background: #0047ab;
    color: #fff;
    margin: 0 0 5px;
    padding: 10px;
    font-size: 15px;
  }

  #contact button[type="submit"]:hover {
    background: #00008b;
    transition: background-color 0.3s ease-in-out;
  }

  #contact button[type="submit"]:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
  }

  .copyright {
    text-align: center;
  }

  #contact input:focus,
  #contact textarea:focus {
    outline: 0;
    border: 1px solid #aaa;
  }

  ::-webkit-input-placeholder {
    color: #888;
  }

  :-moz-placeholder {
    color: #888;
  }

  ::-moz-placeholder {
    color: #888;
  }

  :-ms-input-placeholder {
    color: #888;
  }

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #000000;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    margin: 2rem;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    /* width: 100vw; */
    overflow-x: hidden;

    overflow-y: scroll;
    .responses {
      width: 80vw;
    }
  }

  /**
   background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1000' height='1000' preserveAspectRatio='none' viewBox='0 0 1000 1000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1069%26quot%3b)' fill='none'%3e%3crect width='1000' height='1000' x='0' y='0' fill='url(%23SvgjsLinearGradient1070)'%3e%3c/rect%3e%3cpath d='M-44.07 679.87L-44.07 679.87' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-44.07 679.87L73.86 677.16' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-44.07 679.87L-59.61 802.8' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-44.07 679.87L35.82 790.18' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-44.07 679.87L160.77 717.95' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-44.07 679.87L-41.13 922.11' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-59.61 802.8L-59.61 802.8' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-59.61 802.8L35.82 790.18' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-59.61 802.8L-41.13 922.11' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-59.61 802.8L48.74 921.65' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-41.13 922.11L-41.13 922.11' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-41.13 922.11L48.74 921.65' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-41.13 922.11L-69.24 1054.93' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-69.24 1054.93L-69.24 1054.93' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-69.24 1054.93L73.06 1054.22' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M73.86 677.16L73.86 677.16' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M73.86 677.16L160.77 717.95' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M73.86 677.16L35.82 790.18' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M73.86 677.16L-59.61 802.8' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M73.86 677.16L168.09 837.66' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M35.82 790.18L35.82 790.18' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M35.82 790.18L48.74 921.65' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M48.74 921.65L48.74 921.65' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M48.74 921.65L178.86 931.16' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M48.74 921.65L73.06 1054.22' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M73.06 1054.22L73.06 1054.22' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M73.06 1054.22L205.35 1036.13' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M73.06 1054.22L178.86 931.16' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M73.06 1054.22L-41.13 922.11' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M73.06 1054.22L168.09 837.66' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M160.77 717.95L160.77 717.95' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M160.77 717.95L168.09 837.66' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M160.77 717.95L35.82 790.18' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M168.09 837.66L168.09 837.66' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M168.09 837.66L178.86 931.16' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M168.09 837.66L35.82 790.18' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M168.09 837.66L48.74 921.65' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M168.09 837.66L310.79 922.32' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M168.09 837.66L341.05 826.13' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M178.86 931.16L178.86 931.16' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M178.86 931.16L205.35 1036.13' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M178.86 931.16L310.79 922.32' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M178.86 931.16L341.05 826.13' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M205.35 1036.13L205.35 1036.13' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M205.35 1036.13L310.79 922.32' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M205.35 1036.13L48.74 921.65' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M307.74 550.55L307.74 550.55' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M307.74 550.55L431.46 576.35' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M307.74 550.55L440.95 463.35' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M341.05 826.13L341.05 826.13' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M341.05 826.13L310.79 922.32' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M341.05 826.13L458.78 795.93' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M341.05 826.13L447.86 685.36' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M310.79 922.32L310.79 922.32' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M440.95 463.35L440.95 463.35' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M440.95 463.35L531.62 466.22' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M440.95 463.35L431.46 576.35' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M431.46 576.35L431.46 576.35' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M431.46 576.35L540.69 589.43' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M431.46 576.35L447.86 685.36' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M447.86 685.36L447.86 685.36' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M447.86 685.36L551.49 687.56' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M447.86 685.36L458.78 795.93' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M447.86 685.36L540.69 589.43' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M458.78 795.93L458.78 795.93' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M458.78 795.93L550.15 796.85' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M458.78 795.93L551.49 687.56' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M458.78 795.93L571.33 943.83' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M457.13 1057.97L457.13 1057.97' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M457.13 1057.97L593.5 1034.84' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M457.13 1057.97L571.33 943.83' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M457.13 1057.97L310.79 922.32' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M457.13 1057.97L695.92 1061.8' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M457.13 1057.97L686.92 966.06' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M563.44 209.97L563.44 209.97' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M563.44 209.97L565.45 316.51' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M563.44 209.97L670.7 164.19' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M563.44 209.97L709.92 322.1' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M563.44 209.97L696.41 55.04' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M563.44 209.97L681.03 434.82' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M563.44 209.97L787.24 86.73' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M565.45 316.51L565.45 316.51' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M565.45 316.51L709.92 322.1' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M531.62 466.22L531.62 466.22' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M531.62 466.22L540.69 589.43' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M531.62 466.22L431.46 576.35' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M540.69 589.43L540.69 589.43' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M540.69 589.43L551.49 687.56' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M551.49 687.56L551.49 687.56' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M551.49 687.56L550.15 796.85' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M551.49 687.56L676.1 697.56' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M551.49 687.56L431.46 576.35' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M550.15 796.85L550.15 796.85' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M550.15 796.85L657.19 822.24' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M550.15 796.85L571.33 943.83' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M550.15 796.85L447.86 685.36' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M550.15 796.85L676.1 697.56' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M571.33 943.83L571.33 943.83' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M571.33 943.83L593.5 1034.84' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M571.33 943.83L686.92 966.06' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M571.33 943.83L657.19 822.24' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M571.33 943.83L695.92 1061.8' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M593.5 1034.84L593.5 1034.84' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M593.5 1034.84L695.92 1061.8' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M593.5 1034.84L686.92 966.06' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M593.5 1034.84L790.87 1068.51' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M702.93 -64.01L702.93 -64.01' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M702.93 -64.01L696.41 55.04' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M702.93 -64.01L843.52 -48.72' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M696.41 55.04L696.41 55.04' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M696.41 55.04L787.24 86.73' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M696.41 55.04L670.7 164.19' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M696.41 55.04L843.52 -48.72' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M670.7 164.19L670.7 164.19' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M670.7 164.19L787.24 86.73' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M709.92 322.1L709.92 322.1' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M709.92 322.1L818.62 305.31' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M709.92 322.1L681.03 434.82' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M709.92 322.1L788.61 426.52' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M681.03 434.82L681.03 434.82' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M681.03 434.82L788.61 426.52' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M681.03 434.82L689.57 554.5' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M681.03 434.82L531.62 466.22' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M681.03 434.82L565.45 316.51' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M681.03 434.82L818.62 305.31' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M689.57 554.5L689.57 554.5' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M689.57 554.5L822.06 561.34' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M689.57 554.5L676.1 697.56' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M689.57 554.5L540.69 589.43' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M676.1 697.56L676.1 697.56' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M676.1 697.56L657.19 822.24' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M657.19 822.24L657.19 822.24' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M657.19 822.24L793.67 790.94' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M657.19 822.24L686.92 966.06' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M686.92 966.06L686.92 966.06' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M686.92 966.06L695.92 1061.8' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M686.92 966.06L807.94 929.94' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M695.92 1061.8L695.92 1061.8' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M695.92 1061.8L790.87 1068.51' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M843.52 -48.72L843.52 -48.72' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M843.52 -48.72L960.6 -71.63' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M843.52 -48.72L915.86 62.05' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M843.52 -48.72L787.24 86.73' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M787.24 86.73L787.24 86.73' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M787.24 86.73L822.71 187.28' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M787.24 86.73L915.86 62.05' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M822.71 187.28L822.71 187.28' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M822.71 187.28L818.62 305.31' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M822.71 187.28L959.29 165.91' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M822.71 187.28L670.7 164.19' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M822.71 187.28L915.86 62.05' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M818.62 305.31L818.62 305.31' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M818.62 305.31L932.09 330.91' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M818.62 305.31L788.61 426.52' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M788.61 426.52L788.61 426.52' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M822.06 561.34L822.06 561.34' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M822.06 561.34L949.9 580.39' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M822.06 561.34L831.15 697.13' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M822.06 561.34L788.61 426.52' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M822.06 561.34L681.03 434.82' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M831.15 697.13L831.15 697.13' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M831.15 697.13L793.67 790.94' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M831.15 697.13L961.17 691.11' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M831.15 697.13L676.1 697.56' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M793.67 790.94L793.67 790.94' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M793.67 790.94L807.94 929.94' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M793.67 790.94L676.1 697.56' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M793.67 790.94L946.89 837.11' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M807.94 929.94L807.94 929.94' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M807.94 929.94L928.24 908.07' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M807.94 929.94L790.87 1068.51' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M807.94 929.94L946.89 837.11' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M807.94 929.94L695.92 1061.8' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M790.87 1068.51L790.87 1068.51' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M960.6 -71.63L960.6 -71.63' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M960.6 -71.63L1083.26 -59.29' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M960.6 -71.63L915.86 62.05' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M960.6 -71.63L1091.19 57.41' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M960.6 -71.63L787.24 86.73' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M915.86 62.05L915.86 62.05' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M915.86 62.05L959.29 165.91' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M959.29 165.91L959.29 165.91' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M959.29 165.91L1077.72 171.1' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M932.09 330.91L932.09 330.91' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M932.09 330.91L1085.2 296.54' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M932.09 330.91L959.29 165.91' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M949.9 580.39L949.9 580.39' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M949.9 580.39L1057.31 552.69' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M949.9 580.39L961.17 691.11' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M961.17 691.11L961.17 691.11' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M961.17 691.11L1042.25 662.17' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M961.17 691.11L1033.4 809.07' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M961.17 691.11L946.89 837.11' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M961.17 691.11L1057.31 552.69' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M946.89 837.11L946.89 837.11' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M946.89 837.11L928.24 908.07' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M946.89 837.11L1033.4 809.07' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M946.89 837.11L1032.97 958.74' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M928.24 908.07L928.24 908.07' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M928.24 908.07L1032.97 958.74' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M928.24 908.07L967.72 1039.76' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M928.24 908.07L1033.4 809.07' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M967.72 1039.76L967.72 1039.76' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M967.72 1039.76L1032.97 958.74' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M967.72 1039.76L1071.29 1081.04' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1083.26 -59.29L1083.26 -59.29' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1083.26 -59.29L1091.19 57.41' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1083.26 -59.29L915.86 62.05' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1083.26 -59.29L1077.72 171.1' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1083.26 -59.29L843.52 -48.72' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1091.19 57.41L1091.19 57.41' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1091.19 57.41L1077.72 171.1' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1091.19 57.41L959.29 165.91' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1091.19 57.41L915.86 62.05' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1077.72 171.1L1077.72 171.1' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1077.72 171.1L1085.2 296.54' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1077.72 171.1L915.86 62.05' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1077.72 171.1L932.09 330.91' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1085.2 296.54L1085.2 296.54' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1085.2 296.54L1064.14 435.16' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1064.14 435.16L1064.14 435.16' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1064.14 435.16L1057.31 552.69' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1057.31 552.69L1057.31 552.69' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1057.31 552.69L1042.25 662.17' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1042.25 662.17L1042.25 662.17' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1042.25 662.17L949.9 580.39' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1042.25 662.17L1033.4 809.07' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1042.25 662.17L946.89 837.11' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1042.25 662.17L831.15 697.13' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1033.4 809.07L1033.4 809.07' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1032.97 958.74L1032.97 958.74' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1071.29 1081.04L1071.29 1081.04' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1071.29 1081.04L1032.97 958.74' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1071.29 1081.04L928.24 908.07' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1071.29 1081.04L946.89 837.11' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3ccircle r='5' cx='-44.07' cy='679.87' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='-59.61' cy='802.8' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='-41.13' cy='922.11' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='-69.24' cy='1054.93' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='73.86' cy='677.16' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='35.82' cy='790.18' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='48.74' cy='921.65' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='73.06' cy='1054.22' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='160.77' cy='717.95' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='168.09' cy='837.66' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='178.86' cy='931.16' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='205.35' cy='1036.13' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='307.74' cy='550.55' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='341.05' cy='826.13' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='310.79' cy='922.32' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='440.95' cy='463.35' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='431.46' cy='576.35' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='447.86' cy='685.36' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='458.78' cy='795.93' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='457.13' cy='1057.97' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='563.44' cy='209.97' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='565.45' cy='316.51' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='531.62' cy='466.22' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='540.69' cy='589.43' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='551.49' cy='687.56' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='550.15' cy='796.85' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='571.33' cy='943.83' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='593.5' cy='1034.84' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='702.93' cy='-64.01' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='696.41' cy='55.04' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='670.7' cy='164.19' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='709.92' cy='322.1' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='681.03' cy='434.82' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='689.57' cy='554.5' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='676.1' cy='697.56' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='657.19' cy='822.24' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='686.92' cy='966.06' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='695.92' cy='1061.8' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='843.52' cy='-48.72' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='787.24' cy='86.73' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='822.71' cy='187.28' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='818.62' cy='305.31' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='788.61' cy='426.52' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='822.06' cy='561.34' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='831.15' cy='697.13' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='793.67' cy='790.94' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='807.94' cy='929.94' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='790.87' cy='1068.51' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='960.6' cy='-71.63' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='915.86' cy='62.05' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='959.29' cy='165.91' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='932.09' cy='330.91' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='949.9' cy='580.39' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='961.17' cy='691.11' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='946.89' cy='837.11' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='928.24' cy='908.07' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='967.72' cy='1039.76' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1083.26' cy='-59.29' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1091.19' cy='57.41' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1077.72' cy='171.1' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1085.2' cy='296.54' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1064.14' cy='435.16' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1057.31' cy='552.69' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1042.25' cy='662.17' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1033.4' cy='809.07' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1032.97' cy='958.74' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1071.29' cy='1081.04' fill='%23132e65'%3e%3c/circle%3e%3cpath d='M-35.07 1049.27L-35.07 1049.27' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-35.07 1049.27L41.51 1084.85' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-35.07 1049.27L-48.35 922.63' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-35.07 1049.27L68.98 912.01' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-35.07 1049.27L-77.62 810.98' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M217.13 1057.1L217.13 1057.1' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M217.13 1057.1L340.69 1064.34' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M217.13 1057.1L218.63 912.79' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M217.13 1057.1L304.58 929.54' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M217.13 1057.1L41.51 1084.85' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M570.42 675.57L570.42 675.57' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M570.42 675.57L464.11 699.47' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M570.42 675.57L569.13 791.17' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M570.42 675.57L709.45 710.35' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M570.42 675.57L718.66 578.99' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M569.13 791.17L569.13 791.17' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M569.13 791.17L656.77 835.69' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M709.45 710.35L709.45 710.35' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M709.45 710.35L796.86 704.38' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M709.45 710.35L718.66 578.99' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M709.45 710.35L656.77 835.69' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M811.05 439.76L811.05 439.76' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M811.05 439.76L914.54 447.79' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M811.05 439.76L811.78 580.48' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M811.05 439.76L820.49 295.88' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M811.05 439.76L718.66 578.99' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M811.05 439.76L909.54 303.24' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M796.86 704.38L796.86 704.38' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M796.86 704.38L832.66 799.03' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M796.86 704.38L811.78 580.48' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M914.54 447.79L914.54 447.79' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M914.54 447.79L920.78 581.73' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M914.54 447.79L1057.56 461.96' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1055.75 703.37L1055.75 703.37' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1055.75 703.37L956.14 691.78' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1055.75 703.37L1056.55 818.99' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1055.75 703.37L959.17 789.48' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1055.75 703.37L1076.61 569.87' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1055.75 703.37L920.78 581.73' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1055.75 703.37L1055.88 912.07' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1055.88 912.07L1055.88 912.07' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1055.88 912.07L1056.55 818.99' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1055.88 912.07L935.48 944.67' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1055.88 912.07L1050.94 1043.29' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1055.88 912.07L959.17 789.48' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1055.88 912.07L953.6 1075.17' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-77.62 810.98L-77.62 810.98' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-77.62 810.98L-48.35 922.63' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-77.62 810.98L46.85 809.2' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-77.62 810.98L68.98 912.01' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-77.62 810.98L183.89 841' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-48.35 922.63L-48.35 922.63' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-48.35 922.63L68.98 912.01' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-48.35 922.63L46.85 809.2' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-48.35 922.63L41.51 1084.85' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M46.85 809.2L46.85 809.2' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M46.85 809.2L68.98 912.01' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M46.85 809.2L183.89 841' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M68.98 912.01L68.98 912.01' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M68.98 912.01L183.89 841' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M68.98 912.01L218.63 912.79' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M41.51 1084.85L41.51 1084.85' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M41.51 1084.85L68.98 912.01' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M183.89 841L183.89 841' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M183.89 841L218.63 912.79' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M183.89 841L298.87 794.54' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M218.63 912.79L218.63 912.79' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M218.63 912.79L304.58 929.54' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M218.63 912.79L298.87 794.54' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M298.87 794.54L298.87 794.54' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M298.87 794.54L304.58 929.54' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M298.87 794.54L464.11 699.47' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M304.58 929.54L304.58 929.54' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M304.58 929.54L340.69 1064.34' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M304.58 929.54L183.89 841' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M304.58 929.54L451.2 966.74' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M340.69 1064.34L340.69 1064.34' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M340.69 1064.34L423.68 1054.06' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M464.11 699.47L464.11 699.47' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M464.11 699.47L569.13 791.17' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M464.11 699.47L656.77 835.69' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M464.11 699.47L709.45 710.35' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M464.11 699.47L542.31 937.42' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M451.2 966.74L451.2 966.74' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M451.2 966.74L423.68 1054.06' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M451.2 966.74L542.31 937.42' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M423.68 1054.06L423.68 1054.06' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M423.68 1054.06L571.24 1063.71' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M542.31 937.42L542.31 937.42' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M542.31 937.42L571.24 1063.71' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M542.31 937.42L569.13 791.17' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M542.31 937.42L656.77 835.69' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M542.31 937.42L705.97 964.81' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M542.31 937.42L423.68 1054.06' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M571.24 1063.71L571.24 1063.71' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M571.24 1063.71L710.45 1038.37' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M718.66 578.99L718.66 578.99' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M718.66 578.99L811.78 580.48' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M718.66 578.99L796.86 704.38' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M718.66 578.99L920.78 581.73' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M656.77 835.69L656.77 835.69' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M656.77 835.69L705.97 964.81' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M705.97 964.81L705.97 964.81' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M705.97 964.81L710.45 1038.37' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M705.97 964.81L829.39 947.66' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M710.45 1038.37L710.45 1038.37' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M710.45 1038.37L818.48 1076.01' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M710.45 1038.37L829.39 947.66' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M815.94 -56.73L815.94 -56.73' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M815.94 -56.73L949.6 -58.9' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M815.94 -56.73L924.54 37.56' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M790.45 199.16L790.45 199.16' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M790.45 199.16L820.49 295.88' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M790.45 199.16L916.88 187.09' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M820.49 295.88L820.49 295.88' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M820.49 295.88L909.54 303.24' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M811.78 580.48L811.78 580.48' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M811.78 580.48L920.78 581.73' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M832.66 799.03L832.66 799.03' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M832.66 799.03L959.17 789.48' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M832.66 799.03L829.39 947.66' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M832.66 799.03L709.45 710.35' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M832.66 799.03L956.14 691.78' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M832.66 799.03L935.48 944.67' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M829.39 947.66L829.39 947.66' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M829.39 947.66L935.48 944.67' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M829.39 947.66L818.48 1076.01' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M829.39 947.66L953.6 1075.17' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M818.48 1076.01L818.48 1076.01' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M818.48 1076.01L953.6 1075.17' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M818.48 1076.01L705.97 964.81' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M818.48 1076.01L935.48 944.67' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M818.48 1076.01L1050.94 1043.29' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M949.6 -58.9L949.6 -58.9' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M949.6 -58.9L924.54 37.56' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M949.6 -58.9L1081.31 -54.2' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M949.6 -58.9L1046.45 45.71' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M949.6 -58.9L916.88 187.09' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M949.6 -58.9L1084.01 161.54' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M924.54 37.56L924.54 37.56' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M924.54 37.56L1046.45 45.71' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M924.54 37.56L916.88 187.09' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M924.54 37.56L1081.31 -54.2' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M924.54 37.56L1084.01 161.54' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M916.88 187.09L916.88 187.09' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M916.88 187.09L909.54 303.24' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M916.88 187.09L820.49 295.88' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M909.54 303.24L909.54 303.24' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M909.54 303.24L914.54 447.79' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M909.54 303.24L790.45 199.16' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M920.78 581.73L920.78 581.73' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M956.14 691.78L956.14 691.78' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M956.14 691.78L959.17 789.48' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M959.17 789.48L959.17 789.48' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M959.17 789.48L1056.55 818.99' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M935.48 944.67L935.48 944.67' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M935.48 944.67L953.6 1075.17' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M935.48 944.67L1050.94 1043.29' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M953.6 1075.17L953.6 1075.17' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M953.6 1075.17L1050.94 1043.29' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1081.31 -54.2L1081.31 -54.2' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1081.31 -54.2L1046.45 45.71' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1046.45 45.71L1046.45 45.71' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1046.45 45.71L1084.01 161.54' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1084.01 161.54L1084.01 161.54' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1070.72 284.68L1070.72 284.68' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1070.72 284.68L1084.01 161.54' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1070.72 284.68L909.54 303.24' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1070.72 284.68L1057.56 461.96' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1057.56 461.96L1057.56 461.96' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1057.56 461.96L1076.61 569.87' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1076.61 569.87L1076.61 569.87' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1076.61 569.87L920.78 581.73' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1076.61 569.87L956.14 691.78' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1056.55 818.99L1056.55 818.99' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1056.55 818.99L956.14 691.78' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1056.55 818.99L935.48 944.67' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1056.55 818.99L1050.94 1043.29' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1050.94 1043.29L1050.94 1043.29' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3ccircle r='25' cx='-35.07' cy='1049.27' fill='url(%23SvgjsRadialGradient1071)'%3e%3c/circle%3e%3ccircle r='25' cx='217.13' cy='1057.1' fill='url(%23SvgjsRadialGradient1071)'%3e%3c/circle%3e%3ccircle r='25' cx='570.42' cy='675.57' fill='url(%23SvgjsRadialGradient1071)'%3e%3c/circle%3e%3ccircle r='25' cx='569.13' cy='791.17' fill='url(%23SvgjsRadialGradient1071)'%3e%3c/circle%3e%3ccircle r='25' cx='709.45' cy='710.35' fill='url(%23SvgjsRadialGradient1071)'%3e%3c/circle%3e%3ccircle r='25' cx='811.05' cy='439.76' fill='url(%23SvgjsRadialGradient1071)'%3e%3c/circle%3e%3ccircle r='25' cx='796.86' cy='704.38' fill='url(%23SvgjsRadialGradient1071)'%3e%3c/circle%3e%3ccircle r='25' cx='914.54' cy='447.79' fill='url(%23SvgjsRadialGradient1071)'%3e%3c/circle%3e%3ccircle r='25' cx='1055.75' cy='703.37' fill='url(%23SvgjsRadialGradient1071)'%3e%3c/circle%3e%3ccircle r='25' cx='1055.88' cy='912.07' fill='url(%23SvgjsRadialGradient1071)'%3e%3c/circle%3e%3ccircle r='5' cx='-77.62' cy='810.98' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='-48.35' cy='922.63' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='46.85' cy='809.2' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='68.98' cy='912.01' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='41.51' cy='1084.85' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='183.89' cy='841' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='218.63' cy='912.79' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='298.87' cy='794.54' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='304.58' cy='929.54' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='340.69' cy='1064.34' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='464.11' cy='699.47' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='451.2' cy='966.74' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='423.68' cy='1054.06' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='542.31' cy='937.42' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='571.24' cy='1063.71' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='718.66' cy='578.99' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='656.77' cy='835.69' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='705.97' cy='964.81' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='710.45' cy='1038.37' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='815.94' cy='-56.73' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='790.45' cy='199.16' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='820.49' cy='295.88' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='811.78' cy='580.48' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='832.66' cy='799.03' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='829.39' cy='947.66' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='818.48' cy='1076.01' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='949.6' cy='-58.9' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='924.54' cy='37.56' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='916.88' cy='187.09' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='909.54' cy='303.24' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='920.78' cy='581.73' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='956.14' cy='691.78' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='959.17' cy='789.48' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='935.48' cy='944.67' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='953.6' cy='1075.17' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1081.31' cy='-54.2' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1046.45' cy='45.71' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1084.01' cy='161.54' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1070.72' cy='284.68' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1057.56' cy='461.96' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1076.61' cy='569.87' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1056.55' cy='818.99' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1050.94' cy='1043.29' fill='%238b9ad9'%3e%3c/circle%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1069'%3e%3crect width='1000' height='1000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='50%25' y1='100%25' x2='50%25' y2='0%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1070'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='%2300459e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cradialGradient id='SvgjsRadialGradient1071'%3e%3cstop stop-color='white' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%231735b3' offset='0.2'%3e%3c/stop%3e%3cstop stop-color='rgba(23%2c 53%2c 179%2c 0)' offset='1'%3e%3c/stop%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e"); 
   */
`;
