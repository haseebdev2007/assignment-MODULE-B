import * as React from "react";
import { Box, Button, TextField, Typography, InputAdornment, IconButton, Paper } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Navbar from "../Navbar";
import Footer from "../Footer";




export default function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aap yahan login logic add kar sakte ho
    console.log("Email:", email, "Password:", password);
  };

  return (
    <>
    <Navbar />
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E3F2FD",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: { xs: "90%", sm: "400px" },
          borderRadius: 3,
          backgroundColor: "#FFFFFF",
        }}
      >
        <Typography variant="h5" sx={{ mb: 3, textAlign: "center", fontWeight: "bold", color: "#0D47A1" }}>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 3 }}
          />

          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#0D47A1",
              "&:hover": { backgroundColor: "#1565C0" },
            }}
          >
            Login
          </Button>

          <Typography
            variant="body2"
            sx={{ mt: 2, textAlign: "center", color: "#0D47A1", cursor: "pointer" }}
          >
            Forgot Password?
          </Typography>
        </form>
      </Paper>
    </Box>
    <Footer />
    </>
  );
}
