import React from "react";
import { useCandidates } from "../../context/candidates-context";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function Index() {
  const { users, setSelectedUser } = useCandidates();

  const selectUser = (event) => {
    setSelectedUser(users.find((x) => x.id == event.target.value));
  };

  return (
    <div className="index">
      <Typography variant="h5" color="initial">
        Welcome, please select user
      </Typography>
      <TextField
        label="Users"
        InputLabelProps={{
          shrink: true,
        }}
        select
        onChange={selectUser}
        SelectProps={{
          native: true,
        }}
      >
        <option value="">Select User</option>
        {users === null
          ? ""
          : users.map((user) => {
              return (
                <option value={user.id}>
                  {user.username}, Role: {user.role.role}
                </option>
              );
            })}
      </TextField>
    </div>
  );
}
