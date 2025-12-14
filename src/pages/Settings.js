import { Typography } from "@mui/material";

export default function Settings() {
  return (
    <div className="page-content">
      <Typography
        variant="h4"
        sx={{ color: "#000000", fontWeight: 600 }}
        gutterBottom
      >
        Settings
      </Typography>

      <Typography sx={{ color: "#000000" }}>
        This page is lazy loaded using React.lazy and Suspense.
      </Typography>
    </div>
  );
}
