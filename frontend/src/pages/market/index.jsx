import React from "react";
import { useCandidates } from "../../context/candidates-context";
import IndexPage from "../index";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListCandidates from "../../components/ListCandidates";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#24292E 0% 0% no-repeat padding-box",
    opacity: 1,
    textAlign: "left",
    font: "normal normal bold 24px/29px Montserrat",
    letterSpacing: "0.48px",
    color: "#FFFFFF",
  },
  button: {
    float: "right",
    backgroundColor: "#4056F4",
    color: "#FFFFFF",
  },
  title: {
    paddingLeft: 40,
    paddingRight: 40,
  },
}));

export default function Index() {
  const { selectedUser } = useCandidates();
  const classes = useStyles();

  if (selectedUser === null) {
    return <IndexPage />;
  }
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4">
        <Typography variant="body1"></Typography>
        Market
        {selectedUser.role.id == 1 ? (
          ""
        ) : (
          <Link to="/new">
            <Button className={classes.button} variant="text" color="default">
              Add new talent
            </Button>
          </Link>
        )}
      </Typography>
      <ListCandidates />
    </div>
  );
}
