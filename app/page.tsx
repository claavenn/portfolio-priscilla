"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  X,
  Award,
  ExternalLink,
  CheckCircle2,
  Download,
} from "lucide-react";

/* ============================================================
   PROFILE
   ============================================================ */
const PROFILE = {
  fullName: "Priscilla Valencia Andow",
  shortName: "Priscilla V.A.",
  brand: "PVA",
  email: "priscilla.andow@binus.ac.id",
  linkedin: "https://www.linkedin.com/in/priscilla-valencia-andow/",
  github: "https://github.com/claavenn",
  instagram: "https://www.instagram.com/priscilla.vln/",
  headshot: "/me.jpg",
  cvUrl: "/cv-priscilla.pdf",
};

/* ============================================================
   DATA
   ============================================================ */
const EXPERIENCES = [
  {
    index: "01",
    role: "Regional Prrsident of TFISC @Semarang",
    organization: "Teach For Indonesia Student Community",
    period: "2026 — Present",
    scope: "Executive Leadership & Regional Governance",
    achievements: [
      "Leading board members and activists across Semarang to drive high-impact initiatives in education, sustainability, and community development.",
      "Spearheading end-to-end program governance, team alignment, and strategic execution across regional working committees.",
      "Cultivating internal operational excellence, effective communication pipelines, and collaborative problem-solving across dynamic regional programs.",
      "Championing environmental and health awareness initiatives, driving large-scale community mobilization and volunteer participation.",
    ],
    competencies: ["TEAM MANAGEMENT", "CROSS-FUNCTIONAL LEADERSHIP", "SUSTAINABILITY INITIATIVES", "PROGRAM GOVERNANCE"],
    photos: [
  { src: "/exp/tfisc-1.jpg", position: "center center" },
  { src: "/exp/tfisc-2.jpg", position: "center 35%" },   // ← turunin 20%
  { src: "/exp/tfisc-3.jpg", position: "center center" },
],
  },
  {
    index: "02",
    role: "Freshmen Partner",
    organization: "BINUS University",
    period: "2025 — 2026",
    scope: "Peer Mentoring & Academic Support",
    achievements: [
      "Guided first-year students in initial university adaptation and academic navigation.",
      "Provided comprehensive information on academic procedures and facilitated university communication.",
      "Encouraged active participationn in university and organizational activities for holistic engagement.",
    ],
    competencies: ["ACADEMIC NAVIGATION", "UNIVERSITY COMMUNICATION", "HOLISTIC ENGAGEMENT"],
    photos: [
      { src: "/exp/fp-1.jpg", position: "center center" },
      { src: "/exp/fp-2.jpg", position: "center center" },
      { src: "/exp/fp-3.jpg", position: "center center" },
    ],
  },
  {
    index: "03",
    role: "Activist of Publication & Marketing",
    organization: "Himpunan Mahasiswa Teknik Informatika",
    period: "2025 — 2026",
    scope: "Event Operations & Digital Campaigns",
    achievements: [
      "Developed and executed digital content initiatives, aligning campaign concepts across social platforms to enhance student engagement and brand visibility.",
      "Ensured cohesive brand identity and consistent visual messaging for official HIMTI online communications.",
      "Managed event spaces, logistics, and visual setups for welcoming events/expo, while guiding new students through high-paced onboarding sessions as Liaison Officer.",
    ],
    competencies: ["DIGITAL MARKETING","CONTENT STRATEGY", "EVENT OPERATIONS", "BRAND IDENTITY"],
    photos: [
      { src: "/exp/himti-1.jpg", position: "center center" },
      { src: "/exp/himti-2.jpg", position: "center center" },
      { src: "/exp/himti-3.jpg", position: "center center" },
    ],
  },
  {
    index: "04",
    role: "Promotion Team BINUS Semarang",
    organization: "BINUS University",
    period: "2024 — 2025",
    scope: "Outreach Operations & Prospect Data Managemenmt",
    achievements: [
      "Supported recruitment operations and facilitated campus visit sessions for prospective students and stakeholders.",
      "Handled end-to-end event coordination and on-ground logistics to drive seamless institutional outreach.",
      "Organized and maintained post-event prospective student databases to ensure reporting accuracy and structured follow-ups.",
    ],
    competencies: ["EVENT COORDINATION", "DATA MANAGEMENT", "STAKEHOLDER OUTREACH"],
    showBinusLogo: true,
  },
];

const CERTIFICATIONS = [
  {
    index: "01",
    title: "Google Cloud Computing Foundations Certificate",
    issuer: "Google Cloud Skills Boost",
    date: "Jul 2026",
    url: "https://www.credly.com/earner/earned/badge/5118cf29-fa6e-40fa-96a5-9254a3bb45a1",
  },
  {
    index: "02",
    title: "Python Programming Completion Certificate",
    issuer: "Samsung Innovation Campus (SIC)",
    date: "Oct 2025",
    url: "https://drive.google.com/file/d/1Lip0rdOvl5S3kTSv_UmtxK_xx2BTbJ6E/view",
  },
  {
    index: "03",
    title: "Sertifikat Profesional Google AI",
    issuer: "Google / Coursera",
    date: "Jul 2026",
    url: "https://www.coursera.org/account/accomplishments/specialization/8VZZ1J55CSGW",
  },
];

const PROJECTS = [
  {
    id: "01",
    tag: "CLOUD, DATA & AUDIT ANALYTICS",
    title: "Cloud Audit Analytics Platform",
    sub: "Python · Data Analytics · Audit Automation · Anomaly Detection",
    desc: "A data-driven audit analytics platform designed to identify unusual financial transactions and support risk-based auditing. Built with Python, the project uses synthetic financial data to simulate transaction records, introduce anomalies, and establish a foundation for automated audit analysis.",
    metric: "10,000 SYNTHETIC TRANSACTION RECORDS",
    tags: ["Python", "Pandas", "Data Analytics", "Audit Analytics", "Anomaly Detection"],
    link: "https://github.com/claavenn/Cloud-Audit-Analytics-Platform",
  },
  {
    id: "02",
    tag: "AI & COMPUTER VISION",
    title: "Real-Time Driver Drowsiness Detection",
    sub: "Deep Learning · Computer Vision · Driver Safety",
    desc: "A computer vision system designed to monitor driver alertness through facial behavior analysis. Using a MobileNetV2–LSTM architecture, the project processes sequential video frames to recognize drowsiness-related behaviors and support driver safety monitoring.",
    metric: "VIDEO-BASED DRIVER BEHAVIOR CLASSIFICATION",
    tags: ["Python", "OpenCV", "TensorFlow", "MobileNetV2", "LSTM"],
    link: "https://drive.google.com/drive/folders/1YsCIQjnESDeR_I5zngWsyMvWWSavdvVi",
  },
  {
    id: "03",
    tag: "VENTURE & STRATEGY",
    title: "AKANG — Agri-Fintech Venture",
    sub: "Business Strategy · Financial Modeling · UI/UX · Product Design",
    desc: "Awarded Semifinalist at BINUS Startup Vaganza. An agritech-fintech platform concept designed to help livestock farmers manage assets, access financing, and connect with agricultural markets. Developed a business model integrating livestock asset management, digital financial services, and technology-enabled farming solutions.",
    metric: "Binus Startup Vaganza Semifinalist Standing",
    tags: ["Business Model", "Financial Modeling", "UI/UX", "Agritech", "Fintech", "Pitching"],
    link: "https://linktr.ee/AKANG_AsetKandang?utm_source=linktree_profile_share&ltsid=452e42b4-85fa-4336-adb6-a18fded8aec4",
  },
  {
    id: "04",
    tag: "UI/UX & WEB DESIGN",
    title: "Luxury Brand Website",
    sub: "UI/UX Design · Front-End Development · Digital Experience",
    desc: "Art-directed digital commerce designed in Figma. Features scalable tokenized design systems, responsive typography scales, and tactile micro-interactions.",
    metric: "END-TO-END WEBSITE DESIGN & DEVELOPMENT",
    tags: ["Figma", "UI/UX Prototyping", "HTML", "CSS", "JAVASCRIPT", "RESPONSIVE WEB DESIGN"],
    link: "https://drive.google.com/drive/folders/1eHVf-AbaNsLKbyc2OqOioRyUqhHNfRuF?usp=sharing",
  },
  {
    id: "05",
    tag: "SOFTWARE ENGINEERING",
    title: "Sistem Apotek SMA",
    sub: "Full-Stack Web · Database Management · Web Application",
    desc: "A web-based pharmacy management system designed to streamline inventory tracking and pharmaceutical operations. The application focuses on managing medicine records, monitoring stock availability, and organizing inventory data through a structured database and web interface.",
    metric: "PHARMACY INVENTORY MANAGEMENT",
    tags: ["Laravel", "PHP", "MySQL", "Full-Stack SE", "REST API"],
    link: "https://github.com/claavenn/Website-Apotek-SMA", // Link fallback to Instagram as requested
  },
];

/* ============================================================
   TYPEWRITER TEXT
   ============================================================ */
function TypewriterText({
  text,
  className = "",
  speed = 65,
  startDelay = 0,
}: {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplay("");
    setDone(false);

    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        i += 1;
        setDisplay(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      {display}
      <motion.span
        animate={{ opacity: done ? [1, 0.3, 1] : [1, 0, 1] }}
        transition={{ duration: done ? 1.1 : 0.8, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block text-[#FF2E7E] ml-1"
      >
        |
      </motion.span>
    </span>
  );
}

/* ============================================================
   01. LOADING PAGE (Refined Luxury Editorial Preloader)
   ============================================================ */
function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(t);
          setTimeout(onDone, 450);
          return 100;
        }
        // Smooth organic progress increments
        const step =
          p < 40
            ? Math.random() * 7 + 4
            : p < 80
            ? Math.random() * 5 + 3
            : Math.random() * 3 + 1.5;
        return Math.min(100, p + step);
      });
    }, 45);
    return () => clearInterval(t);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(14px)" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-[#070709] flex flex-col items-center justify-center overflow-hidden selection:bg-transparent"
    >
      {/* Subtle, soft ambient atmospheric lighting */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035)_0%,transparent_65%)]" />

      {/* Centerpiece: PVA Editorial Monogram */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* PVA Monogram with luxury typographic spacing */}
          <div className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.4em] text-white pl-[0.4em] select-none">
            PVA
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-3 text-[0.6rem] sm:text-[0.65rem] tracking-[0.4em] uppercase text-white/40 font-light"
          >
            Priscilla Valencia Andow
          </motion.div>
        </motion.div>

        {/* Minimal Hairline Progress Bar — User intuitively sees progress without 100% text */}
        <div className="mt-12 w-48 sm:w-60">
          <div className="h-[1.5px] w-full bg-white/[0.08] rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-white/30 via-white/80 to-white rounded-full relative"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Understated status cue without percentage digits */}
          <div className="mt-3 flex justify-between items-center text-[0.55rem] sm:text-[0.58rem] tracking-[0.25em] uppercase font-mono text-white/30">
            <span>PORTFOLIO</span>
            <span className="text-white/50 transition-opacity duration-300">
              {progress < 40 ? "INITIALIZING" : progress < 85 ? "CURATING" : "READY"}
            </span>
          </div>
        </div>
      </div>

      {/* Refined Bottom Tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute bottom-10 text-[0.55rem] tracking-[0.45em] uppercase text-white/20 font-mono"
      >
        PVA · 2026
      </motion.div>
    </motion.div>
  );
}

/* ============================================================
   02. HAMBURGER
   ============================================================ */
const MENU_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleClick = (href: string) => {
    setOpen(false);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 400);
  };

  return (
    <>
      {/* Top Left Monogram Logo */}
      <a
        href="#"
        className="fixed top-6 left-6 z-[80] px-3.5 py-2 rounded-full bg-[#0a0a0c]/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-xs font-semibold tracking-[0.25em] text-white hover:border-[#FF2E7E] hover:text-[#FF2E7E] transition-all uppercase"
      >
        PVA
      </a>

      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="fixed top-6 right-6 z-[80] w-12 h-12 rounded-full bg-[#0a0a0c]/70 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center gap-[5px] group hover:border-[#FF2E7E] hover:bg-[#FF2E7E]/10 transition-colors"
      >
        <span className="w-5 h-[1.5px] bg-white group-hover:bg-[#FF2E7E] transition-colors" />
        <span className="w-5 h-[1.5px] bg-white group-hover:bg-[#FF2E7E] transition-colors" />
        <span className="w-3 h-[1.5px] bg-white group-hover:bg-[#FF2E7E] transition-colors self-end mr-[14px]" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] bg-[#0a0a0c]"
          >
            {/* Top Bar inside Menu Modal */}
            <div className="absolute top-6 left-6 z-10 text-xs font-semibold tracking-[0.25em] text-white/50 uppercase">
              PVA
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#FF2E7E]/10 blur-[160px]"
            />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center hover:border-[#FF2E7E] hover:text-[#FF2E7E] transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative h-full flex flex-col justify-center px-8 sm:px-16 md:px-24">
              <div className="text-[0.65rem] tracking-[0.4em] uppercase text-[#FF2E7E] mb-8">
                — Navigation
              </div>
              <nav className="space-y-2">
                {MENU_ITEMS.map((item, i) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => handleClick(item.href)}
                    className="group block text-left w-full py-3"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="text-[0.65rem] tracking-[0.2em] text-white/25 font-mono">
                        0{i + 1}
                      </span>
                      <span className="text-white text-[clamp(2rem,7vw,4.5rem)] font-semibold tracking-[-0.04em] leading-none group-hover:text-[#FF2E7E] transition-colors">
                        {item.label}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-10"
              >
                <a
                  href={PROFILE.cvUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-[#FF2E7E] text-[0.7rem] tracking-[0.3em] uppercase border-b border-[#FF2E7E]/40 pb-2 hover:border-[#FF2E7E] transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download CV / Connect
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ============================================================
   03. HERO — Priscilla stay, Valencia Andow diketik
   ============================================================ */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-[#0a0a0c]">
      <motion.div style={{ scale: imgScale, y: imgY, opacity: imgOpacity }} className="absolute inset-0 z-0">
        <Image
          src={PROFILE.headshot}
          alt={PROFILE.fullName}
          fill
          priority
          className="object-cover object-[center_35%] grayscale-[0.85] brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/50 via-[#0a0a0c]/40 to-[#0a0a0c]" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 h-full flex flex-col items-center justify-end pb-32 sm:pb-40 px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[0.65rem] tracking-[0.45em] uppercase text-[#FF2E7E] mb-6"
        >
          {PROFILE.brand} — CLOUD, AI & SOFTWARE ENGINEERING
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-white font-semibold leading-[0.95] tracking-[-0.04em] text-[clamp(2.5rem,9vw,6.5rem)]"
        >
          Priscilla
          <br />
          <span className="font-light text-white/45">
            <TypewriterText text="Valencia Andow" speed={70} startDelay={1000} />
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.6 }}
          className="mt-8 flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-[0.65rem] tracking-[0.3em] uppercase text-white/40"
        >
          <span>Cloud Engineer</span>
          <span className="w-1 h-1 rounded-full bg-[#FF2E7E]" />
          <span>Artificial Intelligence</span>
          <span className="w-1 h-1 rounded-full bg-[#FF2E7E]" />
          <span>Software Engineering</span>
          <span className="w-1 h-1 rounded-full bg-[#FF2E7E]" />
          <span>Tech Consulting</span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-white/30 text-[0.55rem] tracking-[0.4em] uppercase">Scroll</span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#FF2E7E] to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}

/* ============================================================
   04. MARQUEE
   ============================================================ */
function Marquee() {
  const items = [
    "CLOUD ARCHITECTURE (GCP)",
    "AI & MACHINE LEARNING",
    "SOFTWARE ENGINEERING",
    "TECHNOLOGY CONSULTING",
    "DATA ANALYTICS & BIGQUERY",
    "COMPUTER VISION & EDGE AI",
    "UI/UX & DESIGN SYSTEMS",
    "TFISC REGIONAL PRESIDENT",
    "STARTUP VAGANZA SEMIFINALIST",
    "PVA — PRISCILLA V.A."
  ];
  return (
    <div className="relative py-6 bg-[#FF2E7E] overflow-hidden border-y border-[#FF2E7E]">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-12 whitespace-nowrap"
      >
        {[...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="text-[#0a0a0c] font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm">{t}</span>
            <span className="text-[#0a0a0c]/40 text-lg">~</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ============================================================
   REVEAL
   ============================================================ */
function Reveal({
  children, delay = 0, y = 40, className = "",
}: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   SCRAMBLE TEXT
   ============================================================ */
function ScrambleText({ text, className = "" }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*";

  const scramble = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((_, i) => (i < iteration ? text[i] : chars[Math.floor(Math.random() * chars.length)]))
          .join("")
      );
      iteration += 1 / 2;
      if (iteration >= text.length) clearInterval(interval);
    }, 40);
  }, [text]);

  return (
    <span className={className} onMouseEnter={scramble}>
      {display}
    </span>
  );
}

/* ============================================================
   05. ABOUT
   ============================================================ */
function About() {
  return (
    <section id="about" className="relative py-32 sm:py-44 bg-[#0a0a0c] overflow-hidden">
      <motion.div
        animate={{ x: [0, 60, -40, 0], y: [0, -30, 40, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full bg-[#FF2E7E]/[0.08] blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -30, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full bg-[#FF2E7E]/[0.05] blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.04] pointer-events-none"
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-16 rounded-full border border-dashed border-[#FF2E7E]/15"
        />
      </motion.div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <div className="text-[0.65rem] tracking-[0.4em] uppercase text-[#FF2E7E] mb-10">— Strategic Profile</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-white font-semibold leading-[1.05] tracking-[-0.03em] text-[clamp(1.8rem,4.5vw,3.5rem)]">
            Where{" "}
            <span className="text-[#FF2E7E] font-light">
              <ScrambleText text="technology consulting" />
            </span>
            <br />
            meets cloud & AI engineering.
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-10 text-white/60 font-light max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
           Targeting technology consulting roles. I combine analytical problem-solving with hands-on technical execution — bridging <span className="text-white font-normal">Cloud Technology (GCP & BigQuery)</span>, intelligent <span className="text-white font-normal">AI & Machine Learning</span>, robust <span className="text-white font-normal">Software Engineering</span>, and <span className="text-[#FF2E7E] font-normal">organizational leadership</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   06. EXPERIENCE
   ============================================================ */
function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#0a0a0c] border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex items-end justify-between border-b border-white/[0.06] pb-6 mb-16">
            <div>
              <div className="text-[0.65rem] tracking-[0.4em] uppercase text-[#FF2E7E] mb-3">— Experience</div>
              <h3 className="text-white font-semibold tracking-[-0.02em] text-[clamp(1.8rem,4vw,3rem)]">
                Leadership Track Record
              </h3>
            </div>
            <span className="text-white/25 text-[0.65rem] tracking-[0.2em] uppercase hidden sm:block">04 Roles</span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-2">
            {EXPERIENCES.map((e, i) => (
              <motion.button
                key={e.index}
                onClick={() => setActive(i)}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className={`w-full text-left p-5 border transition-colors relative group ${
                  active === i ? "border-[#FF2E7E]/40 bg-[#FF2E7E]/[0.04]" : "border-white/[0.06] hover:border-white/20"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className={`text-[0.65rem] tracking-[0.2em] font-mono mt-1 ${active === i ? "text-[#FF2E7E]" : "text-white/30"}`}>
                    {e.index}
                  </span>
                  <div className="flex-1">
                    <div className={`text-sm font-semibold tracking-tight leading-snug ${active === i ? "text-white" : "text-white/60"}`}>
                      {e.role}
                    </div>
                    <div className="text-[0.7rem] text-white/35 mt-1 font-light">{e.period}</div>
                  </div>
                </div>
                {active === i && (
                  <motion.div layoutId="expActiveBar" className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#FF2E7E]" />
                )}
              </motion.button>
            ))}
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="border border-white/[0.06] p-8 sm:p-12 bg-[#0e0e12]"
              >
                <div className="text-[#FF2E7E] text-[0.65rem] tracking-[0.25em] uppercase mb-4">
                  {EXPERIENCES[active].scope}
                </div>
                <h4 className="text-white font-semibold text-2xl sm:text-3xl tracking-[-0.02em] mb-2">
                  {EXPERIENCES[active].role}
                </h4>
                <div className="text-white/40 text-sm font-light mb-8">
                  {EXPERIENCES[active].organization}
                </div>

                {EXPERIENCES[active].showBinusLogo ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="mb-8 p-8 rounded-lg border border-white/[0.06] bg-[#0a0a0c] flex flex-col items-center gap-3"
                  >
                    <div className="relative w-40 h-20">
                      <Image src="/logo.png" alt="BINUS Logo" fill className="object-contain" />
                    </div>
                    <span className="text-[0.65rem] tracking-[0.2em] uppercase text-white/40">
                      BINUS University Official Advocacy
                    </span>
                  </motion.div>
                ) : EXPERIENCES[active].photos ? (
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {EXPERIENCES[active].photos!.map((photo, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
                        whileHover={{ scale: 1.04, zIndex: 10 }}
                        className="relative aspect-video overflow-hidden border border-white/[0.06] bg-black"
                      >
                        <Image
                          src={photo.src}
                          alt={`${EXPERIENCES[active].role} ${i + 1}`}
                          fill
                          className="object-cover"
                          style={{ objectPosition: photo.position }}
                        />
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-[#FF2E7E]/20"
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : null}

                <ul className="space-y-3 mb-8">
                  {EXPERIENCES[active].achievements.map((a, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      className="flex items-start gap-3 text-sm text-white/60 font-light leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF2E7E] shrink-0 mt-0.5" />
                      <span>{a}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.06]">
                  {EXPERIENCES[active].competencies.map((c) => (
                    <span key={c} className="text-[0.6rem] tracking-[0.15em] uppercase text-white/50 border border-white/10 rounded-full px-3 py-1.5">
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   07. CERTIFICATIONS
   ============================================================ */
function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32 bg-[#0a0a0c] border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex items-end justify-between border-b border-white/[0.06] pb-6 mb-16">
            <div>
              <div className="text-[0.65rem] tracking-[0.4em] uppercase text-[#FF2E7E] mb-3">— Certifications</div>
              <h3 className="text-white font-semibold tracking-[-0.02em] text-[clamp(1.8rem,4vw,3rem)]">
                Verified Credentials
              </h3>
            </div>
            <span className="text-white/25 text-[0.65rem] tracking-[0.2em] uppercase hidden sm:block">03 Badges</span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.index} delay={i * 0.1}>
              <motion.a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", damping: 22, stiffness: 300 }}
                className="group block relative border border-white/[0.06] hover:border-[#FF2E7E]/40 p-7 h-full bg-[#0e0e12] transition-colors"
              >
                <motion.div
                  className="absolute top-0 left-0 h-[2px] bg-[#FF2E7E]"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="flex items-start justify-between mb-6">
                  <Award className="w-8 h-8 text-[#FF2E7E]" strokeWidth={1.2} />
                  <span className="text-[0.6rem] tracking-[0.2em] text-white/30 font-mono">{c.date}</span>
                </div>
                <h4 className="text-white font-semibold text-base leading-snug mb-2 group-hover:text-[#FF2E7E] transition-colors">
                  {c.title}
                </h4>
                <p className="text-white/40 text-xs font-light mb-6">{c.issuer}</p>
                <div className="flex items-center gap-1.5 text-[#FF2E7E] text-[0.65rem] tracking-[0.15em] uppercase">
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   08. PROJECTS
   ============================================================ */
function ProjectsWhite() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const circleScale = useTransform(scrollYProgress, [0, 1], [0.6, 1.4]);
  const xMove = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hoverActive, setHoverActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    if (!hoverActive) setHoverActive(true);
  };

  const handleMouseLeave = () => setHoverActive(false);

  const liquidX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const liquidY = useSpring(mouseY, { damping: 25, stiffness: 150 });
  const gooeyBg = useMotionTemplate`radial-gradient(circle 250px at ${liquidX}px ${liquidY}px, rgba(255,46,126,0.18), transparent 70%)`;

  return (
    <section
      id="projects"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative py-32 sm:py-40 bg-[#F5F3EF] text-[#0a0a0c] overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: gooeyBg, opacity: hoverActive ? 1 : 0 }}
        transition={{ opacity: { duration: 0.4 } }}
      />

      <motion.div
        style={{ rotate: bgRotate, x: xMove }}
        className="absolute -top-40 -left-40 w-[700px] h-[700px] pointer-events-none opacity-[0.5]"
      >
        <svg viewBox="0 0 600 600" className="w-full h-full">
          <defs>
            <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF2E7E" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#FF2E7E" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <motion.path
            fill="url(#blobGrad)"
            animate={{
              d: [
                "M300,100 C400,100 500,150 500,300 C500,450 400,500 300,500 C200,500 100,450 100,300 C100,150 200,100 300,100 Z",
                "M300,80 C430,80 520,180 520,300 C520,430 420,520 300,520 C170,520 80,420 80,300 C80,170 170,80 300,80 Z",
                "M300,120 C380,100 480,170 490,300 C500,440 390,510 300,510 C210,510 100,440 110,300 C120,170 220,140 300,120 Z",
                "M300,100 C400,100 500,150 500,300 C500,450 400,500 300,500 C200,500 100,450 100,300 C100,150 200,100 300,100 Z",
              ],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      <motion.div
        style={{ scale: circleScale }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FF2E7E]/[0.07] blur-[120px] pointer-events-none"
      />

      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.35]" viewBox="0 0 1200 800" preserveAspectRatio="none">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.path
            key={i}
            d={`M -100 ${150 + i * 110} C 300 ${100 + i * 110}, 600 ${200 + i * 110}, 1300 ${130 + i * 110}`}
            stroke="#0a0a0c"
            strokeWidth="0.6"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <Reveal>
          <div className="flex items-end justify-between border-b border-[#0a0a0c]/10 pb-6 mb-16">
            <div>
              <div className="text-[0.65rem] tracking-[0.4em] uppercase text-[#FF2E7E] mb-3">— Selected Holdings</div>
              <h3 className="text-[#0a0a0c] font-semibold tracking-[-0.03em] text-[clamp(2rem,5vw,3.5rem)]">
                <ScrambleText text="Projects" />
              </h3>
            </div>
            <span className="text-[#0a0a0c]/40 text-[0.65rem] tracking-[0.2em] uppercase hidden sm:block">05 Works</span>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <motion.a
                href={p.link || PROFILE.instagram}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -8, rotateZ: -0.4 }}
                transition={{ type: "spring", damping: 20, stiffness: 280 }}
                className="group relative block bg-white border border-[#0a0a0c]/[0.06] hover:border-[#FF2E7E]/50 p-7 h-full transition-colors overflow-hidden"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const el = e.currentTarget.querySelector("[data-inner-glow]") as HTMLElement;
                  if (el) {
                    el.style.background = `radial-gradient(200px circle at ${x}px ${y}px, rgba(255,46,126,0.15), transparent 60%)`;
                  }
                }}
              >
                <div data-inner-glow className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                <motion.div
                  className="absolute top-0 left-0 h-[2px] bg-[#FF2E7E]"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />

                <div className="relative">
                  <div className="text-[0.6rem] tracking-[0.25em] text-[#FF2E7E] mb-6 font-medium">
                    {p.id} / {p.tag}
                  </div>
                  <h4 className="text-[#0a0a0c] font-semibold tracking-[-0.02em] text-lg leading-snug mb-2">
                    {p.title}
                  </h4>
                  <div className="text-[#0a0a0c]/45 text-xs font-light mb-5">{p.sub}</div>
                  <p className="text-[#0a0a0c]/60 text-sm font-light leading-relaxed mb-6 line-clamp-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[0.6rem] tracking-[0.1em] uppercase text-[#0a0a0c]/50 border border-[#0a0a0c]/10 rounded-full px-2.5 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-[#FF2E7E] text-[0.7rem] tracking-[0.1em] uppercase">
                    <span className="w-1 h-1 rounded-full bg-[#FF2E7E]" />
                    {p.metric}
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   09. CONTACT — dengan DOWNLOAD CV
   ============================================================ */
function Contact() {
  return (
    <section id="contact" className="py-32 sm:py-44 bg-[#0a0a0c] border-t border-white/[0.03]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <div className="text-[0.65rem] tracking-[0.4em] uppercase text-[#FF2E7E] mb-10">— Initiate Engagement</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-white font-semibold leading-[1.03] tracking-[-0.04em] text-[clamp(2.2rem,6vw,4.5rem)]">
            Let's build
            <br />
            <span className="font-light text-white/35">something exceptional.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-10 text-white/50 font-light max-w-lg mx-auto leading-relaxed text-sm sm:text-base">
            Open for opportunities in technology consulting, cloud engineering, AI development, and software engineering. I am eager to help organizations solve complex technical challenges and build scalable, intelligent systems.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-14 flex flex-wrap gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href={PROFILE.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#FF2E7E] text-[#0a0a0c] font-medium text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 hover:bg-white transition-colors"
            >
              <Download className="w-4 h-4" /> Download CV / Connect
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 text-white/80 text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 hover:border-[#FF2E7E] hover:text-[#FF2E7E] transition-colors"
            >
              <Mail className="w-4 h-4" /> Email
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 text-white/80 text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 hover:border-[#FF2E7E] hover:text-[#FF2E7E] transition-colors"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 text-white/80 text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 hover:border-[#FF2E7E] hover:text-[#FF2E7E] transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href={PROFILE.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 text-white/80 text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 hover:border-[#FF2E7E] hover:text-[#FF2E7E] transition-colors"
            >
              <Instagram className="w-4 h-4" /> Instagram
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="bg-[#0a0a0c] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.6rem] tracking-[0.25em] uppercase text-white/25">
        <span>{PROFILE.fullName}</span>
        <span>Jakarta, Indonesia</span>
        <span>© 2026</span>
      </div>
    </footer>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function Page() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="bg-[#0a0a0c] text-white min-h-screen overflow-x-hidden selection:bg-[#FF2E7E] selection:text-[#0a0a0c]">
      <AnimatePresence>
        {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <HamburgerMenu />
          <Hero />
          <Marquee />
          <About />
          <Experience />
          <Certifications />
          <ProjectsWhite />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
}