import React from 'react';

// Lightweight version of Ballpit for mobile
const LightBallpit: React.FC<{
  className?: string;
}> = ({ className }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeObserver = new ResizeObserver(() => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    });
    
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    }
    
    // Create bubbles
    const bubbles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
    }> = [];
    
    // Color palette - amber/gold tones
    const colors = [
      'rgba(245, 158, 11, 0.25)', // amber-500
      'rgba(217, 119, 6, 0.3)',   // amber-600
      'rgba(180, 83, 9, 0.35)',   // amber-700
      'rgba(255, 228, 181, 0.2)'  // blanchedalmond
    ];
    
    // Create 25-45 bubbles based on canvas size
    const createBubbles = () => {
      const bubbleCount = Math.min(45, Math.max(25, Math.floor(canvas.width * canvas.height / 10000)));
      
      for (let i = 0; i < bubbleCount; i++) {
        bubbles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 30 + 10,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: Math.random() * 0.8 - 0.4,
          speedY: Math.random() * 0.8 - 0.4
        });
      }
    };
    
    // Animation
    let animationId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      bubbles.forEach(bubble => {
        // Update position
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;
        
        // Bounce off walls
        if (bubble.x < bubble.radius || bubble.x > canvas.width - bubble.radius) {
          bubble.speedX *= -1;
        }
        if (bubble.y < bubble.radius || bubble.y > canvas.height - bubble.radius) {
          bubble.speedY *= -1;
        }
        
        // Draw bubble
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = bubble.color;
        ctx.fill();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    // Start animation
    createBubbles();
    animate();
    
    // Cleanup
    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return <canvas ref={canvasRef} className={className} />;
};

export default LightBallpit;