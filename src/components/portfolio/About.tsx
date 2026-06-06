import { motion } from "framer-motion";
import profile from "@/assets/profile.jpg";
import { Counter } from "./Counter";

const stats = [
  { value: 40, suffix: "+", label: "Projects Completed" },
  { value: 25, suffix: "+", label: "Websites Built" },
  { value: 1, suffix: "", label: "Startup Founded" },
  { value: 4, suffix: "+", label: "Years of Experience" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground"
        >
          About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl"
        >
          An engineer who ships — and a founder who{" "}
          <span className="font-display italic gradient-text">designs the why</span>.
        </motion.h2>

        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl glass p-1.5">
              <img
                src={profile}
                alt="Abhinav Dixit"
                width={896}
                height={1024}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-[1.4rem] object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[1.4rem]"
                style={{
                  background:
                    "radial-gradient(at 30% 20%, oklch(0.68 0.22 295 / 0.25), transparent 60%)",
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden glass rounded-2xl px-4 py-3 text-sm sm:block">
              <p className="font-display text-2xl gradient-text">Pixelark</p>
              <p className="text-xs text-muted-foreground">Founder · 2023 — now</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="space-y-5 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              I'm a final-year engineering student building at the intersection of
              technology, design, and business. My obsession is simple:{" "}
              <span className="text-foreground">turn ideas into products people use</span>.
            </p>
            <p>
              As the founder of{" "}
              <span className="text-foreground">Pixelark — a creative digital agency</span>,
              I lead a small team designing and shipping websites, brands, and
              digital experiences for startups and creators. Along the way I've
              run marketing campaigns, mentored peers, and led student initiatives.
            </p>
            <p>
              I move fast, learn faster, and care deeply about craft. Whether it's
              a pixel-perfect interface, a marketing funnel, or a half-built MVP at
              2am, I treat execution as the most underrated superpower.
            </p>

            <div className="!mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="glass rounded-2xl p-4"
                >
                  <div className="text-3xl font-semibold tracking-tight">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}