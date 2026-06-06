import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-foreground">Abhinav Dixit</span> · Designed & built
          with care.
        </p>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="LinkedIn" className="rounded-full p-2 transition hover:bg-secondary/60">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#" aria-label="GitHub" className="rounded-full p-2 transition hover:bg-secondary/60">
            <Github className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Instagram" className="rounded-full p-2 transition hover:bg-secondary/60">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="mailto:hello@abhinavdixit.com" aria-label="Email" className="rounded-full p-2 transition hover:bg-secondary/60">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}