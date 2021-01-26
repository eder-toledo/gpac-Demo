import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useCandidates } from "../../context/candidates-context";
import { List, ListItem, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#34343C 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000005",
    borderRadius: "5px",
    opacity: 1,
  },
}));
console.log("render");
export default function MapListCandidates() {
  const classes = useStyles();
  const { candidates } = useCandidates();

  return (
    <List>
      {candidates === null ? (
        <span>Loading...</span>
      ) : (
        candidates.map((candidate) => {
          return (
            <Grid container spacing={0}>
              <Grid item xs={4}>
                <ListItem key={candidate.id}>
                  <Typography>Company</Typography>
                  <Typography>Aurora Coding</Typography>
                  <Typography>Development</Typography>
                </ListItem>
              </Grid>
              <Grid item xs={8}>
                Map
              </Grid>
            </Grid>
          );
        })
      )}
    </List>
  );
}
