import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Form from '../componets/Form';
import Stepper from '../componets/Stepper';

function Home() {
    return (
        <Box sx={{ display: 'flex', height: "100vh" }}>
            <Box sx={{ bgcolor: 'text.primary', color: "white", width: 1 / 4, height: '100%', }}>
                <Grid align="left" sx={{ p: 5 }}>

                    <Typography variant="h6">Welcome</Typography>
                    <Typography variant="h6">Let's start your journey</Typography>

                    <Typography variant="body2" sx={{ mt: 2 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor.</Typography>
                </Grid>
            </Box>
            <Box sx={{ width: 3 / 4, height: '100%' }} >
                <Box sx={{ p: 5 }}>
                    <Box align="right">
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
