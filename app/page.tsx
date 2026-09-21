"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Cloud,
  Cpu,
  Github,
  Globe,
  Layers,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
  X,
  CheckCircle2,
  Activity,
  Award
} from "lucide-react";

/* ============================================================
   INTERFACES & TYPES
   ============================================================ */
interface ProjectHolding {
  index: string;
  category: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  desc: string;
  tags: string[];
  link: string;
  slug: string;
  highlights: string[];
}

interface ExperienceEntry {
  slug: string;
  index: string;
  role: string;
  organization: string;
  period: string;
  scope: string;
  achievements: string[];
  competencies: string[];
  photos?: string[];
  showBinusLogo?: boolean;
}

interface CredentialEntry {
  index: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string | null;
  skills: string[];
  url: string;
}

/* ============================================================
   STATIC CONSTANTS & DATA
   ============================================================ */
const USER_PROFILE = {
  name: "Priscilla Valencia Andow",
  shortName: "Priscilla V.A.",
  role: "Computer Science Scholar & Creative Technologist",
  institution: "BINUS University",
  location: "Semarang, Indonesia",
  edition: "2026 // VOL. IV",
  email: "priscilla.andow@binus.ac.id",
  github: "https://github.com/claavenn",
  linkedin: "https://www.linkedin.com/in/priscilla-valencia-andow/",
  instagram: "https://instagram.com/priscilla.vln",
  igHandle: "@priscilla.vln",
  headshot: "/me.jpg",
};

const PROJECT_HOLDINGS: ProjectHolding[] = [
  {
    index: "02",
    category: "AI & COMPUTER VISION",
    title: "Drowsiness Detection System",
    subtitle: "Real-time facial landmark geometry and driver alertness safeguard",
    role: "Lead Developer & CV Researcher",
    period: "2025",
    slug: "drowsiness-detection-system",
    link: "https://drive.google.com/drive/folders/1YsCIQjnESDeR_I5zngWsyMvWWSavdvVi",
    desc: "A computer vision safety system designed to prevent driver fatigue accidents. Processes real-time camera streams to localize 68 facial landmarks, calculate Eye Aspect Ratios (EAR), and trigger tiered acoustic-visual alerts upon detecting micro-sleep patterns.",
    tags: ["Python", "OpenCV", "Dlib", "TensorFlow", "Computer Vision"],
    highlights: [
      "Inference achieved at 30+ FPS on consumer-grade camera feeds.",
      "Adaptive EAR thresholding calibrated against natural head tilt and blink intervals.",
      "Comprehensive verification suite testing low-light conditions and eyewear obstruction.",
    ],
  },
  {
    index: "03",
    category: "VENTURE DESIGN & AI PLATFORM",
    title: "AKANG (Binus STARTUP VAGANZA)",
    subtitle: "Digitizing agricultural livestock into verifiable digital assets",
    role: "Product Strategist & UI/UX Co-founder",
    period: "2025",
    slug: "akang",
    link: "https://linktr.ee/AKANG_AsetKandang?utm_source=linktree_profile_share&ltsid=452e42b4-85fa-4336-adb6-a18fded8aec4",
    desc: "Semifinalist in the BINUS Startup Vaganza. Conceptualized an AI-assisted agricultural investment platform transforming livestock into transparent digital assets. Delivered unit economics, investor web/mobile UI prototypes, and pitched strategy to venture judges.",
    tags: ["Product Design", "UI/UX", "Business Model", "AI", "Startup Strategy"],
    highlights: [
      "Awarded Semifinalist placement among multi-campus venture competitors.",
      "Formulated biometric telemetry model mapping livestock growth to yield projections.",
      "Crafted high-fidelity mobile application prototypes for investor portfolio monitoring.",
    ],
  },
  {
    index: "04",
    category: "LUXURY DIGITAL EXPERIENCE",
    title: "Luxury Brand Website UI/UX",
    subtitle: "Art-directed digital commerce with typographic precision and micro-interactions",
    role: "Lead UI/UX Designer",
    period: "2025",
    slug: "luxury-brand-website",
    link: "https://drive.google.com/drive/folders/1eHVf-AbaNsLKbyc2OqOioRyUqhHNfRuF?usp=sharing",
    desc: "An editorial digital experience built for luxury retail. Emphasizes asymmetrical grids, refined typography, generous negative space, and nuanced micro-interactions designed to elevate brand perception.",
    tags: ["Figma", "Design Systems", "Luxury UI/UX", "Micro-interactions"],
    highlights: [
      "Complete design system with responsive tokens and scalable typography scales.",
      "Editorial product presentation featuring fluid lookbook transitions.",
      "Evaluated for visual hierarchy, contrast balance, and tactile mobile navigation.",
    ],
  },
  {
    index: "05",
    category: "HEALTHCARE MANAGEMENT SYSTEM",
    title: "Sistem Apotek SMA",
    subtitle: "Institutional pharmaceutical inventory & batch expiration monitoring system",
    role: "Fullstack Web Developer",
    period: "2024",
    slug: "sistem-apotek-sma",
    link: "",
    desc: "A full-stack pharmaceutical administration platform developed for institutional clinics. Manages medication inventory, monitors batch expiry dates with proactive alert thresholds, and logs dispensary transactions.",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Chart.js"],
    highlights: [
      "Automated critical alerts notifying staff prior to pharmaceutical expiration.",
      "Role-based access control safeguarding patient medication records.",
      "Real-time dispensary audit ledger with automated monthly depletion reporting.",
    ],
  },
];

const EXPERIENCES: ExperienceEntry[] = [
  {
    slug: "tfisc-chairman",
    index: "01",
    role: "Regional Chairman of TFISC @Semarang",
    organization: "Teach For Indonesia Student Community",
    period: "2026 — Present",
    scope: "Executive Leadership & Community Empowerment",
    achievements: [
      "Led 70+ regional members and streamlined cross-divisional operations to execute high-impact educational, social, and environmental initiatives.",
      "Spearheaded a revamped recruitment strategy, driving a significant surge in new member registrations and overall BINUSIAN involvement.",
      "Initiated a joint social program with a local community, mobilizing 150+ BINUSIAN participants to create targeted regional impact.",
      "Boosted community outreach and digital engagement by 200% through digital-first campaigns and structured social empowerment projects.",
    ],
    competencies: ["Executive Leadership", "Cross-Functional Strategy", "Community Mobilization", "Impact Measurement"],
    photos: ["/exp/tfisc-1.jpg", "/exp/tfisc-2.jpg", "/exp/tfisc-3.jpg"],
  },
  {
    slug: "freshmen-partner",
    index: "02",
    role: "Freshmen Partner",
    organization: "BINUS University",
    period: "2025 — 2026",
    scope: "Academic Mentorship & Student Transition",
    achievements: [
      "Mentored cohorts of first-year Computer Science students through their university transition and academic curriculum.",
      "Organized orientation sessions, campus laboratories introductions, and structured peer study circles.",
      "Provided dedicated 1-on-1 academic counseling, fostering early retention and collaborative problem-solving skills.",
    ],
    competencies: ["Peer Mentorship", "Curriculum Guidance", "Public Speaking", "Cohort Management"],
    photos: ["/exp/fp-1.jpg", "/exp/fp-2.jpg", "/exp/fp-3.jpg"],
  },
  {
    slug: "himti-member",
    index: "03",
    role: "Member of HIMTI Semarang",
    organization: "Himpunan Mahasiswa Teknik Informatika",
    period: "2025 — 2026",
    scope: "Brand Publishing & Digital Campaigns",
    achievements: [
      "Developed and executed digital branding strategies for computer science student initiatives across university channels.",
      "Appointed to the Publication & Marketing Committee for the School of Computer Science (SoCS) Welcoming Party.",
      "Designed digital campaign collaterals and maintained consistent messaging across student communications.",
    ],
    competencies: ["Digital Communications", "Event Marketing", "Creative Direction", "Community Engagement"],
    photos: ["/exp/himti-1.jpg", "/exp/himti-2.jpg", "/exp/himti-3.jpg"],
  },
  {
    slug: "binus-promotion",
    index: "04",
    role: "Promotion Team BINUS Semarang",
    organization: "BINUS University",
    period: "2024 — 2025",
    scope: "University Brand Advocacy & Public Outreach",
    achievements: [
      "Produced 50+ strategic promotional contents across official institutional media channels.",
      "Amplified social reach by 150% through data-informed content optimization and student storytelling.",
      "Co-managed 3 flagship university-level public exhibitions and prospective student summits.",
    ],
    competencies: ["Institutional Branding", "Content Analytics", "Event Operations", "Public Outreach"],
    showBinusLogo: true,
  },
];

const SKILL_DOMAINS = [
  {
    title: "Cloud Architecture & Infrastructure",
    icon: Cloud,
    items: ["Google Cloud Platform (GCP)", "Google BigQuery", "IAM & Security Governance", "Cloud Load Balancing", "Compute Engine"],
  },
  {
    title: "AI, Vision & Data Engineering",
    icon: Sparkles,
    items: ["Computer Vision (OpenCV)", "Dlib Landmark Models", "TensorFlow", "Python Data Analytics", "EAR Fatigue Algorithm"],
  },
  {
    title: "Backend & Systems Development",
    icon: Terminal,
    items: ["Laravel", "Node.js", "PHP", "SQL / MySQL", "RESTful APIs", "Relational Database Design"],
  },
  {
    title: "Design Systems & Product Strategy",
    icon: Layers,
    items: ["Figma", "Design Systems & Tokens", "UI/UX Prototyping", "Information Architecture", "Venture Pitching"],
  },
  {
    title: "Networking & Protocols",
    icon: Globe,
    items: ["TCP/IP", "HTTP/HTTPS", "DNS Resolution", "IP Addressing & Subnetting", "Network Topology"],
  },
  {
    title: "Core Computer Science Disciplines",
    icon: Cpu,
    items: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Database Technology", "Software Engineering Principles", "Operating Systems"],
  },
];

const CERTIFICATIONS: CredentialEntry[] = [
  {
    index: "01",
    title: "Google Cloud Computing Foundations Certificate",
    issuer: "Google Cloud Skills Boost",
    date: "Jul 2026",
    credentialId: "5118cf29-fa6e-40fa-96a5-9254a3bb45a1",
    skills: ["Cloud Computing", "Google BigQuery", "Cloud Infrastructure", "API Architecture", "IAM Security"],
    url: "https://www.credly.com/earner/earned/badge/5118cf29-fa6e-40fa-96a5-9254a3bb45a1",
  },
  {
    index: "02",
    title: "Python Programming Completion Certificate",
    issuer: "Samsung Innovation Campus (SIC)",
    date: "Oct 2025",
    credentialId: null,
    skills: ["Python", "Algorithm Engineering", "Applied Problem Solving", "Data Manipulation"],
    url: "https://drive.google.com/file/d/1Lip0rdOvl5S3kTSv_UmtxK_xx2BTbJ6E/view",
  },
  {
    index: "03",
    title: "Sertifikat Profesional Google AI",
    issuer: "Google / Coursera",
    date: "Jul 2026",
    credentialId: "8VZZ1J55CSGW",
    skills: ["Artificial Intelligence", "Predictive Modeling", "Applied Research", "Data Analysis"],
    url: "https://www.coursera.org/account/accomplishments/specialization/8VZZ1J55CSGW",
  },
];

/* ============================================================
   FLAGSHIP COMPONENT: CLOUD AUDIT ANALYTICS PLATFORM
   ============================================================ */
function CloudAuditFlagship() {
  const [activeLayer, setActiveLayer] = useState<0 | 1 | 2 | 3>(1);

  const layers = [
    {
      id: 0,
      badge: "LAYER 01",
      title: "Audit Telemetry Ingestion",
      tech: "GCP Pub/Sub • Cloud Logging • VPC Flow Logs",
      desc: "Captures raw authentication events, IAM policy mutations, and cross-region resource requests across organizational GCP projects into an event streaming bus.",
      metric: "Sub-second event bus ingest buffer",
      status: "STREAMING ACTIVE",
      color: "#F5C2D2",
    },
    {
      id: 1,
      badge: "LAYER 02",
      title: "GCP Cloud Engine & BigQuery Warehouse",
      tech: "Google BigQuery • Partition Clustered Tables • IAM Auditing",
      desc: "High-performance data store optimized for compliance analytics. Massive audit trails are ingested, timestamp-clustered, and queried using partitioned SQL views to identify policy drift.",
      metric: "Optimized partition queries across historical records",
      status: "OPTIMIZED ENGINE",
      color: "#F5C2D2",
    },
    {
      id: 2,
      badge: "LAYER 03",
      title: "Anomaly Detection Engine",
      tech: "Statistical Baselines • Policy Drift Heuristics • Privilege Escalation Rules",
      desc: "Continuous evaluation algorithm scanning for abnormal administrative activity: off-hours root service key usage, rapid role escalations, and unapproved public bucket exposures.",
      metric: "Multi-factor anomaly classification (Low to Critical)",
      status: "HEURISTICS RUNNING",
      color: "#F5C2D2",
    },
    {
      id: 3,
      badge: "LAYER 04",
      title: "Compliance Ledger & Posture Telemetry",
      tech: "Security Command Telemetry • Audit Trail Ledger • Exportable Reports",
      desc: "Presents an immutable, regulator-ready compliance dashboard summarizing IAM adherence, flagged deviations, and architectural security hygiene scorecards.",
      metric: "Continuous compliance reporting & audit readiness",
      status: "AUDIT VERIFIED",
      color: "#F5C2D2",
    },
  ];

  const simulatedAuditEvents = [
    { time: "14:24:02 UTC", event: "iam.serviceAccounts.createKey", actor: "deploy-pipeline@gcp", status: "ANOMALY EVALUATED", sev: "NOTICE" },
    { time: "14:23:41 UTC", event: "storage.buckets.setIamPolicy", actor: "admin-ops@binus.ac.id", status: "POLICY COMPLIANT", sev: "INFO" },
    { time: "14:22:18 UTC", event: "bigquery.jobs.queryExecution", actor: "audit-worker-02", status: "PARTITION SCANNED", sev: "SUCCESS" },
    { time: "14:21:05 UTC", event: "compute.firewalls.updateRule", actor: "system-orchestrator", status: "INGRESS LOCKED", sev: "VERIFIED" },
  ];

  return (
    <section id="flagship" className="my-24 md:my-32 scroll-mt-20">
      {/* Section Subhead */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-white/[0.08] mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#F5C2D2] uppercase mb-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#F5C2D2] animate-pulse" />
            <span>FLAGSHIP CASE STUDY // 01</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
            Cloud Audit Analytics Platform
          </h2>
        </div>
        <p className="text-xs font-mono text-white/50 max-w-md md:text-right leading-relaxed">
          Distributed telemetry ingest, BigQuery query optimization, and heuristic anomaly detection on Google Cloud Platform.
        </p>
      </div>

      {/* Main Console Wrapper */}
      <div className="rounded-2xl border border-white/[0.12] bg-[#0D0D12] overflow-hidden shadow-2xl">
        {/* Console Header Bar */}
        <div className="px-6 py-4 border-b border-white/[0.08] bg-[#0A0A0E] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <span className="text-xs font-mono tracking-wider text-white/70">
              CONSOLE://GCP-AUDIT-ORCHESTRATOR.CORE
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-white/40 hidden sm:inline">DATA × CLOUD × AUDIT × ANALYTICS</span>
            <div className="px-2.5 py-1 rounded bg-[#F5C2D2]/10 border border-[#F5C2D2]/30 text-[#F5C2D2] text-[10px] font-bold">
              ACTIVE STACK
            </div>
          </div>
        </div>

        {/* Interactive Layer Navigator */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/[0.08] bg-[#09090D]">
          {layers.map((layer) => {
            const isSelected = activeLayer === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id as 0 | 1 | 2 | 3)}
                className={`p-4 text-left transition-all relative border-r border-white/[0.08] last:border-r-0 ${
                  isSelected
                    ? "bg-white/[0.05] text-white"
                    : "text-white/50 hover:bg-white/[0.02] hover:text-white/80"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeLayerIndicator"
                    className="absolute top-0 left-0 right-0 h-[2px] bg-[#F5C2D2]"
                  />
                )}
                <div className="text-[10px] font-mono tracking-widest text-[#F5C2D2] mb-1">
                  {layer.badge}
                </div>
                <div className="text-xs font-medium tracking-tight line-clamp-1">
                  {layer.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Layer Visual Display */}
        <div className="p-6 md:p-10 grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Layer Details & Architecture */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono text-[#F5C2D2] uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>{layers[activeLayer].badge} SPECIFICATION</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight">
                {layers[activeLayer].title}
              </h3>
              <p className="text-xs font-mono text-white/50">
                STACK: <span className="text-white/80">{layers[activeLayer].tech}</span>
              </p>
            </div>

            <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
              {layers[activeLayer].desc}
            </p>

            {/* Architecture SVG Flow representation */}
            <div className="p-4 rounded-xl border border-white/[0.08] bg-[#07070A] space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-white/40">
                <span>PIPELINE FLOW GRAPH</span>
                <span className="text-[#F5C2D2]">{layers[activeLayer].status}</span>
              </div>

              {/* Dynamic Diagram */}
              <div className="relative py-4 overflow-x-auto">
                <div className="flex items-center justify-between min-w-[480px] text-xs font-mono">
                  {/* Step 1 */}
                  <div className={`px-3 py-2 rounded-lg border text-center transition-colors ${activeLayer === 0 ? "border-[#F5C2D2] bg-[#F5C2D2]/10 text-white font-bold" : "border-white/10 bg-white/[0.02] text-white/50"}`}>
                    <div className="text-[9px] text-[#F5C2D2]">INGRESS</div>
                    <div>Cloud Logging</div>
                  </div>

                  <div className="h-[1px] flex-1 bg-gradient-to-r from-[#F5C2D2]/40 to-white/20 mx-2" />

                  {/* Step 2 */}
                  <div className={`px-3 py-2 rounded-lg border text-center transition-colors ${activeLayer === 1 ? "border-[#F5C2D2] bg-[#F5C2D2]/10 text-white font-bold" : "border-white/10 bg-white/[0.02] text-white/50"}`}>
                    <div className="text-[9px] text-[#F5C2D2]">ANALYTICS</div>
                    <div>BigQuery Core</div>
                  </div>

                  <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-[#F5C2D2]/40 mx-2" />

                  {/* Step 3 */}
                  <div className={`px-3 py-2 rounded-lg border text-center transition-colors ${activeLayer === 2 ? "border-[#F5C2D2] bg-[#F5C2D2]/10 text-white font-bold" : "border-white/10 bg-white/[0.02] text-white/50"}`}>
                    <div className="text-[9px] text-[#F5C2D2]">HEURISTIC</div>
                    <div>Anomaly Scan</div>
                  </div>

                  <div className="h-[1px] flex-1 bg-gradient-to-r from-[#F5C2D2]/40 to-white/20 mx-2" />

                  {/* Step 4 */}
                  <div className={`px-3 py-2 rounded-lg border text-center transition-colors ${activeLayer === 3 ? "border-[#F5C2D2] bg-[#F5C2D2]/10 text-white font-bold" : "border-white/10 bg-white/[0.02] text-white/50"}`}>
                    <div className="text-[9px] text-[#F5C2D2]">LEDGER</div>
                    <div>Audit Report</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/projects/cloud-audit"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#F5C2D2] text-[#08080A] text-xs font-bold uppercase tracking-wider hover:bg-[#ffcddc] transition-colors"
              >
                <span>Examine Case Study Dossier</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="https://www.credly.com/earner/earned/badge/5118cf29-fa6e-40fa-96a5-9254a3bb45a1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/15 bg-white/[0.03] text-white text-xs font-mono hover:bg-white/[0.08] transition-colors"
              >
                <Award className="w-3.5 h-3.5 text-[#F5C2D2]" />
                <span>Verify Google Cloud Credential</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Telemetry Terminal & Key Metric */}
          <div className="lg:col-span-5 space-y-4">
            {/* Status Metric Box */}
            <div className="p-4 rounded-xl border border-white/[0.08] bg-[#09090E]">
              <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider mb-1">
                SYSTEM VERIFICATION METRIC
              </div>
              <div className="text-sm font-medium text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F5C2D2] shrink-0" />
                <span>{layers[activeLayer].metric}</span>
              </div>
            </div>

            {/* Terminal Log Stream */}
            <div className="p-4 rounded-xl border border-white/[0.08] bg-[#050508] font-mono text-[11px] space-y-3">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-white/40">
                <div className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-[#F5C2D2]" />
                  <span>AUDIT_LOG_TELEMETRY.STREAM</span>
                </div>
                <span className="text-[9px] text-[#F5C2D2]">LIVE HEURISTIC</span>
              </div>

              <div className="space-y-2">
                {simulatedAuditEvents.map((ev, i) => (
                  <div key={i} className="text-white/60 space-y-0.5">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-white/30">{ev.time}</span>
                      <span className="text-[#F5C2D2] font-semibold">{ev.sev}</span>
                    </div>
                    <div className="text-white/90 font-medium truncate">{ev.event}</div>
                    <div className="text-white/40 text-[10px] truncate">{ev.actor} → {ev.status}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-white/[0.06] text-[10px] text-white/30 flex items-center justify-between">
                <span>PIPELINE ENCRYPTED</span>
                <span>GCP IAM STRICT COMPLIANCE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROJECT HOLDINGS COMPONENT (Inspired by Dribbble 27339006)
   ============================================================ */
function ProjectHoldingsSection() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const toggleExpand = (index: string) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="my-24 md:my-32 scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-white/[0.08] mb-8 gap-4">
        <div>
          <div className="text-[11px] font-mono tracking-widest text-[#F5C2D2] uppercase mb-2">
            HOLDINGS & VENTURES // ARCHIVE
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
            Engineering & Product Index
          </h2>
        </div>
        <p className="text-xs font-mono text-white/50 max-w-sm md:text-right leading-relaxed">
          Interactive catalog of selected software developments, venture pitch decks, and interface prototypes.
        </p>
      </div>

      <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
        {PROJECT_HOLDINGS.map((p) => {
          const isExpanded = expandedIndex === p.index;

          return (
            <div key={p.index} className="group transition-colors hover:bg-white/[0.02]">
              <div
                onClick={() => toggleExpand(p.index)}
                className="py-6 md:py-8 px-2 md:px-4 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Left: Index & Titles */}
                <div className="flex items-start md:items-center gap-4 md:gap-8">
                  <span className="text-xs font-mono text-[#F5C2D2] w-8">
                    {p.index}
                  </span>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-1">
                      {p.category}
                    </div>
                    <h3 className="text-xl md:text-2xl font-normal text-white group-hover:text-[#F5C2D2] transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </div>

                {/* Right: Role, Year & Expand Indicator */}
                <div className="flex items-center justify-between md:justify-end gap-6 pl-12 md:pl-0">
                  <div className="text-left md:text-right text-xs font-mono">
                    <div className="text-white/80">{p.role}</div>
                    <div className="text-white/40">{p.period}</div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 group-hover:border-[#F5C2D2] group-hover:text-[#F5C2D2] transition-colors">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Expandable Drawer */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 px-4 md:px-16 pt-2 border-t border-white/[0.04] grid md:grid-cols-12 gap-8 text-sm">
                      <div className="md:col-span-7 space-y-4">
                        <p className="text-white/70 leading-relaxed font-light">
                          {p.desc}
                        </p>
                        <div className="space-y-2 pt-2">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                            CORE ENGINEERING HIGHLIGHTS:
                          </div>
                          <ul className="space-y-1.5">
                            {p.highlights.map((h, i) => (
                              <li key={i} className="text-xs text-white/60 flex items-start gap-2 font-mono">
                                <span className="text-[#F5C2D2] mt-0.5">▹</span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="md:col-span-5 space-y-4">
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-2">
                            TECHNOLOGY STACK:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {p.tags.map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-1 text-xs font-mono rounded border border-white/10 bg-white/[0.03] text-white/75"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 flex flex-wrap items-center gap-3">
                          {p.link && (
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F5C2D2] text-[#08080A] text-xs font-bold uppercase tracking-wider hover:bg-[#ffcddc] transition-colors"
                            >
                              <span>Open External Link</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          )}
                          <Link
                            href={`/projects/${p.slug}`}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 bg-white/[0.03] text-white text-xs font-mono hover:bg-white/[0.08] transition-colors"
                          >
                            <span>Detailed Specification</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#F5C2D2]" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ============================================================
   EDITORIAL ABOUT & LEADERSHIP PHILOSOPHY
   ============================================================ */
function EditorialProfileSection() {
  return (
    <section id="about" className="my-24 md:my-32 scroll-mt-20">
      <div className="pb-6 border-b border-white/[0.08] mb-12">
        <div className="text-[11px] font-mono tracking-widest text-[#F5C2D2] uppercase mb-2">
          PROFILE // PEDAGOGY & PHILOSOPHY
        </div>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white max-w-3xl">
          Bridging technical systems with human impact.
        </h2>
      </div>

      <div className="grid md:grid-cols-12 gap-10">
        {/* Left Manifesto */}
        <div className="md:col-span-7 space-y-6">
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
            I am a Computer Science undergraduate at BINUS University specializing in Cloud Technology. My work operates at the intersection of dependable system architecture, machine vision, and community-centered innovation.
          </p>
          <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
            Serving as the Regional Chairman of TFISC Semarang and achieving Semifinalist standing in the BINUS Startup Vaganza, I have cultivated cross-functional agility—leading teams of 70+ students, aligning business models, and building software that directly solves real human friction.
          </p>
          <div className="p-5 rounded-xl border border-white/[0.08] bg-[#0B0B0F] space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#F5C2D2]">
              ASPIRATION & TECHNICAL PATH
            </div>
            <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light">
              Deeply driven to join the Apple Developer Academy to harness native ecosystems, spatial computing principles, and high-craft interface engineering to build transformative mobile solutions for community welfare.
            </p>
          </div>
        </div>

        {/* Right Structured Dossier */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-5 rounded-xl border border-white/[0.08] bg-[#09090D] space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-wider text-white/40 pb-2 border-b border-white/[0.08]">
              ACADEMIC & CIVIC VITAE
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div>
                <span className="text-white/40">CURRENT INSTITUTION:</span>
                <div className="text-white mt-0.5">BINUS University (SoCS)</div>
              </div>
              <div>
                <span className="text-white/40">SPECIALIZATION FOCUS:</span>
                <div className="text-white mt-0.5">Cloud Technology & Applied AI Systems</div>
              </div>
              <div>
                <span className="text-white/40">EXECUTIVE TENURE:</span>
                <div className="text-white mt-0.5">Regional Chairman, TFISC Semarang</div>
              </div>
              <div>
                <span className="text-white/40">VENTURE RECOGNITION:</span>
                <div className="text-[#F5C2D2] mt-0.5">Semifinalist, BINUS Startup Vaganza</div>
              </div>
              <div>
                <span className="text-white/40">PRIMARY TOOLS:</span>
                <div className="text-white mt-0.5">GCP, BigQuery, Python, Laravel, Figma</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TECHNICAL CAPABILITIES MATRIX (SKILLS)
   ============================================================ */
function TechnicalMatrixSection() {
  return (
    <section id="tech" className="my-24 md:my-32 scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-white/[0.08] mb-10 gap-4">
        <div>
          <div className="text-[11px] font-mono tracking-widest text-[#F5C2D2] uppercase mb-2">
            ENGINEERING CAPABILITIES // MATRIX
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
            Technical Repertoire
          </h2>
        </div>
        <p className="text-xs font-mono text-white/50 max-w-sm md:text-right leading-relaxed">
          Systematic index of foundational competencies, cloud frameworks, and applied engineering toolsets.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILL_DOMAINS.map((domain, idx) => {
          const IconComponent = domain.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-xl border border-white/[0.08] bg-[#0A0A0E] hover:border-white/20 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center">
                    <IconComponent className="w-4 h-4 text-[#F5C2D2]" />
                  </div>
                  <h3 className="text-sm font-medium text-white">
                    {domain.title}
                  </h3>
                </div>

                <div className="space-y-1.5">
                  {domain.items.map((item) => (
                    <div
                      key={item}
                      className="text-xs font-mono text-white/60 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#F5C2D2]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.04] text-[10px] font-mono text-white/30">
                DOMAIN 0{idx + 1}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ============================================================
   EXPERIENCE & LEADERSHIP LEDGER
   ============================================================ */
function ExperienceLedgerSection({
  onSelectExperience,
}: {
  onSelectExperience: (exp: ExperienceEntry) => void;
}) {
  return (
    <section id="experience" className="my-24 md:my-32 scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-white/[0.08] mb-10 gap-4">
        <div>
          <div className="text-[11px] font-mono tracking-widest text-[#F5C2D2] uppercase mb-2">
            LEADERSHIP & SERVICE // LEDGER
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
            Organizational Impact
          </h2>
        </div>
        <p className="text-xs font-mono text-white/50 max-w-sm md:text-right leading-relaxed">
          Record of executive responsibilities, community stewardship, and institutional representation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.slug}
            onClick={() => onSelectExperience(exp)}
            className="p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-[#0A0A0E] hover:border-[#F5C2D2]/40 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-3">
                <span className="text-[#F5C2D2]">{`LEDGER // ${exp.index}`}</span>
                <span>{exp.period}</span>
              </div>

              <h3 className="text-xl font-normal text-white group-hover:text-[#F5C2D2] transition-colors mb-1">
                {exp.role}
              </h3>
              <p className="text-xs font-mono text-white/50 mb-4">
                {exp.organization} • {exp.scope}
              </p>

              <ul className="space-y-2 mb-6">
                {exp.achievements.slice(0, 2).map((ach, i) => (
                  <li key={i} className="text-xs text-white/70 leading-relaxed flex items-start gap-2">
                    <span className="text-[#F5C2D2] mt-0.5 text-[10px]">▹</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06] mb-4">
                {exp.competencies.map((c) => (
                  <span
                    key={c}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.03] border border-white/10 text-white/60"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-[#F5C2D2]">
                <span>Inspect Detailed Record</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   EXPERIENCE DETAIL MODAL
   ============================================================ */
function ExperienceDetailModal({
  exp,
  onClose,
}: {
  exp: ExperienceEntry;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#0C0C10] p-6 md:p-8 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-white/[0.03] text-white/70 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-[11px] font-mono text-[#F5C2D2] uppercase tracking-wider mb-2">
          {`${exp.organization} // ${exp.period}`}
        </div>
        <h3 className="text-2xl font-light text-white mb-2">{exp.role}</h3>
        <p className="text-xs font-mono text-white/40 mb-6">{exp.scope}</p>

        {/* Photos or Logo Render */}
        {exp.showBinusLogo ? (
          <div className="mb-6 p-6 rounded-xl border border-white/[0.08] bg-[#07070A] flex flex-col items-center justify-center gap-3">
            <div className="relative w-36 h-20">
              <Image
                src="/logo.png"
                alt="BINUS University Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xs font-mono text-white/50">BINUS University Official Advocacy</span>
          </div>
        ) : exp.photos && exp.photos.length > 0 ? (
          <div className="mb-6">
            <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-3">
              DOCUMENTATION ARCHIVE:
            </div>
            <div className="grid grid-cols-3 gap-2">
              {exp.photos.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-black"
                >
                  <Image
                    src={src}
                    alt={`${exp.role} photo ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="space-y-4 mb-6">
          <div className="text-[10px] font-mono uppercase tracking-wider text-white/40">
            RECORDED ACHIEVEMENTS & CONTRIBUTIONS:
          </div>
          <ul className="space-y-2">
            {exp.achievements.map((ach, i) => (
              <li key={i} className="text-sm text-white/75 leading-relaxed flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F5C2D2] shrink-0 mt-0.5" />
                <span>{ach}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-white/[0.08]">
          <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-2">
            EXECUTIVE SKILLS DEPLOYED:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {exp.competencies.map((c) => (
              <span
                key={c}
                className="px-2.5 py-1 text-xs font-mono rounded bg-white/[0.04] border border-white/10 text-white/80"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ============================================================
   VERIFIED CREDENTIAL VAULT
   ============================================================ */
function CredentialVaultSection() {
  return (
    <section id="certifications" className="my-24 md:my-32 scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-white/[0.08] mb-10 gap-4">
        <div>
          <div className="text-[11px] font-mono tracking-widest text-[#F5C2D2] uppercase mb-2">
            ACCREDITATIONS // VERIFIED VAULT
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
            Official Credentials
          </h2>
        </div>
        <p className="text-xs font-mono text-white/50 max-w-sm md:text-right leading-relaxed">
          Industry-certified verifications in cloud computing architectures, artificial intelligence, and programming.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {CERTIFICATIONS.map((cert) => (
          <a
            key={cert.index}
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-2xl border border-white/[0.08] bg-[#0A0A0E] hover:border-[#F5C2D2]/50 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-4">
                <span className="text-[#F5C2D2]">{cert.index}</span>
                <span>{cert.date}</span>
              </div>

              <h3 className="text-base font-normal text-white group-hover:text-[#F5C2D2] transition-colors mb-2 leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs font-mono text-white/50 mb-4">
                {cert.issuer}
              </p>

              {cert.credentialId && (
                <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono text-white/60 break-all mb-4">
                  ID: {cert.credentialId}
                </div>
              )}

              <div className="flex flex-wrap gap-1 mb-6">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5C2D2]/5 border border-[#F5C2D2]/15 text-[#F5C2D2]/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono text-[#F5C2D2]">
              <span>Verify Direct Credential</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   EDITORIAL COLOPHON & INQUIRIES
   ============================================================ */
function ColophonContactSection() {
  return (
    <section id="contact" className="my-24 md:my-32 scroll-mt-20">
      <div className="rounded-3xl border border-white/[0.12] bg-[#09090D] p-8 md:p-16 relative overflow-hidden">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-[11px] font-mono text-green-400">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
            <span>AVAILABLE FOR INCOMING ROLES & RESEARCH COLLABORATION</span>
          </div>

          <h2 className="text-3xl md:text-6xl font-light tracking-tight text-white leading-tight">
            Initiate a conversation or inquiry.
          </h2>

          <p className="text-base md:text-lg text-white/60 font-light leading-relaxed">
            Open for software engineering opportunities, applied cloud research, and creative technology collaborations.
          </p>

          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <a
              href={`mailto:${USER_PROFILE.email}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F5C2D2] text-[#08080A] text-xs font-bold uppercase tracking-wider hover:bg-[#ffcddc] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{USER_PROFILE.email}</span>
            </a>

            <a
              href={USER_PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 bg-white/[0.02] text-white text-xs font-mono hover:bg-white/[0.08] transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#F5C2D2]" />
              <span>LinkedIn Dossier</span>
            </a>

            <a
              href={USER_PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 bg-white/[0.02] text-white text-xs font-mono hover:bg-white/[0.08] transition-colors"
            >
              <Github className="w-4 h-4 text-[#F5C2D2]" />
              <span>GitHub Repositories</span>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            {USER_PROFILE.name} • {USER_PROFILE.institution}
          </div>
          <div>
            DESIGNED & CRAFTED SPECIFICALLY FOR PRISCILLA VALENCIA ANDOW
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
export default function Page() {
  const [selectedExp, setSelectedExp] = useState<ExperienceEntry | null>(null);

  return (
    <div className="min-h-screen bg-[#08080A] text-[#EDEDED] selection:bg-[#F5C2D2] selection:text-[#08080A] relative">
      {/* Editorial Hairline Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/[0.08] bg-[#08080A]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-xs font-mono font-bold tracking-widest text-white group-hover:text-[#F5C2D2] transition-colors">
              {`PVA // ${USER_PROFILE.edition.split("//")[0]}`}
            </span>
            <span className="text-xs font-mono text-white/30 hidden sm:inline">
              [{USER_PROFILE.institution}]
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wider text-white/60">
            <a href="#flagship" className="hover:text-white transition-colors">01. FLAGSHIP</a>
            <a href="#projects" className="hover:text-white transition-colors">02. HOLDINGS</a>
            <a href="#about" className="hover:text-white transition-colors">03. PROFILE</a>
            <a href="#tech" className="hover:text-white transition-colors">04. MATRIX</a>
            <a href="#experience" className="hover:text-white transition-colors">05. LEDGER</a>
            <a href="#certifications" className="hover:text-white transition-colors">06. VAULT</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="text-xs font-mono tracking-wider px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.03] text-white hover:border-[#F5C2D2] hover:text-[#F5C2D2] transition-all"
            >
              INQUIRE
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 pt-28 md:pt-36">
        {/* HERO SECTION: EDITORIAL MASTHEAD */}
        <section className="mb-24 md:mb-32">
          {/* Metadata Ticker Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] pb-4 mb-8 text-[11px] font-mono text-white/40 gap-3">
            <div className="flex items-center gap-3">
              <span className="text-[#F5C2D2]">● {USER_PROFILE.edition}</span>
              <span>•</span>
              <span>{USER_PROFILE.location}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>SPECIALIZATION: CLOUD & APPLIED AI</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline text-white/60">STATUS: ACTIVE FELLOW</span>
            </div>
          </div>

          {/* Hero Dual Grid */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Typographic Statement */}
            <div className="lg:col-span-8 space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-[#F5C2D2]">
                PORTFOLIO DOSSIER // COMPUTE & INTERACTION
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.05]">
                Priscilla Valencia Andow
              </h1>

              <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                Computer Science scholar at BINUS University developing at the intersection of <span className="text-white font-normal">cloud infrastructure</span>, <span className="text-white font-normal">computer vision</span>, and <span className="text-white font-normal">purpose-driven product engineering</span>.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#flagship"
                  className="px-5 py-3 rounded-full bg-[#F5C2D2] text-[#08080A] text-xs font-bold uppercase tracking-wider hover:bg-[#ffcddc] transition-colors flex items-center gap-2"
                >
                  <span>Explore Flagship Platform</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#projects"
                  className="px-5 py-3 rounded-full border border-white/15 bg-white/[0.03] text-white text-xs font-mono hover:bg-white/[0.08] transition-colors"
                >
                  View Holdings Index (02—05)
                </a>
              </div>
            </div>

            {/* Right: Portrait Aperture Card */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-64 md:w-72 aspect-[3/4] rounded-2xl overflow-hidden border border-white/15 bg-[#0D0D12] shadow-2xl group">
                <Image
                  src={USER_PROFILE.headshot}
                  alt={USER_PROFILE.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono">
                  <div className="text-white font-bold">{USER_PROFILE.shortName}</div>
                  <div className="text-white/50 text-[10px]">{USER_PROFILE.role}</div>
                  <a
                    href={USER_PROFILE.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-[10px] text-[#F5C2D2] hover:underline"
                  >
                    <span>{USER_PROFILE.igHandle}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 01: FEATURED FLAGSHIP CASE STUDY */}
        <CloudAuditFlagship />

        {/* 02: PROJECT HOLDINGS (02 - 05) */}
        <ProjectHoldingsSection />

        {/* 03: EDITORIAL PROFILE & PHILOSOPHY */}
        <EditorialProfileSection />

        {/* 04: TECHNICAL MATRIX */}
        <TechnicalMatrixSection />

        {/* 05: EXPERIENCE & LEADERSHIP LEDGER */}
        <ExperienceLedgerSection onSelectExperience={(exp) => setSelectedExp(exp)} />

        {/* 06: CREDENTIAL VAULT */}
        <CredentialVaultSection />

        {/* 07: COLOPHON & INQUIRIES */}
        <ColophonContactSection />
      </main>

      {/* Experience Detail Modal */}
      <AnimatePresence>
        {selectedExp && (
          <ExperienceDetailModal
            exp={selectedExp}
            onClose={() => setSelectedExp(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}