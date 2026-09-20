import { routeStops } from "./siteData";
import { Reveal, Placeholder } from "./ui";

export default function GlobalSection() {
  return (
    <section className="global dark-section">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow light">From Katsina to the World</p>
          <h2>Taking Katsina to global investors.</h2>
          <p>
            Engaging international investors and development partners, including at the 2026 Paris
            investment engagement.
          </p>
        </Reveal>

        <div className="route">
          {routeStops.map((place, index) => (
            <span key={place}>
              <i className={index === 0 ? "origin" : ""} />
              {place}
            </span>
          ))}
        </div>

        <div className="gallery">
          <Placeholder label="Paris Engagement 2026" src="/images/investment.jpeg" dark alt="Katsina investment engagement" />
          <Placeholder label="Investor Meeting" src="/images/investment2.jpeg" dark alt="Investor meeting" />
          <Placeholder label="International Summit" src="/images/group.jpeg" dark alt="International summit" />
        </div>
      </div>
    </section>
  );
}
