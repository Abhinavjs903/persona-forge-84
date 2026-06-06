import { motion } from "framer-motion";
import { Code2, Palette, Megaphone, Wrench } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Development",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Palette,
    title: "Design",
    items: ["Figma", "UI/UX Design", "Motion Design", "Branding"],
  },
  {
    icon: Megaphone,
    title: "Marketing",
    items: ["Social Media", "SEO", "Content Creation", "Growth Strategy"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["GitHub", "Notion", "Canva", "AI Tools"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Skills
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
              A full <span className="font-display italic">stack</span> of taste & tools.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            From the first wireframe to the launch tweet — I work across the whole
            arc of building something people care about.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-3xl glass p-6 transition-shadow hover:shadow-[0_0_60px_-15px_oklch(0.68_0.22_295_/_0.35)]"
            >
              <div
                aria-hidden
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-60"
                style={{ background: "var(--gradient-brand)" }}
              />
              <g.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground transition group-hover:text-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}