import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__logo">
        <span className="navbar__logo-name">Paula Müller</span>
        <span className="navbar__logo-sub">Arquitetura &amp; Interiores</span>
      </div>

      <nav className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
        <ul className="navbar__links">
          {["Home", "Projetos", "Sobre", "Contato"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      >
        <span /><span /><span />
      </button>
    </header>
  );
}
