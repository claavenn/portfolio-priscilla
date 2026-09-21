"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Terminal, Layers, ShieldCheck, CheckCircle2 } from "lucide-react";

interface ProjectData {
  index: string;
  category: string;
  title: string;
  subtitle: string;
  desc: string;
  role: string;
  stack: string[];
  architecture?: string[];
  highlights: string[];
  demo?: string;
  links?: { label: string; url: string }[];
}

const PROJECTS: Record<string, ProjectData> = {
  "cloud-audit": {
    index: "01",
    category: "FLAGSHIP CASE STUDY // CLOUD & DATA",
    title: "Cloud Audit Analytics Platform",
    subtitle: "Enterprise telemetry ingest, IAM anomaly audit engine & GCP security analytics",
    desc: "A distributed cloud security telemetry and audit compliance platform engineered on Google Cloud Platform. Designed to aggregate real-time infrastructure event streams, detect policy deviations and suspicious access patterns using statistical thresholding, and present an immutable audit trail for compliance verification.",
    role: "Cloud Architecture & Telemetry Design",
    stack: ["Google Cloud Platform", "IAM & Security", "BigQuery", "Compute Engine", "Cloud Load Balancing", "Python", "SQL"],
    architecture: [
      "IAM & Audit Log Ingestion via GCP Pub/Sub & Cloud Logging pipelines",
      "High-throughput aggregation and structured query indexing in Google BigQuery",
      "Anomaly detection pipeline monitoring privilege escalations and off-hour access",
      "Immutable compliance dashboard reporting real-time posture deviations"
    ],
    highlights: [
      "Automated cross-project IAM role reconciliation against baseline security policies.",
      "Optimized query execution time across millions of audit records using BigQuery partition clustering.",
      "Live anomaly indicators with severity classification (Info, Medium, High, Critical).",
      "Direct integration with GCP Cloud Skills Boost architecture foundations."
    ],
    demo: "https://www.credly.com/earner/earned/badge/5118cf29-fa6e-40fa-96a5-9254a3bb45a1"
  },
  "drowsiness-detection-system": {
    index: "02",
    category: "COMPUTER VISION & REAL-TIME AI",
    title: "Drowsiness Detection System",
    subtitle: "Real-time driver fatigue monitoring via facial landmark geometry and EAR analysis",
    desc: "An intelligent computer vision system engineered to mitigate road accidents caused by driver exhaustion. Utilizes continuous video stream analysis to map 68 facial landmarks, calculate dynamic Eye Aspect Ratios (EAR), and trigger auditory & visual alert sequences when drowsiness thresholds are exceeded.",
    role: "Lead Developer & CV Researcher",
    stack: ["Python", "OpenCV", "Dlib", "TensorFlow", "Facial Landmark Model"],
    highlights: [
      "Facial landmark tracking delivering 30+ FPS inference on standard webcam hardware.",
      "Dynamic Eye Aspect Ratio (EAR) algorithm accounting for head pose variations.",
      "Multi-stage alerting: visual warning HUD transitioning to persistent acoustic chime.",
      "Benchmarked against varying lighting conditions and eyewear obstruction."
    ],
    demo: "https://drive.google.com/drive/folders/1YsCIQjnESDeR_I5zngWsyMvWWSavdvVi"
  },
  "akang": {
    index: "03",
    category: "VENTURE DESIGN & AI PLATFORM",
    title: "AKANG — Semifinalist BINUS Startup Vaganza",
    subtitle: "Digitizing traditional livestock assets into transparent digital investments via AI",
    desc: "A disruptive agri-fintech and AI initiative that bridges rural farmers with modern digital investors. Developed complete financial projections, risk mitigation models, farm telemetry tracking concepts, and high-fidelity mobile & web user experiences, pitching before industry panels to achieve Semifinalist status.",
    role: "Product Strategist & UI/UX Co-founder",
    stack: ["Figma", "Product Strategy", "Financial Modeling", "AI Telemetry", "Venture Pitching"],
    highlights: [
      "Advanced to Semifinalist placement among dozens of university-wide innovative startups.",
      "Engineered livestock valuation model tying growth rates to digital asset valuations.",
      "Designed seamless mobile investor app featuring real-time farm webcam feeds and yields.",
      "Conducted on-the-ground user interviews with agricultural cooperatives."
    ],
    demo: "https://linktr.ee/AKANG_AsetKandang?utm_source=linktree_profile_share&ltsid=452e42b4-85fa-4336-adb6-a18fded8aec4"
  },
  "luxury-brand-website": {
    index: "04",
    category: "DIGITAL PRODUCT & LUXURY UI/UX",
    title: "Luxury Brand Website UI/UX",
    subtitle: "High-craft digital editorial commerce designed with obsessive typographical harmony",
    desc: "A meticulous digital experience for high-end fashion and lifestyle brands. Reimagines digital commerce as an art-directed editorial journey, blending asymmetrical layouts, delicate typography, smooth micro-interactions, and responsive design systems in Figma.",
    role: "Lead UI/UX & Visual Designer",
    stack: ["Figma", "Design Systems", "Prototyping", "Editorial Grid", "Interaction Design"],
    highlights: [
      "Custom typographic scale prioritizing visual luxury and atmospheric negative space.",
      "Fluid interactive micro-animations for product curation and editorial lookbooks.",
      "Comprehensive component library with complete tokenized design system.",
      "Optimized for high-DPI displays and tactile touch navigation."
    ],
    demo: "https://drive.google.com/drive/folders/1eHVf-AbaNsLKbyc2OqOioRyUqhHNfRuF?usp=sharing"
  },
  "sistem-apotek-sma": {
    index: "05",
    category: "HEALTHCARE SYSTEM & FULLSTACK SE",
    title: "Sistem Apotek SMA",
    subtitle: "Automated medical inventory, expiry detection, and dispensary logging system",
    desc: "A full-stack pharmaceutical administration platform developed for institutional health clinics. Solves inventory discrepancies by tracking batch expiry dates, automating prescription dispensary logs, and generating scheduled regulatory inventory reports.",
    role: "Fullstack Web Developer",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Chart.js", "REST Architecture"],
    highlights: [
      "Automated critical alerts notifying staff 30 and 15 days prior to medication expiration.",
      "Comprehensive role-based access control (Pharmacist, Clinic Head, Staff Auditor).",
      "Interactive analytics dashboard visualizing dispensing frequencies and stock depletion.",
      "Zero-data-loss relational schema with transaction-level integrity checks."
    ]
  },
  // Legacy route fallbacks
  "neural-interface": {
    index: "02",
    category: "COMPUTER VISION & AI",
    title: "Drowsiness Detection System",
    subtitle: "Real-time facial landmark detection and driver safety system",
    desc: "Computer vision solution detecting operator drowsiness in real-time.",
    role: "Lead Developer",
    stack: ["Python", "OpenCV", "TensorFlow"],
    highlights: ["Real-time facial landmark tracking", "Auditory alerts for safety"],
    demo: "https://drive.google.com/drive/folders/1YsCIQjnESDeR_I5zngWsyMvWWSavdvVi"
  },
  "quantum-flow": {
    index: "03",
    category: "STARTUP & AI VENTURE",
    title: "AKANG (Binus Startup Vaganza)",
    subtitle: "Livestock asset platform & business model",
    desc: "Transforming livestock into digital assets.",
    role: "Product Designer",
    stack: ["Product Design", "Financial Modeling", "UI/UX"],
    highlights: ["Semifinalist Binus Startup Vaganza", "Complete pitch strategy"],
    demo: "https://linktr.ee/AKANG_AsetKandang?utm_source=linktree_profile_share&ltsid=452e42b4-85fa-4336-adb6-a18fded8aec4"
  },
  "ethereal": {
    index: "04",
    category: "LUXURY UI/UX",
    title: "Luxury Brand Website UI/UX",
    subtitle: "Editorial digital commerce experience",
    desc: "Luxury visual identity and e-commerce experience.",
    role: "Lead Designer",
    stack: ["Figma", "UI/UX", "Design Systems"],
    highlights: ["Editorial typography", "Luxury micro-interactions"],
    demo: "https://drive.google.com/drive/folders/1eHVf-AbaNsLKbyc2OqOioRyUqhHNfRuF?usp=sharing"
  },
  "cybergrid": {
    index: "05",
    category: "ENTERPRISE SOFTWARE",
    title: "Sistem Apotek SMA",
    subtitle: "Institutional pharmacy management system",
    desc: "Inventory and expiration tracking management application.",
    role: "Fullstack Developer",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind"],
    highlights: ["Expiry alert system", "Comprehensive dispensary reporting"]
  }
};

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const p = PROJECTS[slug] || PROJECTS["cloud-audit"];

  return (
    <div className="min-h-screen bg-[#08080A] text-[#EDEDED] selection:bg-[#F5C2D2] selection:text-[#08080A]">
      <div className="border-b border-white/[0.08] bg-[#08080A]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Return to Portfolio</span>
          </Link>
          <div className="flex items-center gap-3 text-xs font-mono text-white/40">
            <span>INDEX // {p.index}</span>
            <span>•</span>
            <span className="text-[#F5C2D2]">{p.category.split("//")[0]}</span>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Header Block */}
        <div className="border-b border-white/[0.08] pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono tracking-widest text-[#F5C2D2] mb-6">
            <span>{p.category}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-light tracking-tight text-white max-w-4xl"
            style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif' }}
          >
            {p.title}
          </motion.h1>

          <p className="mt-4 text-lg md:text-xl text-white/60 font-light max-w-3xl leading-relaxed">
            {p.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5C2D2] text-[#08080A] text-xs font-bold uppercase tracking-wider hover:bg-[#ffcddc] transition-colors"
              >
                <span>Access Live Showcase</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            <div className="text-xs font-mono text-white/40">
              ROLE ASSIGNMENT: <span className="text-white/80">{p.role}</span>
            </div>
          </div>
        </div>

        {/* Overview & Architecture Grid */}
        <div className="grid md:grid-cols-12 gap-12 py-12 border-b border-white/[0.08]">
          <div className="md:col-span-4 space-y-8">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#F5C2D2]" />
                <span>Technology Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 text-xs font-mono rounded border border-white/10 bg-white/[0.02] text-white/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F5C2D2]" />
                <span>Project Scope</span>
              </div>
              <p className="text-xs font-mono text-white/60 leading-relaxed">
                Engineered with high standards for production readiness, reliability, and architectural clarity.
              </p>
            </div>
          </div>

          <div className="md:col-span-8 space-y-8">
            <div>
              <h2 className="text-xl font-medium text-white mb-4">Executive Summary</h2>
              <p className="text-white/70 leading-relaxed font-light text-base md:text-lg">
                {p.desc}
              </p>
            </div>

            {p.architecture && (
              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#F5C2D2] mb-4 flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  <span>Architectural Pipeline</span>
                </h3>
                <div className="grid gap-3">
                  {p.architecture.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg border border-white/[0.08] bg-white/[0.02] flex items-start gap-3"
                    >
                      <span className="text-xs font-mono text-[#F5C2D2] mt-0.5">0{idx + 1}.</span>
                      <span className="text-sm text-white/80 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-white/50 mb-4">
                Core Deliverables & Highlights
              </h3>
              <div className="grid gap-3">
                {p.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-white/75">
                    <CheckCircle2 className="w-4 h-4 text-[#F5C2D2] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="text-xs font-mono tracking-wider uppercase text-white/60 hover:text-[#F5C2D2] transition-colors"
          >
            ← Back to All Projects
          </Link>
          <div className="text-xs font-mono text-white/30">
            PRISCILLA VALENCIA ANDOW // PORTFOLIO ARCHIVE
          </div>
        </div>
      </main>
    </div>
  );
}