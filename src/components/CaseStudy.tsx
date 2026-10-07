import { useEffect, useRef } from "react";
import type { Project } from "../content";

export function CaseStudy({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!project) return;
    const previous = document.activeElement as HTMLElement | null;
    dialog.current?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.current?.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [project]);
  return (
    <dialog
      ref={dialog}
      className="case-study"
      aria-labelledby="case-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="case-content">
          <div className="case-top">
            <span className="eyebrow">{project.category}</span>
            <button
              autoFocus
              className="close-button"
              onClick={onClose}
              aria-label="Close case study"
            >
              ×
            </button>
          </div>
          <h2 id="case-title">{project.name}</h2>
          <p className="case-intro">{project.description}</p>
          <img
            src={`./images/${project.image}`}
            alt={`${project.name} homepage`}
            width="1440"
            height="1000"
          />
          <div className="case-grid">
            <section>
              <h3>The brief</h3>
              <p>{project.problem}</p>
            </section>
            <section>
              <h3>What I built</h3>
              <p>{project.built}</p>
            </section>
            <section>
              <h3>Technologies</h3>
              <ul className="tags">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Features</h3>
              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
            {project.challenge && (
              <section>
                <h3>Challenges</h3>
                <p>{project.challenge}</p>
              </section>
            )}
            <section>
              <h3>The implementation</h3>
              <p>{project.solution}</p>
            </section>
            <section className="case-result">
              <h3>The result</h3>
              <p>{project.result}</p>
            </section>
          </div>
          <div className="case-actions">
            {project.repository && (
              <a
                className="button primary"
                href={project.repository}
                target="_blank"
                rel="noreferrer"
              >
                Explore the source on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                className="button secondary"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visit live website
              </a>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
