import { Box, Container, CssBaseline } from "@mui/material";
import NavBar from "./navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { Outlet } from "react-router";

function App() {
  return (
    <Box sx={{ bgcolor: "#eee", minHeight: "100vh" }}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
