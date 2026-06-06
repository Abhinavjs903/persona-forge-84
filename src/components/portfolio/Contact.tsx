import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell me a bit more").max(1500),
});

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    const { name, email, company, message } = parsed.data;
    const subject = encodeURIComponent(`Hello from ${name}${company ? ` (${company})` : ""}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:hello@abhinavdixit.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Email client opened — talk soon!");
      form.reset();
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Contact
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Let's build <span className="font-display italic gradient-text">something</span>.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Internships, full-time roles, freelance projects, or just a great
              conversation — my inbox is open.
            </p>

            <div className="mt-8 space-y-3">
              {[
                { icon: Mail, label: "hello@abhinavdixit.com", href: "mailto:hello@abhinavdixit.com" },
                { icon: Linkedin, label: "linkedin.com/in/abhinavdixit", href: "#" },
                { icon: Github, label: "github.com/abhinavdixit", href: "#" },
                { icon: Instagram, label: "@abhinav.dixit", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="group flex items-center justify-between rounded-2xl glass px-4 py-3 text-sm transition hover:bg-secondary/60"
                >
                  <span className="flex items-center gap-3">
                    <s.icon className="h-4 w-4 text-primary" />
                    {s.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={onSubmit}
            className="glass rounded-3xl p-6 sm:p-8"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Name" placeholder="Your name" error={errors.name} />
              <Field name="email" label="Email" type="email" placeholder="you@company.com" error={errors.email} />
            </div>
            <Field name="company" label="Company" placeholder="(optional)" error={errors.company} />
            <div className="mt-4">
              <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                maxLength={1500}
                placeholder="Tell me about the role, project, or idea…"
                className="mt-1.5 w-full resize-none rounded-xl border border-border bg-background/40 px-3.5 py-3 text-sm outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90 disabled:opacity-50"
            >
              {submitting ? "Opening…" : "Send message"}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  error,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  error?: string;
}) {
  return (
    <div className="mt-4 first:mt-0">
      <label htmlFor={name} className="text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={255}
        className="mt-1.5 w-full rounded-xl border border-border bg-background/40 px-3.5 py-3 text-sm outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}