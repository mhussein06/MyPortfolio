import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container skills-container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                <br></br>
              </p>
              <div className="skills-list">
                <div className="item">
                  <img src={meter3} alt="Skills" />
                  <h5>React & JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skills" />
                  <h5>HTML & CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Skills" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Skills" />
                  <h5>TypeScript</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
