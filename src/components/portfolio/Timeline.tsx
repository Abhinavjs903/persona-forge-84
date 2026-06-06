import { motion } from "framer-motion";

const items = [
  {
    year: "2023 — Now",
    role: "Founder & Creative Director",
    org: "Pixelark",
    desc: "Building a creative digital agency — leading design, development, and client strategy end-to-end.",
  },
  {
    year: "2022 — Now",
    role: "Student Leader & Initiator",
    org: "Engineering College",
    desc: "Led student activities, technical clubs, and college-wide initiatives spanning events and content.",
  },
  {
    year: "2022 — Now",
    role: "Marketing & Growth Campaigns",
    org: "Brands & Creators",
    desc: "Ran campaigns across social, SEO, and content — driving discovery, engagement, and conversion.",
  },
  {
    year: "2021 — Now",
    role: "Freelance Designer & Developer",
    org: "Independent",
    desc: "Shipped websites, brand identities, and digital products for clients across India and abroad.",
  },
];

export function Timeline() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Experience
        </p>
        <h2 className="mb-14 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
          A short <span className="font-display italic">timeline</span>.
        </h2>

        <ol className="relative ml-3 border-l border-border pl-8">
          {items.map((it, i) => (
            <motion.li
              key={it.role}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08 }}
              className="relative pb-10 last:pb-0"
            >
              <span
                aria-hidden
                className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full"
                style={{ background: "var(--gradient-brand)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-background" />
              </span>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {it.year}
              </p>
              <h3 className="mt-1 text-xl font-semibold">
                {it.role} <span className="text-muted-foreground">· {it.org}</span>
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {it.desc}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}