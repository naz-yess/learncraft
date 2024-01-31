import * as React from "react";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CardHeader } from "@mui/material";
import { useNavigate } from "react-router-dom";



const cards = [
  {
    title: "Korean A1",
    subheader: "N/A",
    
  },
  {
    title: "Korean A2",
    subheader: "N/A",
   
  },
  {
    title: "Korean B1",
    subheader: "N/A",
   
  },
  {
    title: "Korean B2",
    subheader: "N/A",
   
  },
  {
    title: "Korean C1",
    subheader: "N/A",
 
  },
  {
    title: "Korean C2",
    subheader: "N/A",
   
  },
];


const defaultTheme = createTheme();

export default function Album() {
  const navigate = useNavigate();

  const handleEnglishClick = () => {
    navigate("/Course");
  }

  const handleGermanClick = () => {
    navigate("/CourseGerman");
  }


  const handleKoreanClick = () => {
    navigate("/CourseKorean");
  }

  const handle404Click = () => {
    navigate("/ErrorButton");
  }


  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            
            pt: 8,
            pb: 6,
          }}
        >
          <Container>
            <Typography
              component="h1"
              variant="h2"
              textAlign="center"
              justifyContent={'center'}
              color="white"
              gutterBottom
              sx={{
                "@media (max-width:320px)": {
                  fontSize: "20px", // For small devices
                },
                "@media (max-width:600px)": {
                  fontSize: "40px", // For small devices
                },
                "@media (min-width:900px)": {
                  fontSize: "50px", // For medium devices
                },
                "@media (min-width:1200px)": {
                  fontSize: "55px", // For large devices
                },
                "@media (min-width:1536px)": {
                  fontSize: "75px", // For extra large devices
                },
              }}
            >
              Lets gooooo!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                sx={{ backgroundColor: "#9FB1F9", borderRadius: "100px" }}
                onClick={handleEnglishClick}
              >
                English
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#9FB1F9", borderRadius: "100px" }}
                onClick={handleGermanClick}
              >
                German
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#9FB1F9", borderRadius: "100px" }}
                onClick={handleKoreanClick}
              >
                Korean
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #9FB1F9",
                    borderRadius: "40px",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />

                  <CardHeader
                    sx={{ flexGrow: 1 }}
                    title={card.title}
                    subheader={card.subheader}
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{
                      align: "center",
                    }}
                  />
                  <CardActions
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px",
                    }}
                  >
                    <Button
                      onClick={ handle404Click}
                      size="small"
                      sx={{
                        borderRadius: "20px",
                        backgroundColor: "#9FB1F9",
                        color: "white",
                        fontWeight: "500",
                        "&:hover": {
                          // Corrected here
                          backgroundColor: "#1A0F3B",
                          color: "white",
                        },
                      }}
                    >
                      Start
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}



