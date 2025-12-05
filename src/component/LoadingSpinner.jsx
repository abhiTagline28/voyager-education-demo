"use client";

export default function LoadingSpinner({ 
  size = "md",
  className = ""
}) {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  return (
    <div className={`${sizes[size]} ${className}`}>
      <div className="relative w-full h-full">
        <div className="absolute inset-0 border-4 border-cyan-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-cyan-600 rounded-full animate-spin-slow"></div>
      </div>
    </div>
  );
}
