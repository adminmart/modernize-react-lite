import React, { useState } from 'react';
import {
  Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Button,

} from '@mui/material';
import PropTypes from 'prop-types';

// components
import Profile from './Profile';
import { IconBellRinging, IconMenu } from '@tabler/icons-react';

const Header = (props) => {

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={props.toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>

        <Box>
          <IconButton
            size="large"
            aria-label="show 11 new notifications"
            color="inherit"
            aria-controls="notification-menu"
          >
            <Badge variant="dot" color="primary">
              <IconBellRinging size="21" stroke="1.5" />
            </Badge>
          </IconButton>

        </Box>
        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          <Button variant="contained" color="primary" target="_blank" href="https://adminmart.com/product/modernize-react-mui-dashboard-template/?ref=56">
            Check Pro Template
          </Button>
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
