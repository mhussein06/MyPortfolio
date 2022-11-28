import { Col, Container, Row } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 className="logo">Mahad Hussein </h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            
          <a href="#">
            <Github color="white" className="githubIcon"/>
          </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
