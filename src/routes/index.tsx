import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Timeline } from "@/components/portfolio/Timeline";
import { Achievements } from "@/components/portfolio/Achievements";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CustomCursor } from "@/components/portfolio/CustomCursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhinav Dixit — Engineer, Founder & Designer" },
      {
        name: "description",
        content:
          "Portfolio of Abhinav Dixit — engineering student, founder of Pixelark, and designer building premium digital experiences.",
      },
      { property: "og:title", content: "Abhinav Dixit — Engineer, Founder & Designer" },
      {
        property: "og:description",
        content:
          "Engineering student, entrepreneur, and creator. Selected projects, experience, and ways to get in touch.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Abhinav Dixit",
          jobTitle: "Engineering Student, Founder of Pixelark, Designer",
          url: "/",
          sameAs: ["#"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen bg-background text-foreground"
    >
      <CustomCursor />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster position="bottom-right" />
    </motion.main>
  );
}
