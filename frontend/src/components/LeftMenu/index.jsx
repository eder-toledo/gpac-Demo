import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 200,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function LetfMenu() {
  const classes = useStyles();
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  return (
    <Box>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem button>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </List>
      <Box>
        <p>{time.toLocaleDateString("en-us", { weekday: "long" })}</p>
        <p>
          {time.toLocaleDateString("en-us", { month: "short" })}{" "}
          {time.toLocaleDateString("en-us", { day: "numeric" })}th
        </p>
        <p>{time.toLocaleTimeString([], { timeStyle: "short" })}</p>
        <p>Actual time</p>
      </Box>
    </Box>
  );
}
