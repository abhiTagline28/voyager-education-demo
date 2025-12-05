"use client";

import { useEffect, useRef, ReactNode } from "react";

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = "up",
  distance = 50,
  duration = 0.8,
  className = ""
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.opacity = "1";
              element.style.transform = "translate(0, 0) scale(1)";
            }, delay);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Set initial state based on direction
    const transforms = {
      up: `translateY(${distance}px)`,
      down: `translateY(-${distance}px)`,
      left: `translateX(${distance}px)`,
      right: `translateX(-${distance}px)`,
      fade: "translate(0, 0)",
    };

    element.style.opacity = "0";
    element.style.transform = transforms[direction] + " scale(0.95)";
    element.style.transition = `opacity ${duration}s ease-out, transform ${duration}s ease-out`;

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay, direction, distance, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
