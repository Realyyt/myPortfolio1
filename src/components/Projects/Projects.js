import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import NAIJAPIN from "../../Assets/Projects/NAIJAPIN.png";
import NETFLIXCLONE from "../../Assets/Projects/NETFLIXCLONE.png";

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
              imgPath={NETFLIXCLONE}
              isBlog={false}
              title="NETFLIX CLONE"
              description="This web app has similar user interface like NETFLIX to stream and watch movies"
              ghLink="https://github.com/Realyyt/Netflix-clone"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
