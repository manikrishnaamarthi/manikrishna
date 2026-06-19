import Reveal from "./Reveal";

const skillCategories = [
  {
    title: "Frontend",
    description:
      "Interfaces that feel polished, responsive, and production-ready across web and mobile.",
    items: ["React", "Next.js", "React Native", "Android", "iOS", "TypeScript"],
  },
  {
    title: "Backend and APIs",
    description:
      "Scalable services, clean API design, backend reliability, and production delivery discipline.",
    items: [
      "FastAPI",
      "Django",
      "Python",
      "RESTful APIs",
      "Redis",
      "Event-Driven Patterns",
    ],
  },
  {
    title: "Blockchain and Wallet Systems",
    description:
      "Practical blockchain exploration built around wallet flows, token movement, and secure transaction models.",
    items: [
      "Sui",
      "Stellar",
      "Wallet Interactions",
      "Token Transfers",
      "Secure Transaction Models",
    ],
  },
  {
    title: "Cloud and Tools",
    description:
      "Deployment, infrastructure, databases, and team tooling that keep releases moving.",
    items: [
      "PostgreSQL",
      "CockroachDB",
      "Docker",
      "GCP",
      "Infrastructure Setup",
      "Git",
      "Production Deployment",
      "Postman",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden px-3 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12"
    >
      <div className="relative mx-auto max-w-7xl">
        <Reveal variant="up" className="max-w-3xl">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.32em] text-sky-300">
            Technical Arsenal
          </p>
          <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white">
            A practical stack for building{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-300 to-violet-300">
              full-stack products
            </span>
            .
          </h2>
          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-slate-400">
            The stack I rely on to build product-focused fintech, B2B, and
            real-time systems across web, mobile, backend infrastructure, and
            blockchain exploration.
          </p>
        </Reveal>

        <div className="mt-12 sm:mt-14 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <Reveal
              key={category.title}
              variant={index % 2 === 0 ? "up" : "rotate"}
              delay={index * 90}
              className="h-full"
            >
              <article className="group flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.08]">
                <span className="text-xs font-medium uppercase tracking-[0.28em] text-sky-300">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {category.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-slate-300 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
