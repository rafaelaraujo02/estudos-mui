import React from 'react';
import TextField from '@mui/material/TextField';
import { MaskField } from 'react-mask-field';

// Component with MaskField
function CustomMaskField({ inputRef, ...otherProps }) {
  return <MaskField ref={inputRef} mask="(__) _ ____-____" replacement="_" {...otherProps} />;
}

// Component with Material UI
export default function Mascara() {
  return <TextField InputProps={{ inputComponent: CustomMaskField }} />;
}