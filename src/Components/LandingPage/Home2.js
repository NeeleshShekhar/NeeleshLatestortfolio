import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Asset/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em",textAlign: "left" }}>
              I am an <span className="purple" style={{ fontSize: "1.6em",textAlign: "left" }}> Entreprenuer </span> 
            </h1>
            <p className="home-about-body">
            
               Built www.skilwil.com, an immersive ed-art-tech platform to engage students to brudge the gap between creativity and education
               <br/><br/>Currently building www.thefusionmonkey.com, an online entertainement cum fashion brand that connects to the ambitious youth.
               <br/><br/> Currently Building Bahurangi, an platform for the Tercotta artisions to gain digital exposure.
           
            
           </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="wave" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
