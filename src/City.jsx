import {  Grid, Input ,TextField  } from '@mui/material';
import {makeStyles,Button} from '@material-ui/core'

import axios from 'axios'
import { useState } from 'react';

const fetchdata=()=>{
  return  axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=تهران&appid=0d3fa2bce1773e1349bf1274f23dbbc2`).then(data=>console.log(data.data)).catch(error=>alert(error.message))
}



const style=makeStyles({
    ab:{
        color:'red',
        height:'60px',
        marginTop:'15px'
    }
})

export default function City({handleair ,handelloading,cachlaoding}) {
    
   
  const [cityname, setcityname] = useState('')
const classes=style()
  const url ='https://api.openweathermap.org/data/2.5/forecast?q='

const fetchdata= async(city)=>{
    
    handelloading()
     try {
        const {data} =await  axios.get(`${url}${city}&appid=0d3fa2bce1773e1349bf1274f23dbbc2`)
        if(data){
            handleair(data.list)
        }
       
    } 
    catch (error) {
        handleair(null)
        alert(error.message)
        
       
    } 
}

 
 
 
    return (
    <>
    <h4 style={{textAlign:'center'}}>برای پیش بینی اب هوا شهر مورد نظر خود را وارد کنید</h4>
     <Grid container justifyContent='center' alignItems='center'>
         <Grid item xs={8} md={6} >
            <div style={{marginTop:'20px', width:'100%'}}>
                
                <TextField  fullWidth={true} onChange={(e)=>setcityname(e.target.value)} color='info' id="standard-basic" label="شهر" variant="outlined" />
            </div>
        </Grid>
        <Grid item>
        <Button onClick={()=>fetchdata(cityname)} fullWidth={true} className={classes.ab} variant="contained"     >تایید</Button>
        </Grid>
        
 
        </Grid>
      
    </>
    )
}
