import React, { useState } from "react";
import { useCandidates } from "../../context/candidates-context";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "#1A1C21 0% 0% no-repeat padding-box",
    opacity: 1,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  text: {
    textAlign: "left",
    font: "normal normal 300 12px/15px Montserrat",
    letterSpacing: "0.24px",
    color: "#FFFFFF",
    opacity: 1,
  },
  textClock: {
    textAlign: "center",
    font: "normal normal 300 12px/15px Montserrat",
    letterSpacing: "0.24px",
    color: "#CECECE",
    opacity: 1,
  },
  clockHour: {
    textAlign: "center",
    font: "normal normal 300 12px/15px Montserrat",
    letterSpacing: "0.24px",
    color: "#FFFFFF",
    opacity: 1,
    font: "normal normal bold 30px/37px Montserrat",
  },
  box: {
    background: "#1A1C21 0% 0% no-repeat padding-box",
  },
  element: {
    "&:hover": {
      background: "#FF3939",
    },
  },
  link: {
    textDecoration: "none",
  },
}));

const menuElements = [
  {
    name: "Dashboard",
    icon: "Group 2.svg",
    url: "/",
  },
  {
    name: "Job Orders",
    icon: "Group 2.svg",
  },
  {
    name: "Market",
    icon: "Group 573.svg",
    url: "/market",
  },
  {
    name: "Companies",
    icon: "Group 2.svg",
  },
  {
    name: "S. Projects",
    icon: "Group 2.svg",
  },
  {
    name: "Map",
    icon: "Group 575.svg",
    url: "/map",
  },
  {
    name: "Tasks Tool",
    icon: "Group 2.svg",
  },
  {
    name: "Sendouts",
    icon: "Group 2.svg",
  },
];

export default function LetfMenu() {
  const { selectedUser } = useCandidates();
  const classes = useStyles();
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  return (
    <Box className={classes.box}>
      <img width="55px" src="/assets/Group 29.svg" />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        {menuElements.map((menuElement) => {
          const link = menuElement.url === null ? "#" : menuElement.url;
          return (
            <Link className={classes.link} to={link} key={menuElement.name}>
              <ListItem className={classes.element} button>
                <ListItemIcon>
                  <Icon>
                    <img src={"/assets/" + menuElement.icon} />
                  </Icon>
                </ListItemIcon>
                <ListItemText
                  className={classes.text}
                  primary={menuElement.name}
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
      <Box className={classes.box}>
        <p className={classes.textClock}>
          {time.toLocaleDateString("en-us", { weekday: "long" })}
        </p>
        <p className={classes.textClock}>
          {time.toLocaleDateString("en-us", { month: "short" })}{" "}
          {time.toLocaleDateString("en-us", { day: "numeric" })}th
        </p>
        <p className={classes.clockHour}>
          {time.toLocaleTimeString([], { timeStyle: "short" })}
        </p>
        <p className={classes.textClock}>Actual time</p>
      </Box>
    </Box>
  );
}
