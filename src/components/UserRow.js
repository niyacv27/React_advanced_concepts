import React from "react";
import { TableRow, TableCell } from "@mui/material";

const UserRow = React.memo(function UserRow({ user }) {
  return (
    <TableRow>
      <TableCell sx={{ color: "#000000" }}>
        {user.name}
      </TableCell>
      <TableCell sx={{ color: "#000000" }}>
        {user.email}
      </TableCell>
    </TableRow>
  );
});

export default UserRow;
