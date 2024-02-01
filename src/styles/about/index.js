import { Typography, CardHeader, CardContent, Button  } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AboutUsTitle = styled(Typography)(({ matches, theme }) => ({
    lineHeight: 1,
    fontSize: "60px",
    marginBottom: "20px",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
    },
  }));


  export const AboutUsSubtitle = styled(Typography)(({ matches, theme }) => ({
    lineHeight: 1,
    fontSize: "17px",
    marginBottom: "20px",
    color: "white",
    
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
  }));


  export const ContentOfCard = styled(CardContent)(({ matches, theme }) => ({
    fontSize: "10px",
    
    [theme.breakpoints.down("md")]: {
      fontSize: "5px",
    },
  }));

  export const ButtonOfCard = styled(Button)(({ matches, theme }) => ({
    fontSize: "15px",
    
    [theme.breakpoints.down("md")]: {
      fontSize: "5px",
    },
  }));

  export const ResponsiveHeaderOfCard = styled(CardHeader)(({ theme }) => ({
    backgroundColor: "#94B1FE",
    padding: theme.spacing(2), 
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1), 
    },
    '& .MuiCardHeader-title': {
     
      fontSize: '1.25rem', 
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem', 
      },
    },
    '& .MuiCardHeader-subheader': {
     
      fontSize: '1rem', 
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.875rem', 
      },
    },
  }));