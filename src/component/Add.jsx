
import React ,{useState}from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Add = () => {
  //const [count,setCount]=useState(0);
 // let valueAdd=()=>{
 //   setCount(count+1)
 // }
const[form,setForm]=useState(
{
  Name:'',
  Department:'',
  Contactno:'',
  Admissionno:''
}
)
function valueAdd(){console.log(form)}
function valueCap(e){
setForm({...form,[e.target.name]:e.target.value})
}
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" label="Name" variant="outlined" name="Name"onChange={valueCap} />
    <TextField id="filled-basic" label="Department" variant="outlined"name="Department" onChange={valueCap}/>
    <TextField id="standard-basic" label="Contactno" variant="outlined"name="Contactno" onChange={valueCap}/>
    <TextField id="standard-basic" label="Admissionno" variant="outlined" name="Admissionno"onChange={valueCap}/><br />
    <Button variant="outlined"color='success' onClick={valueAdd}>Done</Button><br />
    {/* <small>count is {count}</small> */}

  </Box>
  )
}

export default Add