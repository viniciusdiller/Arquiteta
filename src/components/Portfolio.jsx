import React, { useState } from "react";
import "./Portfolio.css";
import { projetosMock } from "../data";
import ProjetoModal from "./ProjetoModal";

export default function Portfolio() {
  const [projetoAtivo, setProjetoAtivo] = useState(null);

  return (
    <>
      <section className="portfolio" id="projetos">
        <div className="portfolio__header reveal">
          <p className="portfolio__eyebrow">Trabalhos Selecionados</p>
          <h2 className="portfolio__title">Portfólio</h2>
        </div>

        <div className="portfolio__grid">
          {projetosMock.map((projeto, index) => (
            <article
              key={projeto.id}
              className="projeto-card reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
              onClick={() => setProjetoAtivo(projeto)}
              role="button"
              tabIndex={0}
              aria-label={`Ver projeto ${projeto.titulo}`}
              onKeyDown={(e) => e.key === "Enter" && setProjetoAtivo(projeto)}
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
                  <p className="projeto-card__categoria">{projeto.categoria} — {projeto.ano}</p>
                  <h3 className="projeto-card__titulo">{projeto.titulo}</h3>
                  <p className="projeto-card__subtitulo">{projeto.subtitulo}</p>
                  <span className="projeto-card__ver">Ver projeto →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {projetoAtivo && (
        <ProjetoModal
          projeto={projetoAtivo}
          onClose={() => setProjetoAtivo(null)}
        />
      )}
    </>
  );
}
