import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const CustomTextField = styled((props) => <TextField {...props} />)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '7px',
    borderColor: theme.palette.grey[700],
    height: "46px",
    '& fieldset': {
      borderColor: theme.palette.grey[700],
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.dark,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.dark,
    },
  },
  '& .MuiOutlinedInput-input': {
    color: theme.palette.text.dark,
  },
  '& .MuiOutlinedInput-input::placeholder': {
    color: theme.palette.primary.light,
    opacity: '0.8',
  },
  '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.light,
  },
  '& .Mui-disabled .MuiOutlinedInput-input': {
    color: theme.palette.primary.light,
  },
}));

export default CustomTextField;
