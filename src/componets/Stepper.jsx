import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function Stepper({}) {
    return (
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between",  padding:"2%"}}>
            <Grid sx={{ fontWeight: 'bold' }}>
                <Typography sx={{ fontWeight: 'bold', p:3 }}>
                    <span>1</span><br/>
                    <span>Business Info</span>
                </Typography> 
            </Grid>
            <Grid sx={{ height: "2px", width: "40%", background: "#8c8c8c;" }} >
                
            </Grid>
            <Grid>
            <Typography 
            sx={{
                 p:3, 
                // fontWeight: 'bold' 
            }}
            >
                    <span>2</span><br/>
                    <span>Confirmation</span>
                </Typography> 
            </Grid>
            
        </Box>
    )
}

export default Stepper
