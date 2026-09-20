import { Reveal, Placeholder } from "./ui";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="wrap hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">Economic Adviser, Katsina State Government</p>
          <h1>
            Economist. Investment
            <br />
            Strategist. <em>Economic Adviser.</em>
          </h1>
          <p className="lede">Building a more competitive, investment-ready and productive Katsina.</p>
          <p className="small-lede">
            Working across investment, economic strategy, industrialisation and private-sector development.
          </p>
          <div className="actions">
            <a className="button button-primary" href="#agenda">
              Explore the Economic Agenda
            </a>
            <a className="button button-outline" href="#invest">
              Invest in Katsina
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <strong>Economics</strong>
              Eastern Mediterranean University
            </span>
            <span>
              <strong>2018 - 2023</strong>
              Kaduna Investment Promotion Agency
            </span>
            <span>
              <strong>2023 -</strong>
              Economic Adviser, Katsina State
            </span>
          </div>
        </Reveal>

        <Reveal className="hero-portrait">
          <Placeholder
            label="Official portrait"
            src="/khalil.jpeg"
            alt="Khalil Nur Khalil"
          />
          <b>KATSINA · 2026</b>
        </Reveal>
      </div>
    </section>
  );
}
