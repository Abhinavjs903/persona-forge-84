import { motion } from "framer-motion";
import { Rocket, Layers, GraduationCap, Megaphone, HeartHandshake } from "lucide-react";

const items = [
  { icon: Rocket, title: "Startup Founder", desc: "Built Pixelark from zero to a working agency." },
  { icon: Layers, title: "Digital Projects Delivered", desc: "Shipped 25+ websites and brand systems." },
  { icon: GraduationCap, title: "Educational Initiatives", desc: "Led student-engagement & learning programs." },
  { icon: Megaphone, title: "Marketing Campaigns", desc: "Ran growth campaigns across social & SEO." },
  { icon: HeartHandshake, title: "Community Impact", desc: "Mentored peers and contributed to civic-tech." },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Achievements
        </p>
        <h2 className="mb-14 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
          Moments I'm <span className="font-display italic gradient-text">proud of</span>.
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl p-6"
            >
              <div
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "var(--gradient-brand)" }}
              >
                <it.icon className="h-5 w-5 text-background" />
              </div>
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}