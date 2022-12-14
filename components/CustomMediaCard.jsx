import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, } from "@mui/material";
import styles from "../styles/MediaCard.module.css";

export default function CustomMediaCard(props,) {
  const { item, } = props;

  return (
    <Card className={styles.card}>
      <Grid
        container
        sx={{
          height: "250px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item sx={{ height: "100%", }} xs={4} md={6}>
          <CardMedia
            component="img"
            image={item.imageSrc}
            alt={item.imageAlt}
            className={styles.cardImage}
            sx={{ backgroundColor: item.backgroundColor, }}
          />
        </Grid>
        <Grid item sx={{ height: "100%", }} xs={8} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", }}>
            <CardContent>
              <Typography component="div" variant="h5">
                <b>{item.name}</b>
              </Typography>
              <Typography variant="body2" component="div" sx={{ mt: 1, }}>
                {item.description}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
