import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import img1 from 'src/assets/images/backgrounds/rocket.png';

const Upgrade = () => {
    return (
        <Box
            display={'flex'}
            alignItems="center"
            gap={2}
            sx={{ my: 3, p: 3, bgcolor: `${'primary.light'}`, borderRadius: '8px' }}
        >
            <>
                <Box>
                    <Typography variant="h6" mb={1}>Check Pro Version</Typography>
                    <Button color="primary" target="_blank" href="https://adminmart.com/product/modernize-react-mui-dashboard-template/?ref=56#product-demo-section" variant="contained" aria-label="logout" size="small">
                        Check
                    </Button>
                </Box>
                <Box sx={{marginTop:"-35px",marginRight: "-24px"}}>
                    <img alt="Remy Sharp" src={img1} width={100} />
                </Box>
            </>
        </Box>
    );
};

export default Upgrade;