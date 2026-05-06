import React from "react";
import "./App.css";
import { projetosMock } from "./data";

function App() {
  return (
    <>
      {/* Navbar Transparente sobreposta */}
      <nav className="navbar">
        <div className="logo-text">
          <h2 style={{ fontWeight: 300, letterSpacing: "4px" }}>
            PAULA MÜLLER
          </h2>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Projetos</li>
          <li>Serviços</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>

      {/* Hero Section com Animação Infinita (Ken Burns) */}
      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>ARQUITETURA & DESIGN</h1>
        </div>
      </section>

      {/* Grid de Projetos Mockados */}
      <section className="portfolio-section">
        <h2 className="section-title">Portfólio</h2>

        <div className="grid-container">
          {projetosMock.map((projeto) => (
            <div className="projeto-card" key={projeto.id}>
              {/* Imagem do Projeto */}
              <img
                src={projeto.imagem}
                alt={projeto.titulo}
                className="projeto-imagem"
              />

              {/* Informações que aparecem no Hover */}
              <div className="projeto-info">
                <h3>{projeto.titulo}</h3>
                <p>{projeto.categoria}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
