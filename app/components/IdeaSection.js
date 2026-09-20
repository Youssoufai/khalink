import { useState } from "react";
import { flowSteps } from "./siteData";

export default function IdeaSection() {
  const [activeFlowStep, setActiveFlowStep] = useState(0);

  return (
    <section className="idea">
      <div className="wrap">
        <p className="eyebrow">The approach</p>
        <p className="statement">
          Economic development is not only about policy. <em>It is about turning policy into capital,
          infrastructure, businesses and opportunity.</em>
        </p>
        <div className="flow">
          {flowSteps.map((step, index) => (
            <button
              className={index === activeFlowStep ? "active" : ""}
              key={step}
              onClick={() => setActiveFlowStep(index)}
            >
              <i />
              {step}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
