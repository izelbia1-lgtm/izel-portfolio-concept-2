import { profile } from "../content";
import { Icon } from "./Icon";

export function TrainingProject() {
  return (
    <article className="training-project">
      <div
        className="application-map"
        aria-label="Technologies in the training application"
      >
        <div className="map-heading">
          <Icon name="branch" size={18} />
          <span>FULL-STACK APPLICATION</span>
        </div>
        <div className="map-node">
          <Icon name="layers" size={22} />
          <div>
            <b>React</b>
            <span>Frontend interface</span>
          </div>
          <span className="mono">01</span>
        </div>
        <div className="map-connector" aria-hidden="true" />
        <div className="map-node">
          <Icon name="code" size={22} />
          <div>
            <b>Django</b>
            <span>Authentication & API views</span>
          </div>
          <span className="mono">02</span>
        </div>
        <div className="map-connector" aria-hidden="true" />
        <div className="map-node">
          <Icon name="database" size={22} />
          <div>
            <b>Express / MongoDB</b>
            <span>Backend data service</span>
          </div>
          <span className="mono">03</span>
        </div>
        <p>Implementation overview · Training project</p>
      </div>
      <div className="training-content">
        <span className="project-type">Training project</span>
        <h3>Beyond the interface.</h3>
        <h4>Full-stack dealership application</h4>
        <p>
          A training application with a React frontend, Django authentication
          and API views, and an Express / MongoDB service. Explore the
          repository for the implementation.
        </p>
        <ul className="tags" aria-label="Training project technologies">
          {["React", "Python", "Django", "Express", "MongoDB"].map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <a
          className="text-link"
          href={`${profile.github}/fullstack-saas-app`}
          target="_blank"
          rel="noreferrer"
        >
          Explore the repository <Icon name="external" size={15} />
        </a>
      </div>
    </article>
  );
}
