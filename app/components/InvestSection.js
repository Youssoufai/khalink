/* eslint-disable react/no-unescaped-entities */

import { sectors } from "./siteData";
import { Reveal } from "./ui";

export default function InvestSection({ openSector, onToggleSector }) {
  return (
    <section className="invest" id="invest">
      <div className="wrap">
        <div className="invest-head">
          <Reveal className="section-head">
            <p className="eyebrow">Invest in Katsina</p>
            <h2>Katsina is open for investment.</h2>
            <p>Priority sectors, matched to the state's natural, industrial and infrastructural strengths.</p>
          </Reveal>

          <div className="actions">
            <a className="button button-primary" href="#sectors">
              Explore Opportunities
            </a>
            <a className="button button-outline" href="#sectors">
              Download Investment Guide
            </a>
          </div>
        </div>

        <div className="sector-list" id="sectors">
          {sectors.map(([name, overview, why, infrastructure], index) => (
            <div className={`sector ${openSector === index ? "open" : ""}`} key={name}>
              <button onClick={() => onToggleSector(index)}>
                <span>
                  <small>0{index + 1}</small>
                  {name}
                </span>
                <b>+</b>
              </button>
              <div className="sector-body">
                <div>
                  <h4>Opportunity</h4>
                  <p>{overview}</p>
                </div>
                <div>
                  <h4>Why Katsina</h4>
                  <p>{why}</p>
                </div>
                <div>
                  <h4>Infrastructure</h4>
                  <p>{infrastructure}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
