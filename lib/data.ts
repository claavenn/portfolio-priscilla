// Content copied verbatim from your original files. Edit text here only.
export const PROFILE = {
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
export const EXPERIENCES = [
  {
    index: "01",
    role: "Regional President of TFISC @Semarang",
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
      { src: "/exp/tfisc-2.jpg", position: "center 35%" },
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
      "Encouraged active participation in university and organizational activities for holistic engagement.",
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
    competencies: ["DIGITAL MARKETING", "CONTENT STRATEGY", "EVENT OPERATIONS", "BRAND IDENTITY"],
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
    scope: "Outreach Operations & Prospect Data Management",
    achievements: [
      "Supported recruitment operations and facilitated campus visit sessions for prospective students and stakeholders.",
      "Handled end-to-end event coordination and on-ground logistics to drive seamless institutional outreach.",
      "Organized and maintained post-event prospective student databases to ensure reporting accuracy and structured follow-ups.",
    ],
    competencies: ["EVENT COORDINATION", "DATA MANAGEMENT", "STAKEHOLDER OUTREACH"],
    showBinusLogo: true,
  },
];

export const CERTIFICATIONS = [
  { index: "01", title: "Google Cloud Computing Foundations Certificate", issuer: "Google Cloud Skills Boost", date: "Jul 2026", url: "https://www.credly.com/earner/earned/badge/5118cf29-fa6e-40fa-96a5-9254a3bb45a1" },
  { index: "02", title: "Python Programming Completion Certificate", issuer: "Samsung Innovation Campus (SIC)", date: "Oct 2025", url: "https://drive.google.com/file/d/1Lip0rdOvl5S3kTSv_UmtxK_xx2BTbJ6E/view" },
  { index: "03", title: "Sertifikat Profesional Google AI", issuer: "Google / Coursera", date: "Jul 2026", url: "https://www.coursera.org/account/accomplishments/specialization/8VZZ1J55CSGW" },
];
export const SKILL_GROUPS = [
  { id: "01", label: "Programming", items: ["Python", "Java", "C", "JavaScript", "SQL", "PHP"] },
  { id: "02", label: "Data & AI", items: ["Artificial Intelligence", "Data Analysis", "Machine Learning", "Deep Learning", "Computer Vision", "TensorFlow", "PyTorch", "OpenCV", "Data Visualization"] },
  { id: "03", label: "Cloud & DevOps", items: ["Google Cloud Platform", "Docker", "REST API", "FastAPI", "Flask", "Git", "GitHub", "Cloud Security"] },
  { id: "04", label: "Database", items: ["MySQL", "PostgreSQL", "SQLite", "Database Design", "Data Modeling"] },
  { id: "05", label: "Web & Tools", items: ["HTML", "CSS", "JavaScript", "Streamlit", "VS Code", "Jupyter"] },
  { id: "06", label: "Leadership & Professional", items: ["Leadership", "Project Management", "Team Coordination", "Communication", "Problem Solving", "Analytical Thinking", "Public Speaking", "Event Management", "Stakeholder Management", "Teamwork"] },
];
export type Semester = { id: string; number: string; title: string; description: string; gpa: number | null; courses: string[]; kind?: "study" | "ongoing" | "internship" | "thesis" };

export const ACADEMIC = {
  university: "BINUS University",
  program: "Computer Science",
  years: "2024 — 2028",
  status: "(Expected)",
  specialization: "Cloud Technology",
  cumulativeGPA: 3.53,
  semesters: [
    { id: "01", number: "01", title: "Programming Foundations", description: "Built my foundation in Computer Science through discrete mathematics, linear algebra, statistics, algorithm and programming, and program design. Developed the core computational thinking needed to approach problems systematically.", gpa: 3.1, courses: ["Discrete Mathematics", "Linear Algebra", "Basic Statistics", "Algorithm & Programming", "Program Design Methods"] },
    { id: "02", number: "02", title: "Data Structure & Computing", description: "Developed stronger computational skills through data structures, calculus, scientific computing, and human-computer interaction. Learned to organize information efficiently while understanding how computational systems interact with users.", gpa: 3.22, courses: ["Data Structures", "Calculus",  "Human Computer Interaction", "Scientific Computing", "Creativity & Innovation"] },
    { id: "03", number: "03", title: "Algorithms, AI & Systems", description: "Expanded into core Computer Science systems through algorithm design, computer networks, database technology, artificial intelligence, and object-oriented programming. Began connecting computational theory with intelligent and data-driven applications.", gpa: 3.92, courses: ["Algorithm Design", "Computer Network", "Artificial Intelligence", "OOP", "Database Technology"] },
    { id: "04", number: "04", title: "Software & Cloud Foundations", description: "Transitioned from core Computer Science into software engineering and cloud technology. Built an understanding of software development, database design, web-based programming, cloud computing, and cloud security.", gpa: 3.88, courses: ["Software Engineering", "Cloud Architecture (GCP)", "BigQuery & Data Analytics", "Database Design", "Web Programming", "Cloud Security"] },
    // --- Semesters 5-8: PLACEHOLDER text, replace later. gpa: null = shown as "—" (not yet available) ---
    { id: "05", number: "05", title: "Cloud Development & Operations", description: "Deepened my Cloud Technology specialization through cloud services, application development, and software development operations in cloud environments. Focused on understanding how applications are developed, deployed, and operated within cloud ecosystems.", gpa: null, courses: ["Advanced Cloud Services", "Cloud Application Development", "Cloud Operations", "Operating Systems", "Compilation Techniques"], kind: "ongoing" },
    { id: "06", number: "06", title: "Internship I", description: "Placeholder: industry internship where classroom knowledge is applied to real-world cloud and software projects.", gpa: null, courses: ["Industry Internship", "Professional Practice"], kind: "internship" },
    { id: "07", number: "07", title: "Internship II", description: "Placeholder: continued internship focused on delivering production-ready work with a professional team.", gpa: null, courses: ["Industry Internship", "Project Delivery", "Pre-Thesis"], kind: "internship" },
    { id: "08", number: "08", title: "Thesis", description: "Placeholder: final-year thesis research that brings together cloud technology, data, and software engineering.", gpa: null, courses: ["Thesis Research", "Final Defense"], kind: "thesis" },
  ] as Semester[],
};
export type Project = {
  id: string; tag: string; title: string; sub: string; desc: string;
  metric: string; tags: string[]; link: string; linkLabel?: string; preview?: string; gradientSeed?: number;
};

export const PROJECTS: Project[] = [
  { id: "01", tag: "CLOUD, DATA & AUDIT ANALYTICS", title: "Cloud Audit Analytics Platform", sub: "Python · Data Analytics · Audit Automation · Anomaly Detection", desc: "A data-driven audit analytics platform designed to identify unusual financial transactions and support risk-based auditing. Built with Python, the project uses synthetic financial data to simulate transaction records, introduce anomalies, and establish a foundation for automated audit analysis.", metric: "10,000 SYNTHETIC TRANSACTION RECORDS", tags: ["Python", "Pandas", "Data Analytics", "Audit Analytics", "Anomaly Detection"], link: "https://github.com/claavenn/Cloud-Audit-Analytics-Platform", gradientSeed: 0 },
  { id: "02", tag: "AI & COMPUTER VISION", title: "Real-Time Driver Drowsiness Detection", sub: "Deep Learning · Computer Vision · Driver Safety", desc: "A computer vision system designed to monitor driver alertness through facial behavior analysis. Using a MobileNetV2–LSTM architecture, the project processes sequential video frames to recognize drowsiness-related behaviors and support driver safety monitoring.", metric: "VIDEO-BASED DRIVER BEHAVIOR CLASSIFICATION", tags: ["Python", "OpenCV", "TensorFlow", "MobileNetV2", "LSTM"], link: "https://drive.google.com/drive/folders/1YsCIQjnESDeR_I5zngWsyMvWWSavdvVi", gradientSeed: 1 },
  { id: "03", tag: "VENTURE & STRATEGY", title: "AKANG — Agri-Fintech Venture", sub: "Business Strategy · Financial Modeling · UI/UX · Product Design", desc: "Awarded Semifinalist at BINUS Startup Vaganza. An agritech-fintech platform concept designed to help livestock farmers manage assets, access financing, and connect with agricultural markets.", metric: "BINUS STARTUP VAGANZA SEMIFINALIST", tags: ["Business Model", "Financial Modeling", "UI/UX", "Agritech", "Fintech", "Pitching"], link: "https://linktr.ee/AKANG_AsetKandang?utm_source=linktree_profile_share&ltsid=452e42b4-85fa-4336-adb6-a18fded8aec4", gradientSeed: 2 },
  { id: "04", tag: "UI/UX & WEB DESIGN", title: "Luxury Brand Website", sub: "UI/UX Design · Front-End Development · Digital Experience", desc: "Art-directed digital commerce designed in Figma. Features scalable tokenized design systems, responsive typography scales, and tactile micro-interactions.", metric: "END-TO-END WEBSITE DESIGN & DEVELOPMENT", tags: ["Figma", "UI/UX Prototyping", "HTML", "CSS", "JavaScript", "Responsive Web Design"], link: "https://drive.google.com/drive/folders/1eHVf-AbaNsLKbyc2OqOioRyUqhHNfRuF?usp=sharing", gradientSeed: 3 },
  { id: "05", tag: "SOFTWARE ENGINEERING", title: "Sistem Apotek SMA", sub: "Full-Stack Web · Database Management · Web Application", desc: "A web-based pharmacy management system designed to streamline inventory tracking and pharmaceutical operations. The application focuses on managing medicine records, monitoring stock availability, and organizing inventory data through a structured database and web interface.", metric: "PHARMACY INVENTORY MANAGEMENT", tags: ["Laravel", "PHP", "MySQL", "Full-Stack SE", "REST API"], link: "https://github.com/claavenn/Website-Apotek-SMA", gradientSeed: 4 },
  { id: "06", tag: "UI/UX & SERVICE DESIGN", title: "BluPerch — Online Cleaning Service", sub: "UI/UX Design · Service Platform · User Experience", desc: "A UI/UX design for an online cleaning service system, where customers can find, book, and follow up on cleaning services in one simple flow. Focused on a clear booking journey and an easy-to-use service experience.", metric: "ONLINE CLEANING SERVICE UI/UX", tags: ["UI/UX Design", "Service Platform", "User Experience"], link: "https://www.figma.com/proto/O7Ulu9yCc7z9pIW3hZXXGQ/BluPerch-wawwadwdkjhfeuisdhfaopwjkd?node-id=23-44&p=f&t=d1B6E3GrZ4BSRaWW-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=23%3A44" },
  { id: "07", tag: "RESEARCH & PUBLICATION", title: "Comparative Performance of Lightweight CNN Architectures for Coffee Bean Quality Classification", sub: "Deep Learning · CNN · Research Paper · International Conference", desc: "A research paper comparing the performance of lightweight CNN architectures for classifying coffee bean quality. Submitted to an international conference and available on IEEE Xplore.", metric: "SUBMITTED TO AN INTERNATIONAL CONFERENCE", tags: ["Deep Learning", "CNN", "Research Paper", "IEEE Xplore"], link: "https://ieeexplore.ieee.org/document/11715400", linkLabel: "Read paper" },
];

/* ---------- Added content (safe to edit) ---------- */
export const MARQUEE = [
  "CLOUD ARCHITECTURE (GCP)", "AI & MACHINE LEARNING", "SOFTWARE ENGINEERING",
  "TECHNOLOGY CONSULTING", "DATA ANALYTICS & BIGQUERY", "COMPUTER VISION & EDGE AI",
  "UI/UX & DESIGN SYSTEMS", "TFISC REGIONAL PRESIDENT", "STARTUP VAGANZA SEMIFINALIST", "PVA — PRISCILLA V.A.",
];

/** Project preview photos. Placeholders for now.
 *  To replace: put files in /public/projects and list them by project id, e.g.
 *  "01": ["/projects/audit-1.jpg", "/projects/audit-2.jpg", "/projects/audit-3.jpg"] */
export const PROJECT_PHOTOS: Record<string, string[]> = {
  "01": ["/projects/claudit.png", "/projects/claudit2.png", "/projects/claudit3.png"],
  "02": [], // Driver Drowsiness: belum ada foto (ditandai kosong)
  "03": ["/projects/akang.png", "/projects/akang2.png", "/projects/akang3.png"],
  "04": ["/projects/cw.png", "/projects/cw2.png", "/projects/cw3.png"],
  "05": ["/projects/sistemapotek.jpg"], // 1 foto
  "06": ["/projects/bluperch.png", "/projects/bluperch2.png", "/projects/bluperch3.png"], // format HP
  "07": ["/projects/cnn.png"],
};
export const photosFor = (p: Project): string[] =>
  PROJECT_PHOTOS[p.id] ?? [1, 2, 3].map((n) => `https://picsum.photos/seed/pva-${p.id}-${n}/1200/900`);

/** Credential preview images. Placeholders for now.
 *  To replace: put files in /public/certs and map by certification index, e.g. "01": "/certs/gcp-foundations.png" */
export const CERT_PREVIEWS: Record<string, string> = {
  "01": "/certs/gcp.png",
  "02": "/certs/python.png",
  "03": "/certs/google-ai.png",
};
export const certPreview = (c: { index: string }): string =>
  CERT_PREVIEWS[c.index] ?? `https://picsum.photos/seed/pva-cert-${c.index}/1200/850`;

/** Where the hero photo is anchored. Raise y to move the photo UP in the frame, lower it to move DOWN (0-100). */
export const HERO_FOCUS = { x: 50, y: 34 };

/** Highlights shown under the About description. Leave link "" to hide; edit the first one when you have the paper details. */
export const HIGHLIGHTS = [
  { label: "Paper submitted to an international conference", href: "#projects", featured: true },
  { label: "Semifinalist, BINUS Startup Vaganza (AKANG)", href: "#projects", featured: false },
  { label: "Regional President of TFISC @Semarang", href: "#experience", featured: false },
];