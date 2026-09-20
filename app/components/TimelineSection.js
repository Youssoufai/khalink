import { milestones } from "./siteData";
import { Reveal } from "./ui";

export default function TimelineSection({ activeMilestone, onSelectMilestone }) {
  return (
    <section className="timeline" id="timeline">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Career</p>
          <h2>A decade in economic strategy.</h2>
          <p>Select a milestone to read more.</p>
        </Reveal>
        <div className="timeline-rail">
          {milestones.map(([year, title, desc], index) => (
            <button
              className={index === activeMilestone ? "active" : ""}
              key={title}
              onClick={() => onSelectMilestone(index)}
            >
              <i />
              <strong>{year}</strong>
              <b>{title}</b>
              <span>{desc}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
