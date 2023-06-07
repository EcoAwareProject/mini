import React from 'react'
import eco from "./images/eco.png"

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
const Home = () => {
    const myStyle={
      backgroundImage: 
 "url('https://images.wallpaperscraft.com/image/single/leaves_dark_plant_128531_1920x1080.jpg')",

        height:'100vh',
        
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
    };
  
  return (
    <div style={myStyle}>
    <div className='card' style={{height : "716px",width : "540px"}}>
    
      <Paper>
        {/* <Typography className='h2'>
          EcoAware
          </Typography> */}
       
      </Paper>
      <div className='img'> <img src={eco} className='img'/></div>
    
    </div>
   
    <div>
    <Button color="inherit"><Link to={"/camera"} className='nog' style={{textDecoration: 'none'}}>Camera</Link></Button>
    </div>
    </div>
  )
}

export default Home
