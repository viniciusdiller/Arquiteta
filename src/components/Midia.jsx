import React from "react";
import "./Midia.css";
import { midiaItems } from "../data";

export default function Midia() {
  return (
    <section className="midia" id="midia">
      <div className="midia__header">
        <p className="midia__eyebrow">Na imprensa</p>
        <h2 className="midia__title">M\u00eddia</h2>
      </div>

      <ul className="midia__list">
        {midiaItems.map((item, index) => (
          <li key={item.id} className="midia__item">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="midia__link"
            >
              <span className="midia__index">0{index + 1}</span>
              <div className="midia__body">
                <p className="midia__veiculo">{item.veiculo}</p>
                <h3 className="midia__titulo">{item.titulo}</h3>
              </div>
              <span className="midia__ano">{item.ano}</span>
              <span className="midia__arrow" aria-hidden="true">\u2197</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
