import React from "react";
import Slider from "react-slick";
import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

// Importa as imagens dos prêmios localmente
import award1Image from "../../assets/images/Awards1.png";
import award3Image from "../../assets/images/awards2.png";
import award2Image from "../../assets/images/awards3.png";

const AwardsSection: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  };

  const awards = [
    {
      id: "award1",
      title: t("awards.award1.title"),
      image: award1Image,
      description: t("awards.award1.description"),
    },
    {
      id: "award2",
      title: t("awards.award2.title"),
      image: award2Image,
      description: t("awards.award2.description"),
    },
    {
      id: "award3",
      title: t("awards.award3.title"),
      image: award3Image,
      description: t("awards.award3.description"),
    },
  ];

  return (
    <Box
      sx={{ width: "100vw", height: "75vh", backgroundColor: "secondary.main" }}
    >
      <Slider {...settings}>
        {awards.map((award) => (
          <Box
            key={award.id}
            sx={{
              minWidth: "100vw",
              height: "75vh",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right center",
              backgroundImage: `url(${award.image})`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: theme.palette.common.white,
              padding: theme.spacing(4),
            }}
          >
            <Box
              sx={{
                width: "60%", // Ajuste a largura conforme necessário
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: theme.spacing(4),
                textAlign: "left",
              }}
            >
              <Typography variant="h3">{award.title}</Typography>
              <Typography variant="h5">{award.description}</Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default AwardsSection;
