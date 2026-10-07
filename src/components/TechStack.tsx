import { useState } from "react";
import { skills } from "../content";
import { Icon } from "./Icon";
const icons = ["layers", "code", "database", "branch"] as const;
const descriptions = [
  "The interface people see and use.",
  "The languages behind the implementation.",
  "Connecting application logic with data.",
  "Version control, builds and programme exposure.",
];
export function TechStack() {
  const [active, setActive] = useState(0);
  const group = skills[active];
  return (
    <section id="skills" className="skills section-pad">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 / Technical stack</span>
            <h2>
              Under the hood<span>.</span>
            </h2>
          </div>
          <p>
            Tools used across my projects and training.
            <br />
            Organised by what they bring to the build.
          </p>
        </div>
        <div className="stack-workspace">
          <div className="stack-sidebar">
            <div className="mono stack-label">EXPLORE THE STACK</div>
            {skills.map((s, i) => (
              <button
                key={s.name}
                type="button"
                className={active === i ? "stack-tab active" : "stack-tab"}
                aria-pressed={active === i}
                aria-controls="stack-detail"
                onClick={() => setActive(i)}
              >
                <Icon name={icons[i]} size={19} />
                <span>{i === 3 ? "Tools & deployment" : s.name}</span>
                <span aria-hidden="true">↗</span>
              </button>
            ))}
            <p className="stack-sidebar-note">
              No ratings. Just the tools
              <br />
              behind the work.
            </p>
          </div>
          <div id="stack-detail" className="stack-detail" aria-live="polite">
            <div className="stack-detail-top">
              <span className="mono">STACK / 0{active + 1}</span>
              <Icon name={icons[active]} size={31} />
            </div>
            <h3>{active === 3 ? "Tools & deployment" : group.name}</h3>
            <p>{descriptions[active]}</p>
            <ul className="tech-chips">
              {group.items.map((t) => (
                <li key={t}>
                  <span aria-hidden="true">{"{ }"}</span>
                  {t}
                </li>
              ))}
            </ul>
            {group.training && (
              <div className="training-note">
                <span className="mono">IBM PROGRAMME EXPOSURE</span>
                <ul className="tech-chips">
                  {group.training.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="stack-detail-footer">
              <Icon name="branch" size={15} />
              <span>
                Explore the implementation in my project repositories.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
