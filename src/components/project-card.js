import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, siteUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={siteUrl}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="projects" className="proj-img" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};

export default ProjectCard;
