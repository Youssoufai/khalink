import { stats } from "./siteData";
import { Reveal } from "./ui";

export default function StatsSection() {
  return (
    <section className="stats dark-section" id="impact">
      <div className="wrap">
        <p className="eyebrow light">Impact at a glance</p>
        <h2>Figures drawn from public summits, agreements and official disclosures.</h2>
        <div className="stats-grid">
          {stats.map(([number, label]) => (
            <Reveal className="stat" key={number}>
              <strong>{number}</strong>
              <p>{label}</p>
              <button>Reported figure · view source</button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
