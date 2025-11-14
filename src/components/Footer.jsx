import React from "react";
import { Box, Typography, Container, Grid, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#0D47A1", color: "#fff", mt: 5, pt: 5, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About / Branding */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              MyApp
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              MyApp is your go-to platform for amazing movies, latest news, and awesome experiences. Stay connected and explore more!
            </Typography>
            <Box>
              <IconButton href="#" sx={{ color: "#fff" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: "#fff" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: "#fff" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: "#fff" }}>
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/" underline="hover" sx={{ color: "#fff" }}>
                Home
              </Link>
              <Link href="/about" underline="hover" sx={{ color: "#fff" }}>
                About
              </Link>
              <Link href="/contact" underline="hover" sx={{ color: "#fff" }}>
                Contact
              </Link>
              <Link href="/movie" underline="hover" sx={{ color: "#fff" }}>
                Movies
              </Link>
              <Link href="/login" underline="hover" sx={{ color: "#fff" }}>
                Login
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Contact Us
            </Typography>
            <Typography variant="body2">Email: abdulhaseeb.std07@gmail.com</Typography>
            <Typography variant="body2">Phone: +923121051767</Typography>
            <Typography variant="body2">Address: Dehli Colony Baldia karachi, Pakistan</Typography>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box sx={{ mt: 4, borderTop: "1px solid #ffffff55", pt: 2, textAlign: "center" }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} MyApp. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
