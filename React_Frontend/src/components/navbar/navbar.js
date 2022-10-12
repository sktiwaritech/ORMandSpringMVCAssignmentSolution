import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';
import "./navbar.css"


const AppBaar = () => {
  return (
    <React.Fragment>

        <Grid  xs={12} >
             <Typography className="navigation" style={{fontFamily:"monospace",textAlign:"center",fontSize:"54px",paddingTop:"34px"}}>
                 Customer Relationship Management
             </Typography>
         </Grid>
       
          
    </React.Fragment>
  )
}

export default AppBaar;