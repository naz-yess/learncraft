import React from 'react';
import { Container, Typography, Link, Grid, Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="white"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        LearnCraft
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Contacts() {
  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid white`,
        mt: 8,
        py: [3, 6],
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
        <Grid item xs={6} sm={3}>
          <Typography variant="h6" sx={{color: 'white'}} gutterBottom textAlign="center" > 
            LearnCraft
          </Typography>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" gap={2}>
            <Link href="#" color="text.secondary" sx={{ display: 'inline-flex', '&:hover': { color: 'white' } }}>
              <InstagramIcon  />
            </Link>
            <Link href="#" color="text.secondary" sx={{ display: 'inline-flex', '&:hover': { color: 'white' } }}>
              <FacebookIcon />
            </Link>
            <Link href="#" color="text.secondary" sx={{ display: 'inline-flex', '&:hover': { color: 'white' } }}>
              <YouTubeIcon />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3} textAlign="center" >
          <Typography variant="h6" sx={{color: 'white'}} gutterBottom  >
            Legal
          </Typography>
          <ul>
            <li>
              <Link href="#" variant="subtitle1" sx={{color: 'white'}}>
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="#" variant="subtitle1" sx={{color: 'white'}}>
                Terms of use
              </Link>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
