import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Container,
 Typography,
  Paper,
 TextField,
  Button,
  Stack,
 } from "@mui/material";
 import SendIcon from "@mui/icons-material/Send";
 export default function ContactPage() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your actual EmailJS credentials
    emailjs
      .sendForm("service_73gj0wo", "template_9yfphvp", form.current, "9-6bjeGoi5aYwdTBq")
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      )
      .finally(() => setLoading(false));
  };
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="sm">
        <Typography variant="h4" sx={{ mb: 3 }}>
          Contact
        </Typography>
        <Paper sx={{ p: 3, borderRadius: 3 }} elevation={0}>
          <form ref={form} onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField name="user_name" label="Name" fullWidth required />
              <TextField name="user_email" label="Email" type="email" fullWidth required />
              <TextField
                name="message"
                label="Message"
                fullWidth
                required
                multiline
                minRows={4}
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Box>
  );
 }