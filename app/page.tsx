"use client";

import { useState, useEffect } from "react";
import DemoForm from "@/components/DemoForm";

import AboutUs from "@/components/AboutUs";
import Achievements from "@/components/Achievements";
import AdditionalPrograms from "@/components/AdditioanlPrograms";
import ContactInfoSection from "@/components/ContactInfoSection";
import CourseCard from "@/components/CourseCard";
import FeatureHighlights from "@/components/FeatureHighlights";
import GlobalLearners from "@/components/GlobalLearners";
import HeroSlider from "@/components/Hero";
import LegacySection from "@/components/LegacySection";
import PopularCourses from "@/components/PopularCourses";
import QuoteSection from "@/components/Quotesection";
import SectionAccreditation from "@/components/SectionAccredation";
import Testimonial from "@/components/Testinomial";
import WhyChooseQuickstep from "@/components/WhyChooseQuickStep";

export default function Home() {

const [showDemo, setShowDemo] = useState(false);

useEffect(() => {
const timer = setTimeout(() => {
setShowDemo(true);
}, 5000); // popup after 5 seconds


return () => clearTimeout(timer);

}, []);

return ( <main>


  {/* DEMO POPUP */}
  {showDemo && (
    <DemoForm onClose={() => setShowDemo(false)} />
  )}

  <HeroSlider />
  <section className="bg-gray-100 ">
  <FeatureHighlights />
</section>
 
  <GlobalLearners />
  <PopularCourses/>
  {/* <AdditionalPrograms/> */}
  <LegacySection/>
  {/* <CourseCard/> */}
  <WhyChooseQuickstep/>
  <Achievements/>
  <SectionAccreditation/>
  <QuoteSection/>
  <Testimonial/>

</main>


);
}
