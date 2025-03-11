"use client";
// components/Background.tsx
import { useEffect, useRef } from "react";

interface Line {
  x: number;
  y: number;
  vx: number;
  vy: number;
  path: [number, number][];
  color: string;
  speed: number;
}

const Background = ({
  children,
  theme = "dark",
}: {
  children: React.ReactNode;
  theme?: "dark" | "light";
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight; // Entire page height
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const lines: Line[] = []; // Specify the type of lines array
    const numLines = 100;
    const pathLength = 70;
    const lineRadius = 20;
    const mouse = { x: null as number | null, y: null as number | null };

    const handleMouseMove = (event: MouseEvent) => {
      // Update mouse position relative to the document
      mouse.x = event.clientX;
      mouse.y = event.clientY + window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    for (let i = 0; i < numLines; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        path: [],
        color:
          theme === "dark"
            ? `hsl(${Math.random() * 360}, 100%, 75%)`
            : `hsl(${Math.random() * 360}, 50%, 40%)`,
        speed: Math.random() * 0.5 + 0.2,
      });
    }

    const updateLinePosition = (line: Line, others: Line[]) => {
      const nextX = line.x + line.vx * line.speed;
      const nextY = line.y + line.vy * line.speed;

      for (const other of others) {
        if (line === other) continue;

        const dx = nextX - other.x;
        const dy = nextY - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < lineRadius) {
          const angle = Math.atan2(dy, dx);
          line.vx += (Math.cos(angle) - line.vx) * 0.1;
          line.vy += (Math.sin(angle) - line.vy) * 0.1;
        }
      }

      if (mouse.x !== null && mouse.y !== null) {
        const dxMouse = nextX - mouse.x;
        const dyMouse = nextY - mouse.y;
        const distanceToMouse = Math.sqrt(
          dxMouse * dxMouse + dyMouse * dyMouse,
        );

        if (distanceToMouse < lineRadius * 2) {
          const angle = Math.atan2(dyMouse, dxMouse);
          line.vx += (Math.cos(angle) - line.vx) * 0.3; // Stronger push effect
          line.vy += (Math.sin(angle) - line.vy) * 0.3;
        }
      }

      line.x += line.vx * line.speed;
      line.y += line.vy * line.speed;

      if (line.x < 0 || line.x > canvas.width) line.vx *= -1;
      if (line.y < 0 || line.y > canvas.height) line.vy *= -1;
    };

    const draw = () => {
      if (!ctx) return; // Add a null check before using ctx

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = theme === "dark" ? "#121212" : "#e0e0e0";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < numLines; i++) {
        const line = lines[i];
        const others = lines.slice(0, i).concat(lines.slice(i + 1));

        updateLinePosition(line, others);

        line.path.push([line.x, line.y]);
        if (line.path.length > pathLength) {
          line.path.shift();
        }

        const gradient = ctx.createLinearGradient(
          line.x,
          line.y,
          line.x + 100,
          line.y + 100,
        );
        gradient.addColorStop(0, line.color);
        gradient.addColorStop(
          1,
          theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
        );

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(line.path[0][0], line.path[0][1]);
        for (let j = 1; j < line.path.length; j++) {
          ctx.lineTo(line.path[j][0], line.path[j][1]);
        }
        ctx.stroke();
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [theme]);

  return (
    <div style={{ position: "relative", height: "auto" }}>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Background;
