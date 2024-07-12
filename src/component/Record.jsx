import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name,department,contactno,admissionno) {
  return { name,department,contactno,admissionno};
}
const rows = [
  createData('AVIN','CSE',9067895432,2578),
  createData('SHAJAHAN','ECE',8066578902,5477),
  createData('AMBADI','ME',9789543672,4786),
];

const Records = () => {
  return (
    <div>
       <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 750,backgroundColor:"yellow" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>NAME</b></TableCell>
            <TableCell align="right"><b>DEPARTMENT&nbsp;</b></TableCell>
            <TableCell align="right"><b>CONTACTNO</b></TableCell>
            <TableCell align="right"><b>ADMISSIONNO&nbsp;</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ 'td,th': { border: 3 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.contactno}</TableCell>
              <TableCell align="right">{row.admissionno}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    </div>
  )
}

export default Records
