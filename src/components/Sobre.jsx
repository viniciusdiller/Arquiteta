import "./Sobre.css";
import { sobreTexto } from "../data";
import FotoHelo from "../assets/helo.jpeg";

export default function Sobre() {
  return (
    <section
      className="sobre"
      id="sobre"
      aria-label="Sobre Heloiza Schneidewind"
    >
      <div className="sobre__image-col">
        <img
          src={FotoHelo}
          alt="Heloiza Schneidewind, arquiteta e designer de interiores no Rio de Janeiro"
          className="sobre__image"
          loading="lazy"
          decoding="async"
          width="600"
          height="800"
        />
      </div>
      <div className="sobre__text-col reveal">
        <p className="sobre__eyebrow">Sobre</p>
        <h2 className="sobre__headline">{sobreTexto.headline}</h2>
        <p className="sobre__bio">{sobreTexto.bio}</p>
        <p className="sobre__bio">{sobreTexto.bio2}</p>
        <a href="https://www.instagram.com/heloiza.arq/" target="_blank" rel="noopener noreferrer" className="sobre__cta">
          Fale comigo
        </a>
      </div>
    </section>
  );
}
