"use client";

import { useEffect, useState, useRef } from "react";

export default function AnimatedText({ 
  children, 
  variant = "fade-up",
  delay = 0,
  className = ""
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay]);

  const variants = {
    "fade-up": "opacity-0 translate-y-8",
    "fade-down": "opacity-0 -translate-y-8",
    "fade-left": "opacity-0 translate-x-8",
    "fade-right": "opacity-0 -translate-x-8",
    "fade": "opacity-0",
    "scale": "opacity-0 scale-95",
  };

  const visibleClasses = {
    "fade-up": "opacity-100 translate-y-0",
    "fade-down": "opacity-100 translate-y-0",
    "fade-left": "opacity-100 translate-x-0",
    "fade-right": "opacity-100 translate-x-0",
    "fade": "opacity-100",
    "scale": "opacity-100 scale-100",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? visibleClasses[variant] : variants[variant]
      } ${className}`}
    >
      {children}
    </div>
  );
}

// Typewriter effect component
export function TypewriterText({ text, speed = 50, className = "" }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
