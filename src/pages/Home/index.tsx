import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Banner from "../../components/Banner";
import ExperienceCarousel from "../../components/ExperienceCarousel";
import EducationAndSkillsSection from "../../components/EducationAndSkillsSection";
import TechBadges from "../../components/TechBadges";
import AwardsSection from "../../components/AwardsSection";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Banner />
      <TechBadges />
      <ExperienceCarousel />
      <EducationAndSkillsSection />
      <AwardsSection />
    </MainLayout>
  );
};

export default Home;
