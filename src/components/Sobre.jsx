import React from "react";
import "./Sobre.css";
import { sobreTexto } from "../data";

export default function Sobre() {
  return (
    <section className="sobre" id="sobre" aria-label="Sobre Paula Müller">
      <div className="sobre__image-col">
        <img
          src="https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=1200&auto=format&fit=crop"
          alt="Paula Müller, arquiteta e designer de interiores no Rio de Janeiro"
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
        <a href="#contato" className="sobre__cta">Fale comigo</a>
      </div>
    </section>
  );
}
