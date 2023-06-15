import React from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Grid} from '@mui/material'
import { CardActionArea } from '@mui/material';

import { useState,useEffect } from 'react';
const Database = () => {
  var [inv,setinv] = useState([]);


useEffect(()=>{
    axios.get('http://localhost:6969/view').then((response)=>{
        console.log(response)
        setinv(inv=response.data)
    })
  },[])
  return (
    <div className='db'>
      <Grid container spacing={2}>
        {inv.map((data,ind)=>{
            return(
                <Grid xs={3}>
 <Card sx={{ maxWidth: 345 , maxHeight : 345}} key={ind} className='card'>



      <CardContent >
        <div><h4>Sci name: {data.plantSciName}</h4></div>
        <div><h4>Name : {data.plantName}</h4></div>
        <div><h4>Desc: {data.plantDesc}</h4></div>
        


      </CardContent>


    </Card>
    </Grid>
    )})}</Grid>

    </div>
  )
}

export default Database
