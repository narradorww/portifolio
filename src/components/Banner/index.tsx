import React from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Grid,
  Skeleton,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import backgroundImage from "../../assets/images/backgroundBanner.png";

const Banner: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  const appBarHeight = theme.mixins.toolbar.minHeight ?? 64;

  if (!backgroundImage) {
    return <Skeleton variant="rectangular" width={1000} height={400} />;
  }

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "secondary.main",
        color: "white",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        width: "100%",
        maxWidth: "100%",
        minHeight: `calc(110vh - ${appBarHeight}px)`,
        minWidth: "100vw",
        marginTop: `-${appBarHeight}px`,
        display: "flex",
        alignItems: "center",
        textAlign: "right", // Alinha o texto à direita
        px: 3,
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={4}>
          {/* Espaço para a foto */}
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant={isMobile ? "h6" : "h4"}
            component="h1"
            color="text.primary"
            sx={{ fontWeight: "bold", mb: 3, textAlign: "left" }}
          >
            {t("banner.greeting")}
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h4"}
            component="h1"
            color="text.primary"
            sx={{ fontWeight: "bold", mb: 3, textAlign: "left" }}
          >
            {t("banner.description")}
          </Typography>
          <Button
            variant="outlined" // Mudança de 'outlined' para 'contained' para preenchimento
            size="large"
            sx={{
              px: 10,
              bgcolor: "primary.main", // Escolha uma cor do seu tema
              color: "white", // Define a cor do texto para branco para contraste
              "&:hover": {
                bgcolor: "primary.dark", // Cor de fundo do botão quando passar o mouse
              },
              mt: 2, // Espaçamento acima do botão para centralizar com o texto
              alignSelf: "center", // Isso vai centralizar o botão se ele estiver dentro de um flex container
              fontSize: "1.25rem", // Tamanho do texto do botão
            }}
          >
            {t("banner.learnMore")}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
