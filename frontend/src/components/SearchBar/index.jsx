import { Box, Input, TextField } from "@material-ui/core";
import React from "react";

export default function SearchBar() {
  return (
    <div>
      <Box component="span">
        <Input placeholder="Quick search..."></Input> |
        <TextField select>
          <option></option>
        </TextField>
        |
        <TextField select>
          <option></option>
        </TextField>{" "}
        |
        <TextField select>
          <option></option>
        </TextField>
      </Box>
      <span>Advanced search</span>
      <span>...</span>
    </div>
  );
}
