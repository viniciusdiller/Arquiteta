import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Apresentação">
      <div
        className="hero__bg"
        aria-hidden="true"
        role="img"
        aria-label="Interior de apartamento projetado por Paula Müller"
      />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__eyebrow">Arquitetura &amp; Design de Interiores</p>
        <h1 className="hero__headline">
          Sua casa pronta<br />antes da obra começar.
        </h1>
        <a href="#projetos" className="hero__cta">
          Ver Projetos
        </a>
      </div>
      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
