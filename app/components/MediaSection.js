import { mediaTabs } from "./siteData";
import { Reveal, Placeholder } from "./ui";

export default function MediaSection({ activeTab, onSelectTab }) {
  const mediaCount = activeTab === "Photos" ? 4 : 3;
  const isDark = activeTab === "Videos" || activeTab === "Interviews";
  const mediaLabel = activeTab.slice(0, -1);
  const mediaImages = ["/images/khalil2.jpeg", "/images/gov.jpeg", "/images/group.jpeg", "/images/ayo.jpeg"];

  return (
    <section className="media" id="media">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Media</p>
          <h2>Archive.</h2>
        </Reveal>

        <div className="tabs">
          {mediaTabs.map((tab) => (
            <button className={tab === activeTab ? "active" : ""} key={tab} onClick={() => onSelectTab(tab)}>
              {tab}
            </button>
          ))}
        </div>

        <div className="media-grid">
          {Array.from({ length: mediaCount }, (_, index) => (
            <button key={index}>
              <Placeholder
                label={mediaLabel}
                src={mediaImages[index]}
                dark={isDark}
                alt={`${activeTab} item ${index + 1}`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
