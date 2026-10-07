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
    <article className={`project-card project-${project.id}`}>
      <div className="project-content">
        <div className="project-meta">
          <span className="project-number">0{index + 1} /</span>
          <span className="project-type">
            {project.type === "client"
              ? "Real client website"
              : "Portfolio concept"}
          </span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="tags" aria-label="Technologies">
          {project.technologies.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="project-actions">
          {project.liveUrl && (
            <a
              className="project-live"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Live site: ${project.name} (opens in a new tab)`}
            >
              Live site <Icon name="external" size={15} />
            </a>
          )}
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noreferrer"
              aria-label={`View code: ${project.name} on GitHub`}
            >
              <Icon name="github" size={16} />
              View code
            </a>
          )}
          <button
            className="text-link"
            onClick={() => onOpen(project)}
            aria-label={`View case study: ${project.name}`}
          >
            Case study <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
      <button className="project-image" onClick={() => onOpen(project)}>
        <span className="project-preview-bar">
          <span className="mono">{project.id} / website</span>
          <Icon name="external" size={14} />
        </span>
        <img
          src={`./images/${project.image}`}
          srcSet={`./images/${project.id}-640.webp 640w, ./images/${project.image} 1440w`}
          sizes="(max-width: 800px) 92vw, 55vw"
          alt={`${project.name} website homepage screenshot`}
          width="1440"
          height="1000"
          loading="lazy"
          decoding="async"
        />
        <span className="preview-open">
          Explore the case study <span aria-hidden="true">↗</span>
        </span>
      </button>
    </article>
  );
}
