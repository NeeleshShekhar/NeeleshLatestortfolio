import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container, Row, Col } from "reactstrap";
import Type from '../Header/type';
import '../Header/header.css';
import homeLogo from '../../Asset/profile.jpg';


export class Bloghead extends Component {
  static propTypes = {}

  render() {
    return (
      <div><Container fluid className="blog-section">
     
      <Container className="home-content">
        <Row >
        
          <div className='blogboxhome'>
            <div className='all-bloghead'>Journaling Nuances and writing stories</div>
             </div>

         
        </Row>
      </Container>
    </Container></div>
    )
  }
}

export default Bloghead