import React from 'react'
import { Paper, Zoom, Container, Box, Grid, Typography, Button, TextField } from '@mui/material';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const AddCustomer = () => {

    const url = "http://localhost:9111/api/v1/save";
    const [customerDetail,setCustomerDetail] = useState({
        firstName: "",
        lastName: "",
        email:"",
    });


    const navigate = useNavigate();

    const handleChange=(e)=>{

        setCustomerDetail((prev)=> ({...prev, [e.target.name] : e.target.value}));
    }


    const onsubmit= async e=>{



    

        e.preventDefault()
        try{
            await axios.post(url, customerDetail)
            alert('Customer Added Successfully')
            navigate("/")
        }catch(err){
            console.log(err);
        }
    }


   

    return (
        <>
            <Container>
                <Box sx={{ my: 2 }}>

                    <Paper elevation={3} style={{ marginTop: "30px", }}>



                        <Grid xs={12} >

                            <Typography style={{ paddingLeft: "12px",paddingTop:"12px" }}>
                                New Customer Detail
                            </Typography>

                            <hr/>



                            <Grid xs={12} style={{ padding: "12px" }}>
                                <Grid item xs={4}  >
                                    <Typography className="font14 greyfirstheading" gutterBottom variant="subtitle1">
                                        First Name *
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        <TextField className="w-100"
                                            type="text"
                                            name="firstName"
                                            variant="outlined"
                                            placeholder="Enter First Name"
                                          // value={name}
                                          onChange= {handleChange}

                                        />
                                    </Typography>
                                </Grid>

                            </Grid>

                            <Grid container xs={12} style={{ padding: "12px" }}>

                                <Grid item xs={4}>
                                    <Typography className="font14 greyfirstheading" gutterBottom variant="subtitle1">
                                        Last Name *
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        <TextField className="w-100"
                                            type="text"
                                            name="lastName"
                                            variant="outlined"
                                            placeholder="Enter Last Name"
                                        // value={name}
                                        onChange= {handleChange}

                                        />
                                    </Typography>
                                </Grid>

                            </Grid>

                            <Grid container xs={12} style={{ padding: "12px" }}>

                                <Grid item xs={4}>
                                    <Typography className="font14 greyfirstheading" gutterBottom variant="subtitle1">
                                        Email *
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        <TextField className="w-100"
                                            type="text"
                                            name="email"
                                            variant="outlined"
                                            placeholder="Enter Email"
                                        // value={name}
                                        onChange= {handleChange}

                                        />
                                    </Typography>
                                </Grid>

                            </Grid>

                            <Grid xs={12} style={{padding:"12px"}}>
                                <Button
                                variant='contained'
                                onClick={onsubmit}>
                                    Add
                                </Button>
                            </Grid>
                        </Grid>


                    </Paper>
                </Box>
            </Container>
        </>
    )
}

export default AddCustomer;