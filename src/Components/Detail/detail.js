import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {db} from "../../firebase";
import { Container, Row, Col } from "reactstrap";
import './detail.css';
import { BsPenFill } from "react-icons/bs";
import detailhead from '../../Asset/detail-head.png';

const Showdet = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [image, setImage] = useState(null);
  useEffect(() => {
    const blogRef = db.collection('blogs').doc(id);

    blogRef.get().then((doc) => {
      if (doc.exists) {
        setBlog(doc.data());
        setImage(doc.data.imgUrl())
      } else {
        console.log('No such document!');
      }
    });
  }, [id]);

  return ( 
  
    <div className='subTopicContainer'>
      <br/>
      <br/>
      <br/>
      
      <img top width="100%" height="500px" src={blog.imgUrl} alt={blog.title} className='imgblog' />
      <div className='detail-read'>
      <strong className='detail-head'>{blog.title}</strong>
      <div style={{fontSize:"15px"}}><BsPenFill/> {blog.author}</div>
      <br/>
      <br/>
      <div className='detail-content' ><div dangerouslySetInnerHTML={{ __html: blog.blogcontent }}></div>

      </div>
      </div>
    </div>
  
  );
};

export default Showdet