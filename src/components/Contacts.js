import React from 'react';
import { Container, Typography, Link, Grid, Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handle404Click = () => {
    navigate("/ErrorButton");
  }
  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid white`,
        mt: 8,
        py: [5, 17],
        
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
        <Grid item xs={6} sm={3}>
          <Typography variant="h6" sx={{color: 'white'}} gutterBottom textAlign="center" > 
            LearnCraft
          </Typography>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" gap={2}>
            <Link href="https://www.instagram.com/n.yessenbay?igsh=MWRwZmg2N2wzMnI4eQ%3D%3D&utm_source=qr"  color="#94B1FE" sx={{ display: 'inline-flex', '&:hover': { color: 'white' } }}>
              <InstagramIcon   />
            </Link>
            <Link href="https://facebook.com"  color="#94B1FE" sx={{ display: 'inline-flex', '&:hover': { color: 'white' } }}>
              <FacebookIcon  />
            </Link>
            <Link href="https://youtube.com/@nazerkeesenbai411?si=AQWrSNk3GswyycOt" color="#94B1FE" sx={{ display: 'inline-flex', '&:hover': { color: 'white' } }}>
              <YouTubeIcon  />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3} textAlign="center" >
          <Typography variant="h6" sx={{color: 'white'}} gutterBottom  >
            Legal
          </Typography>
          <ul>
            <li>
              <Link onClick={handle404Click}  variant="subtitle1" sx={{color: 'white'}} >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link onClick={handle404Click} href="#" variant="subtitle1" sx={{color: 'white'}}>
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
