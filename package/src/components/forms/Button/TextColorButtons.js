import React from "react";

import { Box, Button } from "@mui/material";

import BaseCard from "../../BaseCard/BaseCard";

const TextColorButtons = () => {
  return (
    <BaseCard title="Color Buttons" chiptitle="Text Buttons">
      <Box
        sx={{
          display: {
            xs: "inline",
            sm: "flex",
            lg: "flex",
          },
          justifyContent: "center",
        }}
      >
        <Button
          color="primary"
          sx={{
            mr: 1,
            mb: {
              xs: 1,
              sm: 0,
              lg: 0,
            },
          }}
        >
          Primary
        </Button>
        <Button
          color="secondary"
          sx={{
            mr: 1,
            mb: {
              xs: 1,
              sm: 0,
              lg: 0,
            },
          }}
        >
          Secondary
        </Button>
        <Button
          color="error"
          sx={{
            mr: 1,
            mb: {
              xs: 1,
              sm: 0,
              lg: 0,
            },
          }}
        >
          Error
        </Button>
        <Button
          color="warning"
          sx={{
            mr: 1,
            mb: {
              xs: 1,
              sm: 0,
              lg: 0,
            },
          }}
        >
          Warning
        </Button>
        <Button
          color="success"
          sx={{
            mr: 1,
            mb: {
              xs: 1,
              sm: 0,
              lg: 0,
            },
          }}
        >
          Success
        </Button>
      </Box>
    </BaseCard>
  );
};

export { TextColorButtons };
