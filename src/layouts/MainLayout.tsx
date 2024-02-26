import React, { ReactNode } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  MenuItem,
  Select,
  SelectChangeEvent,
  IconButton,
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "../context/ThemeContext";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { toggleTheme, mode } = useTheme();
  const { i18n } = useTranslation();

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            rodrigoalexandre.dev
          </Typography>
          <IconButton onClick={toggleTheme} color="inherit">
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Select
            value={i18n.language}
            onChange={handleChangeLanguage}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="en">🇬🇧 English</MenuItem>
            <MenuItem value="pt">🇧🇷 Português</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>
      {/* Ajuste para o conteúdo não ficar atrás da AppBar */}
      <Toolbar />
      {children}
      <Box
        component="footer"
        sx={{ bgcolor: "background.paper", py: 6, textAlign: "center" }}
      >
        <Typography variant="body1" color="text.secondary" gutterBottom>
          &copy; {new Date().getFullYear()} Jaguarete Studio. Todos os direitos
          reservados.
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <a
            href="tel:+5511943895309"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            📞 +55 11 94389-5309
          </a>
          <a
            href="mailto:rodrigo.anst@gmail.com"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            📧 rodrigo.anst@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/rodrigoalexandre79/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            🔗 LinkedIn
          </a>
        </Stack>
      </Box>
    </>
  );
};

export default MainLayout;
