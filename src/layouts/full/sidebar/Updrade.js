import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import img1 from 'src/assets/images/backgrounds/rocket.png';
import { Link } from "react-router-dom";

export const Upgrade = () => {
    return (
        <Box
            display={'flex'}
            alignItems="center"
            gap={2}
            sx={{ m: 3, p: 3, bgcolor: `${'primary.light'}`, borderRadius: '8px' }}
        >
            <>
                <Box>
                    <Typography variant="h6" mb={1}>Unlimited Access</Typography>
                    <Button color="primary" component={Link} to="/auth/login" variant="contained" aria-label="logout" size="small">
                        Signup
                    </Button>
                </Box>
                <Box mt="-35px">
                    <img alt="Remy Sharp" src={img1} width={100} />
                </Box>
            </>
        </Box>
    );
};
