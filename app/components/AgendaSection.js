/* eslint-disable react/no-unescaped-entities */

import { agendaItems } from "./siteData";
import { Reveal } from "./ui";

export default function AgendaSection() {
  return (
    <section className="agenda dark-section" id="agenda">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow light">Economic Agenda</p>
          <h2>Six levers for economic transformation.</h2>
          <p>The framework guiding Katsina's economic strategy - from capital formation to human capital.</p>
        </Reveal>
        <div className="agenda-grid">
          {agendaItems.map(([title, text], index) => (
            <Reveal className="agenda-item" key={title}>
              <small>0{index + 1}</small>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href={title === "Investment" ? "#invest" : "#katsina"}>See related work →</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
