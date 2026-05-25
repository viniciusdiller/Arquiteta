import { useEffect, useState } from "react";
import "./ProjetoModal.css";

export default function ProjetoModal({ projeto, onClose }) {
  const [imagemAtiva, setImagemAtiva] = useState(0);
  const [visible, setVisible] = useState(false);

  const getImagemSrc = (item) => (typeof item === "string" ? item : item.src);
  const getImagemLabel = (item) => (typeof item === "string" ? null : item.label);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        handleClose();
        return;
      }

      if (projeto.galeria.length < 2) {
        return;
      }

      if (e.key === "ArrowRight") {
        e.preventDefault();
        setImagemAtiva((current) => (current + 1) % projeto.galeria.length);
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setImagemAtiva((current) =>
          (current - 1 + projeto.galeria.length) % projeto.galeria.length,
        );
      }
    };

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
        <button
          className="modal__close"
          onClick={handleClose}
          aria-label="Fechar"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M2 2l16 16M18 2L2 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="modal__gallery">
          <div className="modal__main-image-wrap">
            {getImagemLabel(projeto.galeria[imagemAtiva]) && (
              <span className="modal__badge">
                {getImagemLabel(projeto.galeria[imagemAtiva])}
              </span>
            )}
            <img
              key={imagemAtiva}
              src={getImagemSrc(projeto.galeria[imagemAtiva])}
              alt={`${projeto.titulo} — imagem ${imagemAtiva + 1}`}
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
                  aria-label={`Ver imagem ${i + 1}${getImagemLabel(img) ? ` — ${getImagemLabel(img)}` : ""}`}
                >
                  <img src={getImagemSrc(img)} alt="" width="120" height="80" />
                  {getImagemLabel(img) && (
                    <span className="modal__thumb-badge">{getImagemLabel(img)}</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="modal__info">
          <p className="modal__categoria">
            {projeto.categoria} — {projeto.ano}
          </p>
          <h2 className="modal__titulo">{projeto.titulo}</h2>
          <p className="modal__subtitulo">{projeto.subtitulo}</p>
          <div className="modal__divider" />
          <p className="modal__descricao">{projeto.descricao}</p>
        </div>
      </div>
    </div>
  );
}
