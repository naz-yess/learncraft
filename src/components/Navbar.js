import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

const pages = ["Cources", "About", "Contacts"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white"}}
      
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ImportContactsIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "#1A0F3B",
              textDecoration: "none",
              flexGrow: 1,
              fontFamily: "Poppins"
            }}
          >
            LearnCraft
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}  >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: '#1A0F3B' }}
              
            >
              <MenuIcon />
            </IconButton >
            <Menu
              id="menu-appbar"
              
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    direction="raw"
                    justifyContent="center"
                    alignItems="center"
                    spacing={12}
                    sx={{ color: '#1A0F3B' }}
                   
                    
                    
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ImportContactsIcon
           sx={{ color: '#1A0F3B', display: { xs: "flex", md: "none", }, mr: 1, }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Poppins",      
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: '#1A0F3B' 
            }}
          >
            LearnCraft
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ marginLeft: "auto",  display: "block", pr: 5,  color: '#1A0F3B', fontWeight: '700'  }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
