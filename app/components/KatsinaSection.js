/* eslint-disable react/no-unescaped-entities */

import { projects } from "./siteData";
import { Reveal, Placeholder } from "./ui";

export default function KatsinaSection({ projectIndex, onSelectProject }) {
  return (
    <section className="katsina" id="katsina">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Katsina Economic Transformation</p>
          <h2>Building the infrastructure for a stronger economy.</h2>
          <p>A stylised view of projects shaping Katsina's economic base. Select a marker to read more.</p>
        </Reveal>
        <div className="map-layout">
          <div className="map-stage">
            <span>KATSINA STATE · PROJECT MAP</span>
            {projects.map((project, index) => (
              <button
                key={project[1]}
                className={`pin ${index === projectIndex ? "active" : ""}`}
                style={{ top: `${14 + ((index * 19) % 68)}%`, left: `${18 + ((index * 27) % 66)}%` }}
                onClick={() => onSelectProject(index)}
                aria-label={project[1]}
              />
            ))}
            <small>Stylised project map - not to geographic scale</small>
          </div>

          <Reveal className="project-detail">
            <Placeholder
              label="Project photography"
              src={projectIndex === 0 ? "/funtua-meeting.jpeg" : "/funtua1.jpeg"}
              alt={projects[projectIndex][1]}
            />
            <p className="eyebrow">{projects[projectIndex][0]}</p>
            <h3>{projects[projectIndex][1]}</h3>
            <p>{projects[projectIndex][2]}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
