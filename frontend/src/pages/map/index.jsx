import React from "react";
import { useCandidates } from "../../context/candidates-context";
import IndexPage from "../index";
import Grid from "@material-ui/core/Grid";
import { Box, Checkbox } from "@material-ui/core";
import MapListCandidates from "../../components/MapListCandidates";

export default function Index() {
  const { selectedUser } = useCandidates();

  if (selectedUser === null) {
    return <IndexPage />;
  }

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
      <MapListCandidates />
    </div>
  );
}
