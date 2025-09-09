import React, { useEffect, useRef, useState, useCallback } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originalVx: number;
  originalVy: number;
  radius: number;
}

interface AnimatedBackgroundProps {
  nodeCount?: number; // Optional override for fixed node count
  nodeDensity?: number; // Nodes per 100,000 pixels (default density)
  maxDistance?: number;
  nodeSpeed?: number;
  mouseRepelDistance?: number;
  mouseRepelStrength?: number;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  nodeCount,
  nodeDensity = 5, // Default: 5 nodes per 100,000 pixels
  maxDistance = 150,
  nodeSpeed = 0.5,
  mouseRepelDistance = 100,
  mouseRepelStrength = 0.3,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const lastFrameTime = useRef<number>(0);
  const targetFPS = 60;
  const frameInterval = 1000 / targetFPS;

  // Calculate dynamic node count based on screen area and density
  const calculateNodeCount = useCallback((width: number, height: number): number => {
    if (nodeCount !== undefined) {
      return nodeCount; // Use fixed count if provided
    }
    
    const area = width * height;
    const calculatedCount = Math.round((area / 100000) * nodeDensity);
    
    // Ensure reasonable bounds (minimum 10, maximum 200)
    return Math.max(10, Math.min(200, calculatedCount));
  }, [nodeCount, nodeDensity]);

  // Initialize nodes
  const initializeNodes = useCallback((width: number, height: number) => {
    const dynamicNodeCount = calculateNodeCount(width, height);
    nodesRef.current = Array.from({ length: dynamicNodeCount }, () => {
      const vx = (Math.random() - 0.5) * nodeSpeed;
      const vy = (Math.random() - 0.5) * nodeSpeed;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx,
        vy,
        originalVx: vx,
        originalVy: vy,
        radius: Math.random() * 3 + 2,
      };
    });
  }, [calculateNodeCount, nodeSpeed]);

  // Handle mouse movement
  const handleMouseMove = useCallback((event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }, []);

  // Animation loop with FPS throttling
  const animate = useCallback((currentTime: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Throttle to target FPS
    if (currentTime - lastFrameTime.current < frameInterval) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }
    lastFrameTime.current = currentTime;

    const { width, height } = dimensions;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    const nodes = nodesRef.current;
    const mouse = mouseRef.current;

    // Update node positions
    nodes.forEach((node) => {
      // Calculate distance to mouse
      const dx = node.x - mouse.x;
      const dy = node.y - mouse.y;
      const distanceToMouse = Math.sqrt(dx * dx + dy * dy);

      // Apply mouse repulsion
      if (distanceToMouse < mouseRepelDistance && distanceToMouse > 0) {
        const force = (mouseRepelDistance - distanceToMouse) / mouseRepelDistance;
        const repelX = (dx / distanceToMouse) * force * mouseRepelStrength;
        const repelY = (dy / distanceToMouse) * force * mouseRepelStrength;
        
        node.vx = node.originalVx + repelX;
        node.vy = node.originalVy + repelY;
      } else {
        // Gradually return to original velocity
        node.vx += (node.originalVx - node.vx) * 0.02;
        node.vy += (node.originalVy - node.vy) * 0.02;
      }

      // Update position
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off edges
      if (node.x <= 0 || node.x >= width) {
        node.vx *= -1;
        node.originalVx *= -1;
        node.x = Math.max(0, Math.min(width, node.x));
      }
      if (node.y <= 0 || node.y >= height) {
        node.vy *= -1;
        node.originalVy *= -1;
        node.y = Math.max(0, Math.min(height, node.y));
      }
    });

    // Draw connections
    ctx.lineWidth = 1.5;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.8;
          ctx.globalAlpha = opacity;
          ctx.strokeStyle = `rgba(229, 231, 235, ${opacity})`; // gray-200 with dynamic opacity
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    ctx.globalAlpha = 0.9;
    ctx.fillStyle = 'rgb(209, 213, 219)'; // gray-300 - lighter for better visibility

    nodes.forEach((node) => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fill();
      
      // Add a subtle glow effect
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius + 1, 0, Math.PI * 2);
      ctx.fill();
      
      // Reset for next node
      ctx.globalAlpha = 0.9;
      ctx.fillStyle = 'rgb(209, 213, 219)';
    });

    ctx.globalAlpha = 1;
    animationRef.current = requestAnimationFrame(animate);
  }, [dimensions, maxDistance, mouseRepelDistance, mouseRepelStrength, frameInterval, isVisible]);

  // Handle resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const width = parent.offsetWidth;
    const height = parent.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    setDimensions({ width, height });
    initializeNodes(width, height);
  }, [initializeNodes]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Intersection Observer for visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const canvas = canvasRef.current;
    if (canvas) {
      observer.observe(canvas);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (canvas) {
        observer.unobserve(canvas);
      }
    };
  }, [handleResize, handleMouseMove]);

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default AnimatedBackground;
