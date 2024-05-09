import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import logo from '../assets/logo.png';
import Form from '../componets/Form';
import Stepper from '../componets/Stepper';

function Home() {
    return (
        <Box sx={{ display: 'flex', minHeight: "100vh" }}>
            <Box className="content_box" align="left" sx={{ bgcolor: 'text.primary', color: "white"}}>
                 
                <Grid align="left" sx={{ paddingX:"15%", paddingY:"10%", height: "100%",display: "grid", alignContent:"space-between" }}>
                <Box >
                  <img src={logo} width="40%"/>
                     <br/>
                     <br/>
                     <br/> 
                     <Typography variant="h6" >Welcome</Typography>
                    <Typography variant="h6">Let's start your journey</Typography>

                    <Typography variant="subtitle1" sx={{ mt: 2 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</Typography>
                    <Typography variant="subtitle1" sx={{ mt: 2 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</Typography>
                    <Typography variant="subtitle1" sx={{ mt: 2 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor.</Typography>
                     </Box>

                    <Typography variant="caption" sx={{pt:4}}>2024 Mintouge Limited</Typography>
                </Grid>
                
            </Box>
            <Box  className="form_box"   >
            <Box sx={{ padding:"5%"}}>  
                    <Box align="right" sx={{ padding:"2%"}}>
                        <Typography sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>Log Out <AccountCircleIcon sx={{ paddingLeft: 1 }} /> </Typography>
                    </Box>
                    <Stepper />
                    <Form/>
                </Box>
            </Box>
        </Box>
    )
}

export default Home
