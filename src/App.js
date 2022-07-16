import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid'
import City from './City'
import Wethear from './Wethear'
import { useState } from 'react';

function App() {
  const [isloading, setisloading] = useState(false)
  const [air, setair] = useState(null)
  const handelloading=()=>{
    setisloading(true)
    
  }
  const cachlaoding=()=>{
    setisloading(false)
  }
  const handleair=(info)=>{
    setisloading(false)
    setair(info)
    
  }
  
  return (
  <Grid container
  justifyContent='center'
  alignItems='center'
  direction="row"
  >
    <Grid item  xs={12} md={8}>
      <City cachlaoding={cachlaoding} handelloading={handelloading} handleair={handleair}/>
    </Grid>
    <Grid item xs={12} md={8}>
      <Wethear isloading={isloading}  data={air}/>
    </Grid>
  </Grid>
  );
}

export default App;
