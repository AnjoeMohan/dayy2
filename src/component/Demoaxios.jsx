import {Paper,Table,TableBody,TableCell,TableContainer,TableHead, TableRow} from '@mui/material'
import React, { useEffect,useState} from "react"
import axios from 'axios'

const Demoaxios = () => {
    const[rows,setRows]=useState([]);
    useEffect(()=>{
    axios.get('https://dummyjson.com/users').then((res)=>{
        setRows(res.data.users)
    })
},[])
  return (
    <div>
       <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 750,backgroundColor:"yellow" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>firstname</b></TableCell>
            <TableCell align="right"><b>lastname&nbsp;</b></TableCell>
            <TableCell align="right"><b>gender</b></TableCell>
            <TableCell align="right"><b>email&nbsp;</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.firstName}
              sx={{ 'td,th': { border: 3 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    </div>
  )
}

export default Demoaxios