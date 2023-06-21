import React from 'react'
import axios from 'axios'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useState,useEffect } from 'react';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




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
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Scientific Name</StyledTableCell>
            <StyledTableCell >Common Name</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inv.map((data,ind) => (
            <StyledTableRow key={ind}>
              <StyledTableCell component="th" scope="row">
               {data.plantSciName}{data.prediction}
              </StyledTableCell>
              <StyledTableCell align="left"> {data.plantName}</StyledTableCell>
              <StyledTableCell align="left"> {data.plantDesc}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default Database
