import { Container, Typography, Button, Stack, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Box sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ mb: 2 }}>
          YadhuKrishna T M
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Android Developer
        </Typography>
        <Button variant="contained" onClick={() => navigate("/projects")}>
          View Projects
        </Button>
      </Container>
    </Box>
  );
}