"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import {
  LoadingScreen, Nav, Hero, Marquee, About, Skills, AcademicProfile, Experience,
  Certifications, ProjectsShowcase, Contact, Footer,
} from "@/components/PortfolioSections";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const done = useCallback(() => setLoading(false), []);
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [loading]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{loading && <LoadingScreen onDone={done} />}</AnimatePresence>
      {/* Content mounts during loading so your photo is already downloaded when the loader lifts */}
      <main className="bg-ink text-bone min-h-screen">
        <Nav ready={!loading} />
        <Hero ready={!loading} />
        <Marquee />
        <About />
        <Skills />
        <AcademicProfile />
        <Experience />
        <Certifications />
        <ProjectsShowcase />
        <Contact />
        <Footer />
      </main>
    </MotionConfig>
  );
}