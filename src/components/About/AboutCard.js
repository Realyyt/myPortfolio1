import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">UMARU EMMANUEL ISAAC </span>
            from <span className="purple"> Nigeria.</span>
            <br /> I am a final year student 
            <br />
            Additionally, I am currently employed as a software developer at
            Paycrest
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to classical opera's
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Leave an impact!"{" "}
          </p>
          <footer className="blockquote-footer">Realyyt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
