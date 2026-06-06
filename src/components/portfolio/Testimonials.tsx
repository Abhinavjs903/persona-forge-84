import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Abhinav blends design taste with engineering execution. He shipped our brand and site in days, not weeks — and made it feel premium.",
    name: "Aarav Mehta",
    role: "Founder · Early-stage startup",
  },
  {
    quote:
      "One of the most driven students I've taught. He turns ideas into real projects faster than most professionals.",
    name: "Prof. Neha Kapoor",
    role: "Faculty Mentor",
  },
  {
    quote:
      "Working with Abhinav at Pixelark was a masterclass in ownership. He leads by example and obsesses over the details.",
    name: "Ishaan Roy",
    role: "Team Member · Pixelark",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Testimonials
        </p>
        <h2 className="mb-14 text-3xl font-semibold tracking-tight sm:text-5xl">
          Kind words from people I've{" "}
          <span className="font-display italic">worked with</span>.
        </h2>

        <div className="relative glass mx-auto rounded-3xl p-8 sm:p-12">
          <Quote className="mx-auto h-7 w-7 text-primary" />
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-5 text-balance text-xl leading-relaxed sm:text-2xl"
          >
            "{t.quote}"
          </motion.blockquote>
          <motion.p
            key={`m-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            <span className="text-foreground">{t.name}</span> · {t.role}
          </motion.p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              aria-label="Previous testimonial"
              onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)}
              className="rounded-full border border-border p-2 transition hover:bg-secondary/60"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-6 bg-foreground" : "w-1.5 bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={() => setI((v) => (v + 1) % testimonials.length)}
              className="rounded-full border border-border p-2 transition hover:bg-secondary/60"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}