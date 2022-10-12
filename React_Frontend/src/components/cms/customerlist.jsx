import React from 'react'
import { useEffect,useState } from 'react';
import axios from "axios";
import {Paper,Zoom,Container,Box,Grid,Typography,Button} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';



const headCells = [
    { id: 'srno', label: 'S. No.', minWidth: 50,align: 'center' },
    { id: 'srno', label: 'First Name', minWidth: 50,align: 'center' },
    { id: 'srno', label: 'Last Name', minWidth: 50,align: 'center' },
    { id: 'srno', label: 'Email', minWidth: 50,align: 'center' },
    { id: 'srno', label: 'Action', minWidth: 50,align: 'center' }
   
]

function EnhancedTableHead(props) {




    return (
      <TableHead className='theadbg border'>
        <TableRow>
          {/* <TableCell padding="checkbox"> */}
          {/* <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            /> */}
          {/* </TableCell> */}
          {headCells.map((headCell) => (
            <TableCell style={{ color: '#6E6A76' }}
              key={headCell.id}
              padding={headCell.disablePadding ? 'none' : 'default'}
            > {headCell.label}
  
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  
  
  


const CustomerList = () => {


  
  const url = "http://localhost:9111/api/v1/getAllCustomer";

    const [customerList, setCustomerList] = useState([]);

    const onAddCustomer = () => {
        // history.push('./adduser');
      window.open('./addCustomer','_self')
    
    }


   


  const onUpdateCustomer = async (id) =>{
    window.open(`/updateCustomer/${id}`,'_self')
  }

    useEffect(()=>{
        const fetchAllUser = async()=>{
            try{
                const res = await axios.get(url);
                setCustomerList(res.data)
                // console.log(res);

            }catch(err){
                console.log(err)
            }
        }


        fetchAllUser();
    },[]);






    const onhandleDelete= async (id)=>{



      try{
        await axios.delete("http://localhost:9111/api/v1/"+id);
        alert('Customer Deleted Successfully')
        window.location.reload();
      }catch(err){
        console.log(err);
      }
    }


  return (
    <>

<Container>
        <Box sx={{ my: 2 }}>
      
      <Paper elevation={3} style={{marginTop:"30px"}}>
               
                <Grid xs={12} container direction="row" justifyContent="flex-start" alignItems="flex-start">

                <Grid xs={12} style={{padding:"12px"}}>

                <Button variant="contained" color="primary" onClick={onAddCustomer}>
                + Add Customer
                </Button>
                </Grid>

                <Grid xs={12} style={{padding:"12px",marginTop:"6px"}}>
                    <Typography>
                        Customer List
                    </Typography>


        <TableContainer >

<Table >


  <EnhancedTableHead />


  <TableBody className='border'>

    {
      customerList && customerList.length > 0 ? customerList.map((user, index) => (
        <TableRow
          hover
          onClick={(event) =>(event, 'user')}
          role="checkbox"
          tabIndex={-1}
          key={user.id}
        >

          <TableCell>{index + 1}</TableCell>
          <TableCell>{user.firstName}</TableCell>
          <TableCell>{user.lastName}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>
            <Button
            onClick={(event)=>onUpdateCustomer(user.id)}
            >
                Update
            </Button>| 
            <Button
            onClick={()=>{if(window.confirm('Are you sure to delete this data?')){onhandleDelete(user.id);}}}>
                Delete
            </Button>
        </TableCell>

        </TableRow>
      ))
        : ""}

  </TableBody>

</Table>




</TableContainer>


                    




                </Grid>
                
                </Grid>
        </Paper>
        </Box>
        </Container>
        
    </>
  )
}

export default CustomerList;