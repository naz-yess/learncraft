import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";


export const PromotionsContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "40px 0px 40px 0px",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0px 20px 0px",
  overflow: "hidden",
  backgroundColor: "#94B1FE",
}));

export const MessageText = styled(Typography)(({ theme }) => ({
     fontFamily: '"Montez", "cursive"',
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
  color:"white",
  fontSize: "1.5rem",
}));