"use client";

import { useEffect, useState, useRef } from "react";

export default function ProgressBar({ 
  percentage, 
  duration = 1500,
  color = "from-cyan-500 to-blue-600",
  className = "",
  showLabel = false
}) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            hasAnimated.current = true;
            
            let startTime = null;
            const animate = (currentTime) => {
              if (!startTime) startTime = currentTime;
              const progress = Math.min((currentTime - startTime) / duration, 1);
              
              // Easing function
              const easeOutCubic = 1 - Math.pow(1 - progress, 3);
              setWidth(easeOutCubic * percentage);
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setWidth(percentage);
              }
            };
            
            requestAnimationFrame(animate);
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
  }, [percentage, duration]);

  return (
    <div ref={ref} className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-slate-600">Progress</span>
          <span className="text-sm font-bold text-slate-900">{Math.round(width)}%</span>
        </div>
      )}
      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-500 ease-out shadow-sm`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
