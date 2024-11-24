import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";



function About() {
  return (
    <Container fluid className="about-section">
      
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
           
          </Col>
        </Row>
        <h1 className="project-heading">
           <strong className="purple">Skills </strong>
        </h1>

        <h4 style={{ textAlign: "center" }}>
        Penetration Testing <br/>
    Network Security<br/>
    Web Application Security, 
    Cryptography<br/>
    Vulnerability Assessment<br/>
    Hardworking <br/>
    Problem Solving, Critical Thinking, Communication, <br/>
    Teamwork,<br/> Time Management, Adaptability, Leadership,

        </h4>
        <br/><br/>


        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

      

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
    
        <h1 className="project-heading">
          <strong className="purple">Burpsuite, Wireshark, Nmap, Sqlmap, Nessus etc... </strong> 
        </h1>
    
       

      </Container>
    </Container>
  );
}

export default About;


