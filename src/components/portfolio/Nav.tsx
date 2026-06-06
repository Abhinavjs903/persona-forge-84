import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex items-center gap-1 rounded-full px-2 py-2 transition-all ${
          scrolled ? "glass" : "bg-transparent"
        }`}
      >
        <a href="#hero" className="px-3 py-1.5 text-sm font-semibold tracking-tight">
          <span className="gradient-text">Abhinav</span>
          <span className="text-foreground/80"> Dixit</span>
        </a>
        <div className="mx-1 hidden h-5 w-px bg-border md:block" />
        <ul className="hidden items-center md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-secondary/60 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          download
          className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1.5 text-sm font-medium text-background transition hover:opacity-90"
        >
          <Download className="h-3.5 w-3.5" />
          Resume
        </a>
      </nav>
    </motion.header>
  );
}