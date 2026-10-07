import type { Project } from "../content";
import { Icon } from "./Icon";

export function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  return (
    <article
      className={`project-card ${index === 0 ? "project-featured" : ""}`}
    >
      <button
        className={`project-image image-${project.id}`}
        onClick={() => onOpen(project)}

      >
        <span className="browser-chrome">
          <span className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>{project.name}</span>
          <Icon name="external" size={12} />
        </span>
        <img
          src={`./images/${project.image}`}
          srcSet={`./images/${project.id}-640.webp 640w, ./images/${project.image} 1440w`}
          sizes={
            index === 0
              ? "(max-width: 900px) 90vw, 55vw"
              : "(max-width: 600px) 90vw, 45vw"
          }
          alt={`${project.name} website homepage screenshot`}
          width="1440"
          height="1000"
          loading="lazy"
          decoding="async"
        />
        <span className="image-caption">
          Explore the case study <Icon name="code" size={15} />
        </span>
      </button>
      <div className="project-content">
        <div className="project-meta">
          <span
            className={`project-type ${project.type === "client" ? "type-client" : ""}`}
          >
            {project.type === "client" ? "Real client" : "Portfolio demo"}
          </span>
          <span className="project-number">/ 0{index + 1}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {index === 0 && (
          <ul className="project-features">
            {project.features.slice(0, 3).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}
        <ul className="tags" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-actions">
          {project.liveUrl && (
            <a
              className="live-link"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Live site: ${project.name} (opens in a new tab)`}
            >
              Live site <Icon name="external" size={14} />
            </a>
          )}
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noreferrer"
              aria-label={`View code: ${project.name} on GitHub (opens in a new tab)`}
            >
              <Icon name="github" size={15} />
              View code
            </a>
          )}
          <button
            className="text-link"
            onClick={() => onOpen(project)}
            aria-label={`View case study: ${project.name}`}
          >
            Case study
          </button>
        </div>
      </div>
    </article>
  );
}



