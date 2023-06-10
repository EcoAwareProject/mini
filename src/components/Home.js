import React from 'react'
import eco from "./images/eco.png"
import yes from "./images/yes.png"
import './Style.css'
import Navbar from './Navbar'
import ACarousel from './Carousel'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import vid1 from './images/vid1.mp4';
import img1 from './images/img1.jpg'
import WebFont from 'webfontloader';
import { useEffect } from 'react'
import Pagination from '@mui/material/Pagination';
const Home = () => {
    const myStyle={

       
        backgroundImage: 
        "url('https://wallpaperaccess.com/full/1132838.jpg')",
       height: '100vh',
       weight: '100%',
        backgroundSize: 'cover',
        
    };
    
    
   
  
  return (
    <>
    <div className='container'>
      <section className='one'>
        <div style={myStyle}> 
        <div className='card'></div>
        
       </div>
       
      
    </section>
    <section className='two'><h1>hello</h1>
   </section>
   
    
    </div>
    </>
  )
}

export default Home
