/* eslint-disable react/no-unescaped-entities */

import { nodeLabels, themeChips } from "./siteData";
import { Reveal } from "./ui";

export default function RegionalSection() {
  return (
    <section className="regional">
      <div className="wrap regional-grid">
        <Reveal>
          <p className="eyebrow">Regional Economic Development</p>
          <h2>Beyond one state. Building a stronger Northern economy.</h2>
          <p>
            Katsina's economic future is tied to the wider Northern Nigerian economy. Khalil has been
            involved in the <strong>Northern Nigeria Investment & Industrialisation Summit</strong> and the
            broader conversation on regional integration.
          </p>
          <p>
            Viewed as a connected economic system, the region's strengths in agriculture, minerals, power
            and trade create the basis for coordinated investment.
          </p>
          <div className="chips">
            {themeChips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </Reveal>

        <Reveal className="node-diagram">
          <div className="node-center">
            Katsina
            <small>Northern Nigeria</small>
          </div>
          {nodeLabels.map((node, index) => (
            <span
              key={node}
              style={{ transform: `rotate(${index * 45}deg) translateY(-165px) rotate(-${index * 45}deg)` }}
            >
              {node}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
