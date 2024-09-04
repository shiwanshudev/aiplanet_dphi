"use client";
import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material/TextField";

export default function Input({ name, ...rest }: TextFieldProps) {
  return (
    <TextField
      id="outlined-basic"
      label=""
      variant="outlined"
      size="small"
      name={name}
      {...rest}
      required
    />
  );
}
