import React from "react";
import Grid from "@material-ui/core/Grid";
import { Box, Checkbox, List, ListItem, Typography } from "@material-ui/core";

export default function index() {
  return (
    <div>
      <Box>
        <span>Show only:</span>
        <span>
          <Checkbox /> Alphas
        </span>
        <span>
          <Checkbox /> Job Orders
        </span>
        <span>
          <Checkbox /> Companies
        </span>
      </Box>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <List>
            <ListItem>
              <Box>
                <Typography>Company</Typography>
                <Typography>Aurora Coding</Typography>
                <Typography>Development</Typography>
              </Box>
              <Box>
                <Typography>Kearny, Ny</Typography>
                <Typography>54789</Typography>
                <Typography>(123) 123 12 12</Typography>
              </Box>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={8}>
          Map
        </Grid>
      </Grid>
    </div>
  );
}
