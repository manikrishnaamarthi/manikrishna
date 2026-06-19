import {
  Award,
  Brain,
  Cloud,
  PenTool,
  Shield,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";

const achievements: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
  category: string;
}> = [
  {
    icon: Cloud,
    title: "Docker and GCP Deployment",
    description:
      "Hosted live web applications using Docker on Google Cloud Platform.",
    category: "Cloud Infrastructure",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Mobile Apps",
    description:
      "Built and released native mobile applications for Android and iOS.",
    category: "Mobile Development",
  },
  {
    icon: Shield,
    title: "ZK Login Authentication",
    description:
      "Implemented secure zero-knowledge login and JWT-based authentication systems.",
    category: "Security",
  },
  {
    icon: Brain,
    title: "AI Workflow Integration",
    description: "Integrated AI workflows into production applications.",
    category: "Artificial Intelligence",
  },
  {
    icon: Wrench,
    title: "Reusable Django Systems",
    description: "Created scalable and maintainable Django backend systems.",
    category: "Backend Development",
  },
  {
    icon: PenTool,
    title: "UI and UX Design with Figma",
    description:
      "Designed intuitive interfaces for web and mobile applications using Figma.",
    category: "Design",
  },
  {
    icon: Award,
    title: "Developer to Product Leader",
    description:
      "Grew from individual contributor work into broader product ownership.",
    category: "Career Growth",
  },
];

const summaryMetrics = [
  { value: "2", label: "Web apps hosted on GCP" },
  { value: "2", label: "Native apps shipped" },
  { value: "10+", label: "AI integrations completed" },
  { value: "3", label: "Major Django systems built" },
  { value: "5+", label: "Figma design systems created" },
  { value: "1", label: "Full product lifecycle managed" },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative scroll-mt-24 overflow-hidden px-3 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12"
    >
      <div className="relative mx-auto max-w-7xl">
        <Reveal variant="up" className="max-w-3xl">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.32em] text-sky-300">
            Achievements
          </p>
          <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white">
            Signals of delivery, ownership, and{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-300 to-violet-300">
              product growth
            </span>
            .
          </h2>
          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-slate-400">
            Outcomes that reflect execution quality across engineering, design,
            cloud delivery, AI integrations, and team responsibility.
          </p>
        </Reveal>

        <div className="mt-12 sm:mt-14 grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <Reveal
                key={achievement.title}
                variant={index % 3 === 0 ? "up" : index % 3 === 1 ? "left" : "right"}
                delay={index * 70}
                className="h-full"
              >
                <article className="flex h-full flex-col rounded-lg sm:rounded-xl md:rounded-[1.9rem] border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                  <div className="inline-flex h-10 sm:h-12 md:h-[52px] w-10 sm:w-12 md:w-[52px] items-center justify-center rounded-lg sm:rounded-xl md:rounded-2xl border border-white/10 bg-black/25 text-sky-300">
                    <Icon className="h-4 sm:h-5 w-4 sm:w-5" />
                  </div>
                  <span className="mt-3 sm:mt-4 md:mt-5 text-xs font-medium uppercase tracking-[0.24em] text-violet-300">
                    {achievement.category}
                  </span>
                  <h3 className="mt-2 sm:mt-3 md:mt-3 text-base sm:text-lg md:text-xl font-semibold text-white">
                    {achievement.title}
                  </h3>
                  <p className="mt-3 sm:mt-4 md:mt-4 text-xs sm:text-sm md:text-base leading-6 sm:leading-7 text-slate-400">
                    {achievement.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* <Reveal variant="scale" delay={180} className="mt-14">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-2xl sm:p-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-sky-300">
                Professional Highlights
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                Measurable momentum across product engineering and delivery.
              </h3>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {summaryMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5"
                >
                  <p className="text-3xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal> */}
      </div>
    </section>
  );
}
