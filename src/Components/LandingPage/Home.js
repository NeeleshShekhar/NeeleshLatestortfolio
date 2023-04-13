import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navbar from '../Navbar/navbar'
import CarouselExample from '../Caraousel/caraousel';
import Headerportfolio from '../Header/header'
import Blogs from '../Blogs/blogs';
import Home2 from "./Home2";
import Home3 from "./Home3";
export class Home extends Component {
  static propTypes = {}

  render() {
    return (
        <div className='justify-content-center' style={{padding:"10px"}}>
      
     
      
      {/* <CarouselExample/> */}
      <Headerportfolio/>
      <div className='blog-body'>
      <Blogs />
      </div>
      <br/>
      <br/>
      <div className='home23'>
      <Home2/>
      <Home3/>
      </div>
      </div>
    )
  }
}

export default Home