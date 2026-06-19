"use client";

import {
  BriefcaseBusiness,
  FileText,
  Home,
  Mail,
  Sparkles,
  Target,
  Trophy,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { useFinePointer } from "./useMediaQuery";

type DockItem = {
  id: string;
  icon: LucideIcon;
  label: string;
  href: string;
  download?: string;
  external?: boolean;
};

const dockItems: DockItem[] = [
  { id: "home", icon: Home, label: "Home", href: "#home" },
  { id: "about", icon: UserRound, label: "About", href: "#about" },
  { id: "skills", icon: Sparkles, label: "Skills", href: "#skills" },
  { id: "journey", icon: Target, label: "Journey", href: "#journey" },
  { id: "projects", icon: BriefcaseBusiness, label: "Projects", href: "#projects" },
  { id: "achievements", icon: Trophy, label: "Wins", href: "#achievements" },
  { id: "contact", icon: Mail, label: "Contact", href: "#contact" },
  {
    id: "resume",
    icon: FileText,
    label: "Resume",
    href: "/Manikrishna_EXP_Resume.pdf",
    download: "Manikrishna_EXP_Resume.pdf",
  },
];

export default function Dock() {
  const finePointer = useFinePointer();

  // Touch / coarse-pointer devices get a compact static dock that fits within
  // a 320px viewport — the magnification dock is mouse-only and would overflow.
  if (!finePointer) {
    return <StaticDock />;
  }

  return <MagnifyDock />;
}

function StaticDock() {
  return (
    <nav
      aria-label="Section navigation"
      className="fixed bottom-3 left-1/2 z-50 flex max-w-[calc(100vw-1rem)] -translate-x-1/2 items-center gap-0.5 rounded-2xl border border-white/10 bg-black/[0.6] px-1.5 py-1.5 backdrop-blur-2xl shadow-[0_30px_120px_-50px_rgba(0,0,0,0.95)] sm:bottom-6 sm:gap-2 sm:rounded-[2rem] sm:px-3 sm:py-2.5"
    >
      {dockItems.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.id}
            href={item.href}
            download={item.download}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            aria-label={item.label}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors duration-200 active:bg-white/[0.14] active:text-white sm:h-11 sm:w-11"
          >
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
        );
      })}
    </nav>
  );
}

function MagnifyDock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(event) => mouseX.set(event.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-8 left-1/2 z-50 flex h-[72px] -translate-x-1/2 items-end gap-3 rounded-[2rem] border border-white/10 bg-black/[0.55] px-4 py-3 backdrop-blur-2xl shadow-[0_30px_120px_-50px_rgba(0,0,0,0.95)]"
    >
      {dockItems.map((item) => (
        <DockIcon key={item.id} item={item} mouseX={mouseX} />
      ))}
    </motion.div>
  );
}

function DockIcon({
  item,
  mouseX,
}: {
  item: DockItem;
  mouseX: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (value) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { left: 0, width: 0 };
    return value - bounds.left - bounds.width / 2;
  });

  const size = useSpring(useTransform(distance, [-160, 0, 160], [42, 72, 42]), {
    mass: 0.12,
    stiffness: 180,
    damping: 14,
  });
  const lift = useSpring(useTransform(distance, [-140, 0, 140], [0, -12, 0]), {
    mass: 0.12,
    stiffness: 180,
    damping: 14,
  });

  const Icon = item.icon;

  return (
    <a
      href={item.href}
      download={item.download}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noreferrer" : undefined}
      className="shrink-0"
      aria-label={item.label}
    >
      <motion.div
        ref={ref}
        style={{ width: size, height: size, y: lift }}
        className="group relative flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors duration-300 hover:bg-white/[0.12] hover:text-white"
      >
        <Icon className="h-6 w-6" />

        <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/[0.85] px-2.5 py-1 text-[11px] font-medium tracking-wide text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {item.label}
        </span>
      </motion.div>
    </a>
  );
}
