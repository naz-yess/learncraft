import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const ButtonHeader = styled(Typography)(({ matches, theme }) => ({
    lineHeight: 1,
    fontSize: "48x",
    marginBottom: "20px",
    color: "white",
    
    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
      },
  }));

  export const ButtonSubheader = styled(Typography)(({ matches, theme }) => ({
    lineHeight: 1,
    fontSize: "18x",
    marginBottom: "20px",
    color: "white",
    
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "5px",
      },
  }));