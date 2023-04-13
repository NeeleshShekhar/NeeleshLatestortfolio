import React, { useState, useEffect } from 'react';
import {db} from "../../firebase";
import { Card, CardBody, CardTitle, CardText, Row, Col, CardImg,Button,CardFooter } from 'reactstrap';
import {excerpt} from './exerpt';
import './blog.css';
import { Link } from "react-router-dom";
import Bloghead from './Bloghead'


  const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogRef = db.collection('blogs');

    blogRef.get().then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlogs(data);
    });
  }, []);

  return (
<div className='head-blog-body-all'>
<Bloghead/><br/>
<div className=''>
  <h1 style={{fontFamily:"Montserrat"}}>All Blogs</h1> <br/>
  </div>
  <Row>
    {blogs.map((blog, index) => (
      <Col md="4" key={blog.id}>
       <a href={'detail/'+blog.id} className='noDecoration'> 
       <div className="card">
          <Row>
            <Col md="6">
          <img top width="100%" height="300px" src={blog.imgUrl} alt={blog.title} className='imgblog' />
          </Col>
          <Col md="6" style={{textDecoration: 'none'}}>
            <div className='blogtitle'>{blog.title}</div>
            <div className='blogcontent' ><div dangerouslySetInnerHTML={{ __html: excerpt(blog.blogcontent, 120) }}></div></div>

          </Col>
          </Row>
        </div>
        </a>
      </Col>
      
    ))}
    <br/>
  </Row>
 








</div>
  );
  };
  
  export default AllBlogs;
  