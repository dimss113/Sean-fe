import React from "react";
import Layout from "../Layout/Layout";
import EventSection from "../Component/EventSection";
import TeamSection from "../Component/TeamSection";
import FounderSection from "../Component/FounderSection";
import HomeSection from "../Component/HomeSection";
import SponsorSection from "../Component/SponsorSection";
import BorderLine from "../Component/BorderLine";
import AboutSection from "../Component/AboutSection";
import InfoSection from "../Component/InfoSection";
import BenefitSection from "../Component/BenefitSection";
import FeatureSection from "../Component/FeatureSection";
import ContactSection from "../Component/ContactSection";

const HomeScreen = () => {
  return (
    <>
      <Layout>
        <HomeSection />

        <div className="w-full bg-purp text-[18px] sm:text-[24px] md:text-[30px] lg:text-[48px]">
          <SponsorSection />

          <BorderLine />

          <AboutSection />
          <InfoSection />

          <BenefitSection />

          <BorderLine />

          <FeatureSection />

          <ContactSection />

          <EventSection />
          <TeamSection />
          <FounderSection />
        </div>
      </Layout>
    </>
  );
};

export default HomeScreen;
