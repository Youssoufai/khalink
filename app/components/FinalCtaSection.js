/* eslint-disable react/no-unescaped-entities */

import { Reveal } from "./ui";

export default function FinalCtaSection() {
  return (
    <section className="final-cta dark-section">
      <div className="wrap">
        <Reveal>
          <h2>The next chapter of Katsina's economic story is being built now.</h2>
          <p>Explore the economic agenda, investment opportunities and work shaping Katsina's future.</p>
          <div className="actions">
            <a className="button button-outline light-outline" href="#katsina">
              Explore Katsina
            </a>
            <a className="button button-primary" href="#invest">
              Invest in Katsina
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
