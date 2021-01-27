import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useCandidates } from "../../context/candidates-context";
import Table from "@material-ui/core/Table";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#34343C 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000005",
    borderRadius: "5px",
    opacity: 1,
  },
  table: {
    maxWidth: "80%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  td: {
    padding: 0,
    marginBottom: 5,
    borderBottom: 0,
    color: "#FFFFFF",
  },
}));

export default function ListCandidates() {
  const classes = useStyles();
  const { candidates } = useCandidates();

  return (
    <div className={classes.table}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.td}></TableCell>
            <TableCell className={classes.td}>Name</TableCell>
            <TableCell className={classes.td}>Industry</TableCell>
            <TableCell className={classes.td}>Job Position</TableCell>
            <TableCell className={classes.td}>Phone</TableCell>
            <TableCell className={classes.td}>Salary</TableCell>
            <TableCell className={classes.td}>Location</TableCell>
            <TableCell className={classes.td}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {candidates === null ? (
            <span>Loading...</span>
          ) : (
            candidates.map((candidate) => {
              return (
                <TableRow className={classes.root} key={candidate.id}>
                  <TableCell className={classes.td}>
                    <Avatar variant="text" color="default"></Avatar>
                  </TableCell>
                  <TableCell className={classes.td}>
                    {candidate.first_name} {candidate.last_name}
                  </TableCell>
                  <TableCell className={classes.td}>Insdustry</TableCell>
                  <TableCell className={classes.td}>Job position</TableCell>
                  <TableCell className={classes.td}>Phone</TableCell>
                  <TableCell className={classes.td}>
                    {candidate.wish_salary}
                  </TableCell>
                  <TableCell className={classes.td}>Location</TableCell>
                  <TableCell className={classes.td}>
                    <Button variant="text" color="default">
                      View Profile
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}
