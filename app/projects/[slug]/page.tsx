"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const PROJECTS: Record<
  string,
  { title: string; desc: string; role: string; stack: string[]; highlights: string[]; demo?: string }
> = {
  "project-a": {
    title: "Project A",
    desc: "Landing page premium dengan animasi halus dan performa tinggi.",
    role: "Frontend + UI",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    highlights: [
      "Micro-interactions untuk tombol & kartu.",
      "Optimasi layout & loading.",
      "Desain clean, modern, Apple-ish.",
    ],
    demo: "#",
  },
  "project-b": {
    title: "Project B",
    desc: "Dashboard modular yang cepat dan enak dipakai.",
    role: "Frontend",
    stack: ["React", "TypeScript", "UI System"],
    highlights: ["Komponen reusable", "State rapi", "UX cepat dan jelas"],
    demo: "#",
  },
  "project-c": {
    title: "Project C",
    desc: "Portfolio interaktif dengan gaya premium.",
    role: "Design + Dev",
    stack: ["Design", "Motion", "Performance"],
    highlights: ["Scroll feel halus", "Animasi subtle", "Layout minimal premium"],
    demo: "#",
  },
};

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const p = PROJECTS[params.slug];

  if (!p) {
    return (
      <div className="min-h-screen bg-[#050509] text-white px-6 py-16">
        <p className="text-white/70">Project tidak ditemukan.</p>
        <Link className="mt-6 inline-block text-[#F7BFD2]" href="/">
          ← Kembali
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050509] text-white">
      <div className="mx-auto max-w-5xl px-5 py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-8 text-4xl font-semibold tracking-tight md:text-6xl"
        >
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.42)",
              backgroundImage:
                "linear-gradient(90deg, rgba(247,191,210,0.95), rgba(255,255,255,0.82))",
              WebkitBackgroundClip: "text",
            }}
          >
            {p.title}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
          className="mt-4 max-w-2xl text-white/70 leading-relaxed"
        >
          {p.desc}
        </motion.p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="text-sm font-semibold">Role</div>
            <div className="mt-2 text-white/70">{p.role}</div>

            <div className="mt-6 text-sm font-semibold">Stack</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="text-sm font-semibold">Highlights</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            {p.demo ? (
              <a
                href={p.demo}
                className="mt-6 inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium text-black"
                style={{
                  background: "linear-gradient(135deg, #FBE3EC, #F7BFD2)",
                  boxShadow:
                    "0 18px 50px -26px rgba(247,191,210,0.65), inset 0 1px 0 rgba(255,255,255,0.45)",
                }}
              >
                Open demo <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}