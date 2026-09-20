/* eslint-disable react/no-unescaped-entities */

import { insightFilters } from "./siteData";
import { Reveal, Placeholder } from "./ui";

export default function InsightsSection() {
  return (
    <section className="insights" id="insights">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Policy & Insights</p>
          <h2>Ideas that shape economic policy.</h2>
        </Reveal>

        <div className="filters">
          {insightFilters.map((filter, index) => (
            <button className={index === 0 ? "active" : ""} key={filter}>
              {filter}
            </button>
          ))}
        </div>

        <div className="featured">
          <Placeholder label="Policy Brief Cover" src="/images/investment2.jpeg" alt="Investment summit" />
          <div>
            <p className="eyebrow">Policy Brief</p>
            <h3>Investment strategy for a more competitive Katsina.</h3>
            <p>
              A forthcoming policy brief on Katsina's approach to investment attraction and
              business-environment reform.
            </p>
            <small>Publication pending · Economic Policy</small>
          </div>
        </div>

        <div className="article-grid">
          {["Technology", "Katsina Investment Summit 2025", "Regional Development"].map((title, index) => (
            <article key={title}>
              <Placeholder
                label="Article"
                src={["/images/ayo.jpeg", "/images/investment2.jpeg", "/images/group2.jpeg"][index]}
                alt={title}
              />
              <p className="eyebrow">Article</p>
              <h4>{title}</h4>
              {index === 0 ? (
                <div className="article-tribute">
                  <p>
                    We sincerely appreciate the convener of Arewa Tech Fest, Malam Nasir Ahmad El-Rufai,
                    for his continued commitment to nurturing and empowering the next generation of young
                    minds in Northern Nigeria's technology ecosystem.
                  </p>
                  <p>
                    Your vision and leadership have inspired many of us, particularly those who had the
                    privilege of serving under your leadership. The opportunities you created have
                    encouraged us to pursue excellence in public service and contribute to building a
                    better Nigeria.
                  </p>
                  <p>
                    Katsina is emerging as a leader in Northern Nigeria's digital revolution, and this is
                    only the beginning. We are proud of the exceptional young talents from our state and
                    grateful to Arewa Tech Fest for providing a platform to showcase them to the world.
                  </p>
                  <p>
                    We celebrate and appreciate you for your continued investment in the future of our
                    youths.
                  </p>
                </div>
              ) :index=== 1 ? (
                <div className="article-tribute">
                  <p>
                    The Katsina Investment Summit 2025 is set to be a landmark event, bringing together
                    investors, policymakers, and business leaders to explore opportunities in our state.
                  </p>
                  <p>
                    We are committed to creating an enabling environment for investment and fostering
                    sustainable economic growth in Katsina.
                  </p>
                </div>
              ) :index=== 2 ? (
                <div className="article-tribute">
                  <p>
                    Regional development is crucial for balanced growth and prosperity. Our initiatives
                    focus on improving infrastructure, education, and healthcare across all regions.
                  </p>
                  <p>
                    We believe that by empowering local communities and fostering collaboration, we can
                    achieve sustainable development and enhance the quality of life for all citizens.
                  </p>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
