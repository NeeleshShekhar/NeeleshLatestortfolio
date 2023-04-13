import React, { useState, useEffect } from 'react';
import {db} from "../../firebase";
import { Card, CardBody, CardTitle, CardText, Row, Col, CardImg,Button,CardFooter } from 'reactstrap';
import {excerpt} from './exerpt';
import './blog.css';
import { Link } from "react-router-dom";

const BlogView = () => {
    const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogRef = db.collection('blogs').limit(4);

    blogRef.get().then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlogs(data);
    });
  }, []);

  return (
<div className='head-blog-body'>


</div>
  );
  };
  
  export default BlogView;
  
