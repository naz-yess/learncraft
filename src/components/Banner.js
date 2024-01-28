import { useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import { BannerContainer, BannerContent, BannerTitle, BannerDescription, BannerImage, BannerButton } from "../styles/banner";
import { useNavigate } from "react-router-dom";

export default function Banner() {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate("../components/Course.js");
  }
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <BannerContainer>
            <BannerImage src="./Assets/clip-summer-rest.png" alt="reading" />
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
