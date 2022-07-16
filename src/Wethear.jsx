import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, date, time, status, maxtemp,mintemp) {
    return { name, date, time, status, maxtemp,mintemp };
  }
  
  

export default function Wethear({data ,isloading}) {
   
  
    
    const rows = [];
      if(data){

       data.map(item=>rows.push(createData('Ice cream sandwich', item.dt_txt.split(' ')[0],  item.dt_txt.split(' ')[1], item.weather[0].description,Math.floor((item.main.temp_max-273)),Math.floor((item.main.temp_min-273)))))
    }
    if (isloading) {
      return (
        <div style={{width:'100%' ,textAlign:'center'}} class="loadingio-spinner-spinner-adlkm9z4pm"><div class="ldio-j90isqa0nep">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div></div>
      )
    }
      
   
  if (data && !isloading) {
    
 
    return (

      <>
          

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              
              <TableCell align="right">تاریخ</TableCell>
              <TableCell align="right">ساعت</TableCell>
              <TableCell align="right">وضعیت</TableCell>
              <TableCell align="right">حداکثر دما</TableCell>
              <TableCell align="right">حد اقل دما</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
               
                
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.maxtemp}</TableCell>
                <TableCell align="right">{row.mintemp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </>
    )
            }
}
