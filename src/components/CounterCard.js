import React from "react";
import { Card, CardContent, Button, Typography, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../features/counterSlice";

export default React.memo(function CounterCard() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        maxWidth: 320,
        background: "linear-gradient(135deg, #ffffff, #f3f7ff)",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: "#000000", 
            mb: 2,
          }}
        >
          Counter: {value}
        </Typography>

        <Stack direction="row" spacing={1}>
          <Button variant="contained" onClick={() => dispatch(increment())}>
            +
          </Button>
          <Button variant="contained" onClick={() => dispatch(decrement())}>
            -
          </Button>
          <Button variant="outlined" onClick={() => dispatch(reset())}>
            Reset
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
});
