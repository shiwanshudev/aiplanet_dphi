"use client";
import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { level } from "../utils/constants";
import { SelectProps } from "@mui/material";

export default function SelectLevel({ className, ...rest }: SelectProps) {
  const { EASY, DIFFICULT, HARD } = level;
  const [difficulty, setDifficulty] = useState(EASY);

  return (
    <>
      <Select
        labelId="level"
        id="level"
        value={difficulty}
        label="level"
        name="level"
        onChange={(event) => setDifficulty(event.target.value as string)}
        className={className}
        size="small"
        {...rest}
        defaultValue={EASY}
        sx={{
          "& legend": { display: "none" },
          "& fieldset": { top: 0 },
        }}
      >
        <MenuItem value={EASY} defaultChecked>
          Easy
        </MenuItem>
        <MenuItem value={DIFFICULT}>Medium</MenuItem>
        <MenuItem value={HARD}>Hard</MenuItem>
      </Select>
    </>
  );
}
