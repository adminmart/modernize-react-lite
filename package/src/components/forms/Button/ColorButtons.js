import React from "react";

import { Box, Button } from "@mui/material";

import BaseCard from "../../BaseCard/BaseCard";

const ColorButtons = () => {
  return (
    <BaseCard title="Color Buttons" chiptitle="Contained Buttons">
      <Box
        sx={{
          textAlign: "center",
          display: {
            xs: "inline",
            sm: "flex",
            lg: "flex",
          },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            mr: 1,
            mb: 1,
          }}
        >
          Primary
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            mr: 1,
            mb: 1,
          }}
        >
          Secondary
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{
            mr: 1,
            mb: 1,
          }}
        >
          Error
        </Button>
        <Button
          variant="contained"
          color="warning"
          sx={{
            mr: 1,
            mb: 1,
          }}
        >
          Warning
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{
            mr: 1,
            mb: 1,
          }}
        >
          Success
        </Button>
      </Box>
    </BaseCard>
  );
};

export { ColorButtons };
