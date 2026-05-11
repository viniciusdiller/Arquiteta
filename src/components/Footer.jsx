import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contato" aria-label="Rodapé e contato">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__name">Paula Müller</p>
          <p className="footer__tagline">Arquitetura &amp; Design de Interiores</p>
          <address className="footer__address">
            Rio de Janeiro, RJ — Brasil
          </address>
        </div>

        <nav className="footer__links" aria-label="Links externos">
          <a
            href="https://www.instagram.com/paulamullerarquiteta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Paula Müller (abre em nova aba)"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/paulamullerarquitetura"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Paula Müller (abre em nova aba)"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contato@paulamuller.com.br"
            aria-label="Enviar e-mail para Paula Müller"
          >
            E-mail
          </a>
        </nav>

        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Paula Müller Arquitetura.
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
