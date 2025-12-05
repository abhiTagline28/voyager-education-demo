"use client";

import { useRef, ReactNode } from "react";

export default function MagneticButton({ 
  children, 
  className = "",
  strength = 0.3,
  ...props 
}) {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;
    if (button) {
      button.style.transform = "translate(0, 0)";
    }
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
