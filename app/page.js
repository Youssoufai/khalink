"use client";

import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import AgendaSection from "./components/AgendaSection";
import FinalCtaSection from "./components/FinalCtaSection";
import Footer from "./components/Footer";
import GlobalSection from "./components/GlobalSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import IdeaSection from "./components/IdeaSection";
import InsightsSection from "./components/InsightsSection";
import InvestSection from "./components/InvestSection";
import KatsinaSection from "./components/KatsinaSection";
import MediaSection from "./components/MediaSection";
import RegionalSection from "./components/RegionalSection";
import SpeakingSection from "./components/SpeakingSection";
import StatsSection from "./components/StatsSection";
import TimelineSection from "./components/TimelineSection";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [openSector, setOpenSector] = useState(null);
  const [activeTab, setActiveTab] = useState("Photos");
  const [activeMilestone, setActiveMilestone] = useState(0);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header
        menuOpen={menuOpen}
        onOpenMenu={() => setMenuOpen(true)}
        onCloseMenu={() => setMenuOpen(false)}
      />

      <main>
        <HeroSection />
        <StatsSection />
        <IdeaSection />
        <AboutSection />
        <TimelineSection activeMilestone={activeMilestone} onSelectMilestone={setActiveMilestone} />
        <AgendaSection />
        <KatsinaSection projectIndex={projectIndex} onSelectProject={setProjectIndex} />
        <InvestSection
          openSector={openSector}
          onToggleSector={(index) => setOpenSector(openSector === index ? null : index)}
        />
        <GlobalSection />
        <RegionalSection />
        <InsightsSection />
        <SpeakingSection />
        <MediaSection activeTab={activeTab} onSelectTab={setActiveTab} />
        <FinalCtaSection />
      </main>

      <Footer />
    </>
  );
}
