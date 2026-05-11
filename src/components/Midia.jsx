import "./Midia.css";
import { midiaItems } from "../data";

export default function Midia() {
  return (
    <section className="midia" id="midia" aria-label="Aparições na mídia">
      <div className="midia__header reveal">
        <p className="midia__eyebrow">Na imprensa</p>
        <h2 className="midia__title">Mídia</h2>
      </div>

      <ul className="midia__list" role="list">
        {midiaItems.map((item, index) => (
          <li
            key={item.id}
            className="midia__item reveal"
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="midia__link"
              aria-label={`${item.titulo} — ${item.veiculo}, ${item.ano} (abre em nova aba)`}
            >
              <span className="midia__index" aria-hidden="true">
                0{index + 1}
              </span>
              <div className="midia__body">
                <p className="midia__veiculo">{item.veiculo}</p>
                <h3 className="midia__titulo">{item.titulo}</h3>
              </div>
              <span className="midia__ano" aria-hidden="true">
                {item.ano}
              </span>
              <span className="midia__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
