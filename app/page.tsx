// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
//   useMotionValue,
//   useInView,
//   AnimatePresence,
// } from "framer-motion";
// import {
//   ArrowUpRight,
//   Briefcase,
//   FolderGit2,
//   Instagram,
//   Mail,
//   User,
//   ChevronRight,
//   Github,
//   Linkedin,
//   Cpu,
//   Code2,
//   Rocket,
//   Zap,
//   Sparkle,
//   Award,
//   Calendar,
//   Heart,
//   MessageCircle,
//   Send,
//   MousePointer2,
//   X,
//   Cloud,
//   Palette,
//   BadgeCheck,
//   ExternalLink,
// } from "lucide-react";

// interface ExperienceItem {
//   slug: string;
//   role: string;
//   place: string;
//   period: string;
//   achievements: string[];
//   tech: string[];
//   link: string;
//   photos?: string[];
// }

// interface ProjectItem {
//   slug: string;
//   title: string;
//   desc: string;
//   tags: string[];
//   link: string;
// }

// interface Certification {
//   title: string;
//   issuer: string;
//   year: string;
//   credentialId: string | null;
//   skills: string[];
//   extraSkills?: number;
//   icon: React.ComponentType<{ className?: string }>;
//   link: string;
// }

// interface Particle {
//   id: number;
//   size: number;
//   background: string;
//   left: string;
//   top: string;
//   duration: number;
// }

// const PARTICLES: Particle[] = Array.from({ length: 30 }, (_, i) => {
//   const r1 = ((i * 9301 + 49297) % 233280) / 233280;
//   const r2 = ((i * 12345 + 67891) % 233280) / 233280;
//   const r3 = ((i * 54321 + 98765) % 233280) / 233280;
//   return {
//     id: i,
//     size: Number((r1 * 3 + 1).toFixed(1)),
//     background: i % 3 === 0 ? "rgba(247,191,210,0.6)" : "rgba(255,255,255,0.3)",
//     left: `${(r2 * 100).toFixed(2)}%`,
//     top: `${(r3 * 100).toFixed(2)}%`,
//     duration: Number((r3 * 20 + 15).toFixed(1)),
//   };
// });

// function cn(...s: Array<string | false | undefined>) {
//   return s.filter(Boolean).join(" ");
// }

// const COLORS = {
//   pink: "#F7BFD2",
//   pinkGlow: "rgba(247,191,210,0.5)",
// };

// /* ============================================================
//    BACKGROUND FX
//    ============================================================ */
// function FloatingParticles() {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {PARTICLES.map((p) => (
//         <motion.div
//           key={p.id}
//           className="absolute rounded-full"
//           style={{
//             width: p.size,
//             height: p.size,
//             background: p.background,
//             left: p.left,
//             top: p.top,
//           }}
//           animate={{
//             y: [0, -100, 0, 100, 0],
//             x: [0, 50, -50, 25, 0],
//             opacity: [0.2, 0.8, 0.2, 0.4, 0.2],
//           }}
//           transition={{
//             duration: p.duration,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// function TechGrid() {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });
//   const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
//   return (
//     <div ref={ref} className="absolute inset-0 overflow-hidden opacity-10">
//       <motion.div
//         className="absolute inset-0"
//         style={{
//           y,
//           backgroundImage: `
//             linear-gradient(rgba(247,191,210,0.15) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(247,191,210,0.15) 1px, transparent 1px)
//           `,
//           backgroundSize: "60px 60px",
//         }}
//       />
//     </div>
//   );
// }

// /* Auto-animated floating blobs (no hover needed) */
// function AmbientBlobs() {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       <motion.div
//         className="absolute w-[400px] h-[400px] rounded-full blur-[120px]"
//         style={{ background: "rgba(247,191,210,0.15)", top: "10%", left: "5%" }}
//         animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
//         transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute w-[500px] h-[500px] rounded-full blur-[140px]"
//         style={{ background: "rgba(168,85,247,0.12)", top: "50%", right: "5%" }}
//         animate={{ x: [0, -70, 0], y: [0, 60, 0] }}
//         transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute w-[350px] h-[350px] rounded-full blur-[100px]"
//         style={{ background: "rgba(247,191,210,0.1)", bottom: "5%", left: "40%" }}
//         animate={{ x: [0, 60, -40, 0], y: [0, -50, 30, 0] }}
//         transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//       />
//     </div>
//   );
// }

// /* ============================================================
//    HELPERS
//    ============================================================ */
// function Reveal({
//   children,
//   delay = 0,
//   y = 30,
//   className,
// }: {
//   children: React.ReactNode;
//   delay?: number;
//   y?: number;
//   className?: string;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-60px" }}
//       transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// function TiltCard({
//   children,
//   className,
//   intensity = 6,
// }: {
//   children: React.ReactNode;
//   className?: string;
//   intensity?: number;
// }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const rotateX = useMotionValue(0);
//   const rotateY = useMotionValue(0);
//   const springX = useSpring(rotateX, { stiffness: 300, damping: 30 });
//   const springY = useSpring(rotateY, { stiffness: 300, damping: 30 });

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const cx = rect.width / 2;
//     const cy = rect.height / 2;
//     rotateX.set(((y - cy) / cy) * -intensity);
//     rotateY.set(((x - cx) / cx) * intensity);
//   };

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => {
//         rotateX.set(0);
//         rotateY.set(0);
//       }}
//       className={cn("relative", className)}
//       style={{
//         transformStyle: "preserve-3d",
//         rotateX: springX,
//         rotateY: springY,
//         perspective: 1000,
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// function MagneticButton({
//   children,
//   className,
//   href,
// }: {
//   children: React.ReactNode;
//   className?: string;
//   href?: string;
// }) {
//   const ref = useRef<HTMLAnchorElement>(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const sx = useSpring(x, { stiffness: 200, damping: 20 });
//   const sy = useSpring(y, { stiffness: 200, damping: 20 });

//   return (
//     <motion.a
//       ref={ref}
//       href={href}
//       onMouseMove={(e) => {
//         if (!ref.current) return;
//         const rect = ref.current.getBoundingClientRect();
//         x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
//         y.set((e.clientY - rect.top - rect.height / 2) * 0.25);
//       }}
//       onMouseLeave={() => {
//         x.set(0);
//         y.set(0);
//       }}
//       style={{ x: sx, y: sy }}
//       className={className}
//       whileTap={{ scale: 0.95 }}
//     >
//       {children}
//     </motion.a>
//   );
// }

// function AnimatedCounter({
//   value,
//   label,
//   icon: Icon,
// }: {
//   value: number;
//   label: string;
//   icon?: React.ElementType;
// }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const inView = useInView(ref, { once: true, margin: "-50px" });
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!inView) return;
//     let frame = 0;
//     const total = 40;
//     const timer = setInterval(() => {
//       frame++;
//       setCount(Math.round((value * frame) / total));
//       if (frame >= total) clearInterval(timer);
//     }, 25);
//     return () => clearInterval(timer);
//   }, [inView, value]);

//   return (
//     <motion.div
//       ref={ref}
//       className="text-center p-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl"
//       whileHover={{ y: -4, backgroundColor: "rgba(247,191,210,0.1)" }}
//     >
//       {Icon && <Icon className="w-4 h-4 text-pink-300 mx-auto mb-1" />}
//       <div className="text-2xl font-black tracking-tight text-white">
//         {count}
//         <span className="text-pink-300">+</span>
//       </div>
//       <div className="text-[10px] font-bold uppercase tracking-wider text-white/50 mt-0.5">
//         {label}
//       </div>
//     </motion.div>
//   );
// }

// /* ============================================================
//    PHOTO CARD
//    ============================================================ */
// function PhotoHeroCard({
//   name,
//   ig,
//   photoSrc,
//   role,
// }: {
//   name: string;
//   ig: string;
//   photoSrc: string;
//   role?: string;
//   specialization?: string;
// }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const cardRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: cardRef,
//     offset: ["start end", "end start"],
//   });
//   const parallaxY = useTransform(scrollYProgress, [0, 1], [20, -20]);

//   return (
//     <motion.div ref={cardRef} style={{ y: parallaxY }} className="relative flex justify-center">
//       {/* Ambient glow */}
//       <motion.div
//         className="absolute -inset-6 rounded-[36px] blur-3xl opacity-60"
//         style={{
//           background:
//             "radial-gradient(circle at 30% 30%, rgba(247,191,210,0.4), transparent 60%), radial-gradient(circle at 70% 70%, rgba(168,85,247,0.3), transparent 60%)",
//         }}
//         animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.75, 0.5] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <TiltCard intensity={5}>
//         <motion.div
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           animate={{ y: [0, -8, 0] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//           className="relative w-[260px] h-[360px] md:w-[280px] md:h-[380px] rounded-[28px] overflow-hidden cursor-pointer group"
//         >
//           {/* Gradient border */}
//           <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-pink-300/60 via-white/20 to-purple-400/50 p-[1.5px]">
//             <div className="w-full h-full rounded-[26px] bg-[#050509]" />
//           </div>

//           {/* Photo */}
//           <motion.div
//             className="absolute inset-0 rounded-[26px] overflow-hidden"
//             animate={{ scale: isHovered ? 1.06 : 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             <Image
//               src={photoSrc}
//               alt={name}
//               fill
//               className="object-cover"
//               sizes="(max-width: 768px) 260px, 280px"
//               priority
//             />
//           </motion.div>

//           {/* Overlays */}
//           <div className="absolute inset-0 rounded-[26px] bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
//           <div className="absolute inset-0 rounded-[26px] bg-gradient-to-tr from-pink-500/15 via-transparent to-purple-500/10" />

//           {/* Top badge minimal */}
//           <motion.div
//             className="absolute top-4 left-4 right-4 flex items-center justify-between"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//           </motion.div>

//           {/* Bottom content */}
//           <div className="absolute bottom-0 left-0 right-0 p-4 space-y-3">
//             <div className="space-y-1">
//               <h3 className="text-lg font-black tracking-tight text-white leading-tight">
//                 {name}
//               </h3>
//               <p className="text-[10px] font-medium text-white/50 leading-snug">
//                 {role || "CS Student @ BINUS"}
//               </p>
//             </div>

//             <motion.a
//               href={`https://instagram.com/${ig}`}
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center justify-between rounded-xl bg-white/10 backdrop-blur-xl px-3 py-2 border border-white/20 group/link"
//               whileHover={{ scale: 1.03, backgroundColor: "rgba(247,191,210,0.2)" }}
//               whileTap={{ scale: 0.97 }}
//             >
//               <div className="flex items-center gap-1.5">
//                 <Instagram className="w-3.5 h-3.5 text-pink-300" />
//                 <span className="text-xs font-semibold text-white">@{ig}</span>
//               </div>
//               <ArrowUpRight className="w-3.5 h-3.5 text-white/70 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
//             </motion.a>
//           </div>

//           {/* Auto shimmer sweep */}
//           <motion.div
//             className="absolute inset-0 rounded-[26px] pointer-events-none"
//             initial={{ x: "-120%" }}
//             animate={{ x: "120%" }}
//             transition={{
//               duration: 1.2,
//               repeat: Infinity,
//               repeatDelay: 4,
//               ease: "easeInOut",
//             }}
//             style={{
//               background:
//                 "linear-gradient(105deg, transparent 40%, rgba(247,191,210,0.3) 50%, transparent 60%)",
//             }}
//           />
//         </motion.div>
//       </TiltCard>

//       {/* Floating chips — singkat, auto-gerak dengan delay berbeda */}
//       {[
//         { icon: Cloud, label: "Cloud", color: "text-pink-300", pos: "-left-4 top-[18%]" },
//         { icon: Palette, label: "UI/UX", color: "text-purple-300", pos: "-right-4 top-[30%]" },
//         { icon: Code2, label: "SE", color: "text-blue-300", pos: "-left-6 bottom-[28%]" },
//         { icon: Cpu, label: "DB", color: "text-emerald-300", pos: "-right-6 bottom-[40%]" },
//         { icon: Sparkle, label: "AI", color: "text-amber-300", pos: "-left-2 top-[40%]" },
//       ].map((chip, i) => (
//         <motion.div
//           key={chip.label}
//           className={`absolute ${chip.pos} px-2.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-xl border border-white/15 shadow-lg hidden md:flex items-center gap-1.5 pointer-events-none`}
//           animate={{
//             y: [0, i % 2 === 0 ? -8 : 8, 0],
//             x: [0, i % 2 === 0 ? 4 : -4, 0],
//           }}
//           transition={{
//             duration: 4 + i * 0.5,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: i * 0.4,
//           }}
//         >
//           <chip.icon className={`w-3 h-3 ${chip.color}`} />
//           <span className="text-[10px] font-semibold text-white/90">
//             {chip.label}
//           </span>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// }

// /* ============================================================
//    SECTION TITLE
//    ============================================================ */
// function SectionTitle({
//   icon: Icon,
//   title,
//   subtitle,
// }: {
//   icon: React.ElementType;
//   title: string;
//   subtitle?: string;
// }) {
//   return (
//     <Reveal className="flex items-center gap-3 mb-8">
//       <motion.div
//         className="relative"
//         whileHover={{ scale: 1.12, rotate: 6 }}
//       >
//         <motion.div
//           className="absolute inset-0 bg-pink-300/30 blur-lg rounded-full"
//           animate={{ opacity: [0.4, 0.8, 0.4] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         />
//         <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-300/25 to-transparent border border-white/10 flex items-center justify-center">
//           <Icon className="w-5 h-5 text-pink-300" />
//         </div>
//       </motion.div>
//       <div>
//         <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">
//           {title}
//         </h2>
//         {subtitle && (
//           <p className="text-white/50 text-xs font-medium mt-0.5">{subtitle}</p>
//         )}
//       </div>
//     </Reveal>
//   );
// }

// /* ============================================================
//    EXPERIENCE CARD — CLICKABLE with MODAL
//    ============================================================ */
// function ExperienceCard({ exp, onOpen }: { exp: ExperienceItem; index?: number; onOpen: () => void }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });
//   const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

//   return (
//     <motion.div ref={ref} style={{ y }}>
//       <TiltCard intensity={4}>
//         <motion.button
//           onClick={onOpen}
//           className="relative w-full text-left overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl group"
//           whileHover={{ borderColor: "rgba(247,191,210,0.4)" }}
//         >
//           <div className="relative h-24 bg-gradient-to-r from-pink-300/10 via-purple-300/5 to-transparent overflow-hidden">
//             <motion.div
//               className="absolute inset-0 opacity-30"
//               style={{
//                 backgroundImage: `radial-gradient(circle at 30% 50%, ${COLORS.pink} 0%, transparent 50%)`,
//               }}
//               animate={{ x: [0, 30, 0] }}
//               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//             />
//             <div className="absolute top-2.5 right-2.5 flex gap-1.5 flex-wrap justify-end max-w-[70%]">
//               {exp.tech.slice(0, 3).map((t: string, i: number) => (
//                 <span
//                   key={i}
//                   className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-xl text-white/80 border border-white/10"
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>
//             <div className="absolute inset-0 flex items-center justify-center">
//               <motion.div
//                 className="w-11 h-11 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center"
//                 animate={{ rotate: [0, 6, -6, 0] }}
//                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//               >
//                 <Award className="w-5 h-5 text-pink-300" />
//               </motion.div>
//             </div>
//           </div>

//           <div className="p-4">
//             <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
//               <div>
//                 <h3 className="text-sm font-bold tracking-tight text-white">
//                   {exp.role}
//                 </h3>
//                 <p className="text-xs font-medium text-pink-300/80 mt-0.5">
//                   {exp.place}
//                 </p>
//               </div>
//               <span className="text-[10px] font-semibold text-white/40 flex items-center gap-1 px-2 py-0.5 rounded-full border border-white/10 bg-white/5">
//                 <Calendar className="w-2.5 h-2.5" />
//                 {exp.period}
//               </span>
//             </div>

//             <ul className="space-y-1.5">
//               {exp.achievements.slice(0, 2).map((ach: string, i: number) => (
//                 <li key={i} className="flex items-start gap-2 text-xs text-white/70 leading-snug">
//                   <span className="text-pink-300 mt-0.5 text-[10px]">▹</span>
//                   <span>{ach}</span>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-pink-300 uppercase tracking-wider">
//               <span>View Details</span>
//               <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
//             </div>
//           </div>
//         </motion.button>
//       </TiltCard>
//     </motion.div>
//   );
// }

// /* Modal */
// function ExperienceModal({ exp, onClose }: { exp: ExperienceItem; onClose: () => void }) {
//   useEffect(() => {
//     const handle = (e: KeyboardEvent) => e.key === "Escape" && onClose();
//     window.addEventListener("keydown", handle);
//     document.body.style.overflow = "hidden";
//     return () => {
//       window.removeEventListener("keydown", handle);
//       document.body.style.overflow = "";
//     };
//   }, [onClose]);

//   return (
//     <motion.div
//       className="fixed inset-0 z-[100] flex items-center justify-center p-4"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <motion.div
//         className="absolute inset-0 bg-black/80 backdrop-blur-md"
//         onClick={onClose}
//       />
//       <motion.div
//         className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#0A0A14] shadow-2xl"
//         initial={{ scale: 0.9, y: 30, opacity: 0 }}
//         animate={{ scale: 1, y: 0, opacity: 1 }}
//         exit={{ scale: 0.9, y: 30, opacity: 0 }}
//         transition={{ type: "spring", stiffness: 260, damping: 26 }}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 flex items-center justify-center hover:bg-white/10 transition"
//         >
//           <X className="w-4 h-4 text-white" />
//         </button>

//         {/* Photo banner */}
//         <div className="relative h-44 bg-gradient-to-br from-pink-300/25 via-purple-300/15 to-transparent overflow-hidden">
//           <motion.div
//             className="absolute inset-0 opacity-40"
//             style={{
//               backgroundImage:
//                 "radial-gradient(circle at 30% 50%, rgba(247,191,210,0.5), transparent 55%), radial-gradient(circle at 75% 40%, rgba(168,85,247,0.4), transparent 55%)",
//             }}
//             animate={{ scale: [1, 1.15, 1] }}
//             transition={{ duration: 10, repeat: Infinity }}
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <motion.div
//               className="w-16 h-16 rounded-3xl bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center"
//               animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.05, 1] }}
//               transition={{ duration: 6, repeat: Infinity }}
//             >
//               <Award className="w-7 h-7 text-pink-300" />
//             </motion.div>
//           </div>
//         </div>

//         <div className="p-6 space-y-5">
//           <div>
//             <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-300 mb-1">
//               {exp.place} • {exp.period}
//             </p>
//             <h3 className="text-2xl font-black tracking-tight text-white">
//               {exp.role}
//             </h3>
//           </div>

//           {/* Photo gallery placeholders */}
//           <div>
//             <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">
//               Gallery
//             </h4>
//             <div className="grid grid-cols-3 gap-2">
//               {[1, 2, 3].map((n) => (
//                 <motion.div
//                   key={n}
//                   className="relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-pink-300/10 to-purple-400/10 flex items-center justify-center"
//                   whileHover={{ scale: 1.03 }}
//                 >
//                   {exp.photos?.[n - 1] ? (
//                     <Image
//                       src={exp.photos[n - 1]}
//                       alt={`${exp.role} photo ${n}`}
//                       fill
//                       className="object-cover opacity-70"
//                     />
//                   ) : (
//                     <Sparkle className="w-5 h-5 text-pink-300/60" />
//                   )}
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">
//               Achievements
//             </h4>
//             <ul className="space-y-2">
//               {exp.achievements.map((ach: string, i: number) => (
//                 <motion.li
//                   key={i}
//                   className="flex items-start gap-2.5 text-sm text-white/75 leading-relaxed"
//                   initial={{ opacity: 0, x: -10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.08 }}
//                 >
//                   <BadgeCheck className="w-4 h-4 text-pink-300 mt-0.5 shrink-0" />
//                   <span>{ach}</span>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">
//               Skills
//             </h4>
//             <div className="flex flex-wrap gap-1.5">
//               {exp.tech.map((t: string) => (
//                 <motion.span
//                   key={t}
//                   className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-white/5 border border-white/10 text-white/80"
//                   whileHover={{ scale: 1.06, backgroundColor: "rgba(247,191,210,0.2)" }}
//                 >
//                   {t}
//                 </motion.span>
//               ))}
//             </div>
//           </div>

//           {exp.link && (
//             <a
//               href={exp.link}
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-pink-300 text-black text-sm font-bold"
//             >
//               <ExternalLink className="w-4 h-4" />
//               View More
//             </a>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// /* ============================================================
//    TECH & TOOLS SECTION
//    ============================================================ */
// const TECH_STACK = [
//   {
//     category: "Languages",
//     icon: Code2,
//     items: ["C", "Python", "JavaScript", "PHP", "SQL", "HTML", "CSS"],
//   },
//   {
//     category: "Frameworks & Backend",
//     icon: Cpu,
//     items: ["Laravel", "Node.js", "REST API", "MySQL"],
//   },
//   {
//     category: "Tools & Design",
//     icon: Palette,
//     items: ["VS Code", "GitHub", "Canva", "Figma", "Excel"],
//   },
//   {
//     category: "Cloud (GCP)",
//     icon: Cloud,
//     items: ["Google Cloud Platform", "IAM & Security", "Cloud Load Balancing", "Compute Engine"],
//   },
//   {
//     category: "Networking",
//     icon: Zap,
//     items: ["TCP/IP", "HTTP/HTTPS", "DNS", "IP Addressing", "Subnetting"],
//   },
//   {
//     category: "Core CS",
//     icon: Cpu,
//     items: [
//       "Data Structures",
//       "Algorithm & Programming",
//       "Computer Networks",
//       "OOP",
//       "Database Technology",
//       "Artificial Intelligence",
//       "Software Engineering",
//     ],
//   },
//   {
//     category: "Soft Skills",
//     icon: Heart,
//     items: ["Leadership", "Digital Marketing", "Communication", "Team Management"],
//   },
// ];

// function TechStackSection() {
//   return (
//     <section id="tech" className="my-24 scroll-mt-24">
//       <SectionTitle
//         icon={Cpu}
//         title="Tech & Tools"
//         subtitle="Languages, frameworks, cloud, and more"
//       />
//       <div className="grid md:grid-cols-2 gap-3">
//         {TECH_STACK.map((group, idx) => (
//           <Reveal key={group.category} delay={idx * 0.05}>
//             <motion.div
//               className="relative p-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden group"
//               whileHover={{ borderColor: "rgba(247,191,210,0.35)", y: -3 }}
//             >
//               <div className="flex items-center gap-2.5 mb-3">
//                 <motion.div
//                   className="w-8 h-8 rounded-xl bg-pink-300/15 border border-pink-300/20 flex items-center justify-center"
//                   animate={{ rotate: [0, 4, -4, 0] }}
//                   transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   <group.icon className="w-4 h-4 text-pink-300" />
//                 </motion.div>
//                 <h3 className="text-sm font-bold tracking-tight text-white">
//                   {group.category}
//                 </h3>
//               </div>
//               <div className="flex flex-wrap gap-1.5">
//                 {group.items.map((item, i) => (
//                   <motion.span
//                     key={item}
//                     className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-white/5 border border-white/10 text-white/75"
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: i * 0.03 }}
//                     whileHover={{
//                       scale: 1.06,
//                       backgroundColor: "rgba(247,191,210,0.15)",
//                       borderColor: "rgba(247,191,210,0.4)",
//                     }}
//                   >
//                     {item}
//                   </motion.span>
//                 ))}
//               </div>
//             </motion.div>
//           </Reveal>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ============================================================
//    CERTIFICATIONS SECTION
//    ============================================================ */
// const CERTIFICATIONS: Certification[] = [
//   {
//     title: "Google Cloud Computing Foundations Certificate",
//     issuer: "Google Cloud Skills Boost",
//     year: "Jul 2026",
//     credentialId: "5118cf29-fa6e-40fa-96a5-9254a3bb45a1",
//     skills: ["Cloud Computing", "Google BigQuery", "Cloud Infrastructure", "Application Programming Interfaces", "Identity and Access Management"],
//     icon: Cloud,
//     link: "https://www.credly.com/earner/earned/badge/5118cf29-fa6e-40fa-96a5-9254a3bb45a1",
//   },
//   {
//     title: "Python Programming Completion Certificate",
//     issuer: "Samsung Innovation Campus (SIC)",
//     year: "Oct 2025",
//     credentialId: null,
//     skills: ["Python (Programming Language)", "Innovation Development", "Problem Solving"],
//     icon: Code2,
//     link: "https://drive.google.com/file/d/1Lip0rdOvl5S3kTSv_UmtxK_xx2BTbJ6E/view",
//   },
//   {
//     title: "Sertifikat Profesional Google AI",
//     issuer: "Google",
//     year: "Jul 2026",
//     credentialId: "8VZZ1J55CSGW",
//     skills: ["Artificial Intelligence (AI)", "Brainstorming", "Research Skills", "Writing", "Data Analysis"],
//     icon: Sparkle,
//     link: "https://www.coursera.org/account/accomplishments/specialization/8VZZ1J55CSGW",
//   },
// ];

// function CertificationsSection() {
//   return (
//     <section id="certifications" className="my-24 scroll-mt-24">
//       <SectionTitle
//         icon={BadgeCheck}
//         title="Certifications"
//         subtitle="Click any certificate to verify credential"
//       />
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
//         {CERTIFICATIONS.map((cert, idx) => (
//           <Reveal key={cert.title} delay={idx * 0.08}>
//             <TiltCard intensity={5}>
//               <motion.a
//                 href={cert.link}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="relative block p-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden group h-full cursor-pointer"
//                 whileHover={{ borderColor: "rgba(247,191,210,0.5)", y: -4 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 {/* Auto glow */}
//                 <motion.div
//                   className="absolute -top-10 -right-10 w-32 h-32 bg-pink-300/15 rounded-full blur-2xl"
//                   animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
//                   transition={{ duration: 5, repeat: Infinity, delay: idx * 0.4 }}
//                 />

//                 {/* Shimmer sweep on hover */}
//                 <motion.div
//                   className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
//                   style={{
//                     background:
//                       "linear-gradient(105deg, transparent 40%, rgba(247,191,210,0.15) 50%, transparent 60%)",
//                   }}
//                   animate={{ x: ["-120%", "120%"] }}
//                   transition={{
//                     duration: 1.4,
//                     repeat: Infinity,
//                     repeatDelay: 1.5,
//                     ease: "easeInOut",
//                   }}
//                 />

//                 <div className="relative flex flex-col gap-3 h-full">
//                   {/* Header: icon + title */}
//                   <div className="flex items-start gap-3">
//                     <motion.div
//                       className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-300/25 to-purple-400/15 border border-white/15 flex items-center justify-center shrink-0"
//                       animate={{ rotate: [0, 6, -6, 0] }}
//                       transition={{
//                         duration: 7,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                         delay: idx * 0.3,
//                       }}
//                     >
//                       <cert.icon className="w-5 h-5 text-pink-300" />
//                     </motion.div>

//                     <div className="min-w-0 flex-1">
//                       <h3 className="text-xs font-bold tracking-tight text-white leading-snug group-hover:text-pink-200 transition-colors">
//                         {cert.title}
//                       </h3>
//                       <p className="text-[11px] text-white/50 font-medium mt-0.5">
//                         {cert.issuer}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Year */}
//                   <p className="text-[10px] text-pink-300 font-bold uppercase tracking-wider">
//                     Issued {cert.year}
//                   </p>

//                   {/* Credential ID */}
//                   {cert.credentialId && (
//                     <div className="flex items-start gap-1.5 text-[10px]">
//                       <span className="text-white/40 font-semibold shrink-0">
//                         ID:
//                       </span>
//                       <span className="text-white/60 font-mono break-all leading-tight">
//                         {cert.credentialId}
//                       </span>
//                     </div>
//                   )}

//                   {/* Skills */}
//                   <div className="flex flex-wrap gap-1 pt-1 border-t border-white/5">
//                     {cert.skills.map((skill) => (
//                       <span
//                         key={skill}
//                         className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-pink-300/10 border border-pink-300/20 text-pink-200"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                     {Boolean(cert.extraSkills && cert.extraSkills > 0) && (
//                       <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
//                         +{cert.extraSkills} more
//                       </span>
//                     )}
//                   </div>

//                   {/* Verify link indicator */}
//                   <div className="mt-auto pt-2 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-white/40 group-hover:text-pink-300 transition-colors">
//                     <span>Show Credential</span>
//                     <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//                   </div>
//                 </div>
//               </motion.a>
//             </TiltCard>
//           </Reveal>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ============================================================
//    PROJECT CARD
//    ============================================================ */
// function ProjectCard({ project }: { project: ProjectItem; index?: number }) {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [isHovered, setIsHovered] = useState(false);

//   const { scrollYProgress } = useScroll({
//     target: cardRef,
//     offset: ["start end", "end start"],
//   });
//   const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);

//   return (
//     <motion.div
//       ref={cardRef}
//       style={{ y, opacity, scale }}
//       className="h-[360px] sticky top-24"
//     >
//       <a
//       href={project.link}
//       target="_blank"
//       rel="noreferrer"
//       className="block h-full">
//         <motion.div
//           className="relative h-full rounded-[28px] overflow-hidden cursor-pointer group"
//           onHoverStart={() => setIsHovered(true)}
//           onHoverEnd={() => setIsHovered(false)}
//         >
//           <div
//             className="absolute inset-0 rounded-[28px] p-[1.5px]"
//             style={{
//               background: isHovered
//                 ? "linear-gradient(135deg, rgba(247,191,210,0.8), rgba(168,85,247,0.5))"
//                 : "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))",
//               transition: "background 0.4s ease",
//             }}
//           >
//             <div
//               className="w-full h-full rounded-[26px]"
//               style={{
//                 background:
//                   "linear-gradient(135deg, rgba(10,10,20,0.95) 0%, rgba(20,10,25,0.95) 100%)",
//                 backdropFilter: "blur(20px)",
//               }}
//             />
//           </div>

//           <div className="absolute inset-0 rounded-[26px] opacity-40 overflow-hidden">
//             <motion.div
//               className="absolute top-0 left-0 w-56 h-56 bg-pink-300 rounded-full blur-3xl"
//               animate={{
//                 x: [0, 40, 0],
//                 y: [0, 20, 0],
//               }}
//               transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//             />
//             <motion.div
//               className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 rounded-full blur-3xl"
//               animate={{
//                 x: [0, -30, 0],
//                 y: [0, -30, 0],
//               }}
//               transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//             />
//           </div>

//           <div className="relative h-full p-6 md:p-7 flex flex-col justify-between">
//             <div>
//               <div className="flex items-start justify-between">
//                 <motion.div
//                   className="w-12 h-12 rounded-2xl bg-pink-300/15 flex items-center justify-center border border-pink-300/30 backdrop-blur-xl"
//                   animate={{ rotate: [0, 8, -8, 0] }}
//                   transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   <Code2 className="w-5 h-5 text-pink-300" />
//                 </motion.div>
//                 <motion.div
//                   className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
//                   animate={{ rotate: isHovered ? 45 : 0 }}
//                 >
//                   <ArrowUpRight className="w-4 h-4 text-white/70" />
//                 </motion.div>
//               </div>

//               <motion.h3
//                 className="text-2xl md:text-3xl font-black tracking-tight text-white mt-5 mb-2"
//                 animate={{ x: isHovered ? 8 : 0 }}
//               >
//                 {project.title}
//               </motion.h3>
//               <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-lg font-medium">
//                 {project.desc}
//               </p>
//             </div>

//             <div>
//               <div className="flex flex-wrap gap-1.5 mb-4">
//                 {project.tags.map((tag: string) => (
//                   <motion.span
//                     key={tag}
//                     className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-white/5 border border-white/10 text-white/70"
//                     whileHover={{
//                       scale: 1.06,
//                       backgroundColor: "rgba(247,191,210,0.2)",
//                     }}
//                   >
//                     {tag}
//                   </motion.span>
//                 ))}
//               </div>

//               <motion.div
//                 className="flex items-center gap-2 text-pink-300 text-xs font-bold uppercase tracking-wider"
//                 animate={{ x: isHovered ? 8 : 0 }}
//               >
//                 View Project
//                 <ChevronRight className="w-3.5 h-3.5" />
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </a>
//     </motion.div>
//   );
// }

// /* ============================================================
//    SCROLL INDICATOR
//    ============================================================ */
// function ScrollIndicator() {
//   return (
//     <motion.div
//       className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 1.5 }}
//     >
//       <MousePointer2 className="w-3.5 h-3.5" />
//       <span className="text-[9px] font-bold uppercase tracking-widest">Scroll</span>
//       <motion.div
//         className="w-[1px] h-6 bg-gradient-to-b from-pink-300 to-transparent"
//         animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       />
//     </motion.div>
//   );
// }

// /* ============================================================
//    INTERACTIVE MASCOT (klik = reaksi + ekspresi berubah)
//    ============================================================ */
// /* ============================================================
//    INTERACTIVE MASCOT — futuristic cyber-fox, floating, clickable
//    ============================================================ */
// /* ============================================================
//    INTERACTIVE MASCOT — flying cyber-fox, drift + scroll parallax
//    ============================================================ */
// function InteractiveMascot() {
//   const [mood, setMood] = useState<"idle" | "happy" | "love" | "wave">("idle");
//   const [clickCount, setClickCount] = useState(0);
//   const [bubble, setBubble] = useState<string | null>(null);
//   const wrapperRef = useRef<HTMLDivElement>(null);

//   // Scroll progress khusus untuk area mascot
//   const { scrollYProgress } = useScroll({
//     target: wrapperRef,
//     offset: ["start end", "end start"],
//   });

//   // Parallax: scroll bikin dia naik-turun + sedikit geser
//   const scrollY = useTransform(scrollYProgress, [0, 1], [40, -40]);
//   const scrollX = useTransform(scrollYProgress, [0, 1], [-15, 15]);
//   const scrollRotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);

//   // Smooth spring biar gak kaku
//   const smoothY = useSpring(scrollY, { stiffness: 60, damping: 20 });
//   const smoothX = useSpring(scrollX, { stiffness: 60, damping: 20 });
//   const smoothRotate = useSpring(scrollRotate, { stiffness: 60, damping: 22 });

//   const messages = {
//     happy: ["Nice! 🎉", "Yay!", "Cool!", "Awesome!"],
//     love: ["💕", "Thanks!", "Aww~", "You're sweet!"],
//     wave: ["Hi there!", "👋", "Hello!", "Hey!"],
//   };

//   const handleClick = () => {
//     const order = ["happy", "love", "wave"] as const;
//     const next = order[clickCount % 3];
//     setMood(next);
//     const list = messages[next];
//     setBubble(list[Math.floor(Math.random() * list.length)]);
//     setClickCount((c) => c + 1);

//     setTimeout(() => {
//       setMood("idle");
//       setBubble(null);
//     }, 1800);
//   };

//   const visorColor = {
//     idle: "#5EEAD4",
//     happy: "#A7F3D0",
//     love: "#F7BFD2",
//     wave: "#C4B5FD",
//   }[mood];

//   return (
//     <div
//       ref={wrapperRef}
//       className="relative flex flex-col items-center justify-center min-h-[260px]"
//     >
//       {/* ===== OUTER: scroll parallax + drift random ===== */}
//       <motion.div
//         style={{ y: smoothY, x: smoothX, rotate: smoothRotate }}
//         className="relative"
//       >
//         {/* ===== INNER: organic floating (multi-axis drift) ===== */}
//         <motion.div
//           animate={{
//             x: [0, 14, -10, 8, 0],
//             y: [0, -14, -6, -16, 0],
//             rotate: [-2, 3, -1, 2, -2],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//             times: [0, 0.25, 0.5, 0.75, 1],
//           }}
//           className="relative flex flex-col items-center"
//         >
//           {/* Ambient aura — ikut gerak bareng mascot */}
//           <motion.div
//             className="absolute w-[200px] h-[200px] rounded-full blur-3xl pointer-events-none"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(94,234,212,0.4) 0%, rgba(247,191,210,0.2) 40%, transparent 70%)",
//             }}
//             animate={{
//               scale: [1, 1.25, 1],
//               opacity: [0.5, 0.85, 0.5],
//             }}
//             transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
//           />

//           {/* Orbiting particles */}
//           {[0, 1, 2, 3].map((i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1.5 h-1.5 rounded-full bg-teal-300/80"
//               style={{ top: "50%", left: "50%" }}
//               animate={{
//                 x: [
//                   0,
//                   Math.cos((i * 2 * Math.PI) / 4) * 95,
//                   Math.cos((i * 2 * Math.PI) / 4 + Math.PI) * 95,
//                   0,
//                 ],
//                 y: [
//                   0,
//                   Math.sin((i * 2 * Math.PI) / 4) * 95,
//                   Math.sin((i * 2 * Math.PI) / 4 + Math.PI) * 95,
//                   0,
//                 ],
//                 opacity: [0, 1, 0.6, 0],
//                 scale: [0, 1.3, 0.8, 0],
//               }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: i * 1.5,
//               }}
//             />
//           ))}

//           {/* Speech bubble */}
//           <AnimatePresence>
//             {bubble && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20, scale: 0.6 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={{ opacity: 0, y: -10, scale: 0.8 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 22 }}
//                 className="absolute -top-4 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-2xl bg-white text-black text-xs font-bold shadow-xl shadow-pink-300/30 whitespace-nowrap z-20"
//               >
//                 {bubble}
//                 <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Mascot SVG */}
//           <motion.button
//             onClick={handleClick}
//             whileTap={{ scale: 0.92 }}
//             whileHover={{ scale: 1.06 }}
//             className="relative cursor-pointer focus:outline-none z-10"
//             aria-label="Click me!"
//           >
//             {/* Ground shadow */}
//             <motion.div
//               className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-2.5 rounded-full bg-black/50 blur-md"
//               animate={{
//                 scaleX: [1, 0.65, 1],
//                 opacity: [0.5, 0.25, 0.5],
//               }}
//               transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
//             />

//             <svg
//               width="180"
//               height="200"
//               viewBox="0 0 180 200"
//               className="relative overflow-visible"
//             >
//               <defs>
//                 <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#FFFFFF" />
//                   <stop offset="100%" stopColor="#E5E7EB" />
//                 </linearGradient>

//                 <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="1">
//                   <stop offset="0%" stopColor="#5EEAD4" />
//                   <stop offset="100%" stopColor="#14B8A6" />
//                 </linearGradient>

//                 <linearGradient id="tailGrad" x1="0" y1="0" x2="1" y2="1">
//                   <stop offset="0%" stopColor="#FB923C" />
//                   <stop offset="100%" stopColor="#EA580C" />
//                 </linearGradient>

//                 <radialGradient id="visorGrad" cx="0.5" cy="0.5">
//                   <stop offset="0%" stopColor={visorColor} stopOpacity="1" />
//                   <stop offset="100%" stopColor={visorColor} stopOpacity="0.5" />
//                 </radialGradient>

//                 <filter id="glow">
//                   <feGaussianBlur stdDeviation="3" result="blur" />
//                   <feMerge>
//                     <feMergeNode in="blur" />
//                     <feMergeNode in="SourceGraphic" />
//                   </feMerge>
//                 </filter>
//               </defs>

//               {/* Tail */}
//               <motion.g
//                 style={{ transformOrigin: "100px 150px" }}
//                 animate={{
//                   rotate: mood === "happy" ? [-10, 10, -10] : [-5, 5, -5],
//                 }}
//                 transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
//               >
//                 <path
//                   d="M 105 155
//                      C 140 145, 170 130, 175 95
//                      C 178 65, 165 45, 150 50
//                      C 140 53, 138 65, 145 72
//                      C 155 82, 158 100, 145 115
//                      C 135 128, 118 138, 105 145 Z"
//                   fill="url(#tailGrad)"
//                   opacity="0.95"
//                 />
//                 <path
//                   d="M 112 150
//                      C 138 142, 162 128, 168 98
//                      C 170 78, 163 60, 154 58"
//                   stroke="#FDBA74"
//                   strokeWidth="3"
//                   strokeLinecap="round"
//                   fill="none"
//                   opacity="0.6"
//                 />
//                 <circle cx="150" cy="55" r="9" fill="#FED7AA" opacity="0.7" />
//               </motion.g>

//               {/* Legs */}
//               <motion.g
//                 animate={{ y: mood === "happy" ? [0, -3, 0] : 0 }}
//                 transition={{ duration: 0.4, repeat: mood === "happy" ? 2 : 0 }}
//               >
//                 <ellipse cx="72" cy="168" rx="14" ry="11" fill="url(#bodyGrad)" />
//                 <ellipse cx="72" cy="172" rx="14" ry="5" fill="url(#accentGrad)" />
//                 <ellipse cx="108" cy="168" rx="14" ry="11" fill="url(#bodyGrad)" />
//                 <ellipse cx="108" cy="172" rx="14" ry="5" fill="url(#accentGrad)" />
//               </motion.g>

//               {/* Body */}
//               <motion.g
//                 animate={{ scaleY: mood === "happy" ? [1, 0.96, 1] : 1 }}
//                 transition={{ duration: 0.5 }}
//                 style={{ transformOrigin: "90px 145px" }}
//               >
//                 <ellipse cx="90" cy="140" rx="32" ry="34" fill="url(#bodyGrad)" />
//                 <ellipse cx="90" cy="148" rx="18" ry="20" fill="#F9FAFB" opacity="0.7" />
//                 <rect
//                   x="74"
//                   y="128"
//                   width="32"
//                   height="10"
//                   rx="3"
//                   fill="#0F172A"
//                   opacity="0.85"
//                 />
//                 <text
//                   x="90"
//                   y="135.5"
//                   textAnchor="middle"
//                   fontSize="6"
//                   fontWeight="900"
//                   fill="#5EEAD4"
//                   fontFamily="Inter, sans-serif"
//                   letterSpacing="0.3"
//                 >
//                   PVA
//                 </text>

//                 <motion.circle
//                   cx="90"
//                   cy="120"
//                   r="2.5"
//                   fill="#5EEAD4"
//                   animate={{ opacity: [1, 0.3, 1] }}
//                   transition={{ duration: 1.4, repeat: Infinity }}
//                   filter="url(#glow)"
//                 />
//               </motion.g>

//               {/* Left arm */}
//               <motion.g
//                 style={{ transformOrigin: "60px 128px" }}
//                 animate={{
//                   rotate: mood === "wave" ? [-55, -75, -55] : [-15, -22, -15],
//                 }}
//                 transition={{
//                   duration: mood === "wave" ? 0.5 : 2.5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <path
//                   d="M 62 128 Q 50 118 46 105"
//                   stroke="url(#bodyGrad)"
//                   strokeWidth="14"
//                   strokeLinecap="round"
//                   fill="none"
//                 />
//                 <circle cx="46" cy="102" r="9" fill="url(#accentGrad)" />
//                 <circle cx="42" cy="97" r="3" fill="#14B8A6" />
//                 <circle cx="47" cy="95" r="3" fill="#14B8A6" />
//                 <circle cx="52" cy="98" r="3" fill="#14B8A6" />
//               </motion.g>

//               {/* Right arm */}
//               <motion.g
//                 style={{ transformOrigin: "120px 128px" }}
//                 animate={{ rotate: [12, 18, 12] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               >
//                 <path
//                   d="M 118 128 Q 130 135 134 148"
//                   stroke="url(#bodyGrad)"
//                   strokeWidth="14"
//                   strokeLinecap="round"
//                   fill="none"
//                 />
//                 <circle cx="135" cy="151" r="9" fill="url(#accentGrad)" />
//               </motion.g>

//               {/* Head */}
//               <motion.g
//                 style={{ transformOrigin: "90px 80px" }}
//                 animate={{
//                   rotate: mood === "wave" ? [-3, 3, -3] : [-1.5, 1.5, -1.5],
//                 }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               >
//                 {/* Ears */}
//                 <motion.path
//                   d="M 70 55 L 62 18 L 82 42 Z"
//                   fill="url(#bodyGrad)"
//                   stroke="#D1D5DB"
//                   strokeWidth="0.5"
//                   animate={{
//                     rotate: mood === "happy" ? [-6, 4, -6] : [-2, 2, -2],
//                   }}
//                   transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
//                   style={{ transformOrigin: "70px 55px" }}
//                 />
//                 <path d="M 70 50 L 65 28 L 78 45 Z" fill="#5EEAD4" opacity="0.7" />

//                 <motion.path
//                   d="M 110 55 L 118 18 L 98 42 Z"
//                   fill="url(#bodyGrad)"
//                   stroke="#D1D5DB"
//                   strokeWidth="0.5"
//                   animate={{
//                     rotate: mood === "happy" ? [6, -4, 6] : [2, -2, 2],
//                   }}
//                   transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
//                   style={{ transformOrigin: "110px 55px" }}
//                 />
//                 <path d="M 110 50 L 115 28 L 102 45 Z" fill="#5EEAD4" opacity="0.7" />

//                 {/* Head */}
//                 <ellipse cx="90" cy="80" rx="34" ry="32" fill="url(#bodyGrad)" />
//                 <path
//                   d="M 62 62 Q 90 42 118 62"
//                   stroke="white"
//                   strokeWidth="2"
//                   fill="none"
//                   opacity="0.6"
//                   strokeLinecap="round"
//                 />

//                 {/* Visor */}
//                 <ellipse cx="90" cy="84" rx="26" ry="20" fill="#0F172A" />
//                 <ellipse cx="90" cy="84" rx="26" ry="20" fill="url(#visorGrad)" opacity="0.15" />

//                 {/* Eyes */}
//                 {mood === "happy" ? (
//                   <>
//                     <path
//                       d="M 78 82 Q 82 77 86 82"
//                       stroke={visorColor}
//                       strokeWidth="3"
//                       fill="none"
//                       strokeLinecap="round"
//                       filter="url(#glow)"
//                     />
//                     <path
//                       d="M 94 82 Q 98 77 102 82"
//                       stroke={visorColor}
//                       strokeWidth="3"
//                       fill="none"
//                       strokeLinecap="round"
//                       filter="url(#glow)"
//                     />
//                   </>
//                 ) : mood === "love" ? (
//                   <>
//                     <path
//                       d="M 82 80 C 82 76, 88 76, 88 80 C 88 84, 82 87, 82 87 C 82 87, 76 84, 76 80 C 76 76, 82 76, 82 80 Z"
//                       fill={visorColor}
//                       filter="url(#glow)"
//                     />
//                     <path
//                       d="M 104 80 C 104 76, 110 76, 110 80 C 110 84, 104 87, 104 87 C 104 87, 98 84, 98 80 C 98 76, 104 76, 104 80 Z"
//                       fill={visorColor}
//                       filter="url(#glow)"
//                     />
//                   </>
//                 ) : (
//                   <>
//                     <motion.ellipse
//                       cx="82"
//                       cy="82"
//                       rx="4"
//                       ry="5.5"
//                       fill={visorColor}
//                       filter="url(#glow)"
//                       animate={{ scaleY: [1, 0.1, 1] }}
//                       transition={{
//                         duration: 0.15,
//                         repeat: Infinity,
//                         repeatDelay: 4,
//                         ease: "easeInOut",
//                       }}
//                       style={{ transformOrigin: "82px 82px" }}
//                     />
//                     <motion.ellipse
//                       cx="98"
//                       cy="82"
//                       rx="4"
//                       ry="5.5"
//                       fill={visorColor}
//                       filter="url(#glow)"
//                       animate={{ scaleY: [1, 0.1, 1] }}
//                       transition={{
//                         duration: 0.15,
//                         repeat: Infinity,
//                         repeatDelay: 4,
//                         ease: "easeInOut",
//                       }}
//                       style={{ transformOrigin: "98px 82px" }}
//                     />
//                   </>
//                 )}

//                 {/* Mouth */}
//                 {mood === "happy" ? (
//                   <path
//                     d="M 85 92 Q 90 97 95 92"
//                     stroke={visorColor}
//                     strokeWidth="1.8"
//                     fill="none"
//                     strokeLinecap="round"
//                     filter="url(#glow)"
//                   />
//                 ) : mood === "love" ? (
//                   <path
//                     d="M 86 93 Q 90 96 94 93"
//                     stroke={visorColor}
//                     strokeWidth="1.8"
//                     fill="none"
//                     strokeLinecap="round"
//                     filter="url(#glow)"
//                   />
//                 ) : (
//                   <path
//                     d="M 86 92 Q 90 95 94 92"
//                     stroke={visorColor}
//                     strokeWidth="1.5"
//                     fill="none"
//                     strokeLinecap="round"
//                     opacity="0.8"
//                   />
//                 )}

//                 {/* Antenna */}
//                 <motion.g
//                   animate={{ rotate: mood === "happy" ? [-10, 10, -10] : [0, 0, 0] }}
//                   transition={{ duration: 0.6, repeat: mood === "happy" ? 3 : 0 }}
//                   style={{ transformOrigin: "90px 50px" }}
//                 >
//                   <line
//                     x1="90"
//                     y1="52"
//                     x2="90"
//                     y2="38"
//                     stroke="#D1D5DB"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                   />
//                   <motion.circle
//                     cx="90"
//                     cy="36"
//                     r="3.5"
//                     fill={visorColor}
//                     filter="url(#glow)"
//                     animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
//                     transition={{ duration: 1.8, repeat: Infinity }}
//                   />
//                 </motion.g>
//               </motion.g>
//             </svg>
//           </motion.button>

//           {/* Hint label */}
//           <motion.p
//             className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mt-4"
//             animate={{ opacity: [0.4, 0.8, 0.4] }}
//             transition={{ duration: 2.5, repeat: Infinity }}
//           >
//             {clickCount === 0 ? "Tap me!" : `${clickCount} taps`}
//           </motion.p>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// /* ============================================================
//    MAIN PAGE
//    ============================================================ */
// export default function Page() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });
//   const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

//   const [openExp, setOpenExp] = useState<ExperienceItem | null>(null);

//   const NAME = "Priscilla Valencia Andow";
//   const SHORT_NAME = "Priscilla V.A.";
//   const ROLE = "CS Student @BINUS University";
//   const SPECIALIZATION = "Cloud Tech • UI/UX • Software Engineering • Database • AI";
//   // const ONE_LINER =
//   //   "Building the future through code, creativity, and cloud innovation.";
//   const EMAIL = "priscilla.andow@binus.ac.id";
//   const IG_USERNAME = "priscilla.vln";
//   const GITHUB = "https://github.com/claavenn";
//   const LINKEDIN = "https://www.linkedin.com/in/priscilla-valencia-andow/";
//   const PHOTO_SRC = "/me.jpg";

//   const EXPERIENCES: ExperienceItem[] = [
//     {
//       slug: "tfisc-chairman",
//       role: "Regional Chairman of TFISC @Semarang",
//       place: "Organization",
//       period: "2026 — present",
//       achievements: [
//         "Led 50+ members across regional chapters and streamlined cross-team collaboration",
//         "Organized 5 major tech events with total 1,200+ attendees",
//         "Increased engagement by 200% through digital-first initiatives",
//         "Established partnership with 3 local tech communities",
//       ],
//       tech: ["Leadership", "Event Strategy", "Team Management"],
//       link: "#",
//     },
//     {
//       slug: "tfisc-activist",
//       role: "Activist of TFISC @Semarang",
//       place: "Organization",
//       period: "2024-2025",
//       achievements: [
//         "Initiated 3 community outreach programs impacting 200+ students",
//         "Managed social media presence and grew followers by 85%",
//         "Coordinated 20+ volunteers across multiple events",
//       ],
//       tech: ["Communication", "Project Management", "Community"],
//       link: "#",
//     },
//     {
//       slug: "himti-member",
//       role: "Member of HIMTI Semarang",
//       place: "Organization",
//       period: "2025-2026",
//       achievements: [
//         "Developed 2 web applications used by 300+ students",
//         "Won internal hackathon among 40+ teams",
//         "Mentored 5 junior members in web development",
//       ],
//       tech: ["React", "Node.js", "Mentoring"],
//       link: "#",
//     },
//     {
//       slug: "binus-promotion",
//       role: "Promotion Team BINUS Semarang",
//       place: "Company",
//       period: "2024-2025",
//       achievements: [
//         "Created 50+ promotional contents across platforms",
//         "Increased reach by 150% on social media",
//         "Managed 3 university-level events end-to-end",
//       ],
//       tech: ["Content Creation", "Digital Marketing", "Design"],
//       link: "#",
//     },
//   ];

//   const PROJECTS: ProjectItem[] = [
//     {
//       slug: "neural-interface",
//       title: "Neural Interface",
//       desc: "AI-powered dashboard with real-time analytics and predictive modeling.",
//       tags: ["Next.js 14", "TensorFlow.js", "Three.js", "Tailwind", "Prisma"],
//       link: "https://drive.google.com/drive/folders/1YsCIQjnESDeR_I5zngWsyMvWWSavdvVi",
//     },
//     {
//       slug: "quantum-flow",
//       title: "Quantum Flow",
//       desc: "Collaborative platform for quantum computing research and visualization.",
//       tags: ["React", "WebAssembly", "D3.js", "FastAPI", "Redis"],
//       link: "https://linktr.ee/AKANG_AsetKandang?utm_source=linktree_profile_share&ltsid=452e42b4-85fa-4336-adb6-a18fded8aec4"
//     },
//     {
//       slug: "ethereal",
//       title: "Ethereal",
//       desc: "Immersive 3D portfolio platform with WebGL and real-time physics.",
//       tags: ["Three.js", "R3F", "GSAP", "TypeScript", "WebGL"],
//       link: "https://drive.google.com/drive/folders/1eHVf-AbaNsLKbyc2OqOioRyUqhHNfRuF?usp=sharing"
//     },
//     {
//       slug: "cybergrid",
//       title: "CyberGrid",
//       desc: "Real-time monitoring system for distributed computing networks.",
//       tags: ["Next.js", "WebSocket", "D3.js", "Prisma", "PostgreSQL"],
//       link: ""
//     },
//   ];

//   return (
//     <div
//       ref={containerRef}
//       className="relative min-h-screen bg-[#050509] text-white overflow-x-hidden selection:bg-pink-300 selection:text-black"
//       style={{
//         fontFamily:
//           'var(--font-inter), -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif',
//       }}
//     >
//       <FloatingParticles />
//       <TechGrid />
//       <AmbientBlobs />

//       <motion.div
//         className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-300 via-pink-200 to-purple-300 z-50 origin-left"
//         style={{ scaleX }}
//       />

//       {/* NAV */}
//       <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-5xl">
//         <motion.div
//           initial={{ y: -100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
//           className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-2xl px-3 py-2.5 shadow-2xl shadow-black/50"
//         >
//           <div className="flex items-center justify-between">
//             <Link href="/" className="flex items-center gap-2 group">
//   <motion.div
//     className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center shadow-lg shadow-pink-300/30"
//     animate={{ rotate: [0, 4, -4, 0] }}
//     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//   >
//     <span className="font-black text-[11px] tracking-tighter text-black">
//       PVA
//     </span>
//   </motion.div>
//   <span className="font-black text-xs tracking-tight">
//     {SHORT_NAME}
//   </span>
// </Link>

//             <div className="hidden md:flex items-center gap-0.5">
//               {["About", "Tech", "Experience", "Projects", "Certifications", "Contact"].map(
//                 (item) => (
//                   <motion.a
//                     key={item}
//                     href={`#${item.toLowerCase()}`}
//                     className="text-[11px] font-semibold text-white/60 hover:text-white transition-colors px-2.5 py-1.5 rounded-lg hover:bg-white/5"
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     {item}
//                   </motion.a>
//                 )
//               )}
//             </div>

//             <MagneticButton
//               href="#contact"
//               className="px-3 py-1.5 rounded-lg bg-pink-300 text-black text-[11px] font-bold flex items-center gap-1.5 shadow-lg shadow-pink-300/20"
//             >
//               <Rocket className="w-3 h-3" />
//               <span className="hidden sm:inline">Hire Me</span>
//             </MagneticButton>
//           </div>
//         </motion.div>
//       </nav>

//       <main className="relative pt-28 pb-16 px-4 max-w-5xl mx-auto">
//         {/* HERO */}
//         <section className="min-h-[80vh] flex items-center relative mb-20">
//           <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pink-300/30 bg-pink-300/5 mb-5"
//               >
//                 <motion.span
//                   className="w-1.5 h-1.5 rounded-full bg-pink-300"
//                   animate={{ opacity: [1, 0.3, 1] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 />
//                 <span className="text-[10px] font-bold uppercase tracking-wider text-pink-300">
//                   {ROLE}
//                 </span>
//               </motion.div>

//               {/* SMALLER HERO TEXT (was text-8xl, now text-4xl~5xl) */}
//               <h1 className="text-3xl md:text-5xl lg:text-5xl font-black tracking-tighter leading-[1.05] mb-3">
//                 <motion.span
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4 }}
//                   className="block text-white/90 text-xl md:text-2xl font-bold mb-1"
//                 >
//                   Hi, I&apos;m
//                 </motion.span>
//                 <motion.span
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5 }}
//                   className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-pink-200 to-purple-300"
//                 >
//                   Priscilla
//                 </motion.span>
//               </h1>

//               {/* Specialization badge */}
//               <motion.div
//   initial={{ opacity: 0, y: 10 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ delay: 0.6 }}
//   className="flex flex-wrap gap-2 mb-4"
// >
//   {[
//     { label: "Cloud Tech", icon: Cloud, color: "pink" },
//     { label: "UI/UX Designer", icon: Palette, color: "purple" },
//     { label: "Software Engineering", icon: Code2, color: "blue" },
//     { label: "Database", icon: Cpu, color: "green" },
//     { label: "AI & Data", icon: Sparkle, color: "amber" },
//   ].map((tag, i) => (
//     <motion.span
//       key={tag.label}
//       initial={{ opacity: 0, y: 8 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.6 + i * 0.08 }}
//       whileHover={{ scale: 1.06, y: -2 }}
//       className={cn(
//         "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border backdrop-blur-xl cursor-default",
//         tag.color === "pink" &&
//           "bg-pink-300/10 border-pink-300/25 text-pink-200",
//         tag.color === "purple" &&
//           "bg-purple-300/10 border-purple-300/25 text-purple-200",
//         tag.color === "blue" &&
//           "bg-blue-300/10 border-blue-300/25 text-blue-200",
//         tag.color === "green" &&
//           "bg-emerald-300/10 border-emerald-300/25 text-emerald-200",
//         tag.color === "amber" &&
//           "bg-amber-300/10 border-amber-300/25 text-amber-200"
//       )}
//     >
//       <tag.icon className="w-3 h-3" />
//       {tag.label}
//     </motion.span>
//   ))}
// </motion.div>

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.7 }}
//                 className="text-sm md:text-base font-medium text-white/60 mb-6 max-w-md leading-relaxed"
//               >
//                 {/* {ONE_LINER} */}
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8 }}
//                 className="grid grid-cols-3 gap-2 mb-6 max-w-sm"
//               >
//                 <AnimatedCounter value={2} label="Years" icon={Calendar} />
//                 <AnimatedCounter value={4} label="Projects" icon={Code2} />
//                 <AnimatedCounter value={3} label="Certifications" icon={Heart} />
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.9 }}
//                 className="flex flex-wrap gap-2.5"
//               >
//                 <MagneticButton
//                   href="#projects"
//                   className="px-5 py-3 rounded-xl bg-gradient-to-r from-pink-300 to-pink-400 text-black text-sm font-bold flex items-center gap-2 shadow-xl shadow-pink-300/20"
//                 >
//                   <Zap className="w-4 h-4" />
//                   View Work
//                 </MagneticButton>

//                 <MagneticButton
//                   href="#contact"
//                   className="px-5 py-3 rounded-xl border border-white/15 bg-white/5 text-white text-sm font-bold flex items-center gap-2 backdrop-blur-xl"
//                 >
//                   <MessageCircle className="w-4 h-4" />
//                   Let&apos;s Talk
//                 </MagneticButton>
//               </motion.div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.85 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//               className="flex justify-center lg:justify-end"
//             >
//               <PhotoHeroCard
//                 name={NAME}
//                 ig={IG_USERNAME}
//                 photoSrc={PHOTO_SRC}
//                 role={ROLE}
//                 specialization={SPECIALIZATION}
//               />
//             </motion.div>
//           </div>

//           <ScrollIndicator />
//         </section>

//         {/* ABOUT */}
//         <section id="about" className="my-24 scroll-mt-24">
//           <SectionTitle
//             icon={User}
//             title="About Me"
//             subtitle="Passionate about technology and innovation"
//           />
//           <div className="grid md:grid-cols-3 gap-4">
//   <Reveal className="md:col-span-2">
//     <div className="relative p-5 md:p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden">
//       <motion.div
//         className="absolute top-0 right-0 w-32 h-32 bg-pink-300/10 rounded-full blur-3xl"
//         animate={{ scale: [1, 1.2, 1] }}
//         transition={{ duration: 6, repeat: Infinity }}
//       />
//       <p className="relative text-white/70 leading-relaxed font-medium text-[13px] md:text-sm">
//         I&apos;m a Computer Science student specializing in Cloud Technology, with a strong commitment to user-centric problem solving and social impact. As Regional President of TFISC Semarang and Semifinalist at BINUS Startup Vaganza, I leverage cross-functional leadership and technology to address real-world challenges. I&apos;m driven to join the Apple Developer Academy to solve meaningful community problems through innovative app solutions.
//       </p>
//     </div>
//   </Reveal>

//   <Reveal delay={0.1}>
//     <InteractiveMascot />
//   </Reveal>
// </div>
//         </section>

//         {/* TECH & TOOLS */}
//         <TechStackSection />

//         {/* EXPERIENCE */}
//         <section id="experience" className="my-24 scroll-mt-24">
//           <SectionTitle
//             icon={Briefcase}
//             title="Experience"
//             subtitle="Click any card to view details"
//           />
//           <div className="grid md:grid-cols-2 gap-3">
//             {EXPERIENCES.map((exp, idx) => (
//               <ExperienceCard
//                 key={idx}
//                 exp={exp}
//                 index={idx}
//                 onOpen={() => setOpenExp(exp)}
//               />
//             ))}
//           </div>
//         </section>

//         {/* PROJECTS */}
//         <section id="projects" className="my-24 scroll-mt-24">
//           <SectionTitle
//             icon={FolderGit2}
//             title="Projects"
//             subtitle="Featured work — scroll to explore"
//           />
//           <div className="relative space-y-6 h-[1500px]">
//             {PROJECTS.map((project, idx) => (
//               <ProjectCard key={idx} project={project} index={idx} />
//             ))}
//           </div>
//         </section>

//         {/* CERTIFICATIONS */}
//         <CertificationsSection />

//         {/* CONTACT */}
//         <section id="contact" className="my-24 scroll-mt-24">
//           <SectionTitle
//             icon={Mail}
//             title="Contact"

//           />
//           <Reveal>
//             <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-pink-300/10 via-transparent to-purple-400/10 p-6 md:p-10">
//               <motion.div
//                 className="absolute top-0 right-0 w-64 h-64 bg-pink-300/15 rounded-full blur-3xl"
//                 animate={{ scale: [1, 1.15, 1] }}
//                 transition={{ duration: 8, repeat: Infinity }}
//               />
//               <motion.div
//                 className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/15 rounded-full blur-3xl"
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 10, repeat: Infinity }}
//               />

//               <div className="relative z-10 max-w-xl mx-auto text-center">
//                 <motion.div
//                   animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
//                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//                   className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center shadow-xl shadow-pink-300/30"
//                 >
//                   <Send className="w-6 h-6 text-black" />
//                 </motion.div>

//                 <h3 className="text-xl md:text-2xl font-black tracking-tight mb-3">
//                   Ready to start a project?
//                 </h3>
//                 <p className="text-white/60 font-medium mb-6 leading-relaxed text-sm">
//                   Always open for new opportunities, collaborations, or just a
//                   chat about tech.
//                 </p>

//                 <div className="flex flex-col sm:flex-row gap-2.5 justify-center mb-6">
//                   <MagneticButton
//                     href={`mailto:${EMAIL}`}
//                     className="px-5 py-3 rounded-xl bg-pink-300 text-black text-sm font-bold flex items-center justify-center gap-2 shadow-xl shadow-pink-300/30"
//                   >
//                     <Mail className="w-4 h-4" />
//                     {EMAIL}
//                   </MagneticButton>

//                   <MagneticButton
//                     href={`https://instagram.com/${IG_USERNAME}`}
//                     className="px-5 py-3 rounded-xl border border-white/15 bg-white/5 text-white text-sm font-bold flex items-center justify-center gap-2 backdrop-blur-xl"
//                   >
//                     <Instagram className="w-4 h-4" />
//                     @{IG_USERNAME}
//                   </MagneticButton>
//                 </div>

//                 {/* CLICKABLE SOCIAL LINKS */}
//                 <div className="flex justify-center gap-2.5 mb-6">
//                   <motion.a
//                     href={GITHUB}
//                     target="_blank"
//                     rel="noreferrer"
//                     whileHover={{ scale: 1.15, y: -4 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center group"
//                     aria-label="GitHub"
//                   >
//                     <Github className="w-5 h-5 text-white/70 group-hover:text-pink-300 transition-colors" />
//                   </motion.a>
//                   <motion.a
//                     href={LINKEDIN}
//                     target="_blank"
//                     rel="noreferrer"
//                     whileHover={{ scale: 1.15, y: -4 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center group"
//                     aria-label="LinkedIn"
//                   >
//                     <Linkedin className="w-5 h-5 text-white/70 group-hover:text-pink-300 transition-colors" />
//                   </motion.a>
//                   <motion.a
//                     href={`https://instagram.com/${IG_USERNAME}`}
//                     target="_blank"
//                     rel="noreferrer"
//                     whileHover={{ scale: 1.15, y: -4 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center group"
//                     aria-label="Instagram"
//                   >
//                     <Instagram className="w-5 h-5 text-white/70 group-hover:text-pink-300 transition-colors" />
//                   </motion.a>
//                 </div>

//                 <motion.div
//                   className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-green-500/30 bg-green-500/10"
//                   animate={{
//                     boxShadow: [
//                       "0 0 0 0 rgba(74, 222, 128, 0)",
//                       "0 0 20px 0 rgba(74, 222, 128, 0.25)",
//                       "0 0 0 0 rgba(74, 222, 128, 0)",
//                     ],
//                   }}
//                   transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   <motion.span
//                     className="w-1.5 h-1.5 rounded-full bg-green-400"
//                     animate={{ opacity: [1, 0.3, 1] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   />
//                   <span className="text-[10px] font-bold uppercase tracking-wider text-green-400">
//                     Available for opportunities
//                   </span>
//                 </motion.div>
//               </div>
//             </div>
//           </Reveal>
//         </section>

//         <footer className="mt-16 text-center">
//           <div className="border-t border-white/10 pt-6">
//             <p className="text-white/40 text-xs font-medium">
//               © {new Date().getFullYear()} {NAME}. 
//             </p>
//           </div>
//         </footer>
//       </main>

//       {/* EXPERIENCE MODAL */}
//       <AnimatePresence>
//         {openExp && (
//           <ExperienceModal exp={openExp} onClose={() => setOpenExp(null)} />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  FolderGit2,
  Instagram,
  Mail,
  User,
  ChevronRight,
  Github,
  Linkedin,
  Cpu,
  Code2,
  Rocket,
  Zap,
  Sparkle,
  Award,
  Calendar,
  Heart,
  MessageCircle,
  Send,
  MousePointer2,
  X,
  Cloud,
  Palette,
  BadgeCheck,
  ExternalLink,
} from "lucide-react";

interface ExperienceItem {
  slug: string;
  role: string;
  place: string;
  period: string;
  achievements: string[];
  tech: string[];
  link: string;
  photos?: string[];
}

interface ProjectItem {
  slug: string;
  title: string;
  desc: string;
  tags: string[];
  link: string;
}

interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialId: string | null;
  skills: string[];
  extraSkills?: number;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
}

interface Particle {
  id: number;
  size: number;
  background: string;
  left: string;
  top: string;
  duration: number;
}

const PARTICLES: Particle[] = Array.from({ length: 30 }, (_, i) => {
  const r1 = ((i * 9301 + 49297) % 233280) / 233280;
  const r2 = ((i * 12345 + 67891) % 233280) / 233280;
  const r3 = ((i * 54321 + 98765) % 233280) / 233280;
  return {
    id: i,
    size: Number((r1 * 3 + 1).toFixed(1)),
    background: i % 3 === 0 ? "rgba(247,191,210,0.6)" : "rgba(255,255,255,0.3)",
    left: `${(r2 * 100).toFixed(2)}%`,
    top: `${(r3 * 100).toFixed(2)}%`,
    duration: Number((r3 * 20 + 15).toFixed(1)),
  };
});

function cn(...s: Array<string | false | undefined>) {
  return s.filter(Boolean).join(" ");
}

const COLORS = {
  pink: "#F7BFD2",
  pinkGlow: "rgba(247,191,210,0.5)",
};

/* ============================================================
   BACKGROUND FX
   ============================================================ */
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: p.background,
            left: p.left,
            top: p.top,
          }}
          animate={{
            y: [0, -100, 0, 100, 0],
            x: [0, 50, -50, 25, 0],
            opacity: [0.2, 0.8, 0.2, 0.4, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

function TechGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden opacity-10">
      <motion.div
        className="absolute inset-0"
        style={{
          y,
          backgroundImage: `
            linear-gradient(rgba(247,191,210,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(247,191,210,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

function AmbientBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{ background: "rgba(247,191,210,0.15)", top: "10%", left: "5%" }}
        animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[140px]"
        style={{ background: "rgba(168,85,247,0.12)", top: "50%", right: "5%" }}
        animate={{ x: [0, -70, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full blur-[100px]"
        style={{ background: "rgba(247,191,210,0.1)", bottom: "5%", left: "40%" }}
        animate={{ x: [0, 60, -40, 0], y: [0, -50, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ============================================================
   HELPERS
   ============================================================ */
function Reveal({
  children,
  delay = 0,
  y = 30,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TiltCard({
  children,
  className,
  intensity = 6,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    rotateX.set(((y - cy) / cy) * -intensity);
    rotateY.set(((x - cx) / cx) * intensity);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      className={cn("relative", className)}
      style={{
        transformStyle: "preserve-3d",
        rotateX: springX,
        rotateY: springY,
        perspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
}

function MagneticButton({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.25);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      className={className}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

function AnimatedCounter({
  value,
  label,
  icon: Icon,
}: {
  value: number;
  label: string;
  icon?: React.ElementType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 40;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.round((value * frame) / total));
      if (frame >= total) clearInterval(timer);
    }, 25);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      className="text-center p-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl"
      whileHover={{ y: -4, backgroundColor: "rgba(247,191,210,0.1)" }}
    >
      {Icon && <Icon className="w-4 h-4 text-pink-300 mx-auto mb-1" />}
      <div className="text-2xl font-black tracking-tight text-white">
        {count}
        <span className="text-pink-300">+</span>
      </div>
      <div className="text-[10px] font-bold uppercase tracking-wider text-white/50 mt-0.5">
        {label}
      </div>
    </motion.div>
  );
}

/* ============================================================
   PHOTO CARD
   ============================================================ */
function PhotoHeroCard({
  name,
  ig,
  photoSrc,
  role,
}: {
  name: string;
  ig: string;
  photoSrc: string;
  role?: string;
  specialization?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <motion.div ref={cardRef} style={{ y: parallaxY }} className="relative flex justify-center">
      <motion.div
        className="absolute -inset-6 rounded-[36px] blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(247,191,210,0.4), transparent 60%), radial-gradient(circle at 70% 70%, rgba(168,85,247,0.3), transparent 60%)",
        }}
        animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <TiltCard intensity={5}>
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[260px] h-[360px] md:w-[280px] md:h-[380px] rounded-[28px] overflow-hidden cursor-pointer group"
        >
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-pink-300/60 via-white/20 to-purple-400/50 p-[1.5px]">
            <div className="w-full h-full rounded-[26px] bg-[#050509]" />
          </div>

          <motion.div
            className="absolute inset-0 rounded-[26px] overflow-hidden"
            animate={{ scale: isHovered ? 1.06 : 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={photoSrc}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 260px, 280px"
              priority
            />
          </motion.div>

          <div className="absolute inset-0 rounded-[26px] bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
          <div className="absolute inset-0 rounded-[26px] bg-gradient-to-tr from-pink-500/15 via-transparent to-purple-500/10" />

          <div className="absolute bottom-0 left-0 right-0 p-4 space-y-3">
            <div className="space-y-1">
              <h3 className="text-lg font-black tracking-tight text-white leading-tight">
                {name}
              </h3>
              <p className="text-[10px] font-medium text-white/50 leading-snug">
                {role || "CS Student @ BINUS"}
              </p>
            </div>

            <motion.a
              href={`https://instagram.com/${ig}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl bg-white/10 backdrop-blur-xl px-3 py-2 border border-white/20 group/link"
              whileHover={{ scale: 1.03, backgroundColor: "rgba(247,191,210,0.2)" }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="flex items-center gap-1.5">
                <Instagram className="w-3.5 h-3.5 text-pink-300" />
                <span className="text-xs font-semibold text-white">@{ig}</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/70 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>

          <motion.div
            className="absolute inset-0 rounded-[26px] pointer-events-none"
            initial={{ x: "-120%" }}
            animate={{ x: "120%" }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut",
            }}
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(247,191,210,0.3) 50%, transparent 60%)",
            }}
          />
        </motion.div>
      </TiltCard>

      {[
        { icon: Cloud, label: "Cloud", color: "text-pink-300", pos: "-left-4 top-[18%]" },
        { icon: Palette, label: "UI/UX", color: "text-purple-300", pos: "-right-4 top-[30%]" },
        { icon: Code2, label: "SE", color: "text-blue-300", pos: "-left-6 bottom-[28%]" },
        { icon: Cpu, label: "DB", color: "text-emerald-300", pos: "-right-6 bottom-[40%]" },
        { icon: Sparkle, label: "AI", color: "text-amber-300", pos: "-left-2 top-[40%]" },
      ].map((chip, i) => (
        <motion.div
          key={chip.label}
          className={`absolute ${chip.pos} px-2.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-xl border border-white/15 shadow-lg hidden md:flex items-center gap-1.5 pointer-events-none`}
          animate={{
            y: [0, i % 2 === 0 ? -8 : 8, 0],
            x: [0, i % 2 === 0 ? 4 : -4, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        >
          <chip.icon className={`w-3 h-3 ${chip.color}`} />
          <span className="text-[10px] font-semibold text-white/90">
            {chip.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ============================================================
   SECTION TITLE
   ============================================================ */
function SectionTitle({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="flex items-center gap-3 mb-8">
      <motion.div className="relative" whileHover={{ scale: 1.12, rotate: 6 }}>
        <motion.div
          className="absolute inset-0 bg-pink-300/30 blur-lg rounded-full"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-300/25 to-transparent border border-white/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-pink-300" />
        </div>
      </motion.div>
      <div>
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="text-white/50 text-xs font-medium mt-0.5">{subtitle}</p>
        )}
      </div>
    </Reveal>
  );
}

/* ============================================================
   EXPERIENCE CARD
   ============================================================ */
function ExperienceCard({
  exp,
  onOpen,
}: {
  exp: ExperienceItem;
  index?: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div ref={ref} style={{ y }}>
      <TiltCard intensity={4}>
        <motion.button
          onClick={onOpen}
          className="relative w-full text-left overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl group"
          whileHover={{ borderColor: "rgba(247,191,210,0.4)" }}
        >
          <div className="relative h-24 bg-gradient-to-r from-pink-300/10 via-purple-300/5 to-transparent overflow-hidden">
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 50%, ${COLORS.pink} 0%, transparent 50%)`,
              }}
              animate={{ x: [0, 30, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute top-2.5 right-2.5 flex gap-1.5 flex-wrap justify-end max-w-[70%]">
              {exp.tech.slice(0, 3).map((t: string, i: number) => (
                <span
                  key={i}
                  className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-xl text-white/80 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-11 h-11 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center"
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Award className="w-5 h-5 text-pink-300" />
              </motion.div>
            </div>
          </div>

          <div className="p-4">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
              <div>
                <h3 className="text-sm font-bold tracking-tight text-white">
                  {exp.role}
                </h3>
                <p className="text-xs font-medium text-pink-300/80 mt-0.5">
                  {exp.place}
                </p>
              </div>
              <span className="text-[10px] font-semibold text-white/40 flex items-center gap-1 px-2 py-0.5 rounded-full border border-white/10 bg-white/5">
                <Calendar className="w-2.5 h-2.5" />
                {exp.period}
              </span>
            </div>

            <ul className="space-y-1.5">
              {exp.achievements.slice(0, 2).map((ach: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-xs text-white/70 leading-snug">
                  <span className="text-pink-300 mt-0.5 text-[10px]">▹</span>
                  <span>{ach}</span>
                </li>
              ))}
            </ul>

            <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-pink-300 uppercase tracking-wider">
              <span>View Details</span>
              <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </motion.button>
      </TiltCard>
    </motion.div>
  );
}

function ExperienceModal({ exp, onClose }: { exp: ExperienceItem; onClose: () => void }) {
  useEffect(() => {
    const handle = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handle);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handle);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#0A0A14] shadow-2xl"
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 flex items-center justify-center hover:bg-white/10 transition"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        <div className="relative h-44 bg-gradient-to-br from-pink-300/25 via-purple-300/15 to-transparent overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, rgba(247,191,210,0.5), transparent 55%), radial-gradient(circle at 75% 40%, rgba(168,85,247,0.4), transparent 55%)",
            }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-16 h-16 rounded-3xl bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center"
              animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Award className="w-7 h-7 text-pink-300" />
            </motion.div>
          </div>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-300 mb-1">
              {exp.place} • {exp.period}
            </p>
            <h3 className="text-2xl font-black tracking-tight text-white">
              {exp.role}
            </h3>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">
              Gallery
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((n) => (
                <motion.div
                  key={n}
                  className="relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-pink-300/10 to-purple-400/10 flex items-center justify-center"
                  whileHover={{ scale: 1.03 }}
                >
                  {exp.photos?.[n - 1] ? (
                    <Image
                      src={exp.photos[n - 1]}
                      alt={`${exp.role} photo ${n}`}
                      fill
                      className="object-cover opacity-90"
                    />
                  ) : (
                    <Sparkle className="w-5 h-5 text-pink-300/60" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">
              Achievements
            </h4>
            <ul className="space-y-2">
              {exp.achievements.map((ach: string, i: number) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-white/75 leading-relaxed"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <BadgeCheck className="w-4 h-4 text-pink-300 mt-0.5 shrink-0" />
                  <span>{ach}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">
              Skills
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {exp.tech.map((t: string) => (
                <motion.span
                  key={t}
                  className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-white/5 border border-white/10 text-white/80"
                  whileHover={{ scale: 1.06, backgroundColor: "rgba(247,191,210,0.2)" }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>

          {exp.link && exp.link !== "#" && (
            <a
              href={exp.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-pink-300 text-black text-sm font-bold"
            >
              <ExternalLink className="w-4 h-4" />
              View More
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ============================================================
   TECH & TOOLS
   ============================================================ */
const TECH_STACK = [
  {
    category: "Languages",
    icon: Code2,
    items: ["C", "Python", "JavaScript", "PHP", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Backend",
    icon: Cpu,
    items: ["Laravel", "Node.js", "REST API", "MySQL"],
  },
  {
    category: "Tools & Design",
    icon: Palette,
    items: ["VS Code", "GitHub", "Canva", "Figma", "Excel"],
  },
  {
    category: "Cloud (GCP)",
    icon: Cloud,
    items: ["Google Cloud Platform", "IAM & Security", "Cloud Load Balancing", "Compute Engine"],
  },
  {
    category: "Networking",
    icon: Zap,
    items: ["TCP/IP", "HTTP/HTTPS", "DNS", "IP Addressing", "Subnetting"],
  },
  {
    category: "Core CS",
    icon: Cpu,
    items: [
      "Data Structures",
      "Algorithm & Programming",
      "Computer Networks",
      "OOP",
      "Database Technology",
      "Artificial Intelligence",
      "Software Engineering",
    ],
  },
  {
    category: "Soft Skills",
    icon: Heart,
    items: ["Leadership", "Digital Marketing", "Communication", "Team Management"],
  },
];

function TechStackSection() {
  return (
    <section id="tech" className="my-24 scroll-mt-24">
      <SectionTitle
        icon={Cpu}
        title="Tech & Tools"
        subtitle="Languages, frameworks, cloud, and more"
      />
      <div className="grid md:grid-cols-2 gap-3">
        {TECH_STACK.map((group, idx) => (
          <Reveal key={group.category} delay={idx * 0.05}>
            <motion.div
              className="relative p-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden group"
              whileHover={{ borderColor: "rgba(247,191,210,0.35)", y: -3 }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <motion.div
                  className="w-8 h-8 rounded-xl bg-pink-300/15 border border-pink-300/20 flex items-center justify-center"
                  animate={{ rotate: [0, 4, -4, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <group.icon className="w-4 h-4 text-pink-300" />
                </motion.div>
                <h3 className="text-sm font-bold tracking-tight text-white">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item, i) => (
                  <motion.span
                    key={item}
                    className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-white/5 border border-white/10 text-white/75"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={{
                      scale: 1.06,
                      backgroundColor: "rgba(247,191,210,0.15)",
                      borderColor: "rgba(247,191,210,0.4)",
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   CERTIFICATIONS
   ============================================================ */
const CERTIFICATIONS: Certification[] = [
  {
    title: "Google Cloud Computing Foundations Certificate",
    issuer: "Google Cloud Skills Boost",
    year: "Jul 2026",
    credentialId: "5118cf29-fa6e-40fa-96a5-9254a3bb45a1",
    skills: ["Cloud Computing", "Google BigQuery", "Cloud Infrastructure", "Application Programming Interfaces", "Identity and Access Management"],
    icon: Cloud,
    link: "https://www.credly.com/earner/earned/badge/5118cf29-fa6e-40fa-96a5-9254a3bb45a1",
  },
  {
    title: "Python Programming Completion Certificate",
    issuer: "Samsung Innovation Campus (SIC)",
    year: "Oct 2025",
    credentialId: null,
    skills: ["Python (Programming Language)", "Innovation Development", "Problem Solving"],
    icon: Code2,
    link: "https://drive.google.com/file/d/1Lip0rdOvl5S3kTSv_UmtxK_xx2BTbJ6E/view",
  },
  {
    title: "Sertifikat Profesional Google AI",
    issuer: "Google",
    year: "Jul 2026",
    credentialId: "8VZZ1J55CSGW",
    skills: ["Artificial Intelligence (AI)", "Brainstorming", "Research Skills", "Writing", "Data Analysis"],
    icon: Sparkle,
    link: "https://www.coursera.org/account/accomplishments/specialization/8VZZ1J55CSGW",
  },
];

function CertificationsSection() {
  return (
    <section id="certifications" className="my-24 scroll-mt-24">
      <SectionTitle
        icon={BadgeCheck}
        title="Certifications"
        subtitle="Click any certificate to verify credential"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {CERTIFICATIONS.map((cert, idx) => (
          <Reveal key={cert.title} delay={idx * 0.08}>
            <TiltCard intensity={5}>
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="relative block p-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden group h-full cursor-pointer"
                whileHover={{ borderColor: "rgba(247,191,210,0.5)", y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 bg-pink-300/15 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 5, repeat: Infinity, delay: idx * 0.4 }}
                />

                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(247,191,210,0.15) 50%, transparent 60%)",
                  }}
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative flex flex-col gap-3 h-full">
                  <div className="flex items-start gap-3">
                    <motion.div
                      className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-300/25 to-purple-400/15 border border-white/15 flex items-center justify-center shrink-0"
                      animate={{ rotate: [0, 6, -6, 0] }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.3,
                      }}
                    >
                      <cert.icon className="w-5 h-5 text-pink-300" />
                    </motion.div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-xs font-bold tracking-tight text-white leading-snug group-hover:text-pink-200 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-[11px] text-white/50 font-medium mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <p className="text-[10px] text-pink-300 font-bold uppercase tracking-wider">
                    Issued {cert.year}
                  </p>

                  {cert.credentialId && (
                    <div className="flex items-start gap-1.5 text-[10px]">
                      <span className="text-white/40 font-semibold shrink-0">
                        ID:
                      </span>
                      <span className="text-white/60 font-mono break-all leading-tight">
                        {cert.credentialId}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1 pt-1 border-t border-white/5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-pink-300/10 border border-pink-300/20 text-pink-200"
                      >
                        {skill}
                      </span>
                    ))}
                    {Boolean(cert.extraSkills && cert.extraSkills > 0) && (
                      <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
                        +{cert.extraSkills} more
                      </span>
                    )}
                  </div>

                  <div className="mt-auto pt-2 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-white/40 group-hover:text-pink-300 transition-colors">
                    <span>Show Credential</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.a>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   PROJECT CARD
   ============================================================ */
function ProjectCard({ project }: { project: ProjectItem; index?: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      className="h-[360px] sticky top-24"
    >
      <a
        href={project.link || "#projects"}
        target={project.link ? "_blank" : "_self"}
        rel="noreferrer"
        className="block h-full"
        onClick={(e) => {
          if (!project.link) e.preventDefault();
        }}
      >
        <motion.div
          className="relative h-full rounded-[28px] overflow-hidden cursor-pointer group"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <div
            className="absolute inset-0 rounded-[28px] p-[1.5px]"
            style={{
              background: isHovered
                ? "linear-gradient(135deg, rgba(247,191,210,0.8), rgba(168,85,247,0.5))"
                : "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))",
              transition: "background 0.4s ease",
            }}
          >
            <div
              className="w-full h-full rounded-[26px]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(10,10,20,0.95) 0%, rgba(20,10,25,0.95) 100%)",
                backdropFilter: "blur(20px)",
              }}
            />
          </div>

          <div className="absolute inset-0 rounded-[26px] opacity-40 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-56 h-56 bg-pink-300 rounded-full blur-3xl"
              animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 rounded-full blur-3xl"
              animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative h-full p-6 md:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between">
                <motion.div
                  className="w-12 h-12 rounded-2xl bg-pink-300/15 flex items-center justify-center border border-pink-300/30 backdrop-blur-xl"
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Code2 className="w-5 h-5 text-pink-300" />
                </motion.div>
                <motion.div
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
                  animate={{ rotate: isHovered ? 45 : 0 }}
                >
                  <ArrowUpRight className="w-4 h-4 text-white/70" />
                </motion.div>
              </div>

              <motion.h3
                className="text-2xl md:text-3xl font-black tracking-tight text-white mt-5 mb-2"
                animate={{ x: isHovered ? 8 : 0 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-lg font-medium line-clamp-4">
                {project.desc}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag: string) => (
                  <motion.span
                    key={tag}
                    className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-white/5 border border-white/10 text-white/70"
                    whileHover={{
                      scale: 1.06,
                      backgroundColor: "rgba(247,191,210,0.2)",
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <motion.div
                className="flex items-center gap-2 text-pink-300 text-xs font-bold uppercase tracking-wider"
                animate={{ x: isHovered ? 8 : 0 }}
              >
                {project.link ? "View Project" : "Coming Soon"}
                <ChevronRight className="w-3.5 h-3.5" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
}

/* ============================================================
   SCROLL INDICATOR
   ============================================================ */
function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
    >
      <MousePointer2 className="w-3.5 h-3.5" />
      <span className="text-[9px] font-bold uppercase tracking-widest">Scroll</span>
      <motion.div
        className="w-[1px] h-6 bg-gradient-to-b from-pink-300 to-transparent"
        animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
}

/* ============================================================
   INTERACTIVE MASCOT — flying cyber-fox
   ============================================================ */
function InteractiveMascot() {
  const [mood, setMood] = useState<"idle" | "happy" | "love" | "wave">("idle");
  const [clickCount, setClickCount] = useState(0);
  const [bubble, setBubble] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });

  const scrollY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scrollX = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  const smoothY = useSpring(scrollY, { stiffness: 60, damping: 20 });
  const smoothX = useSpring(scrollX, { stiffness: 60, damping: 20 });
  const smoothRotate = useSpring(scrollRotate, { stiffness: 60, damping: 22 });

  const messages = {
    happy: ["Nice! 🎉", "Yay!", "Cool!", "Awesome!"],
    love: ["💕", "Thanks!", "Aww~", "You're sweet!"],
    wave: ["Hi there!", "👋", "Hello!", "Hey!"],
  };

  const handleClick = () => {
    const order = ["happy", "love", "wave"] as const;
    const next = order[clickCount % 3];
    setMood(next);
    const list = messages[next];
    setBubble(list[Math.floor(Math.random() * list.length)]);
    setClickCount((c) => c + 1);

    setTimeout(() => {
      setMood("idle");
      setBubble(null);
    }, 1800);
  };

  const visorColor = {
    idle: "#5EEAD4",
    happy: "#A7F3D0",
    love: "#F7BFD2",
    wave: "#C4B5FD",
  }[mood];

  return (
    <div
      ref={wrapperRef}
      className="relative flex flex-col items-center justify-center min-h-[260px]"
    >
      <motion.div
        style={{ y: smoothY, x: smoothX, rotate: smoothRotate }}
        className="relative"
      >
        <motion.div
          animate={{
            x: [0, 14, -10, 8, 0],
            y: [0, -14, -6, -16, 0],
            rotate: [-2, 3, -1, 2, -2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
          className="relative flex flex-col items-center"
        >
          <motion.div
            className="absolute w-[200px] h-[200px] rounded-full blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(94,234,212,0.4) 0%, rgba(247,191,210,0.2) 40%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-teal-300/80"
              style={{ top: "50%", left: "50%" }}
              animate={{
                x: [
                  0,
                  Math.cos((i * 2 * Math.PI) / 4) * 95,
                  Math.cos((i * 2 * Math.PI) / 4 + Math.PI) * 95,
                  0,
                ],
                y: [
                  0,
                  Math.sin((i * 2 * Math.PI) / 4) * 95,
                  Math.sin((i * 2 * Math.PI) / 4 + Math.PI) * 95,
                  0,
                ],
                opacity: [0, 1, 0.6, 0],
                scale: [0, 1.3, 0.8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            />
          ))}

          <AnimatePresence>
            {bubble && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="absolute -top-4 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-2xl bg-white text-black text-xs font-bold shadow-xl shadow-pink-300/30 whitespace-nowrap z-20"
              >
                {bubble}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={handleClick}
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.06 }}
            className="relative cursor-pointer focus:outline-none z-10"
            aria-label="Click me!"
          >
            <motion.div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-2.5 rounded-full bg-black/50 blur-md"
              animate={{ scaleX: [1, 0.65, 1], opacity: [0.5, 0.25, 0.5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <svg
              width="180"
              height="200"
              viewBox="0 0 180 200"
              className="relative overflow-visible"
            >
              <defs>
                <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#E5E7EB" />
                </linearGradient>

                <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#5EEAD4" />
                  <stop offset="100%" stopColor="#14B8A6" />
                </linearGradient>

                <linearGradient id="tailGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FB923C" />
                  <stop offset="100%" stopColor="#EA580C" />
                </linearGradient>

                <radialGradient id="visorGrad" cx="0.5" cy="0.5">
                  <stop offset="0%" stopColor={visorColor} stopOpacity="1" />
                  <stop offset="100%" stopColor={visorColor} stopOpacity="0.5" />
                </radialGradient>

                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <motion.g
                style={{ transformOrigin: "100px 150px" }}
                animate={{
                  rotate: mood === "happy" ? [-10, 10, -10] : [-5, 5, -5],
                }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <path
                  d="M 105 155
                     C 140 145, 170 130, 175 95
                     C 178 65, 165 45, 150 50
                     C 140 53, 138 65, 145 72
                     C 155 82, 158 100, 145 115
                     C 135 128, 118 138, 105 145 Z"
                  fill="url(#tailGrad)"
                  opacity="0.95"
                />
                <path
                  d="M 112 150
                     C 138 142, 162 128, 168 98
                     C 170 78, 163 60, 154 58"
                  stroke="#FDBA74"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.6"
                />
                <circle cx="150" cy="55" r="9" fill="#FED7AA" opacity="0.7" />
              </motion.g>

              <motion.g
                animate={{ y: mood === "happy" ? [0, -3, 0] : 0 }}
                transition={{ duration: 0.4, repeat: mood === "happy" ? 2 : 0 }}
              >
                <ellipse cx="72" cy="168" rx="14" ry="11" fill="url(#bodyGrad)" />
                <ellipse cx="72" cy="172" rx="14" ry="5" fill="url(#accentGrad)" />
                <ellipse cx="108" cy="168" rx="14" ry="11" fill="url(#bodyGrad)" />
                <ellipse cx="108" cy="172" rx="14" ry="5" fill="url(#accentGrad)" />
              </motion.g>

              <motion.g
                animate={{ scaleY: mood === "happy" ? [1, 0.96, 1] : 1 }}
                transition={{ duration: 0.5 }}
                style={{ transformOrigin: "90px 145px" }}
              >
                <ellipse cx="90" cy="140" rx="32" ry="34" fill="url(#bodyGrad)" />
                <ellipse cx="90" cy="148" rx="18" ry="20" fill="#F9FAFB" opacity="0.7" />
                <rect
                  x="74"
                  y="128"
                  width="32"
                  height="10"
                  rx="3"
                  fill="#0F172A"
                  opacity="0.85"
                />
                <text
                  x="90"
                  y="135.5"
                  textAnchor="middle"
                  fontSize="6"
                  fontWeight="900"
                  fill="#5EEAD4"
                  fontFamily="Inter, sans-serif"
                  letterSpacing="0.3"
                >
                  PVA
                </text>

                <motion.circle
                  cx="90"
                  cy="120"
                  r="2.5"
                  fill="#5EEAD4"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                  filter="url(#glow)"
                />
              </motion.g>

              <motion.g
                style={{ transformOrigin: "60px 128px" }}
                animate={{
                  rotate: mood === "wave" ? [-55, -75, -55] : [-15, -22, -15],
                }}
                transition={{
                  duration: mood === "wave" ? 0.5 : 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path
                  d="M 62 128 Q 50 118 46 105"
                  stroke="url(#bodyGrad)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="46" cy="102" r="9" fill="url(#accentGrad)" />
                <circle cx="42" cy="97" r="3" fill="#14B8A6" />
                <circle cx="47" cy="95" r="3" fill="#14B8A6" />
                <circle cx="52" cy="98" r="3" fill="#14B8A6" />
              </motion.g>

              <motion.g
                style={{ transformOrigin: "120px 128px" }}
                animate={{ rotate: [12, 18, 12] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <path
                  d="M 118 128 Q 130 135 134 148"
                  stroke="url(#bodyGrad)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="135" cy="151" r="9" fill="url(#accentGrad)" />
              </motion.g>

              <motion.g
                style={{ transformOrigin: "90px 80px" }}
                animate={{
                  rotate: mood === "wave" ? [-3, 3, -3] : [-1.5, 1.5, -1.5],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.path
                  d="M 70 55 L 62 18 L 82 42 Z"
                  fill="url(#bodyGrad)"
                  stroke="#D1D5DB"
                  strokeWidth="0.5"
                  animate={{
                    rotate: mood === "happy" ? [-6, 4, -6] : [-2, 2, -2],
                  }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: "70px 55px" }}
                />
                <path d="M 70 50 L 65 28 L 78 45 Z" fill="#5EEAD4" opacity="0.7" />

                <motion.path
                  d="M 110 55 L 118 18 L 98 42 Z"
                  fill="url(#bodyGrad)"
                  stroke="#D1D5DB"
                  strokeWidth="0.5"
                  animate={{
                    rotate: mood === "happy" ? [6, -4, 6] : [2, -2, 2],
                  }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: "110px 55px" }}
                />
                <path d="M 110 50 L 115 28 L 102 45 Z" fill="#5EEAD4" opacity="0.7" />

                <ellipse cx="90" cy="80" rx="34" ry="32" fill="url(#bodyGrad)" />
                <path
                  d="M 62 62 Q 90 42 118 62"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                  strokeLinecap="round"
                />

                <ellipse cx="90" cy="84" rx="26" ry="20" fill="#0F172A" />
                <ellipse cx="90" cy="84" rx="26" ry="20" fill="url(#visorGrad)" opacity="0.15" />

                {mood === "happy" ? (
                  <>
                    <path
                      d="M 78 82 Q 82 77 86 82"
                      stroke={visorColor}
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      filter="url(#glow)"
                    />
                    <path
                      d="M 94 82 Q 98 77 102 82"
                      stroke={visorColor}
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      filter="url(#glow)"
                    />
                  </>
                ) : mood === "love" ? (
                  <>
                    <path
                      d="M 82 80 C 82 76, 88 76, 88 80 C 88 84, 82 87, 82 87 C 82 87, 76 84, 76 80 C 76 76, 82 76, 82 80 Z"
                      fill={visorColor}
                      filter="url(#glow)"
                    />
                    <path
                      d="M 104 80 C 104 76, 110 76, 110 80 C 110 84, 104 87, 104 87 C 104 87, 98 84, 98 80 C 98 76, 104 76, 104 80 Z"
                      fill={visorColor}
                      filter="url(#glow)"
                    />
                  </>
                ) : (
                  <>
                    <motion.ellipse
                      cx="82"
                      cy="82"
                      rx="4"
                      ry="5.5"
                      fill={visorColor}
                      filter="url(#glow)"
                      animate={{ scaleY: [1, 0.1, 1] }}
                      transition={{
                        duration: 0.15,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: "easeInOut",
                      }}
                      style={{ transformOrigin: "82px 82px" }}
                    />
                    <motion.ellipse
                      cx="98"
                      cy="82"
                      rx="4"
                      ry="5.5"
                      fill={visorColor}
                      filter="url(#glow)"
                      animate={{ scaleY: [1, 0.1, 1] }}
                      transition={{
                        duration: 0.15,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: "easeInOut",
                      }}
                      style={{ transformOrigin: "98px 82px" }}
                    />
                  </>
                )}

                {mood === "happy" ? (
                  <path
                    d="M 85 92 Q 90 97 95 92"
                    stroke={visorColor}
                    strokeWidth="1.8"
                    fill="none"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />
                ) : mood === "love" ? (
                  <path
                    d="M 86 93 Q 90 96 94 93"
                    stroke={visorColor}
                    strokeWidth="1.8"
                    fill="none"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />
                ) : (
                  <path
                    d="M 86 92 Q 90 95 94 92"
                    stroke={visorColor}
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                )}

                <motion.g
                  animate={{ rotate: mood === "happy" ? [-10, 10, -10] : [0, 0, 0] }}
                  transition={{ duration: 0.6, repeat: mood === "happy" ? 3 : 0 }}
                  style={{ transformOrigin: "90px 50px" }}
                >
                  <line
                    x1="90"
                    y1="52"
                    x2="90"
                    y2="38"
                    stroke="#D1D5DB"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <motion.circle
                    cx="90"
                    cy="36"
                    r="3.5"
                    fill={visorColor}
                    filter="url(#glow)"
                    animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                </motion.g>
              </motion.g>
            </svg>
          </motion.button>

          <motion.p
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mt-4"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            {clickCount === 0 ? "Tap me!" : `${clickCount} taps`}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ============================================================
   MAIN PAGE
   ============================================================ */
export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const [openExp, setOpenExp] = useState<ExperienceItem | null>(null);

  const NAME = "Priscilla Valencia Andow";
  const SHORT_NAME = "Priscilla V.A.";
  const ROLE = "CS Student @BINUS University";
  const SPECIALIZATION = "Cloud Tech • UI/UX • Software Engineering • Database • AI";
  const EMAIL = "priscilla.andow@binus.ac.id";
  const IG_USERNAME = "priscilla.vln";
  const GITHUB = "https://github.com/claavenn";
  const LINKEDIN = "https://www.linkedin.com/in/priscilla-valencia-andow/";
  const PHOTO_SRC = "/me.jpg";

  const EXPERIENCES: ExperienceItem[] = [
    {
      slug: "tfisc-chairman",
      role: "Regional Chairman of TFISC @Semarang",
      place: "Organization",
      period: "2026 — present",
      achievements: [
        "Led 70+ regional members and streamlined cross-divisional operations to execute impactful social, educational, and environmental initiatives.",

"Spearheaded a revamped recruitment strategy, driving a significant surge in new member registrations and overall BINUSIAN involvement this year.",

"Initiated a joint social program with a local community, mobilizing 150+ BINUSIAN participants to create targeted regional impact.",

"Boosted community outreach and engagement by 200% through digital-first campaigns and structured social empowerment projects.",
      ],
      tech: ["Leadership", "Event Strategy", "Team Management", "Sustainability Initiatives"],
      link: "#",
      photos: [
        "/exp/tfisc-1.jpg",
        "/exp/tfisc-2.jpg",
        "/exp/tfisc-3.jpg",
      ],
    },
    {
      slug: "freshmen-partner",
      role: "Freshmen Partner",
      place: "BINUS University",
      period: "2025 - 2026",
      achievements: [
        "Mentored freshmen students through their first year transition",
        "Organized orientation sessions and campus tours",
        "Provided academic and social guidance to new students",
      ],
      tech: ["Mentoring", "Communication", "Interpersonal Skills"],
      link: "#",
      photos: [
        "/exp/fp-1.jpg",
        "/exp/fp-2.jpg",
        "/exp/fp-3.jpg",
      ],
    },
    {
      slug: "himti-member",
      role: "Member of HIMTI Semarang",
      place: "Organization",
      period: "2025-2026",
      achievements: [
        "Developed and Executed digital content strategies for organizational branding.",
        "Publication and Marketing Comittee of SoCS Welcoming Party",
        "Involved in content planning, designing campaign concepts, and ensuring consistent messaging across social media platforms",
      ],
      tech: ["Digital Marketing", "Event Operations", "Content Strategy"],
      link: "#",
      photos: [
        "/exp/himti-1.jpg",
        "/exp/himti-2.jpg",
        "/exp/himti-3.jpg",
      ],
    },
    {
      slug: "binus-promotion",
      role: "Promotion Team BINUS Semarang",
      place: "Company",
      period: "2024-2025",
      achievements: [
        "Created 50+ promotional contents across platforms",
        "Increased reach by 150% on social media",
        "Managed 3 university-level events end-to-end",
      ],
      tech: ["Content Creation", "Digital Marketing", "Data Management"],
      link: "#",},
  ];

  const PROJECTS: ProjectItem[] = [
    {
      slug: "drowsiness-detection-system",
      title: "Drowsiness Detection System",
      desc: "Real-time computer vision system to detect driver drowsiness using facial landmark detection and eye-aspect-ratio analysis, with alert notifications to prevent accidents.",
      tags: ["Python", "OpenCV", "Dlib", "TensorFlow", "Computer Vision"],
      link: "https://drive.google.com/drive/folders/1YsCIQjnESDeR_I5zngWsyMvWWSavdvVi",
    },
    {
      slug: "akang",
      title: "AKANG",
      desc: "Conceptualized an AI platform transforming traditional livestock into digital assets — co-developed financial projections, business models, and mobile/web UI prototypes. Pitched the end-to-end strategy to industry judges, earning a Semifinalist placement out of multi-campus competitors.",
      tags: ["Product Design", "UI/UX", "Business Model", "AI", "Startup"],
      link: "https://linktr.ee/AKANG_AsetKandang?utm_source=linktree_profile_share&ltsid=452e42b4-85fa-4336-adb6-a18fded8aec4",
    },
    {
      slug: "luxury-brand-website",
      title: "Luxury Brand Website UI/UX",
      desc: "Elegant and immersive UI/UX design for a luxury brand website — focusing on sophisticated visual hierarchy, premium typography, and smooth micro-interactions.",
      tags: ["Figma", "UI/UX", "Prototyping", "Visual Design"],
      link: "https://drive.google.com/drive/folders/1eHVf-AbaNsLKbyc2OqOioRyUqhHNfRuF?usp=sharing",
    },
    {
      slug: "sistem-apotek-sma",
      title: "Sistem Apotek SMA",
      desc: "Web-based pharmacy management system for high school health units — handling medicine stock tracking, expiry alerts, prescription records, and transaction reports.",
      tags: ["Laravel", "PHP", "MySQL", "Tailwind", "Chart.js"],
      link: "",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#050509] text-white overflow-x-hidden selection:bg-pink-300 selection:text-black"
      style={{
        fontFamily:
          'var(--font-inter), -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif',
      }}
    >
      <FloatingParticles />
      <TechGrid />
      <AmbientBlobs />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-300 via-pink-200 to-purple-300 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* NAV */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-5xl">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-2xl px-3 py-2.5 shadow-2xl shadow-black/50"
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center shadow-lg shadow-pink-300/30"
                animate={{ rotate: [0, 4, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="font-black text-[11px] tracking-tighter text-black">
                  PVA
                </span>
              </motion.div>
              <span className="font-black text-xs tracking-tight">
                {SHORT_NAME}
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-0.5">
              {["About", "Tech", "Experience", "Projects", "Certifications", "Contact"].map(
                (item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-[11px] font-semibold text-white/60 hover:text-white transition-colors px-2.5 py-1.5 rounded-lg hover:bg-white/5"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.a>
                )
              )}
            </div>

            <MagneticButton
              href="#contact"
              className="px-3 py-1.5 rounded-lg bg-pink-300 text-black text-[11px] font-bold flex items-center gap-1.5 shadow-lg shadow-pink-300/20"
            >
              <Rocket className="w-3 h-3" />
              <span className="hidden sm:inline">Hire Me</span>
            </MagneticButton>
          </div>
        </motion.div>
      </nav>

      <main className="relative pt-28 pb-16 px-4 max-w-5xl mx-auto">
        {/* HERO */}
        <section className="min-h-[80vh] flex items-center relative mb-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pink-300/30 bg-pink-300/5 mb-5"
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-pink-300"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-[10px] font-bold uppercase tracking-wider text-pink-300">
                  {ROLE}
                </span>
              </motion.div>

              <h1 className="text-3xl md:text-5xl lg:text-5xl font-black tracking-tighter leading-[1.05] mb-3">
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="block text-white/90 text-xl md:text-2xl font-bold mb-1"
                >
                  Hi, I&apos;m
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-pink-200 to-purple-300"
                >
                  Priscilla
                </motion.span>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-2 mb-4"
              >
                {[
                  { label: "Cloud Tech", icon: Cloud, color: "pink" },
                  { label: "UI/UX Designer", icon: Palette, color: "purple" },
                  { label: "Software Engineering", icon: Code2, color: "blue" },
                  { label: "Database", icon: Cpu, color: "green" },
                  { label: "AI & Data", icon: Sparkle, color: "amber" },
                ].map((tag, i) => (
                  <motion.span
                    key={tag.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.08 }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className={cn(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border backdrop-blur-xl cursor-default",
                      tag.color === "pink" &&
                        "bg-pink-300/10 border-pink-300/25 text-pink-200",
                      tag.color === "purple" &&
                        "bg-purple-300/10 border-purple-300/25 text-purple-200",
                      tag.color === "blue" &&
                        "bg-blue-300/10 border-blue-300/25 text-blue-200",
                      tag.color === "green" &&
                        "bg-emerald-300/10 border-emerald-300/25 text-emerald-200",
                      tag.color === "amber" &&
                        "bg-amber-300/10 border-amber-300/25 text-amber-200"
                    )}
                  >
                    <tag.icon className="w-3 h-3" />
                    {tag.label}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-3 gap-2 mb-6 max-w-sm"
              >
                <AnimatedCounter value={2} label="Years" icon={Calendar} />
                <AnimatedCounter value={4} label="Projects" icon={Code2} />
                <AnimatedCounter value={3} label="Certifications" icon={Heart} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-2.5"
              >
                <MagneticButton
                  href="#projects"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-pink-300 to-pink-400 text-black text-sm font-bold flex items-center gap-2 shadow-xl shadow-pink-300/20"
                >
                  <Zap className="w-4 h-4" />
                  View Work
                </MagneticButton>

                <MagneticButton
                  href="#contact"
                  className="px-5 py-3 rounded-xl border border-white/15 bg-white/5 text-white text-sm font-bold flex items-center gap-2 backdrop-blur-xl"
                >
                  <MessageCircle className="w-4 h-4" />
                  Let&apos;s Talk
                </MagneticButton>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <PhotoHeroCard
                name={NAME}
                ig={IG_USERNAME}
                photoSrc={PHOTO_SRC}
                role={ROLE}
                specialization={SPECIALIZATION}
              />
            </motion.div>
          </div>

          <ScrollIndicator />
        </section>

        {/* ABOUT */}
        <section id="about" className="my-24 scroll-mt-24">
          <SectionTitle
            icon={User}
            title="About Me"
            subtitle="Passionate about technology and innovation"
          />
          <div className="grid md:grid-cols-3 gap-4">
            <Reveal className="md:col-span-2">
              <div className="relative p-5 md:p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden">
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-pink-300/10 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <p className="relative text-white/70 leading-relaxed font-medium text-[13px] md:text-sm">
                  I&apos;m a Computer Science student specializing in Cloud Technology, with a strong commitment to user-centric problem solving and social impact. As Regional President of TFISC Semarang and Semifinalist at BINUS Startup Vaganza, I leverage cross-functional leadership and technology to address real-world challenges. I&apos;m driven to join the Apple Developer Academy to solve meaningful community problems through innovative app solutions.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <InteractiveMascot />
            </Reveal>
          </div>
        </section>

        {/* TECH & TOOLS */}
        <TechStackSection />

        {/* EXPERIENCE */}
        <section id="experience" className="my-24 scroll-mt-24">
          <SectionTitle
            icon={Briefcase}
            title="Experience"
            subtitle="Click any card to view details"
          />
          <div className="grid md:grid-cols-2 gap-3">
            {EXPERIENCES.map((exp, idx) => (
              <ExperienceCard
                key={idx}
                exp={exp}
                index={idx}
                onOpen={() => setOpenExp(exp)}
              />
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="my-24 scroll-mt-24">
          <SectionTitle
            icon={FolderGit2}
            title="Projects"
            subtitle="Featured work — scroll to explore"
          />
          <div className="relative space-y-6 h-[1500px]">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} />
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <CertificationsSection />

        {/* CONTACT */}
        <section id="contact" className="my-24 scroll-mt-24">
          <SectionTitle icon={Mail} title="Contact" />
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-pink-300/10 via-transparent to-purple-400/10 p-6 md:p-10">
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-pink-300/15 rounded-full blur-3xl"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/15 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              <div className="relative z-10 max-w-xl mx-auto text-center">
                <motion.div
                  animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center shadow-xl shadow-pink-300/30"
                >
                  <Send className="w-6 h-6 text-black" />
                </motion.div>

                <h3 className="text-xl md:text-2xl font-black tracking-tight mb-3">
                  Ready to start a project?
                </h3>
                <p className="text-white/60 font-medium mb-6 leading-relaxed text-sm">
                  Always open for new opportunities, collaborations, or just a
                  chat about tech.
                </p>

                <div className="flex flex-col sm:flex-row gap-2.5 justify-center mb-6">
                  <MagneticButton
                    href={`mailto:${EMAIL}`}
                    className="px-5 py-3 rounded-xl bg-pink-300 text-black text-sm font-bold flex items-center justify-center gap-2 shadow-xl shadow-pink-300/30"
                  >
                    <Mail className="w-4 h-4" />
                    {EMAIL}
                  </MagneticButton>

                  <MagneticButton
                    href={`https://instagram.com/${IG_USERNAME}`}
                    className="px-5 py-3 rounded-xl border border-white/15 bg-white/5 text-white text-sm font-bold flex items-center justify-center gap-2 backdrop-blur-xl"
                  >
                    <Instagram className="w-4 h-4" />
                    @{IG_USERNAME}
                  </MagneticButton>
                </div>

                <div className="flex justify-center gap-2.5 mb-6">
                  <motion.a
                    href={GITHUB}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center group"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-white/70 group-hover:text-pink-300 transition-colors" />
                  </motion.a>
                  <motion.a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-white/70 group-hover:text-pink-300 transition-colors" />
                  </motion.a>
                  <motion.a
                    href={`https://instagram.com/${IG_USERNAME}`}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center group"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-white/70 group-hover:text-pink-300 transition-colors" />
                  </motion.a>
                </div>

                <motion.div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-green-500/30 bg-green-500/10"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(74, 222, 128, 0)",
                      "0 0 20px 0 rgba(74, 222, 128, 0.25)",
                      "0 0 0 0 rgba(74, 222, 128, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-green-400"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-green-400">
                    Available for opportunities
                  </span>
                </motion.div>
              </div>
            </div>
          </Reveal>
        </section>

        <footer className="mt-16 text-center">
          <div className="border-t border-white/10 pt-6">
            <p className="text-white/40 text-xs font-medium">
              © {new Date().getFullYear()} {NAME}.
            </p>
          </div>
        </footer>
      </main>

      <AnimatePresence>
        {openExp && (
          <ExperienceModal exp={openExp} onClose={() => setOpenExp(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}