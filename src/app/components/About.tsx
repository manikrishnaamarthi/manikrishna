import {
  Blocks,
  Code,
  Landmark,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";

const highlights: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Blocks,
    title: "Product and Architecture",
    description:
      "Translating business requirements into reliable architecture, workflows, and production-ready systems.",
  },
  {
    icon: Landmark,
    title: "FinTech and Transaction Systems",
    description:
      "Payments, financial data systems, transaction processing, and cross-border flows built for accuracy and traceability.",
  },
  {
    icon: Code,
    title: "Full-Stack Platforms",
    description:
      "FastAPI, Django, React, Next.js, PostgreSQL, CockroachDB, Redis, and practical full-stack delivery.",
  },
  {
    icon: Smartphone,
    title: "Mobile and Blockchain",
    description:
      "React Native apps for Android and iOS, plus hands-on work with Sui, Stellar, wallet flows, and token transfers.",
  },
];

const focusAreas = [
  "Payments Platforms",
  "Financial Data Systems",
  "Cross-Border Flows",
  "Web and Mobile Platforms",
  "Blockchain and Wallets",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden px-3 sm:px-6 md:px-8 lg:px-12 py-20 sm:py-24"
    >
      <div className="relative mx-auto max-w-7xl space-y-6">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-x-10 lg:gap-y-8 lg:items-start">
          <Reveal variant="scale" className="lg:row-span-2">
            <div className="relative overflow-hidden rounded-2xl md:rounded-[2.25rem] border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 backdrop-blur-2xl">
              <div className="relative h-[22rem] w-full overflow-hidden rounded-xl md:rounded-[1.75rem] border border-white/10 bg-black/25 sm:h-80 md:h-[420px] lg:h-[450px]">
                <Image
                  src="/about.webp"
                  alt="Amarthi Manikrishna portrait"
                  fill
                  sizes="(min-width: 1024px) 38vw, (min-width: 768px) 45vw, 100vw"
                  className="object-cover object-[center_18%] md:object-top"
                />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6 lg:pt-4">
            <Reveal variant="up">
              <div className="max-w-3xl">
                <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.32em] text-sky-300">
                  About Me
                </p>
                <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                  Engineering ideas into{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-300 to-violet-300">
                    polished, production-ready
                  </span>{" "}
                  experiences
                </h2>
                <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-semibold text-white">
                  Designing systems that scale, perform, and deliver in production.
                </h3>
                <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base leading-7 sm:leading-8 text-slate-300">
                  I&apos;m a product-focused technical architect with hands-on
                  experience building scalable fintech, B2B, and real-time
                  platforms. My work sits at the intersection of product and
                  engineering, translating business requirements into reliable,
                  scalable systems.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal variant="right" delay={120} className="lg:col-span-2">
            <div className="border-t border-white/10 pt-6 sm:pt-8 lg:pt-10">
              <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] xl:gap-10">
                <div className="space-y-4 sm:space-y-5">
                  <p className="text-sm sm:text-base leading-7 sm:leading-8 text-slate-400">
                    My focus is on translating business requirements into reliable systems—covering architecture, workflows, and production-ready execution. I work across the full lifecycle, from system design and implementation to deployment and operational readiness.
                  </p>
                  <p className="text-sm sm:text-base leading-7 sm:leading-8 text-slate-400">
                    I’ve built and contributed to platforms involving payments, financial data systems, transaction processing, booking and availability systems, and cross-border flows—where accuracy, traceability, and reliability are critical.
                  </p>
                  <p className="text-sm sm:text-base leading-7 sm:leading-8 text-slate-400">
                    On the technical side, I work with FastAPI, Django, PostgreSQL, CockroachDB, Redis, React, Next.js, and React Native (Android & iOS). I’ve also worked with blockchain systems including Sui and Stellar, building wallet flows, token transfers, and secure transaction models.
                  </p>
                  <p className="text-sm sm:text-base leading-7 sm:leading-8 text-slate-400">
                    I care about building systems that are practical, scalable, and aligned with real-world use cases—not just technically sound, but production-ready.
                  </p>
                </div>

                <div className="space-y-5 xl:border-l xl:border-white/10 xl:pl-8">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.28em] text-sky-300">
                      Focus Areas
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {focusAreas.map((area) => (
                        <span
                          key={area}
                          className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-slate-300"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#journey"
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                  >
                    See My Journey
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;

            return (
              <Reveal
                key={highlight.title}
                variant={index % 2 === 0 ? "up" : "rotate"}
                delay={index * 90}
                className="h-full"
              >
                <div className="flex h-full gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/25 text-sky-300">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-snug text-white">
                      {highlight.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
