import { Box, Input, TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#20232B 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000033",
    opacity: 1,
    height: 61,
  },
  searchBox: {
    top: 10,
    left: 156,
    width: 893,
    height: 40,
    background: "#2B313B 0% 0% no-repeat padding-box",
    borderRadius: 5,
    opacity: 1,
    color: "#FFFFFF",
  },
  text: {
    textAlign: "left",
    font: "normal normal 300 15px/20px Roboto",
    letterSpacing: "0.3px",
    color: "#FFFFFF",
    opacity: 1,
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.searchBox} component="div">
        <Input className={classes.text} placeholder="Quick search..."></Input> |
        <TextField className={classes.text} select>
          <option></option>
        </TextField>
        |
        <TextField className={classes.text} select>
          <option></option>
        </TextField>{" "}
        |
        <TextField className={classes.text} select>
          <option></option>
        </TextField>
      </Box>
      <span className={classes.text}>Advanced search</span>
      <span className={classes.text}>...</span>
    </div>
  );
}
