import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { AboutUsSubtitle, AboutUsTitle, ButtonOfCard, ContentOfCard, ResponsiveHeaderOfCard} from "../styles/about";

const tiers = [
  {
    title: "Nazerke Yessenbay",
    description: [
      "CEO",
      "English teacher",
      "Frontend developer",
     
    ],
    buttonText: "Email me",
    buttonVariant: "outlined",
  },
  {
    title: "Akbota Sugarilina",
    description: ["English teacher"],
    buttonText: "Email me",
    buttonVariant: "outlined",
  },
];

const defaultTheme = createTheme();

export default function About() {
  const handleFirstEmailClick = () => {
    window.location.href = "mailto:nazerke1775@gmail.com";
  };

  return (
  
    <ThemeProvider theme={defaultTheme} >
      <Container id="about-section" sx={{ padding: '50px'}}> 
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" }}}
      />
      <CssBaseline />
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <AboutUsTitle 
          component="h1"
          variant="h3"
          align="center"
          color="white"
          gutterBottom
        >
          About US
        </AboutUsTitle >
        < AboutUsSubtitle  align="center" >
          Meet our exceptional team of dedicated educators, each bringing unique
          expertise and passion to inspire and empower every student.
        </ AboutUsSubtitle >
      </Container>

      <Container maxWidth="sm" component="main">
        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems="stretch"
        >
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={6}
              md={6}
              sx={{ display: "flex" }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  width: "100%", // ensure card takes up full width of Grid item
                }}
              >
                <ResponsiveHeaderOfCard
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: "#94B1FE"


                  }}
                />
                <ContentOfCard sx={{ flexGrow: 1 }}>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </ContentOfCard>
                <CardActions sx={{ mt: "auto" }}>
                  <ButtonOfCard
                    fullWidth
                    variant={tier.buttonVariant}
                    onClick={handleFirstEmailClick}
                  >
                    {tier.buttonText}
                  </ButtonOfCard>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      </Container>
    </ThemeProvider>
  
  );
}
