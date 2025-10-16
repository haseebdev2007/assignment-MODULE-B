import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Grid, CircularProgress } from "@mui/material";

export default function FoodCardSection() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=") // API endpoint
      .then((res) => res.json())
      .then((data) => {
        setFoods(data.meals || []); // meals array
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: "center", fontWeight: "bold" }}>
        Food Menu
      </Typography>

      <Grid container spacing={3}>
        {foods.map((food) => (
          <Grid item xs={12} sm={6} md={4} key={food.idMeal}>
            <Card sx={{ maxWidth: 345, mx: "auto", "&:hover": { transform: "scale(1.05)", transition: "0.3s" } }}>
              <CardMedia
                component="img"
                height="200"
                image={food.strMealThumb}
                alt={food.strMeal}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {food.strMeal}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {food.strArea} Cuisine
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {food.strInstructions.substring(0, 80)}...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
