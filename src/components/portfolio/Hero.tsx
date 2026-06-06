import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail, Sparkles } from "lucide-react";
import { AnimatedBg } from "./AnimatedBg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      <AnimatedBg />
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for internships & full-time roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl text-[clamp(2.5rem,7vw,5.75rem)] font-semibold leading-[1.02] tracking-tight"
        >
          Building <span className="font-display italic">products</span>,{" "}
          <span className="gradient-text">brands</span> & digital{" "}
          <span className="font-display italic">experiences</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Engineering student, entrepreneur, and creator passionate about solving
          real-world problems through technology, design, and execution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
          >
            View Projects
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary/70"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-muted-foreground/70"
        >
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5" /> Founder · Pixelark
          </span>
          <span>UI/UX Designer</span>
          <span>Web Developer</span>
          <span>Digital Marketer</span>
          <span>Content Creator</span>
        </motion.div>
      </div>
    </section>
  );
}