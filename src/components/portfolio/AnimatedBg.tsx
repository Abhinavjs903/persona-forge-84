import { motion } from "framer-motion";

export function AnimatedBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "var(--gradient-mesh)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <motion.div
        className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: "oklch(0.68 0.22 295 / 0.35)" }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-20 h-[32rem] w-[32rem] rounded-full blur-3xl"
        style={{ background: "oklch(0.78 0.16 215 / 0.28)" }}
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "oklch(0.72 0.22 340 / 0.22)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}