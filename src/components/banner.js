import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

export const Banner = () => {
  const toRotate = ["Web Developer"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Mahad Hussein `}
              
              <span className="wrap">{text}</span>
            </h1>
            <p>
              I'm an avid web developer living in St. Paul, MN. I mainly work
              with React and redux. I'm currently learning typscript as well and
              look forward to increasing my knowledge. Other languages I'm
              proficient with include, Java, and MySQL. My hobbies reading,
              playing video games, and critiquing things I have little knowledge
              about. I'm currently looking for an entry level front-end development position
              where I can apply what I know in the real world, and gain new experiences.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
