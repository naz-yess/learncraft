import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ImportContactsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={NavLink}
            to="/"
            exact
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#1A0F3B',
              textDecoration: 'none',
              flexGrow: 1,
              fontFamily: 'Poppins'
            }}
          >
            LearnCraft
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: '#1A0F3B' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={() => scrollToSection('about')}>
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection('contacts')}>
                <Typography textAlign="center">Contacts</Typography>
              </MenuItem>
              <MenuItem component={NavLink} to="/course">
                <Typography textAlign="center">Course</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{ color: '#1A0F3B', fontWeight: 700 }} onClick={() => scrollToSection('about')}>
              About
            </Button>
            <Button sx={{ color: '#1A0F3B', fontWeight: 700 }} onClick={() => scrollToSection('contacts')}>
              Contacts
            </Button>
            <Button component={NavLink} to="/course" sx={{ color: '#1A0F3B', fontWeight: 700 }}>
              Course
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
