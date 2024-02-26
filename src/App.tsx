import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext"; // Ajuste o caminho conforme necessário
import ExperienceCarousel from "./components/ExperienceCarousel";

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiences" element={<ExperienceCarousel />} />
            <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
