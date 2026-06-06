import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Download, Mail, Sparkles } from "lucide-react";
import { AnimatedBg } from "./AnimatedBg";
import heroPortrait from "@/assets/hero-portrait.png";
import { useEffect } from "react";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 15, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 15, mass: 0.6 });
  const rotateY = useTransform(sx, [-1, 1], [-8, 8]);
  const rotateX = useTransform(sy, [-1, 1], [6, -6]);
  const translateX = useTransform(sx, [-1, 1], [-18, 18]);
  const translateY = useTransform(sy, [-1, 1], [-12, 12]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      <AnimatedBg />
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
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
          className="max-w-3xl text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[1.02] tracking-tight"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1200 }}
          className="relative mx-auto hidden h-[520px] w-full max-w-md lg:block"
        >
          <motion.div
            className="absolute inset-0 rounded-[2rem] blur-3xl"
            style={{ background: "var(--gradient-brand)", opacity: 0.35 }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            style={{ rotateX, rotateY, x: translateX, y: translateY, transformStyle: "preserve-3d" }}
            className="relative h-full w-full"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <img
                src={heroPortrait}
                alt="Abhinav Dixit portrait"
                width={1080}
                height={1920}
                className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
              />
            </motion.div>
          </motion.div>

          <motion.div
            aria-hidden
            className="absolute -left-4 top-10 rounded-2xl glass px-3 py-2 text-xs"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="gradient-text font-semibold">Pixelark</span> · Founder
          </motion.div>
          <motion.div
            aria-hidden
            className="absolute -right-2 bottom-16 rounded-2xl glass px-3 py-2 text-xs"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            🚀 Shipping daily
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}