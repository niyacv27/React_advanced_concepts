import { Grid } from "@mui/material";
import CounterCard from "../components/CounterCard";

export default function Dashboard() {
  return (
    <div className="page-content">
      <Grid container spacing={3}>
        <Grid item>
          <CounterCard />
        </Grid>
      </Grid>
    </div>
  );
}
