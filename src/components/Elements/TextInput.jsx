import React from "react";
import { TextField } from "@mui/material";

const TextInput = ({ label, value, onChange, icon }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      fullWidth
      margin="normal"
      size="small"
      variant="outlined"
    />
  );
};

export default TextInput;
