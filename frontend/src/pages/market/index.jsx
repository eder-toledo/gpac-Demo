import { Typography, Button } from "@material-ui/core";
import React from "react";
import ListCandidates from "../../components/ListCandidates";

export default function Index() {
  return (
    <div>
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
