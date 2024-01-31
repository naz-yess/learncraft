/*import { useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material"; */
import { BannerContainer, BannerContent, BannerTitle, BannerDescription, BannerImage, BannerButton } from "../styles/banner";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";


export default function Banner() {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Course");
  }
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <BannerContainer matches={matches}>
            <BannerImage src="https://source.unsplash.com/random?wallpapers" />  
           <BannerContent>
            <BannerTitle variant="h3">
            Start to learn new languages
            </BannerTitle >
            <BannerDescription variant="subtitle">
            Welcome to LearnCraft Academy, your premier destination for unlocking the world of languages through the power of e-learning.
            </BannerDescription> 
            <BannerButton variant="contained"
            onClick={handleClick}>
                Get Started
            </BannerButton>
           </BannerContent>
        </BannerContainer>
    )
  }
