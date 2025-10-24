import React from "react";
import { Box, CssBaseline, Container, Grid, Typography, Paper, Avatar } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const cards = [
  { title: "Total Sales", value: "$24,300", icon: <ShoppingCartIcon />, color: "#1976d2" },
  { title: "Revenue", value: "$12,450", icon: <TrendingUpIcon />, color: "#2e7d32" },
  { title: "Customers", value: "1,230", icon: <PeopleIcon />, color: "#f9a825" },
  { title: "Bank Balance", value: "$55,000", icon: <AccountBalanceIcon />, color: "#d32f2f" },
];

const lineData = [
  { name: "Jan", uv: 4000, pv: 2400 },
  { name: "Feb", uv: 3000, pv: 1398 },
  { name: "Mar", uv: 2000, pv: 9800 },
  { name: "Apr", uv: 2780, pv: 3908 },
  { name: "May", uv: 1890, pv: 4800 },
  { name: "Jun", uv: 2390, pv: 3800 },
  { name: "Jul", uv: 3490, pv: 4300 },
];

const barData = [
  { name: "Product A", sales: 4000 },
  { name: "Product B", sales: 3000 },
  { name: "Product C", sales: 2000 },
  { name: "Product D", sales: 2780 },
  { name: "Product E", sales: 1890 },
];

export default function App() {
  return (
    <Box sx={{ bgcolor: "#f0f2f5", minHeight: "100vh" }}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Header */}
        <Typography variant="h4" gutterBottom fontWeight="bold" color="#333">
          Professional Dashboard
        </Typography>

        {/* Cards */}
        <Grid container spacing={3}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                sx={{
                  p: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: 3,
                  boxShadow: 3,
                  bgcolor: "#fff",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
                }}
              >
                <Box>
                  <Typography variant="subtitle2" color="textSecondary">
                    {card.title}
                  </Typography>
                  <Typography variant="h5" fontWeight="bold" color="#111">
                    {card.value}
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: card.color, width: 56, height: 56 }}>{card.icon}</Avatar>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Charts */}
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3, bgcolor: "#fff" }}>
              <Typography variant="h6" gutterBottom fontWeight="bold" color="#333">
                Monthly Revenue
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="name" stroke="#8884d8" />
                  <YAxis stroke="#8884d8" />
                  <Tooltip />
                  <Line type="monotone" dataKey="uv" stroke="#1976d2" strokeWidth={3} dot={{ r: 5 }} />
                  <Line type="monotone" dataKey="pv" stroke="#ff5722" strokeWidth={3} dot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3, bgcolor: "#fff" }}>
              <Typography variant="h6" gutterBottom fontWeight="bold" color="#333">
                Product Sales
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="name" stroke="#8884d8" />
                  <YAxis stroke="#8884d8" />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#1976d2" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
