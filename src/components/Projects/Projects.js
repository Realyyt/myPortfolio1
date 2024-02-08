import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import NAIJAPIN from "../../Assets/Projects/NAIJAPIN.png";
import knowledgehut from "../../Assets/Projects/knowledgehut.png";
import DApp from "../../Assets/Projects/DApp.png";
import MUcoin from "../../Assets/Projects/ERC-20.jpeg";
import andela from "../../Assets/Projects/andela.png";
import paycrest from "../../Assets/Projects/paycrest.png";
import storyprotocol from "../../Assets/Projects/storyprotocol.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={storyprotocol}
              isBlog={false}
              title="Story Protocol"
              description="Story Protocol is building
              open IP infrastructure to grow
              the creativity of the internet era."
              ghLink="https://www.storyprotocol.xyz/?ref=lapaninja"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NAIJAPIN}
              isBlog={false}
              title="NAIJAPIN"
              description="An application to share moments and experiences with friends, where you can like, comment,create pins and so much more"
              ghLink="https://github.com/Realyyt/NAIJAPIN"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={knowledgehut}
              isBlog={false}
              title="KnowledgeHUT Upgrad"
              description="Browse through classroom and online training courses offered by KnowledgeHut. We conduct classroom, Virtual and E-learning trainings for all courses."
              ghLink="https://www.knowledgehut.com/"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MUcoin}
              isBlog={false}
              title="MU-coin"
              description="This is an Erc-20 token proposal for Mewar University India"
              ghLink="https://github.com/Realyyt/MU-coin"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DApp}
              isBlog={false}
              title="ETHEREUM DAPP"
              description="This is a blockchain application powered by smart contract"
              ghLink="https://github.com/Realyyt/Ethereumdapp-Todolist"
              demoLink=""
            />
          </Col>
      </Container>
    </Container>
  );
}

export default Projects;
