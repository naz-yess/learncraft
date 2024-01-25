import React from "react";
import Banner from "../Assets/backgroundImage.png";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("../components/Course.js");
  };
  return (
    <Container
      sx={{
        height: "613px",
        padding: "10px 40px",
        alignItems: "center",
        alignSelf: "stretch",
      }}
    >
      <Box
        className="home-banner-container"
        sx={{
          background: `url(${Banner})`,
          borderRadius: "40px",
        }}
      >
        <Box className="home-text-section">
          <Typography className="primary-heading" variant="h3">
            Start to learn new languages
          </Typography>
          <p className="primary-text">
            Welcome to LearnCraft Academy, your premier destination for
            unlocking the world of languages through the power of e-learning. At
            LearnCraft, we believe in the transformative potential of language
            education, and our platform is meticulously designed to provide you
            with an immersive and dynamic learning experience.
          </p>
          <Button
            variant="contained"
            onClick={handleClick}
            sx={{
              backgroundColor: "white",
              color: "#1A0F3B",
              borderRadius: "100px",
              fontWeight: "700",
              lineHeight: "150%",
              fontFamily: "inherit",
              display: "flex",
              width: "250px",
              padding: "20px 48px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              ":hover": {
                backgroundColor: "#1A0F3B",
                color: "white",
              },
            }}
          >
            Get started
          </Button>{" "}
        </Box>
      </Box>
    </Container>
  );
}

export default Hero;
