import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contato" aria-label="Rodapé e contato">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__name">Heloiza Schneidewind</p>
          <p className="footer__tagline">
            Arquitetura &amp; Design de Interiores
          </p>
          <address className="footer__address">
            Rio de Janeiro, RJ — Brasil
          </address>
        </div>

        <nav className="footer__links" aria-label="Links externos">
          <a
            href="https://www.instagram.com/heloiza.arq/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Heloiza Schneidewind (abre em nova aba)"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/heloiza-schneidewind/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Heloiza Schneidewind (abre em nova aba)"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contato@paulamuller.com.br"
            aria-label="Enviar e-mail para Heloiza Schneidewind"
          >
            E-mail
          </a>
        </nav>

        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Heloiza Schneidewind Arquitetura.
          Todos os direitos reservados. <br/>
           produced by{" "}
          <a
            className="footer__producer"
            href="https://www.instagram.com/totalsoftware.ofc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Total Software (abre em nova aba)"
          >
            Total Software
          </a>
          .
        </p>
        

      </div>
    </footer>
  );
}
