"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground({ 
  variant = "default", 
  intensity = "medium" 
}) {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const particlesRef = useRef([]);
  const connectionsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;

    // Configuration based on intensity
    const configOptions = {
      low: { particles: 15, connections: 8, speed: 0.3 },
      medium: { particles: 25, connections: 12, speed: 0.5 },
      high: { particles: 40, connections: 20, speed: 0.7 },
    };
    const config = configOptions[intensity] || configOptions.medium;

    // Initialize particles (network nodes)
    const initParticles = () => {
      if (canvas.width === 0 || canvas.height === 0) return;
      particlesRef.current = [];
      for (let i = 0; i < config.particles; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * config.speed,
          vy: (Math.random() - 0.5) * config.speed,
          radius: 2 + Math.random() * 2,
          opacity: 0.3 + Math.random() * 0.4,
          color: `hsl(${190 + Math.random() * 60}, 70%, ${60 + Math.random() * 20}%)`,
        });
      }
    };

    // Initialize connections
    const initConnections = () => {
      connectionsRef.current = [];
      if (canvas.width === 0 || canvas.height === 0) return;
      const maxDistance = Math.min(canvas.width, canvas.height) * 0.35;
      let connectionCount = 0;
      
      for (let i = 0; i < particlesRef.current.length && connectionCount < config.connections; i++) {
        for (let j = i + 1; j < particlesRef.current.length && connectionCount < config.connections; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            connectionsRef.current.push({
              p1: i,
              p2: j,
              distance: distance,
              opacity: 0.12 * (1 - distance / maxDistance),
            });
            connectionCount++;
          }
        }
      }
    };

    // Set canvas size
    const resizeCanvas = () => {
      if (canvas.offsetWidth > 0 && canvas.offsetHeight > 0) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        // Reinitialize on resize
        initParticles();
        initConnections();
      }
    };

    // Update particles
    const updateParticles = () => {
      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep within bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      });
    };

    // Draw everything
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections (strategic planning network)
      connectionsRef.current.forEach((conn) => {
        const p1 = particlesRef.current[conn.p1];
        const p2 = particlesRef.current[conn.p2];
        
        if (p1 && p2) {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = Math.min(canvas.width, canvas.height) * 0.35;
          const opacity = Math.max(0, conn.opacity * (1 - distance / maxDistance));

          if (opacity > 0.02) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${Math.min(opacity, 0.3)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      // Draw particles (network nodes)
      particlesRef.current.forEach((particle) => {
        // Helper to convert HSL to HSLA
        const hslToHsla = (hslColor, opacity) => {
          // Convert hsl(200, 70%, 60%) to hsla(200, 70%, 60%, opacity)
          return hslColor.replace(/hsl\(([^)]+)\)/, `hsla($1, ${opacity})`);
        };

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = hslToHsla(particle.color, particle.opacity);
        ctx.fill();

        // Add glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 3
        );
        gradient.addColorStop(0, hslToHsla(particle.color, particle.opacity * 0.5));
        gradient.addColorStop(1, hslToHsla(particle.color, 0));
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      updateParticles();
      animationId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    const resizeHandler = () => {
      resizeCanvas();
    };
    window.addEventListener("resize", resizeHandler);

    // Initialize and start
    initParticles();
    initConnections();
    draw();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeHandler);
      cancelAnimationFrame(animationId);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [intensity]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
        style={{ mixBlendMode: "multiply" }}
      />
      
      {/* Gradient Orbs Layer */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-float-medium" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-purple-200/15 rounded-full blur-3xl animate-float-medium" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
      
      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(59, 130, 246, 0.03) 50%, transparent 100%)'
        }}
      />
    </div>
  );
}
