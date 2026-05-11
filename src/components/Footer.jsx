import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__name">Paula Müller</p>
          <p className="footer__tagline">Arquitetura &amp; Design de Interiores</p>
        </div>
        <div className="footer__links">
          <a href="https://www.instagram.com/paulamullerarquiteta" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/in/paulamullerarquitetura" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:contato@paulamuller.com.br">E-mail</a>
        </div>
        <p className="footer__copy">&copy; {new Date().getFullYear()} Paula Müller Arquitetura. Rio de Janeiro, RJ.</p>
      </div>
    </footer>
  );
}
