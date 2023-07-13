import React from "react";

import "../ui/styles/newbie1.css";

import { ReactComponent as Reaction } from "../ui/images/icon-reaction.svg";
import { ReactComponent as Memory } from "../ui/images/icon-memory.svg";
import { ReactComponent as Verbal } from "../ui/images/icon-verbal.svg";
import { ReactComponent as Visual } from "../ui/images/icon-visual.svg";

const NewBie1 = () => {
  return (
    <div className="big-container">
      <div className="center-container">
        <section className="result">
          <span>Your Result</span>
          <div className="center-circle">
            <h1>71</h1>
            <p>of 100</p>
          </div>
          <div className="plus-informations">
            <h2> Great </h2>
            <p>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </section>
        <section className="sumary">
          <span>Sumary</span>
          <section className="topics">
            <div className="topic">
              <div className="simbol">
                <Reaction />
                <span>Reaction</span>
              </div>
              <div className="numbers">
                <span>80</span>
                <span>/</span>
                <span> 100</span>
              </div>
            </div>
            <div className="topic">
              <div className="simbol">
                <Memory />
                <span>Memory</span>
              </div>
              <div className="numbers">
                <span>80</span>
                <span>/</span>
                <span> 100</span>
              </div>
            </div>
            <div className="topic">
              <div className="simbol">
                <Verbal />
                <span>Verbal</span>
              </div>
              <div className="numbers">
                <span>80</span>
                <span>/</span>
                <span> 100</span>
              </div>
            </div>
            <div className="topic">
              <div className="simbol">
                <Visual />
                <span>Verbal</span>
              </div>
              <div className="numbers">
                <span>80</span>
                <span>/</span>
                <span> 100</span>
              </div>
            </div>
          </section>
          <button>Continue</button>
        </section>
      </div>
    </div>
  );
};
export default NewBie1;
