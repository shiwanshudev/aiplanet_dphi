"use client";
import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { level } from "../utils/constants";
import { SelectProps } from "@mui/material";

export default function SelectLevel({ name, className, ...rest }: SelectProps) {
  const { EASY, MEDIUM, HARD } = level;

  return (
    <>
      <Select
        labelId="level"
        id="level"
        label="level"
        name={name}
        className={className}
        size="small"
        {...rest}
        sx={{
          "& legend": { display: "none" },
          "& fieldset": { top: 0 },
        }}
        required
      >
        <MenuItem value={EASY} defaultChecked>
          Easy
        </MenuItem>
        <MenuItem value={MEDIUM}>Medium</MenuItem>
        <MenuItem value={HARD}>Hard</MenuItem>
      </Select>
    </>
  );
}
