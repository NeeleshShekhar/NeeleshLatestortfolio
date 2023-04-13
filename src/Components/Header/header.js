import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container, Row, Col } from "reactstrap";
import Type from './type';
import './header.css';

import homeLogo from '../../Asset/profile.jpg';

export class Headerportfolio extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <Container fluid className="home-section" id="home">
     
      <Container className="home-content">
        <Row >
          
          <Col md={6} className='boxhome'>
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="heading-name">
              I'M
              <strong className="main-name"> Neelesh Shekhar</strong>
            </h1>
            <br/>
            <div style={{fontSize:"30px"}}>
                <Type />
            </div>

            <div style={{ paddingTop: 24, textAlign: "left" ,fontFamily:"roboto"}}>
              
            </div>
            <div style={{ paddingTop: 24,paddingBottom:24, textAlign: "left",fontFamily:"roboto",fontSize:"15px" }}>
            An Individual with a Computer Science background with an excellent analytical perspective towards solving problems. I have experience in the Digital transformation of organizations by analyzing real data sets.
         
            </div>
             </Col>

          <Col md={5}>
          <div className="rocket-container">
          <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "300px"}}
              />
    </div>
          </Col>
        </Row>
      </Container>
    </Container>
    
    
    
    </div>
    )
  }
}

export default Headerportfolio