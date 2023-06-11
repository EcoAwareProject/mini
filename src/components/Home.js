// import React from 'react'
// import eco from "./images/eco.png"
// import yes from "./images/yes.png"
// import './Style.css'
// import Navbar from './Navbar'
// import ACarousel from './Carousel'
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Link } from 'react-router-dom';

// import img1 from './images/img1.jpg'
// import WebFont from 'webfontloader';
// import { useEffect } from 'react'
// import Pagination from '@mui/material/Pagination';
// const Home = () => {
//     const myStyle={

       
//         backgroundImage: 
//         "url('https://wallpaperaccess.com/full/1132838.jpg')",
//        height: '100vh',
//        weight: '100%',
//         backgroundSize: 'cover',
        
//     };
    
//     const myStyle1={

       
//       backgroundImage: 
//       "url('https://a-static.besthdwallpaper.com/green-leaves-with-black-shadow-wallpaper-3000x2000-78534_42.jpg')",
    
//       backgroundSize: 'cover',
      
//   };
   
  
//   return (
//     <>
//     <div className='container'>
//       <section className='one'>
//         <div style={myStyle}> 
        
//         <br></br>
      
//         <div className='card' style={myStyle1}>
//           <div className='title'><Button className='btn1' style={{backgroundColor:'transparent',height:"70px",marginTop:"100px"}} >
//           <p className='title'>EcoAware</p>
          
//           </Button></div>
//           <div>
//           <Button className='btn1' style={{backgroundColor:'transparent',height:"50px",marginTop:"80px"}}>
//           <Link to="/camera" style={{textDecoration:'none',color:'white'}}><p>About</p></Link>
//           </Button>
//           </div>
//           <div>
//           <Button className='btn1' style={{backgroundColor:'transparent',height:"50px",marginTop:"20px"}}>
//           <Link to="/camera" style={{textDecoration:'none',color:'white'}}><p>Camera</p></Link>
//           </Button>
//           </div>
          
        
//           <div>
//           <Button className='btn1' style={{backgroundColor:'transparent',height:"50px",marginTop:"20px"}}>
//           <Link to="/camera" style={{textDecoration:'none',color:'white'}}><p>Species</p></Link>
//           </Button>
//           </div>
//           <div>
//           <Button className='btn1' style={{backgroundColor:'transparent',height:"50px",marginTop:"20px"}}>
//           <Link to="/camera" style={{textDecoration:'none',color:'white'}}><p>Contact</p></Link>
//           </Button>
//           </div>
//           <div>
//           <Button className='btn1' style={{backgroundColor:'transparent',height:"50px",marginTop:"20px"}}>
//           <Link to="/camera" style={{textDecoration:'none',color:'white'}}><p>Contributors</p></Link>
//           </Button>
//           </div>
          
         
//         </div>
       
        
//        </div>
       
      
//     </section>
//     <section className='two'>
//     <Navbar/>
//       <h1>hello</h1>
//    </section>
   
    
//     </div>
//     </>
//   )
// }

// export default Home








import React, { useRef } from 'react';
import './Style.css';

function Home() {
 const mainRef = useRef(null);
  const sectionRefs = useRef([]);

  const scrollToSection = (sectionIndex) => {
    const sectionRef = sectionRefs.current[sectionIndex];
    sectionRef.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  return (
    <div className="container">
      <div className="background-image" />
      <header>
        <h1 className="title">Eco Aware</h1>
      </header>
      <main ref={mainRef}>
        <section ref={(el) => (sectionRefs.current[0] = el)} className="transparent-box">
          <div className="content">
            <h2>About</h2>
            <p>Welcome to our background website! This is an example website with a background image.</p>
          </div>
        </section>
        <section ref={(el) => (sectionRefs.current[1] = el)} className="snap-scroll-section">
          <h2>Gallery</h2>
          <p>Check out our amazing collection of eco-friendly images.</p>
        </section>
        <section ref={(el) => (sectionRefs.current[2] = el)} className="snap-scroll-section">
          <h2>Services</h2>
          <p>Discover our eco-friendly services for a sustainable lifestyle.</p>
        </section>
        <section ref={(el) => (sectionRefs.current[3] = el)} className="snap-scroll-section">
          <h2>Contact</h2>
          <p>Get in touch with us to learn more about our initiatives.</p>
        </section>
      </main>
      <footer>
        <div className="pagination">
          <div className="pagination-dot" onClick={() => scrollToSection(0)} />
          <div className="pagination-dot" onClick={() => scrollToSection(1)} />
          <div className="pagination-dot" onClick={() => scrollToSection(2)} />
          <div className="pagination-dot" onClick={() => scrollToSection(3)} />
        </div>
        <p>&copy; {new Date().getFullYear()} Background Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

