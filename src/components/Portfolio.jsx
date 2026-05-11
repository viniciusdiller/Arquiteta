import React from "react";
import "./Portfolio.css";
import { projetosMock } from "../data";

export default function Portfolio() {
  return (
    <section className="portfolio" id="projetos">
      <div className="portfolio__header">
        <p className="portfolio__eyebrow">Trabalhos Selecionados</p>
        <h2 className="portfolio__title">Portfólio</h2>
      </div>

      <div className="portfolio__grid">
        {projetosMock.map((projeto, index) => (
          <article
            key={projeto.id}
            className={`projeto-card ${
              index === 0 ? "projeto-card--featured" : ""
            }`}
          >
            <div className="projeto-card__image-wrap">
              <img
                src={projeto.imagem}
                alt={projeto.titulo}
                className="projeto-card__image"
                loading={index < 2 ? "eager" : "lazy"}
                width="800"
                height="600"
              />
            </div>
            <div className="projeto-card__overlay">
              <div className="projeto-card__info">
                <p className="projeto-card__categoria">{projeto.categoria}</p>
                <h3 className="projeto-card__titulo">{projeto.titulo}</h3>
                <p className="projeto-card__subtitulo">{projeto.subtitulo}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
