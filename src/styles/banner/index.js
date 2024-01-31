import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "center",
  maxWidth: "xl",
  height: "100%",
  padding: "100px 100px",
  background: "#1A0F3B",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BannerContent = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  alignItems: "center", 
  maxWidth: 420,
  padding: "30px",
  gap: "40px",

  [theme.breakpoints.down("md")]: {
    width: "350px",
    gap: "20px",
   
  },
  [theme.breakpoints.down("sm")]: {
    width: "280px",
    gap: "15px",

   
  },
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "500px",
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "280px",
    height: "300px",
  },
}));

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
  lineHeight: 1,
  fontSize: "72px",
  marginBottom: "20px",
  color: "white",
  fontFamily: '"Montez", "cursive"',
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  color: "white",
  fontFamily: '"Montez", "cursive"',
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

export const BannerButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "#1A0F3B",
  borderRadius: "100px",
  fontWeight: "700",
  lineHeight: "150%",
  fontFamily: "Inter",
  display: "flex",
  width: "250px",
  padding: "20px 0px",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  ":hover": {
    backgroundColor: "#1A0F3B",
    color: "white",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
    width: "120px",
  },
}));
