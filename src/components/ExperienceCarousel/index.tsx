import React from "react";
import Slider from "react-slick";
import { Paper, Box, Typography, useTheme } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

interface JobCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
}

const JobCard: React.FC<JobCardProps> = ({
  company,
  role,
  period,
  description,
}) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={10}
      sx={{
        padding: 4,
        margin: "auto",
        minWidth: 300,
        minHeight: 400,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: 3,
        transition: "box-shadow 0.3s ease-in-out", // Adiciona transição para o box-shadow
        "&:hover": {
          boxShadow: 20, // Aumenta a sombra quando o mouse está sobre o card
        },
      }}
    >
      <Typography variant="h6">{company}</Typography>
      <Typography variant="subtitle1">{role}</Typography>
      <Typography variant="body2">{period}</Typography>
      <Typography variant="body2">{description}</Typography>
    </Paper>
  );
};

const ExperienceCarousel: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const experiences = t("experience", { returnObjects: true });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ padding: "4rem" }}>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", marginBottom: theme.spacing(2) }}
      >
        {t("sections.experiences")}
      </Typography>
      <Slider {...settings}>
        {Object.entries(experiences).map(([key, job]) => (
          <Box key={key} sx={{ padding: "1rem" }}>
            <JobCard {...job} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ExperienceCarousel;
