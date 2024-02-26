import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "React_Native",
  "Next.js",
  "Node.js",
  "Express",
  "Jest",
  "MongoDB",
  "Redux",
  "styledcomponents",
  "Sass",
  "VSCode",
  "Ubuntu",
  "Linux",
  "gnubash",
  "Figma",
  "googlecloud",
  "amazonaws",
  "Scrum",
  "Jira",
  "Confluence",
  "git",
  "gitlab",
  "github",
  "githubcopilot",
  "openai",
  "androidstudio",
  "android",
  "mui",
  "sass",
];

const TechBadges: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  // Função para construir a URL do badge
  const buildBadgeURL = (tech: string) => {
    return `https://img.shields.io/badge/-${tech}-informational?style=flat&logo=${tech}&logoColor=white`;
  };

  return (
    <Box sx={{ p: 2, padding: theme.spacing(6) }}>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", marginBottom: theme.spacing(2) }}
      >
        {t("sections.techBadges")}
      </Typography>
      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
        {technologies.map((tech) => (
          <img
            src={buildBadgeURL(tech)}
            alt={tech}
            key={tech}
            style={{
              margin: "16px",
              transform: "scale(1.5)",
              display: "inline-block",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default TechBadges;
