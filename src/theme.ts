import { createTheme } from "@mui/material/styles";

// Tema Claro
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ee6c4d", // Burnt Sienna
    },
    secondary: {
      main: "#9b8816", // Olive
    },
    background: {
      default: "#ecfee8", // Honeydew
      paper: "#393e41", // Onyx
    },
    text: {
      primary: "#040f0f", // Rich Black
    },
  },
});

// Tema Escuro
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ee6c4d", // Burnt Sienna
    },
    secondary: {
      main: "#7b6e15", // Olive adaptado
    },
    background: {
      default: "#393e41", // Onyx
      paper: "#040f0f", // Rich Black adaptado
    },
    text: {
      primary: "#d1d1d1", // Honeydew adaptado para texto
    },
  },
});

export { lightTheme, darkTheme };
