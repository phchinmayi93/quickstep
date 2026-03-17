"use client";

import Card from "@/components/Card";
import NabetSection from "@/components/NabetSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CareerCTA from "@/components/CareerCTA";
import AccreditationsSection from "@/components/AcrredeationsSection";
import RecognitionSection from "@/components/RecognitionSection";
import OurMission from "@/components/OurMission";
import StudyMentorshipSection from "@/components/StudyMentorshipSection";
import AboutUs from "@/components/AboutUs";
import SectionAccreditation from "@/components/SectionAccredation";

export default function AboutHistory() {

return (
<>
  
  <section className="bg-[#00006c] text-white">
    <AboutUs/>
  </section>
  
  <WhyChooseUs />
  <NabetSection />
  <AccreditationsSection />
  <RecognitionSection />
  <Card />
  <CareerCTA />
 
 <SectionAccreditation/>
  <OurMission />

</>
);
}