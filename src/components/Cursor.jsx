import { useEffect, useRef } from "react";
import "./Cursor.css";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Oculta cursor nativo
    document.documentElement.classList.add("custom-cursor-active");

    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    // Expande sobre elementos interativos e imagens
    const onEnter = (e) => {
      const t = e.target;

      if (t.closest("footer")) {
        ringRef.current?.classList.add("cursor__ring--light");
      }

      if (t.closest(".midia__item")) {
        ringRef.current?.classList.add("cursor__ring--light");
      }

      if (
        t.tagName === "IMG" ||
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        t.closest(".projeto-card")
      ) {
        ringRef.current?.classList.add("cursor__ring--expand");
      }
    };

    const onLeave = (e) => {
      if (e.target.closest("footer")) {
        ringRef.current?.classList.remove("cursor__ring--light");
      }

      if (e.target.closest(".midia__item")) {
        ringRef.current?.classList.remove("cursor__ring--light");
      }

      ringRef.current?.classList.remove("cursor__ring--expand");
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor__dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor__ring" aria-hidden="true" />
    </>
  );
}
