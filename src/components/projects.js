import "animate.css";
import { Col, Container, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { ProjectCard } from "./project-card.js";

export const Projects = () => {
  const projects = [
    {
      title: "Crown Clothing E-Commerce",
      description: "Ecommerce - React, TypeScript, Redux, Firebase",
      imgUrl: projImg1,
      siteUrl: "https://rainbow-elf-b7ce8e.netlify.app",
    },
    {
      title: "Instagram Clone",
      description: "React, Redux, Firebase",
      imgUrl: projImg2,
      siteUrl: "https://spontaneous-cranachan-46be28.netlify.app",
    },
    {
      title: "Hotel Management System",
      description: "Java, MySQL",
      imgUrl: projImg3,
      siteUrl: "https://github.com/mhussein06/HMS",
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are three projects I have worked on the last couple of
                    months; A hotel management system, an online clothing
                    e-commerce, and an Instagram clone. Both the e-commerce and
                    Instagrame clone are in React.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
