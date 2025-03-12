import React from "react";
import { Box, IconButton } from "@mui/material";
import BaseCard from "../../BaseCard/BaseCard";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const IconColorButtons = () => {
  return (
    <BaseCard
      title="Color Buttons"
      chiptitle="Icon Buttons"
      variant="outlined"
      sx={{
        p: 0,
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton
          variant="contained"
          color="primary"
          sx={{
            mr: 1,
          }}
        >
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton
          variant="contained"
          color="secondary"
          sx={{
            mr: 1,
          }}
        >
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton
          variant="contained"
          sx={{
            mr: 1,
            color: "error.main",
          }}
        >
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton
          variant="contained"
          sx={{
            mr: 1,
            color: "warning.main",
          }}
        >
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton
          variant="contained"
          color="success"
          sx={{
            mr: 1,
            color: "success.main",
          }}
        >
          <NotificationsNoneOutlinedIcon />
        </IconButton>
      </Box>
    </BaseCard>
  );
};

export { IconColorButtons };
