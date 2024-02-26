import React from "react";
import { Grid, Typography, Card, CardContent, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const EducationAndSkillsSection: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const yourData = [
    {
      id: "1",
      title: t("education.course1.title"),
      institution: t("education.course1.institution"),
      description: t("education.course1.description"),
      startYear: t("education.course1.startYear"),
      endYear: t("education.course1.endYear"),
    },
    {
      id: "2",
      title: t("education.course2.title"),
      institution: t("education.course2.institution"),
      description: t("education.course2.description"),
      startYear: t("education.course2.startYear"),
      endYear: t("education.course2.endYear"),
    },
    {
      id: "3",
      title: t("education.course3.title"),
      institution: t("education.course3.institution"),
      description: t("education.course3.description"),
      startYear: t("education.course3.startYear"),
      endYear: t("education.course3.endYear"),
    },
    {
      id: "4",
      title: t("education.course4.title"),
      institution: t("education.course4.institution"),
      description: t("education.course4.description"),
      startYear: t("education.course4.startYear"),
      endYear: t("education.course4.endYear"),
    },
    {
      id: "5",
      title: t("education.course5.title"),
      institution: t("education.course5.institution"),
      description: t("education.course5.description"),
      startYear: t("education.course5.startYear"),
      endYear: t("education.course5.endYear"),
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: theme.spacing(6),
        backgroundColor:
          theme.palette.mode === "light" ? theme.palette.secondary.main : "",
      }}
    >
      {" "}
      {/* Adiciona padding ao container */}
      {yourData.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id} sx={{ display: "flex" }}>
          <Card
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: theme.palette.mode === "light" ? "#fff" : "", // Aplica condicionalmente a cor de fundo
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="h6">{item.institution}</Typography>
              <Typography variant="body1">
                {`${item.startYear} - ${item.endYear}`}
              </Typography>
              <Typography variant="body2">{item.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default EducationAndSkillsSection;
