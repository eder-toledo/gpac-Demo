import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useCandidates } from "../../context/candidates-context";
import { List, ListItem, Typography, Grid } from "@material-ui/core";
import MapCandidates from "../MapCandidates";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#20232B 0% 0% no-repeat padding-box",
    opacity: 1,
    color: "#FFFFFF",
  },
  element: {
    "&:hover": {
      background: "#323C4A",
    },
  },
}));

export default function MapListCandidates() {
  const classes = useStyles();
  const { candidates } = useCandidates();

  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={4}>
        <List>
          {candidates === null ? (
            <span>Loading...</span>
          ) : (
            candidates.map((candidate) => {
              return (
                <ListItem className={classes.element} key={candidate.id}>
                  <Grid container spacing={0}>
                    <Grid item xs={7}>
                      <Typography variant="subtitle2">Company</Typography>
                      <Typography variant="subtitle1" display="block">
                        {candidate.first_name} {candidate.last_name}
                      </Typography>
                      <Typography variant="subtitle2">
                        {candidate.title}
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Typography variant="body2" align="right">
                        {candidate.location === null
                          ? ""
                          : JSON.parse(candidate.location).name}
                      </Typography>
                      <Typography variant="body2" align="right">
                        {candidate.wish_salary}
                      </Typography>
                      <Typography variant="body2" align="right">
                        {candidate.phone}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
              );
            })
          )}
        </List>
      </Grid>
      <Grid item xs={8}>
        <MapCandidates />
      </Grid>
    </Grid>
  );
}
