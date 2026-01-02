import { Box, Container, Typography, Grid, Paper } from "@mui/material";
 export default function AboutPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ mb: 3 }}>
 About Me
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography color="text.secondary">
            "I am a Student with a passion for Mobile Development and Web Development. With a background in Btech in Computer Science Engineering, I specialize in helping people to achieve their technical goals. I thrive on solving complex problems and am always looking for new ways to innovate in the IT space. Outside of work, you’ll likely find me at watching Movies ."
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 2 }}>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2.5, borderRadius: 3 }} elevation={0}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Quick Info
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Location: Thriprayar
                <br />
                Email: yadhuthiyakkat@gmail.com
                <br />
                Focus: React, Flutter , Dart, Kotlin
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
 }