import { Typography, Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListCandidates from "../../components/ListCandidates";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#24292E 0% 0% no-repeat padding-box",
    opacity: 1,
    textAlign: "left",
    font: "normal normal bold 24px/29px Montserrat",
    letterSpacing: "0.48px",
    color: "#FFFFFF",
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">
        <Typography variant="body1"></Typography>
        Market
        <Button variant="text" color="default">
          Add new talent
        </Button>
      </Typography>
      <ListCandidates />
    </div>
  );
}
