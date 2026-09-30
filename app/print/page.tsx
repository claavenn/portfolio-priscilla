"use client";

import React from "react";

export default function PrintPage() {
  const NAME = "Priscilla Valencia Andow";
  const ROLE = "Computer Science Student @ BINUS University";
  const SPECIALIZATION = "Cloud Technology • UI/UX Designer • Software Engineering";
  const WEBSITE = "portfolio-priscilla.vercel.app";
  const EMAIL = "priscilla.andow@binus.ac.id";
  const LINKEDIN = "linkedin.com/in/priscilla-valencia-andow";
  const GITHUB = "github.com/claavenn";
  const IG = "@priscilla.vln";

  const ABOUT =
    "Computer Science student at BINUS University specializing in Cloud Technology, with a strong commitment to user-centric problem solving and social impact. As Regional President of TFISC Semarang and Semifinalist at BINUS Startup Vaganza, I leverage cross-functional leadership and technology to address real-world challenges. Driven to solve meaningful community problems through innovative app solutions.";

  const EXPERIENCES = [
    {
      role: "Regional President of TFISC @Semarang",
      place: "Organization",
      period: "2026 — Present",
      achievements: [
        "Led 50+ members across regional chapters and streamlined cross-team collaboration",
        "Organized 5 major tech events with total 1,200+ attendees",
        "Increased engagement by 200% through digital-first initiatives",
        "Established partnership with 3 local tech communities",
      ],
    },
    {
      role: "Freshmen Partner",
      place: "BINUS University",
      period: "2024 — 2025",
      achievements: [
        "Mentored 30+ freshmen students through their first-year transition",
        "Organized 4 orientation sessions and campus tours",
        "Provided academic and social guidance to new students",
        "Achieved 95% mentee satisfaction rating",
      ],
    },
    {
      role: "Member of HIMTI Semarang",
      place: "Organization",
      period: "2025 — 2026",
      achievements: [
        "Developed 2 web applications used by 300+ students",
        "Won internal hackathon among 40+ teams",
        "Mentored 5 junior members in web development",
      ],
    },
    {
      role: "Promotion Team BINUS Semarang",
      place: "Company",
      period: "2024 — 2025",
      achievements: [
        "Created 50+ promotional contents across platforms",
        "Increased reach by 150% on social media",
        "Managed 3 university-level events end-to-end",
      ],
    },
  ];

  const PROJECTS = [
    {
      title: "Drowsiness Detection System",
      desc: "Real-time computer vision system to detect driver drowsiness using facial landmark detection and eye-aspect-ratio analysis, with alert notifications to prevent accidents.",
      tags: "Python, OpenCV, Dlib, TensorFlow, Computer Vision",
    },
    {
      title: "AKANG — Semifinalist BINUS Startup Vaganza",
      desc: "Conceptualized an AI platform transforming traditional livestock into digital assets; co-developed financial projections, business models, and mobile/web UI prototypes. Pitched the end-to-end strategy to industry judges, earning a Semifinalist placement out of multi-campus competitors.",
      tags: "Product Design, UI/UX, Business Model, AI, Startup",
    },
    {
      title: "Luxury Brand Website UI/UX",
      desc: "Elegant and immersive UI/UX design for a luxury brand website — focusing on sophisticated visual hierarchy, premium typography, and smooth micro-interactions.",
      tags: "Figma, UI/UX, Prototyping, Visual Design",
    },
    {
      title: "Sistem Apotek SMA",
      desc: "Web-based pharmacy management system for high school health units — handling medicine stock tracking, expiry alerts, prescription records, and transaction reports.",
      tags: "Laravel, PHP, MySQL, Tailwind, Chart.js",
    },
  ];

  const CERTIFICATIONS = [
    {
      title: "Google Cloud Computing Foundations Certificate",
      issuer: "Google Cloud Skills Boost",
      year: "Jul 2026",
      id: "5118cf29-fa6e-40fa-96a5-9254a3bb45a1",
    },
    {
      title: "Python Programming Completion Certificate",
      issuer: "Samsung Innovation Campus (SIC)",
      year: "Oct 2025",
      id: null,
    },
    {
      title: "Sertifikat Profesional Google AI",
      issuer: "Google",
      year: "Jul 2026",
      id: "8VZZ1J55CSGW",
    },
  ];

  const SKILLS: Record<string, string> = {
    Languages: "C, Python, JavaScript, PHP, SQL, HTML, CSS",
    "Frameworks & Backend": "Laravel, Node.js, REST API, MySQL",
    "Tools & Design": "VS Code, GitHub, Canva, Figma, Excel",
    "Cloud (GCP)":
      "Google Cloud Platform, IAM & Security, Cloud Load Balancing, Compute Engine",
    Networking: "TCP/IP, HTTP/HTTPS, DNS, IP Addressing, Subnetting",
    "Core CS":
      "Data Structures, Algorithm & Programming, Computer Networks, OOP, Database Technology, Artificial Intelligence, Software Engineering",
    "Soft Skills":
      "Leadership, Digital Marketing, Communication, Team Management",
  };

  return (
    <div className="print-wrapper">
      {/* PRINT BUTTON — hidden saat print */}
      <div className="no-print">
        <button onClick={() => window.print()} className="print-btn">
          🖨 Print / Save as PDF
        </button>
        <p className="hint">
          Tip: pilih <b>&quot;Save as PDF&quot;</b> di dialog print, centang{" "}
          <b>&quot;Background graphics&quot;</b>, margin <b>Default</b>.
        </p>
      </div>

      {/* ===== PDF CONTENT ===== */}
      <div className="page">
        {/* HEADER */}
        <header className="header">
          <div className="photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/me.jpg" alt={NAME} />
          </div>
          <div className="header-text">
            <h1>{NAME}</h1>
            <p className="role">{ROLE}</p>
            <p className="spec">{SPECIALIZATION}</p>
            <div className="contacts">
              <span className="highlight">🌐 {WEBSITE}</span>
              <span>✉ {EMAIL}</span>
              <span>🔗 {LINKEDIN}</span>
              <span>💻 {GITHUB}</span>
              <span>📷 {IG}</span>
            </div>
          </div>
        </header>

        {/* ABOUT */}
        <section className="section">
          <h2>About</h2>
          <p className="about-text">{ABOUT}</p>
        </section>

        {/* EXPERIENCE */}
        <section className="section">
          <h2>Experience</h2>
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="item">
              <div className="item-head">
                <h3>{exp.role}</h3>
                <span className="period">{exp.period}</span>
              </div>
              <p className="place">{exp.place}</p>
              <ul>
                {exp.achievements.map((ach, j) => (
                  <li key={j}>{ach}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* PROJECTS */}
        <section className="section">
          <h2>Projects</h2>
          {PROJECTS.map((p, i) => (
            <div key={i} className="item">
              <h3>{p.title}</h3>
              <p className="desc">{p.desc}</p>
              <p className="tags">{p.tags}</p>
            </div>
          ))}
        </section>

        {/* CERTIFICATIONS */}
        <section className="section">
          <h2>Certifications</h2>
          {CERTIFICATIONS.map((c, i) => (
            <div key={i} className="item cert">
              <div>
                <h3>{c.title}</h3>
                <p className="place">{c.issuer}</p>
                {c.id && <p className="cred-id">Credential ID: {c.id}</p>}
              </div>
              <span className="period">{c.year}</span>
            </div>
          ))}
        </section>

        {/* SKILLS */}
        <section className="section">
          <h2>Skills</h2>
          <div className="skills">
            {Object.entries(SKILLS).map(([key, val]) => (
              <div key={key} className="skill-row">
                <span className="skill-key">{key}</span>
                <span className="skill-val">{val}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <p>
            © {new Date().getFullYear()} {NAME} — Generated from portfolio
          </p>
        </footer>
      </div>

      {/* ===== STYLES ===== */}
      <style jsx global>{`
        /* ========== BASE ========== */
        html,
        body {
          background: #f5f5f7;
          margin: 0;
          padding: 0;
        }

        .print-wrapper {
          min-height: 100vh;
          padding: 40px 20px;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
          color: #111;
        }

        /* ========== PRINT BUTTON ========== */
        .no-print {
          max-width: 800px;
          margin: 0 auto 24px;
          text-align: center;
        }

        .print-btn {
          padding: 12px 28px;
          background: linear-gradient(135deg, #f7bfd2, #c084fc);
          color: #000;
          border: none;
          border-radius: 12px;
          font-weight: 800;
          font-size: 14px;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(247, 191, 210, 0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .print-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(247, 191, 210, 0.6);
        }

        .hint {
          font-size: 12px;
          color: #666;
          margin-top: 10px;
          line-height: 1.5;
        }

        /* ========== PAGE (A4-like) ========== */
        .page {
          max-width: 800px;
          margin: 0 auto;
          background: #fff;
          padding: 48px 56px;
          border-radius: 12px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
        }

        /* ========== HEADER ========== */
        .header {
          display: flex;
          align-items: flex-start;
          gap: 24px;
          padding-bottom: 24px;
          border-bottom: 2px solid #f7bfd2;
        }

        .photo {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #f7bfd2;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(247, 191, 210, 0.3);
        }

        .photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .header-text {
          flex: 1;
          min-width: 0;
        }

        .header h1 {
          font-size: 26px;
          font-weight: 900;
          letter-spacing: -0.5px;
          margin: 0;
          color: #0a0a14;
        }

        .role {
          font-size: 13px;
          font-weight: 700;
          color: #e879a8;
          margin: 4px 0 2px;
        }

        .spec {
          font-size: 11px;
          font-weight: 600;
          color: #666;
          margin: 0 0 10px;
        }

        .contacts {
          display: flex;
          flex-wrap: wrap;
          gap: 4px 14px;
          font-size: 11px;
          color: #444;
        }

        .contacts span {
          white-space: nowrap;
        }

        .contacts .highlight {
          font-weight: 800;
          color: #e879a8;
        }

        /* ========== SECTIONS ========== */
        .section {
          margin-top: 24px;
        }

        .section h2 {
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #e879a8;
          margin: 0 0 12px;
          padding-bottom: 4px;
          border-bottom: 1px solid #f5d0dd;
        }

        .about-text {
          font-size: 11.5px;
          line-height: 1.65;
          color: #333;
          margin: 0;
          text-align: justify;
        }

        /* ========== ITEMS ========== */
        .item {
          margin-bottom: 14px;
          page-break-inside: avoid;
        }

        .item:last-child {
          margin-bottom: 0;
        }

        .item-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
        }

        .item h3 {
          font-size: 12.5px;
          font-weight: 800;
          color: #0a0a14;
          margin: 0;
        }

        .place {
          font-size: 11px;
          font-weight: 700;
          color: #e879a8;
          margin: 1px 0 4px;
        }

        .period {
          font-size: 10px;
          font-weight: 600;
          color: #888;
          white-space: nowrap;
        }

        .item ul {
          margin: 4px 0 0 16px;
          padding: 0;
        }

        .item li {
          font-size: 11px;
          color: #444;
          line-height: 1.55;
          margin-bottom: 2px;
        }

        .desc {
          font-size: 11px;
          color: #444;
          line-height: 1.55;
          margin: 3px 0 4px;
        }

        .tags {
          font-size: 10px;
          font-weight: 700;
          color: #a855f7;
          margin: 0;
        }

        .cred-id {
          font-size: 9.5px;
          color: #888;
          font-family: monospace;
          margin: 2px 0 0;
        }

        .cert {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }

        /* ========== SKILLS ========== */
        .skills {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .skill-row {
          display: flex;
          gap: 10px;
          font-size: 11px;
        }

        .skill-key {
          font-weight: 800;
          color: #0a0a14;
          min-width: 130px;
          flex-shrink: 0;
        }

        .skill-val {
          color: #444;
          line-height: 1.5;
        }

        /* ========== FOOTER ========== */
        .footer {
          margin-top: 32px;
          padding-top: 12px;
          border-top: 1px solid #eee;
          text-align: center;
        }

        .footer p {
          font-size: 10px;
          color: #999;
          margin: 0;
        }

        /* ========== PRINT MEDIA ========== */
        @media print {
          @page {
            size: A4;
            margin: 12mm;
          }

          html,
          body {
            background: #fff !important;
          }

          .print-wrapper {
            padding: 0;
          }

          .no-print {
            display: none !important;
          }

          .page {
            max-width: 100%;
            padding: 0;
            border-radius: 0;
            box-shadow: none;
          }

          .item {
            page-break-inside: avoid;
          }

          .section h2 {
            page-break-after: avoid;
          }

          .header {
            page-break-after: avoid;
          }

          /* Force background colors to print */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}