import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    name: "Pixelark",
    tag: "Creative Digital Agency",
    description:
      "Founded and run a creative agency delivering websites, branding, animations, and digital experiences for startups, creators, and SMBs.",
    tech: ["React", "Next.js", "Framer", "Figma", "GSAP"],
    outcomes: ["20+ brands shipped", "End-to-end design + dev", "Recurring clients"],
    accent: "from-violet-500/30 to-fuchsia-500/20",
  },
  {
    name: "Yojna Mitra",
    tag: "Civic-Tech Platform",
    description:
      "A platform that simplifies access to government schemes and opportunities — connecting citizens with the benefits they're eligible for.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    outcomes: ["Eligibility-first UX", "Multi-language ready", "Built for scale"],
    accent: "from-cyan-400/30 to-emerald-500/20",
  },
  {
    name: "School Management & EdTech",
    tag: "Education Initiatives",
    description:
      "Led digital learning and student-engagement initiatives — designing tools and content that helped schools operate and teach better.",
    tech: ["Design Systems", "Notion", "Workflow", "Branding"],
    outcomes: ["Improved engagement", "Faster ops", "Reusable templates"],
    accent: "from-amber-400/25 to-rose-500/20",
  },
  {
    name: "Creative Lab",
    tag: "Personal Experiments",
    description:
      "A growing collection of micro-sites, design experiments, marketing campaigns, and content — where I prototype what's next.",
    tech: ["React", "Motion", "AI Tools", "Content"],
    outcomes: ["Always shipping", "Public learning", "Built in weekends"],
    accent: "from-indigo-400/30 to-sky-500/20",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Featured Work
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Selected <span className="font-display italic">projects</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            A snapshot of what I've built, shipped, and learned from over the last
            few years.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 2) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glass p-6 sm:p-8"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity duration-500 group-hover:opacity-100 ${p.accent}`}
                style={{ maskImage: "radial-gradient(ellipse at top right, black, transparent 70%)" }}
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {p.tag}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {p.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-3">
                  {p.outcomes.map((o) => (
                    <li key={o} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {o}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition hover:opacity-90"
                  >
                    Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/30 px-4 py-2 text-xs font-medium text-foreground transition hover:bg-secondary/60"
                  >
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}