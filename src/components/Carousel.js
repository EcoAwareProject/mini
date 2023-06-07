import React from 'react'
import Carousel from 'better-react-carousel'
import { Box, Grid, Paper, Typography } from '@mui/material'

const ACarousel = () => {
    const paperStyle={padding:20,width:350,margin:"20p"}
  return (
    <div style={{marginTop: '100px'}}>
    <Carousel cols={2} rows={1} loop >
      <Carousel.Item>
      <Paper elevation={15} style={paperStyle} className='homePaper-1'>

        </Paper>
      </Carousel.Item>
      <Carousel.Item>
        <img  src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img  src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
    </div>
  );
};

export default ACarousel;