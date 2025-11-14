import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const location = useLocation();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Movies", path: "/movie" },
    { name: "Login", path: "/login" }, // add this

  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#0D47A1" }}>
        <Toolbar>
          {/* Hamburger menu */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>

          {/* Dropdown menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{ sx: { backgroundColor: "#FFFFFF" } }}
          >
            {navLinks.map((link) => (
              <MenuItem
                key={link.name}
                component={Link}
                to={link.path}
                onClick={handleClose}
                selected={location.pathname === link.path}
                sx={{
                  color: "#0D47A1",
                  "&.Mui-selected": { backgroundColor: "#BBDEFB" },
                  "&:hover": { backgroundColor: "#E3F2FD" },
                }}
              >
                {link.name}
              </MenuItem>
            ))}
          </Menu>

          {/* App Title */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", display: { xs: "none", md: "block" }, color: "#BBDEFB" }}
          >
            MyApp
          </Typography>

          {/* Desktop links */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navLinks.map((link) => (
              <Button
                key={link.name}
                component={Link}
                to={link.path}
                color="inherit"
                sx={{
                  color: "#BBDEFB",
                  fontWeight: location.pathname === link.path ? "bold" : "normal",
                  textDecoration: location.pathname === link.path ? "underline" : "none",
                  "&:hover": { backgroundColor: "#1565C0" },
                }}
              >
                {link.name}
              </Button>
            ))}
          </Box>

          {/* Login Button */}
          {/* <Button
            color="inherit"
            sx={{ ml: 2, border: "1px solid #BBDEFB", "&:hover": { backgroundColor: "#1565C0" } }}
          >
            Login
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
