import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Style.css';
import { useState } from 'react';
import Navbar from './Navbar'
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
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
            <h2>About Us</h2>
            <p>Welcome to EcoAware, your go-to resource for detecting invasive plant species in Kerala.<br></br>
              We provide accurate identification and comprehensive information to protect our ecosystems.<br></br>
              Join us in safeguarding nature's balance today.</p>
              <div className="arrow-down" onClick={() => scrollToSection(1)} />
          </div>
          
        </section>
        <section ref={(el) => (sectionRefs.current[1] = el)} className="transparent-box">
        <div className="content">
          <h2>What are Invasive Species ?</h2>
          <p>Invasive plant species are non-native plants that outcompete native species, disrupt ecosystems, and harm biodiversity.<br></br> 
          They spread rapidly, often causing economic and environmental damage.<br></br>
          Detecting and managing them is crucial for preserving ecosystems.</p>
          <button
      className={`button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href='https://en.wikipedia.org/wiki/Invasive_species' style={{textDecoration:'none',color:'black',fontSize:"15px",fontFamily:"TsukimiRounded-SemiBold"}}>Read More.</a>
    </button>
    <div className="arrow-down" onClick={() => scrollToSection(2)} />
          </div>
        </section>
        <section ref={(el) => (sectionRefs.current[2] = el)} className="transparent-box">
        <div className="content">
          <h2>Services</h2>
          <p>Discover our eco-friendly services that provide a sustainable lifestyle.</p>
          <button
      className={`button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{marginRight:'50px',marginLeft:'20px',marginTop:'10px'}}
    ><Link to="/camera" style={{textDecoration:'none',color:'black',fontSize:"15px",fontFamily:"TsukimiRounded-SemiBold"}}>Camera</Link></button> 
    
    
    <button
      className={`button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{marginRight:'50px',marginTop:'10px'}}
    >
      <Link to="/upload" style={{textDecoration:'none',color:'black',fontSize:"15px",fontFamily:"TsukimiRounded-SemiBold"}}>Upload</Link>
    </button>

    
    <button
      className={`button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{marginRight:'20px',marginTop:'10px'}}
    >
      <Link to="/db" style={{textDecoration:'none',color:'black',fontSize:"15px",fontFamily:"TsukimiRounded-SemiBold"}}>Database</Link>
    </button>
    <div className="arrow-down" onClick={() => scrollToSection(3)} />
          
          </div>
        </section>
        <section ref={(el) => (sectionRefs.current[3] = el)} className="transparent-box">
        <div className="content">
          <h2>Contact</h2>
          <p>Get in touch with us to learn more about our initiatives.</p>
          <p>Contributors :</p>
             <p>Suhail Khan</p>
             <p>Sidharth D</p>
             <p>Vaishnav B L</p>
             <p>Anandhu Nair J</p>
          

          <div className="arrow-up" onClick={() => scrollToSection(0)} />
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} EcoAware. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

