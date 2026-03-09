import React, { useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
  const history = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const numSegments = 5; // Verhoogd naar 5 omdat je CSS tot segment-5 gaat

  useEffect(() => {
    // Verberg de standaard muis
    document.documentElement.style.cursor = 'none';

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      history.current.unshift({ x: mouse.current.x, y: mouse.current.y });
      if (history.current.length > 50) history.current.pop();

      const headEl = document.getElementById('cursor-head');
      if (headEl) {
        headEl.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
      }

      for (let i = 1; i < numSegments; i++) {
        const el = document.getElementById(`segment-${i}`);
        if (el) {
          const index = i * 4;
          const point = history.current[index] || history.current[history.current.length - 1];
          if (point) {
            el.style.transform = `translate(${point.x}px, ${point.y}px)`;
          }
        }
      }
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      document.documentElement.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="cursor-wrapper">
      <div id="cursor-head" className="cursor-dot head" />
      {[...Array(numSegments - 1)].map((_, i) => (
        <div key={i} id={`segment-${i + 1}`} className="cursor-dot segment" />
      ))}
    </div>
  );
};

export default Cursor;