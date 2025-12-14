import React, { useState, useMemo } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Pagination,
  Box,
  Button,
} from "@mui/material";
import UserRow from "../components/UserRow";


const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  
  const largeList = Array.from({ length: 200 }, (_, i) => ({
    ...data[i % data.length],
    id: i + 1,
    name: `${data[i % data.length].name} ${i + 1}`,
    email: data[i % data.length].email,
  }));

  return largeList;
};


const addUser = async (newUser) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }
  );

  return res.json();
};

export default function Users() {
  const queryClient = useQueryClient();

  
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  
  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  
  const filteredUsers = useMemo(() => {
    return data.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  
  const paginatedUsers = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return filteredUsers.slice(start, start + rowsPerPage);
  }, [filteredUsers, page]);

  if (isLoading) return <p className="page-content">Loading users...</p>;
  if (error) return <p className="page-content">Error loading users</p>;

  return (
    <div className="page-content">
      
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          label="Search User"
          fullWidth
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        <Button
          variant="contained"
          onClick={() =>
            mutation.mutate({
              name: "New User",
              email: "newuser@test.com",
            })
          }
        >
          Add User
        </Button>
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#000000", fontWeight: 600 }}>
              Name
            </TableCell>
            <TableCell sx={{ color: "#000000", fontWeight: 600 }}>
              Email
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {paginatedUsers.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Pagination
          count={Math.ceil(filteredUsers.length / rowsPerPage)}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
        />
      </Box>
    </div>
  );
}
