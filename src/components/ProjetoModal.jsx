import React, { useEffect, useState } from "react";
import "./ProjetoModal.css";

export default function ProjetoModal({ projeto, onClose }) {
  const [imagemAtiva, setImagemAtiva] = useState(0);
  const [visible, setVisible] = useState(false);

  // Anima\u00e7\u00e3o de entrada
  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  // Fechar com ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && handleClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 400);
  }

  return (
    <div
      className={`modal-backdrop ${visible ? "modal-backdrop--visible" : ""}`}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`Projeto ${projeto.titulo}`}
    >
      <div className={`modal ${visible ? "modal--visible" : ""}`}>
        {/* Fechar */}
        <button className="modal__close" onClick={handleClose} aria-label="Fechar">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2 2l16 16M18 2L2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Coluna esquerda: imagem principal + thumbs */}
        <div className="modal__gallery">
          <div className="modal__main-image-wrap">
            <img
              key={imagemAtiva}
              src={projeto.galeria[imagemAtiva]}
              alt={`${projeto.titulo} \u2014 imagem ${imagemAtiva + 1}`}
              className="modal__main-image"
              width="1200"
              height="800"
            />
          </div>
          {projeto.galeria.length > 1 && (
            <div className="modal__thumbs">
              {projeto.galeria.map((img, i) => (
                <button
                  key={i}
                  className={`modal__thumb ${imagemAtiva === i ? "modal__thumb--active" : ""}`}
                  onClick={() => setImagemAtiva(i)}
                  aria-label={`Ver imagem ${i + 1}`}
                >
                  <img src={img} alt="" width="120" height="80" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Coluna direita: informa\u00e7\u00f5es */}
        <div className="modal__info">
          <p className="modal__categoria">{projeto.categoria} \u2014 {projeto.ano}</p>
          <h2 className="modal__titulo">{projeto.titulo}</h2>
          <p className="modal__subtitulo">{projeto.subtitulo}</p>
          <div className="modal__divider" />
          <p className="modal__descricao">{projeto.descricao}</p>
        </div>
      </div>
    </div>
  );
}
