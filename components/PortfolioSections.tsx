"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion, useScroll, useTransform, useInView, animate, AnimatePresence, type MotionValue,
} from "framer-motion";
import {
  Mail, Linkedin, Github, Instagram, X, Award, ArrowUpRight, Check, Download, Images, Eye,
} from "lucide-react";
import {
  PROFILE, EXPERIENCES, CERTIFICATIONS, SKILL_GROUPS, ACADEMIC, PROJECTS, MARQUEE, HERO_FOCUS, HIGHLIGHTS, photosFor, certPreview,
  type Project,
} from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;
const MENU = [
  { label: "About", href: "#about" }, { label: "Skills", href: "#skills" },
  { label: "Academic", href: "#academic" }, { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" }, { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* ---------------- shared bits ---------------- */
function Reveal({ children, delay = 0, y = 32, className = "" }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, delay, ease: EASE }} className={className}>
      {children}
    </motion.div>
  );
}

function Words({ text, className = "", as: Tag = "h2" }: { text: string; className?: string; as?: "h1" | "h2" | "h3" }) {
  return (
    <Tag className={`display ${className}`}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.1em] mr-[0.22em]">
          <motion.span className="inline-block" initial={{ y: "110%" }} whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.9, delay: i * 0.05, ease: EASE }}>
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

function Label({ n, children, light }: { n: string; children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border py-1.5 pl-1.5 pr-4 text-xs ${light ? "border-ink/10 bg-ink/[0.04] text-ink/60" : "border-white/15 bg-white/[0.05] text-white/70"}`}>
      <span className={`rounded-full px-2 py-0.5 font-mono text-[0.65rem] font-medium ${light ? "bg-ink text-bone" : "bg-pink text-white"}`}>{n}</span>
      {children}
    </div>
  );
}

function Head({ n, label, title, aside, light }: { n: string; label: string; title: string; aside?: string; light?: boolean }) {
  return (
    <div className="mb-14 flex flex-col gap-6 sm:mb-20">
      <Reveal><Label n={n} light={light}>{label}</Label></Reveal>
      <div className="flex items-end justify-between gap-6">
        <Words text={title} className="text-[clamp(2.5rem,7vw,5.5rem)]" />
        {aside && <span className={`hidden pb-3 text-sm sm:block ${light ? "text-ink/40" : "text-white/45"}`}>{aside}</span>}
      </div>
    </div>
  );
}

/** Full-width coloured "sheet" that overlaps the previous section with rounded top corners. */
function Sheet({ id, bg, text = "text-bone", children }: { id: string; bg: string; text?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`relative -mt-10 scroll-mt-10 overflow-clip rounded-t-[2.5rem] ${text}`} style={{ background: bg }}>
      <div className="relative mx-auto max-w-7xl px-6 pb-32 pt-24 sm:pb-40 sm:pt-32">{children}</div>
    </section>
  );
}

function Count({ to, dec = 0, pad = 0 }: { to: number; dec?: number; pad?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.6, ease: EASE, onUpdate: setV });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{v.toFixed(dec).padStart(pad, "0")}</span>;
}

function SpotCard({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div style={style}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
      }}
      className={`spot ${className}`}>
      {children}
    </div>
  );
}

const pillBtn = "inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-colors";

/* ---------------- LOADING SCREEN ---------------- */
export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 100;
        const step = p < 40 ? Math.random() * 7 + 4 : p < 80 ? Math.random() * 5 + 3 : Math.random() * 3 + 1.5;
        return Math.min(100, p + step);
      });
    }, 45);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    if (progress < 100) return;
    const id = setTimeout(onDone, 450);
    return () => clearTimeout(id);
  }, [progress, onDone]);

  return (
    <motion.div initial={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 0.9, ease: EASE }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-ink">
      <div className="relative flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE }} className="flex flex-col items-center">
          <div className="display select-none text-6xl sm:text-8xl">PVA</div>
          <div className="mt-4 text-xs text-white/55 sm:text-sm">Priscilla Valencia Andow</div>
        </motion.div>
        <div className="mt-12 w-52 sm:w-64">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-pink" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-[0.65rem] text-white/45">
            <span>Portfolio</span>
            <span>{progress < 40 ? "Initializing" : progress < 85 ? "Curating" : "Ready"} · {Math.floor(progress)}%</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 font-mono text-[0.65rem] text-white/30">PVA · 2026</div>
    </motion.div>
  );
}

/* ---------------- NAV (compact box that expands) ---------------- */
export function Nav({ ready }: { ready: boolean }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 300);
  };
  return (
    <>
      {open && <div className="fixed inset-0 z-[79]" onClick={() => setOpen(false)} aria-hidden />}
      <div className="pointer-events-none fixed inset-x-0 top-4 z-[80] flex justify-center">
        <motion.header initial={{ y: -60, opacity: 0 }} animate={ready ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="pointer-events-auto w-[min(92vw,380px)]">
          <motion.div initial={false} animate={{ height: open ? "auto" : 64 }} transition={{ duration: 0.6, ease: EASE }}
            className="overflow-hidden rounded-xl bg-black/55 ring-1 ring-white/10 backdrop-blur-xl">
            <div className="flex h-16 items-center justify-between px-6">
              <a href="#" className="text-sm font-bold uppercase tracking-tight">Priscilla Andow</a>
              <button onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}
                className="grid size-8 place-items-center rounded-md transition-colors hover:text-pink">
                {open ? <X className="size-5" /> : (
                  <span className="grid grid-cols-2 gap-[3px]">{[0, 1, 2, 3].map((k) => <span key={k} className="size-[6px] rounded-[1px] bg-current" />)}</span>
                )}
              </button>
            </div>
            <div className="px-6 pb-6 pt-1" style={{ visibility: open ? "visible" : "hidden", transition: `visibility 0s ${open ? 0 : 0.6}s` }}>
              <nav className="border-t border-white/10">
                {MENU.map((m, i) => (
                  <button key={m.href} onClick={() => go(m.href)} tabIndex={open ? 0 : -1}
                    className="group flex w-full items-baseline gap-4 border-b border-white/10 py-3 text-left">
                    <span className="font-mono text-[0.65rem] text-white/40">0{i + 1}</span>
                    <span className="text-lg font-bold uppercase tracking-tight transition-all duration-300 group-hover:translate-x-2 group-hover:text-pink">{m.label}</span>
                  </button>
                ))}
              </nav>
              <div className="mt-5 flex items-center justify-between">
                <a href={PROFILE.cvUrl} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1} className="rounded-full bg-pink px-5 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-ink">Get CV</a>
                <div className="flex gap-4 text-white/70">
                  <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" tabIndex={open ? 0 : -1}><Linkedin className="size-5 hover:text-pink" /></a>
                  <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" tabIndex={open ? 0 : -1}><Github className="size-5 hover:text-pink" /></a>
                  <a href={PROFILE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" tabIndex={open ? 0 : -1}><Instagram className="size-5 hover:text-pink" /></a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.header>
      </div>
    </>
  );
}

/* ---------------- HERO: greyscale photo + liquid "paint stroke" colour trail ---------------- */
type Pt = { x: number; y: number; r: number; t: number; life: number; lobes: number[][] };

export function Hero({ ready }: { ready: boolean }) {
  const box = useRef<HTMLElement>(null);
  const cv = useRef<HTMLCanvasElement>(null);
  const addRef = useRef<((x: number, y: number) => void) | null>(null);
  const touched = useRef(false);

  useEffect(() => {
    const el = box.current!, canvas = cv.current!;
    const ctx = canvas.getContext("2d")!;
    const mask = document.createElement("canvas"); // low-res stroke mask (cheap), upscaled when composited
    const mctx = mask.getContext("2d", { willReadFrequently: true })!;
    const img = new window.Image();
    img.src = PROFILE.headshot;
    const S = 0.4;
    let W = 0, H = 0, raf = 0, running = false, last: { x: number; y: number } | null = null;
    let pts: Pt[] = [];

    const resize = () => {
      const b = el.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = canvas.width = Math.round(b.width * dpr); H = canvas.height = Math.round(b.height * dpr);
      mask.width = Math.max(8, Math.round(b.width * S)); mask.height = Math.max(8, Math.round(b.height * S));
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    const frame = (now: number) => {
      pts = pts.filter((p) => now - p.t < p.life);
      const mw = mask.width, mh = mask.height;
      mctx.clearRect(0, 0, mw, mh);
      for (const p of pts) {
        const k = (now - p.t) / p.life;
        const rr = p.r * Math.pow(1 - k, 0.6) * S * 1.35; // old parts of the stroke shrink away
        for (const [dx, dy, ds] of p.lobes) {
          const cx = (p.x + dx * p.r) * S, cy = (p.y + dy * p.r) * S, r = rr * ds;
          if (r < 0.5) continue;
          const g = mctx.createRadialGradient(cx, cy, 0, cx, cy, r);
          g.addColorStop(0, "rgba(255,255,255,1)"); g.addColorStop(0.55, "rgba(255,255,255,0.85)"); g.addColorStop(1, "rgba(255,255,255,0)");
          mctx.fillStyle = g; mctx.beginPath(); mctx.arc(cx, cy, r, 0, 6.2832); mctx.fill();
        }
      }
      // threshold the soft overlaps -> merged, liquid blobs with crisp edges
      const id = mctx.getImageData(0, 0, mw, mh), d = id.data;
      for (let i = 3; i < d.length; i += 4) { const a = d[i]; d[i] = a <= 105 ? 0 : a >= 150 ? 255 : ((a - 105) / 45) * 255; }
      mctx.putImageData(id, 0, 0);

      ctx.clearRect(0, 0, W, H);
      if (img.naturalWidth) {
        const sc = Math.max(W / img.naturalWidth, H / img.naturalHeight);
        const dw = img.naturalWidth * sc, dh = img.naturalHeight * sc;
        ctx.drawImage(img, (W - dw) * (HERO_FOCUS.x / 100), (H - dh) * (HERO_FOCUS.y / 100), dw, dh);
      }
      ctx.globalCompositeOperation = "destination-in"; // keep colour photo only inside the stroke
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(mask, 0, 0, W, H);
      ctx.globalCompositeOperation = "source-over";

      if (pts.length) raf = requestAnimationFrame(frame);
      else { running = false; ctx.clearRect(0, 0, W, H); }
    };
    const start = () => { if (!running) { running = true; raf = requestAnimationFrame(frame); } };

    const add = (x: number, y: number) => {
      const now = performance.now();
      const base = Math.min(80, el.clientWidth * 0.08) * (0.7 + Math.random() * 0.6);
      const j = () => Math.random() - 0.5;
      const lobes = [[0, 0, 1], [j() * 1.1, j() * 1.1, 0.6 + Math.random() * 0.4], [j() * 1.4, j() * 1.4, 0.4 + Math.random() * 0.4]];
      pts.push({ x, y, r: base, t: now, life: 950 + Math.random() * 500, lobes });
      if (Math.random() < 0.2) { // little splatter droplets, like in the reference
        const a = Math.random() * 6.283, dd = base * (1.2 + Math.random());
        pts.push({ x: x + Math.cos(a) * dd, y: y + Math.sin(a) * dd, r: 6 + Math.random() * 9, t: now, life: 450 + Math.random() * 350, lobes: [[0, 0, 1]] });
      }
      start();
    };
    addRef.current = add;

    const onMove = (e: PointerEvent) => {
      touched.current = true;
      const b = el.getBoundingClientRect();
      const x = e.clientX - b.left, y = e.clientY - b.top;
      if (!last) { add(x, y); last = { x, y }; return; }
      const dx = x - last.x, dy = y - last.y, dist = Math.hypot(dx, dy);
      if (dist < 14) return;
      const n = Math.ceil(dist / 14);
      for (let k = 1; k <= n; k++) add(last.x + (dx * k) / n, last.y + (dy * k) / n);
      last = { x, y };
    };
    const onLeave = () => { last = null; };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerdown", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf); ro.disconnect(); addRef.current = null;
      el.removeEventListener("pointermove", onMove); el.removeEventListener("pointerdown", onMove); el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  // one short demo stroke after loading so visitors discover the effect
  useEffect(() => {
    if (!ready || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = box.current!;
    const t0 = performance.now() + 900;
    const id = window.setInterval(() => {
      if (touched.current) { clearInterval(id); return; }
      const t = (performance.now() - t0) / 1500;
      if (t < 0) return;
      if (t > 1) { clearInterval(id); return; }
      const b = el.getBoundingClientRect();
      addRef.current?.(b.width * (0.3 + 0.4 * t), b.height * (0.3 + 0.08 * Math.sin(t * Math.PI * 2)));
    }, 22);
    return () => clearInterval(id);
  }, [ready]);

  return (
    <section ref={box} className="grain relative h-svh min-h-[640px] touch-pan-y overflow-hidden bg-ink">
      <Image src={PROFILE.headshot} alt={PROFILE.fullName} fill priority sizes="100vw"
        className="object-cover grayscale contrast-110 brightness-[0.82]" style={{ objectPosition: `${HERO_FOCUS.x}% ${HERO_FOCUS.y}%` }} />
      <canvas ref={cv} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" style={{ filter: "saturate(1.1)" }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center px-4 pb-5 text-center sm:pb-7">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-4 max-w-2xl text-[0.65rem] font-semibold uppercase leading-snug sm:mb-6 sm:text-sm">
          <div className="text-pink">Cloud · AI · Software Engineering</div>
          <div className="mt-1 text-white/90">Bridging cloud architecture, intelligent systems, and organizational leadership — building technology that solves real problems.</div>
        </motion.div>
        <h1 className="w-full text-center text-[13vw] font-extrabold uppercase leading-[0.82] tracking-[-0.05em] text-pink md:text-[7.4vw]">
          {["Priscilla", "Andow"].map((w, i) => (
            <span key={w} className="block overflow-hidden pb-[0.04em] md:inline-block">
              <motion.span className="block" initial={{ y: "105%" }} animate={ready ? { y: 0 } : {}} transition={{ duration: 1.1, delay: 0.35 + i * 0.12, ease: EASE }}>
                {w}{i === 0 && <span className="hidden md:inline">&nbsp;</span>}
              </motion.span>
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
export function Marquee() {
  return (
    <div className="relative overflow-hidden bg-bone py-5 text-ink" aria-hidden>
      <div className="marquee flex w-max items-center">
        {[...MARQUEE, ...MARQUEE].map((t, i) => (
          <span key={i} className="flex items-center whitespace-nowrap text-sm font-semibold tracking-wide sm:text-base">
            <span className="px-8">{t}</span><span className="text-pink">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- ABOUT (black) ---------------- */
function Word({ w, p, a, b }: { w: string; p: MotionValue<number>; a: number; b: number }) {
  const opacity = useTransform(p, [a, b], [0.16, 1]);
  return <motion.span style={{ opacity }}>{w} </motion.span>;
}

export function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const text = "A Computer Science student with hands-on experience across Cloud Technology, Data & AI, and Software Engineering. I combine technical skills with analytical problem-solving and leadership, and I’m open to opportunities across the broader technology landscape.";
  const words = text.split(" ");
  const stats = [
    { to: ACADEMIC.cumulativeGPA, dec: 2, label: "Cumulative GPA" },
    { to: ACADEMIC.semesters.filter((s) => s.gpa !== null).length, label: "Semesters completed" },
    { to: EXPERIENCES.length, suffix: "+" , label: "Leadership roles" },
    { to: CERTIFICATIONS.length, suffix: "+", label: "Certifications" },
  ];
  return (
    <section id="about" className="relative scroll-mt-10 bg-ink">
      <div className="mx-auto max-w-6xl px-6 pb-28 pt-28 sm:pb-40 sm:pt-40">
        <Reveal><Label n="001">Strategic Profile</Label></Reveal>
        <Words text="Turning technology into meaningful solutions." className="mt-8 max-w-4xl text-[clamp(2.2rem,6vw,4.75rem)]" />
        <p ref={ref} className="mt-14 max-w-4xl text-[clamp(1.25rem,2.6vw,2rem)] font-medium leading-snug tracking-tight">
          {words.map((w, i) => <Word key={i} w={w} p={scrollYProgress} a={i / words.length} b={(i + 1) / words.length} />)}
        </p>
         <Reveal className="mt-12">
          <div className="mb-4 text-sm text-white/50"></div>
          <div className="flex flex-wrap gap-3">
            {HIGHLIGHTS.map((h) => (
              <a key={h.label} href={h.href}
                className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition-colors ${h.featured ? "border-pink bg-pink text-white hover:bg-white hover:text-ink" : "border-white/20 text-white/80 hover:border-pink hover:text-pink"}`}>
                <Award className="size-4" /> {h.label}
              </a>
            ))}
          </div>
        </Reveal>
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink p-6 sm:p-8">
              <div className="display text-5xl sm:text-6xl">
                <Count to={s.to} dec={s.dec} />{s.suffix}
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm text-white/55"><span className="size-1.5 rounded-full bg-pink" />{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SKILLS (white) ---------------- */
export function Skills() {
  return (
    <Sheet id="skills" bg="#ffffff" text="text-ink">
      <Head light n="002" label="Capabilities" title="Skill Matrix" aside={`${String(SKILL_GROUPS.length).padStart(2, "0")} Domains`} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((g, i) => (
          <Reveal key={g.id} delay={(i % 3) * 0.08}>
            <SpotCard className="h-full rounded-[1.75rem] border border-ink/10 bg-[#f6f6f5] p-7">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="flex items-center gap-3 text-xl font-medium tracking-tight"><span className="size-2.5 rounded-full bg-pink" />{g.label}</h3>
                <span className="font-mono text-xs text-ink/35">{g.id}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="rounded-full border border-ink/15 bg-white px-3.5 py-1.5 text-[0.8rem] text-ink/75 transition-colors hover:border-ink hover:bg-ink hover:text-white">{it}</span>
                ))}
              </div>
            </SpotCard>
          </Reveal>
        ))}
      </div>
    </Sheet>
  );
}

/* ---------------- ACADEMIC (black): sticky summary stays, semesters scroll ---------------- */
function GPARing({ value }: { value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const r = 78;
  return (
    <div ref={ref} className="relative size-[190px] shrink-0">
      <svg viewBox="0 0 200 200" className="absolute inset-0 -rotate-90">
        <circle cx="100" cy="100" r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="6" />
        <motion.circle cx="100" cy="100" r={r} fill="none" stroke="#ff2e7e" strokeWidth="6" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: inView ? value / 4 : 0 }} transition={{ duration: 1.8, ease: EASE }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="display text-6xl"><Count to={value} dec={2} /></div>
        <div className="mt-1 text-xs text-white/50">/ 4.00</div>
      </div>
    </div>
  );
}

const KIND_LABEL = { internship: "Internship", thesis: "Thesis", ongoing: "In progress" } as const;

export function AcademicProfile() {
  const sems = ACADEMIC.semesters;
  const done = sems.filter((s) => s.gpa !== null).length;
  return (
    <Sheet id="academic" bg="#0a0a0a">
      <Head n="003" label="Academic Profile" title="Academic Journey" aside={`${ACADEMIC.years} ${ACADEMIC.status}`} />
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SpotCard className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10">
              <div className="text-xs text-white/50">BINUS University · School of Computer Science</div>
              <h3 className="display mt-4 text-4xl sm:text-5xl">{ACADEMIC.university}</h3>
              <p className="mt-4 text-white/65">{ACADEMIC.program} · {ACADEMIC.years} <span className="text-white/40">{ACADEMIC.status}</span></p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="text-xs text-white/50">Specialization</span>
                <span className="rounded-full bg-pink px-4 py-1.5 text-sm font-medium text-white">{ACADEMIC.specialization}</span>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-white/10 pt-10">
                <GPARing value={ACADEMIC.cumulativeGPA} />
                <div>
                  <div className="text-sm text-white/60">Cumulative GPA</div>
                  <span className="mt-2 inline-block rounded-full border border-dashed border-white/30 px-3 py-1 text-xs">Current</span>
                </div>
              </div>
              <div className="mt-10">
                <div className="mb-3 flex justify-between text-xs text-white/50"><span>8-semester roadmap</span><span>{done} / {sems.length} graded</span></div>
                <div className="flex gap-1.5">
                  {sems.map((s) => <span key={s.id} className={`h-1.5 flex-1 rounded-full ${s.gpa !== null ? "bg-pink" : "bg-white/15"}`} />)}
                </div>
              </div>
            </SpotCard>
          </div>
        </div>

        <div className="space-y-4 lg:col-span-7">
          {sems.map((s) => {
            const pending = s.gpa === null;
            const spec = s.number === "04";
            const badge = s.kind && s.kind !== "study" ? KIND_LABEL[s.kind] : spec ? `Specialization · ${ACADEMIC.specialization}` : null;
            return (
              <Reveal key={s.id}>
                <article className={`rounded-[2rem] border p-7 sm:p-9 ${spec ? "border-pink/50 bg-pink/[0.06]" : "border-white/10 bg-white/[0.03]"}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs text-white/50">Semester {s.number}</span>
                        {badge && <span className={`rounded-full px-2.5 py-0.5 text-[0.7rem] font-medium ${spec ? "bg-pink text-white" : "bg-white text-ink"}`}>{badge}</span>}
                      </div>
                      <h4 className="display mt-3 text-[clamp(1.6rem,3vw,2.4rem)]">{s.title}</h4>
                    </div>
                    <div className="text-right">
                      <div className={`display text-4xl sm:text-5xl ${pending ? "text-white/35" : ""}`}>{pending ? "—" : s.gpa!.toFixed(2)}</div>
                      <div className="mt-1 text-xs text-white/50">{pending ? "GPS not yet available" : "GPS"}</div>
                    </div>
                  </div>
                  <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/10">
                    {!pending && <motion.div className="h-full origin-left rounded-full bg-pink" initial={{ scaleX: 0 }} whileInView={{ scaleX: s.gpa! / 4 }}
                      viewport={{ once: true }} transition={{ duration: 1.4, ease: EASE }} />}
                  </div>
                  <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-white/65">{s.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.courses.map((x) => <span key={x} className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/70">{x}</span>)}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Sheet>
  );
}

/* ---------------- EXPERIENCE (white): cards stay, then get covered by the next ---------------- */
type Exp = (typeof EXPERIENCES)[number];

function ExpCard({ e, i, total, p }: { e: Exp; i: number; total: number; p: MotionValue<number> }) {
  const scale = useTransform(p, [i / total, 1], [1, 1 - (total - 1 - i) * 0.03]);
  return (
    <div className="mb-5 lg:sticky lg:mb-8" style={{ top: 88 + i * 16 }}>
      <motion.article style={{ scale }} className="origin-top rounded-[2rem] border border-white/10 bg-ink p-6 text-bone shadow-[0_-20px_50px_-25px_rgba(0,0,0,0.55)] sm:p-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-pink px-3 py-1 font-mono text-xs font-medium text-white">{e.index}</span>
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/65">{e.period}</span>
            </div>
            <h3 className="display mt-6 text-[clamp(1.75rem,3.2vw,2.75rem)]">{e.role}</h3>
            <p className="mt-2 text-white/55">{e.organization}</p>
            <p className="mt-1 text-sm text-pink">{e.scope}</p>
            <ul className="mt-6 space-y-3">
              {e.achievements.map((a, k) => (
                <li key={k} className="flex gap-3 text-sm leading-relaxed text-white/65">
                  <Check className="mt-0.5 size-4 shrink-0 text-pink" /><span>{a}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-6">
              {e.competencies.map((x) => <span key={x} className="rounded-full border border-white/15 px-3 py-1.5 text-[0.7rem] text-white/65">{x}</span>)}
            </div>
          </div>
          <div className="lg:col-span-5">
            {e.showBinusLogo ? (
              <div className="flex h-full min-h-[220px] flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-8">
                <div className="relative h-20 w-44"><Image src="/logo.png" alt="BINUS Logo" fill sizes="176px" className="object-contain" /></div>
                <span className="text-xs text-white/50">BINUS University Official Advocacy</span>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {e.photos?.map((ph, k) => (
                  <div key={k} className={`relative overflow-hidden rounded-2xl bg-card ${k === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"}`}>
                    <Image src={ph.src} alt={`${e.role} ${k + 1}`} fill sizes="(min-width:1024px) 30vw, 90vw"
                      className="object-cover transition-transform duration-700 hover:scale-105" style={{ objectPosition: ph.position }} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <Sheet id="experience" bg="#ffffff" text="text-ink">
      <Head light n="004" label="Experience" title="Leadership Track Record" aside={`${String(EXPERIENCES.length).padStart(2, "0")} Roles`} />
      <div ref={ref}>
        {EXPERIENCES.map((e, i) => <ExpCard key={e.index} e={e} i={i} total={EXPERIENCES.length} p={scrollYProgress} />)}
      </div>
    </Sheet>
  );
}

type Preview = { title: string; sub: string; link: string; linkLabel: string; photos: string[] };


function Lightbox({ v, onClose }: { v: Preview; onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  const n = v.photos.length;
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % n);
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + n) % n);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose, n]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
      className="fixed inset-0 z-[95] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-xl" role="dialog" aria-modal="true" aria-label={v.title}>
      <motion.div initial={{ y: 40, scale: 0.96 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: 0.97 }} transition={{ duration: 0.5, ease: EASE }}
        onClick={(e) => e.stopPropagation()} className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/10 bg-card p-4 text-bone sm:p-6">
        
        {/* Container gambar utama: fleksibel untuk ukuran lanskap maupun foto HP */}
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-ink/90 sm:aspect-[16/10]">
          {/* Ambient blur di latar belakang gambar */}
          {v.photos[idx] && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={v.photos[idx]} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25 blur-2xl" />
          )}
          <AnimatePresence mode="wait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img 
              key={idx} 
              src={v.photos[idx]} 
              alt={`${v.title} preview ${idx + 1}`} 
              initial={{ opacity: 0, scale: 0.98 }} 
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.3 }} 
              className="relative z-10 max-h-full max-w-full object-contain p-2 sm:p-4" 
            />
          </AnimatePresence>
          <button onClick={onClose} aria-label="Close preview" className="absolute right-3 top-3 z-20 flex size-10 items-center justify-center rounded-full bg-ink/70 backdrop-blur-md hover:bg-pink">
            <X className="size-5" />
          </button>
        </div>

        {/* Thumbnail baris bawah (otomatis tersembunyi jika hanya 1 foto) */}
        {n > 1 && (
          <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
            {v.photos.map((src, k) => (
              <button key={k} onClick={() => setIdx(k)} aria-label={`Photo ${k + 1}`}
                className={`relative aspect-[4/3] w-24 shrink-0 overflow-hidden rounded-xl border-2 bg-ink/40 transition-all sm:w-32 ${k === idx ? "border-pink" : "border-transparent opacity-50 hover:opacity-100"}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" loading="lazy" className="h-full w-full object-contain p-1" />
              </button>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-end justify-between gap-4 px-1 pb-1">
          <div><h4 className="display text-2xl sm:text-3xl">{v.title}</h4><p className="mt-2 text-sm text-white/55">{v.sub}</p></div>
          {v.link && <a href={v.link} target="_blank" rel="noreferrer" className={`${pillBtn} bg-pink text-white hover:bg-white hover:text-ink`}>{v.linkLabel} <ArrowUpRight className="size-4" /></a>}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ---------------- CERTIFICATIONS (black, with preview) ---------------- */
export function Certifications() {
  const [open, setOpen] = useState<Preview | null>(null);
  return (
    <Sheet id="certifications" bg="#0a0a0a">
      <Head n="005" label="Certifications" title="Verified Credentials" aside={`${String(CERTIFICATIONS.length).padStart(2, "0")} Badges`} />
      <div className="grid gap-5 md:grid-cols-3">
        {CERTIFICATIONS.map((c, i) => {
          const pv: Preview = { title: c.title, sub: `${c.issuer} · ${c.date}`, link: c.url, linkLabel: "Verify credential", photos: [certPreview(c)] };
          return (
            <Reveal key={c.index} delay={i * 0.1}>
              <SpotCard className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4">
                <button onClick={() => setOpen(pv)} aria-label={`Preview ${c.title}`} className="group relative aspect-[16/11] overflow-hidden rounded-2xl bg-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={pv.photos[0]} alt={c.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink"><Eye className="size-4" /> Preview</span>
                  </span>
                </button>
                <div className="flex flex-1 flex-col p-3 pt-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full bg-pink/15"><Award className="size-5 text-pink" strokeWidth={1.6} /></span>
                    <span className="font-mono text-xs text-white/45">{c.date}</span>
                  </div>
                  <h4 className="mt-5 text-lg font-medium leading-snug tracking-tight">{c.title}</h4>
                  <p className="mt-2 text-sm text-white/50">{c.issuer}</p>
                  <a href={c.url} target="_blank" rel="noreferrer" className="mt-auto flex items-center gap-1.5 pt-6 text-sm text-pink hover:text-white">Verify <ArrowUpRight className="size-4" /></a>
                </div>
              </SpotCard>
            </Reveal>
          );
        })}
      </div>
      <AnimatePresence>{open && <Lightbox v={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </Sheet>
  );
}

/* ---------------- PROJECTS (white): title + index stay, project cards scroll ---------------- */
/* ---------------- PROJECTS (white): title + index stay, project cards scroll ---------------- */

/* ---------------- PROJECTS (white): title + index stay, project cards scroll ---------------- */
function ProjectCard({ p, i, onOpen, onActive }: { p: Project; i: number; onOpen: (p: Project) => void; onActive: (i: number) => void }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => { if (inView) onActive(i); }, [inView, i, onActive]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);
  const photos = photosFor(p);
  const hasPhotos = photos.length > 0;
  const mainPhoto = p.preview ?? (hasPhotos ? photos[0] : null);

  // Deteksi khusus jika proyek berformat HP (BluPerch dengan 3 foto HP)
  const isMobileShowcase = p.id === "06" && photos.length > 1;

  return (
    <Reveal>
      <article ref={ref}>
        {hasPhotos && mainPhoto ? (
          <button 
            onClick={() => onOpen(p)} 
            aria-label={`Preview ${p.title}`} 
            className="group relative flex aspect-[16/9] max-h-[380px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#111113] text-left ring-1 ring-black/5"
          >
            {/* Ambient blur tipis agar latar tidak terlalu kontras */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={mainPhoto} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-15 blur-xl" />
            
            {isMobileShowcase ? (
              /* Khusus format HP (BluPerch): 3 layar HP berjejer rapi sehingga tidak ada sisa abu-abu kosong */
              <div className="relative z-10 flex h-full items-center justify-center gap-2.5 sm:gap-4 p-2 sm:p-3">
                {photos.slice(0, 3).map((src, idx) => (
                  <motion.div 
                    key={idx} 
                    style={{ y }}
                    className="relative h-full max-h-[320px] aspect-[9/18] overflow-hidden rounded-xl shadow-lg ring-1 ring-white/10 bg-black transition-transform duration-500 group-hover:scale-[1.03]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`${p.title} screen ${idx + 1}`} className="h-full w-full object-cover" />
                  </motion.div>
                ))}
              </div>
            ) : (
              /* Untuk proyek website: ukuran pas & rapat dengan sisa padding abu-abu yang sangat minim */
              // eslint-disable-next-line @next/next/no-img-element
              <motion.img 
                src={mainPhoto} 
                alt={p.title} 
                loading="lazy" 
                style={{ y }} 
                className="relative z-10 max-h-full max-w-full object-contain p-1.5 sm:p-2.5 transition-transform duration-500 group-hover:scale-[1.01]" 
              />
            )}

            <span className="absolute left-3.5 top-3.5 z-20 flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1 text-xs text-white backdrop-blur-md">
              <Images className="size-3.5" /> {photos.length === 1 ? "1 photo" : `${photos.length} photos`}
            </span>
            <span className="absolute bottom-3.5 right-3.5 z-20 translate-y-2 rounded-full bg-pink px-3.5 py-1.5 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View preview
            </span>
          </button>
        ) : (
          /* Placeholder Drowsiness System: lebih ringkas & rapi */
          <div className="relative flex aspect-[16/9] max-h-[260px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-ink/20 bg-ink/[0.02] text-center p-6">
            <Images className="size-8 stroke-1 text-ink/30 mb-2" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-ink/50">Preview not available yet</span>
            <span className="absolute left-3.5 top-3.5 flex items-center gap-1.5 rounded-full bg-ink/60 px-3 py-1 text-xs text-white backdrop-blur-md">
              Not available yet
            </span>
          </div>
        )}

        <div className="mt-6">
          <div className="flex items-center gap-3 text-xs text-ink/55">
            <span className="rounded-full bg-ink px-2.5 py-0.5 font-mono text-white">{p.id}</span><span>{p.tag}</span>
          </div>
          <h3 className="display mt-3 text-[clamp(1.75rem,3vw,2.5rem)]">{p.title}</h3>
          <p className="mt-2 text-sm text-ink/55">{p.sub}</p>
          <p className="mt-4 max-w-2xl text-[0.92rem] leading-relaxed text-ink/70">{p.desc}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.tags.map((t) => <span key={t} className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink/70">{t}</span>)}
          </div>
          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-ink/80"><span className="size-2 rounded-full bg-pink" />{p.metric}</div>
          <div className="mt-6 flex flex-wrap gap-3">
            {hasPhotos ? (
              <button onClick={() => onOpen(p)} className={`${pillBtn} border border-ink/20 hover:bg-ink hover:text-bone`}><Images className="size-4" /> Preview</button>
            ) : (
              <span className={`${pillBtn} border border-ink/10 bg-ink/5 text-ink/40 cursor-not-allowed`}><Images className="size-4" /> Preview not available yet</span>
            )}
            {p.link && <a href={p.link} target="_blank" rel="noreferrer" className={`${pillBtn} bg-ink text-bone hover:bg-pink`}>{p.linkLabel ?? "Open project"} <ArrowUpRight className="size-4" /></a>}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function ProjectsShowcase() {
  const [open, setOpen] = useState<Project | null>(null);
  const [active, setActive] = useState(0);
  const pv: Preview | null = open ? { title: open.title, sub: open.sub, link: open.link, linkLabel: open.linkLabel ?? "Open project", photos: photosFor(open) } : null;
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <Sheet id="projects" bg="#ffffff" text="text-ink">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal><Label light n="006">Selected Works</Label></Reveal>
            <Words text="Projects" className="mt-6 text-[clamp(2.75rem,7vw,5.5rem)]" />
            <div className="mt-8 flex items-baseline gap-2">
              <span className="display text-6xl text-pink">{pad(active + 1)}</span>
              <span className="text-sm text-ink/40">/ {pad(PROJECTS.length)} Case Studies</span>
            </div>
            <ul className="mt-8 hidden border-t border-ink/10 lg:block">
              {PROJECTS.map((p, i) => (
                <li key={p.id} className={`flex items-baseline gap-4 border-b border-ink/10 py-3 text-sm transition-colors duration-300 ${i === active ? "text-ink" : "text-ink/35"}`}>
                  <span className="font-mono text-xs">{p.id}</span>
                  <span className={i === active ? "font-medium" : ""}>{p.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-20 lg:col-span-8 lg:space-y-28">
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} i={i} onOpen={setOpen} onActive={setActive} />)}
        </div>
      </div>
      <AnimatePresence>{pv && <Lightbox v={pv} onClose={() => setOpen(null)} />}</AnimatePresence>
    </Sheet>
  );
}

/* ---------------- CONTACT + FOOTER (black) ---------------- */
export function Contact() {
  const links = [
    { href: `mailto:${PROFILE.email}`, label: "Email", Icon: Mail },
    { href: PROFILE.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: PROFILE.github, label: "GitHub", Icon: Github },
    { href: PROFILE.instagram, label: "Instagram", Icon: Instagram },
  ];
  return (
    <Sheet id="contact" bg="#0a0a0a">
      <Reveal><Label n="007">Initiate Engagement</Label></Reveal>
      <Words text="Let's build something exceptional." className="mt-8 max-w-4xl text-[clamp(2.75rem,8vw,7rem)]" />
      <Reveal delay={0.2}>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
          Open for opportunities in technology consulting, cloud engineering, AI development, and software engineering. I am eager to help organizations solve complex technical challenges and build scalable, intelligent systems.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={PROFILE.cvUrl} target="_blank" rel="noreferrer" className={`${pillBtn} bg-pink text-white hover:bg-white hover:text-ink`}><Download className="size-4" /> Download CV / Connect</a>
          {links.map(({ href, label, Icon }) => (
            <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel="noreferrer"
              className={`${pillBtn} border border-white/20 hover:border-pink hover:text-pink`}><Icon className="size-4" /> {label}</a>
          ))}
        </div>
      </Reveal>
    </Sheet>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 px-6 py-8 text-xs text-white/45 sm:flex-row">
        <span>Priscilla Andow</span><span>Bandung, Indonesia</span><span>© 2026</span>
      </div>
    </footer>
  );
}