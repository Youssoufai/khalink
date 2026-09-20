import { Reveal, Placeholder } from "./ui";

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <Reveal>
          <Placeholder src="/images/khalil.jpeg" alt="Khalil Nur Khalil at an event" label="Portrait" />
        </Reveal>
        <Reveal className="about-copy">
          <p className="eyebrow">About Khalil</p>
          <h2>A career built around economic development.</h2>
          <p>
            Khalil studied Economics at <strong>Eastern Mediterranean University</strong>, graduating with
            High Honours - First Class - and a <strong>3.98 / 4.00</strong> cumulative grade point average.
          </p>
          <p>
            He began his career at the <strong>Kaduna Investment Promotion Agency</strong>, progressing
            through investor relations and investment intelligence roles before rising to
            <strong> Executive Secretary</strong>.
          </p>
          <p>
            In 2023, he was appointed <strong>Economic Adviser to the Katsina State Government</strong>,
            where his work has centred on investment attraction, industrialisation, infrastructure,
            agriculture and business-enabling reforms.
          </p>
          <div className="about-stats">
            <span>
              <strong>First Class</strong>
              Economics, EMU
            </span>
            <span>
              <strong>3.98/4.00</strong>
              Cumulative GPA
            </span>
            <span>
              <strong>2018-2026</strong>
              Years in strategy
            </span>
          </div>
          <a className="button button-outline" href="#timeline">
            Read the full biography →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
