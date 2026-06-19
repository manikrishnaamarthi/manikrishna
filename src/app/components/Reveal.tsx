"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Transition,
  type Variants,
} from "framer-motion";

type RevealVariant = "up" | "left" | "right" | "scale" | "rotate";

type RevealProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  delay?: number;
  once?: boolean;
  threshold?: number;
  variant?: RevealVariant;
};

// Transform/opacity only — no animated `filter: blur()`, which forces an
// expensive offscreen repaint on every frame and janks badly on mobile GPUs.
const variantMap: Record<RevealVariant, Variants> = {
  up: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1 },
  },
  rotate: {
    hidden: { opacity: 0, rotate: -3, y: 20 },
    visible: { opacity: 1, rotate: 0, y: 0 },
  },
};

const reducedVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Reveal({
  children,
  delay = 0,
  once = true,
  threshold = 0.2,
  transition,
  variant = "up",
  ...props
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const baseTransition: Transition = prefersReducedMotion
    ? { duration: 0.3, delay: delay / 1000 }
    : {
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={prefersReducedMotion ? reducedVariants : variantMap[variant]}
      transition={transition ?? baseTransition}
      {...props}
    >
      {children}
    </motion.div>
  );
}
