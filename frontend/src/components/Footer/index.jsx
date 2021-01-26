import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#1A1C21 0% 0% no-repeat padding-box",
    opacity: 1,
  },
  copy: {
    textAlign: "center",
    font: "normal normal 300 14px/18px Montserrat",
    letterSpacing: "0.28px",
    color: "#CECECE",
    opacity: 1,
  },
  links: {
    textAlign: "center",
    font: "normal normal 300 14px/18px Montserrat",
    letterSpacing: "0.28px",
    color: "#C1C1C1",
    opacity: 1,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.copy}>GPAC Directory v0.1 - 2019</span>
      <span className={classes.links}>
        <a href="">Help</a> - <a href="">Tutorials</a> - <a href="">Support</a>{" "}
        - <a href="">FAQ's</a>
      </span>
    </div>
  );
}
