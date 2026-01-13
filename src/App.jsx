import React from "react";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/your-linkedin/",
  github: "https://github.com/your-github/",
  email: "mailto:saiganeshtirumalasetty@gmail.com",
  resume: "C:\Users\saiti\Downloads\SaiGaneshAT.pdf", // put your resume pdf path later (e.g., /resume.pdf)
};

const PROJECTS = [
  {
    title: "Supply Chain Microservices Platform",
    impact:
      "Built scalable Spring Boot services and integrated a React UI to support internal operational workflows.",
    stack: ["Java", "Spring Boot", "Microservices", "REST APIs", "React", "AWS"],
    bullets: [
      "Designed REST APIs with secure JWT authentication and role-based access control.",
      "Integrated React frontend with backend services for real-time visibility.",
      "Improved response times using caching and efficient database queries.",
    ],
    live: "#",
    repo: "#",
  },
  {
    title: "Event-Driven Order Tracking",
    impact:
      "Implemented event streaming patterns to process updates and status changes reliably at scale.",
    stack: ["Kafka", "Spring Boot", "Event-Driven", "Docker", "AWS"],
    bullets: [
      "Produced/consumed events for order lifecycle updates and notifications.",
      "Handled failures with retries, idempotency, and structured error handling.",
      "Containerized services for consistent deployments.",
    ],
    live: "#",
    repo: "#",
  },
  {
    title: "Banking Workflow Automation",
    impact:
      "Developed backend services for validations, scheduling, and automated transaction flows.",
    stack: ["Java", "Spring Boot", "ActiveMQ", "MySQL", "CI/CD"],
    bullets: [
      "Built async processing for validations and integrations via messaging.",
      "Optimized queries/indexes for high concurrency.",
      "Maintained CI/CD pipelines for reliable releases.",
    ],
    live: "#",
    repo: "#",
  },
];

const TECH = {
  "Backend": ["Java", "Spring Boot", "Spring Security", "Hibernate", "JPA", "Spring Batch"],
  "Frontend": ["React", "JavaScript", "HTML", "CSS"],
  "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD (Jenkins, GitHub Actions)"],
  "Messaging": ["Kafka", "RabbitMQ", "ActiveMQ"],
  "Databases": ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Redis"],
};

function Badge({ text }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
      {text}
    </span>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-12">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
          {subtitle ? (
            <p className="mt-2 max-w-3xl text-slate-600">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a href="#top" className="font-semibold tracking-tight">
            Sai Ganesh
          </a>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#projects">Projects</a>
            <a className="hover:text-slate-900" href="#stack">Tech Stack</a>
            <a className="hover:text-slate-900" href="#experience">Experience</a>
            <a className="hover:text-slate-900" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={LINKS.linkedin}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50"
              target="_blank" rel="noreferrer"
            >
              LinkedIn
            </a>
            
          </div>
        </div>
      </header>

      {/* Hero */}
      <main id="top">
        <section className="py-14">
          <div className="mx-auto max-w-5xl px-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Senior Java & Full-Stack Developer</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900">
                Building scalable backend systems with strong full-stack delivery.
              </h1>
              <p className="mt-4 max-w-3xl text-slate-600">
                6+ years of experience delivering enterprise applications using Java, Spring Boot,
                microservices, AWS, messaging (Kafka), and React integrations.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Badge text="Java" />
                <Badge text="Spring Boot" />
                <Badge text="Microservices" />
                <Badge text="AWS" />
                <Badge text="Kafka" />
                <Badge text="React" />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
                >
                  View Projects
                </a>
                <a
                  href={LINKS.resume}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50"
                >
                  Download Resume
                </a>
                 <a
                  href={LINKS.resume}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50"
                  target="_blank"
                  rel="noreferrer"
                  download
                  >
                  Email Me
                </a>
              </div>
            </div>

            {/* What I do */}
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Backend Development",
                  desc: "Java, Spring Boot, microservices, REST APIs, security, performance.",
                },
                {
                  title: "Cloud & DevOps",
                  desc: "AWS, Docker, Kubernetes, CI/CD for reliable deployments.",
                },
                {
                  title: "Frontend & Full-Stack",
                  desc: "React UI integrations that connect cleanly to backend services.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <Section
          id="projects"
          title="Projects"
          subtitle="Each project is written in a recruiter-friendly format: impact first, then stack and proof bullets."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.impact}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Badge key={s} text={s} />
                  ))}
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  
                 
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Tech Stack */}
        <Section
          id="stack"
          title="Tech Stack"
          subtitle="Grouped for clarity—this should mirror your LinkedIn skills so your branding stays consistent."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(TECH).map(([group, items]) => (
              <div key={group} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold">{group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((i) => (
                    <Badge key={i} text={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section
          id="experience"
          title="Experience Highlights"
          subtitle="Short proof points—keep detailed bullets on LinkedIn, and use this section as a credibility snapshot."
        >
          <div className="grid gap-4">
            {[
              {
                role: "Senior Java Developer (Healthcare)",
                points: [
                  "Spring Boot microservices + secure auth (JWT/OAuth2)",
                  "Kafka-based event processing for real-time workflows",
                  "AWS deployments with CI/CD and scalable infrastructure",
                  "React integration for internal dashboards",
                ],
              },
              {
                role: "Java Backend Developer (Banking)",
                points: [
                  "Loan/credit workflow services with Spring Boot",
                  "Async processing with messaging for validations",
                  "Query/index optimization for concurrency and performance",
                  "Reliable releases via CI/CD pipelines",
                ],
              },
            ].map((e) => (
              <div key={e.role} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold">{e.role}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section
          id="contact"
          title="Contact"
          subtitle="Make it effortless for recruiters to reach you."
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700">
              Email:{" "}
              <a className="font-medium text-slate-900 underline" href={LINKS.email}>
                saiganeshtirumalasetty@gmail.com
              </a>
            </p>
            <p className="mt-2 text-slate-700">
              LinkedIn:{" "}
              <a className="font-medium text-slate-900 underline" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                Open Profile
              </a>
            </p>
            
          </div>
        </Section>

        <footer className="border-t border-slate-200 bg-white py-8">
          <div className="mx-auto max-w-5xl px-4 text-sm text-slate-500">
            Sai Ganesh • Senior Java & Full-Stack Developer • Open to opportunities
          </div>
        </footer>
      </main>
    </div>
  );
}
