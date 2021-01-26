import React from "react";
import { useCandidates } from "../../context/candidates-context";
import Table from "@material-ui/core/Table";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";

export default function ListCandidates() {
  const { candidates } = useCandidates();

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Industry</TableCell>
            <TableCell>Job Position</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Location</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {candidates === null ? (
            <span>Loading...</span>
          ) : (
            candidates.map((candidate) => {
              return (
                <TableRow>
                  <TableCell>
                    <Avatar variant="text" color="default"></Avatar>
                  </TableCell>
                  <TableCell>
                    {candidate.first_name} {candidate.last_name}
                  </TableCell>
                  <TableCell>Insdustry</TableCell>
                  <TableCell>Job position</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>{candidate.wish_salary}</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>
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
