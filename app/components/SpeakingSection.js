import { speakingItems } from "./siteData";
import { Reveal, Placeholder } from "./ui";

export default function SpeakingSection() {
  return (
    <section className="speaking">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Speaking & Engagements</p>
          <h2>Where the agenda is discussed.</h2>
        </Reveal>

        <div className="speaking-grid">
          {speakingItems.map(([title, meta], index) => (
            <article key={title}>
              <Placeholder
                label="Event photography"
                src={["/images/investment.jpeg", "/images/squad.jpeg", "/images/gov.jpeg"][index]}
                alt={title}
              />
              <h4>{title}</h4>
              <small>{meta}</small>
              <p>
                <a href="#media">Watch</a>
                <a href="#media">Read</a>
                <a href="#media">Photos</a>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
