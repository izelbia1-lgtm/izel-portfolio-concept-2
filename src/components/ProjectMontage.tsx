import { projects } from "../content";
export function ProjectMontage() {
  return (
    <div className="project-montage">
      <span className="handwritten montage-note" aria-hidden="true">
        Ideas into interfaces.
        <br />
        Made to be explored. ⤵
      </span>
      {projects.map((project, i) => (
        <a
          className={`montage-window montage-${i}`}
          key={project.id}
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Preview ${project.name} live website (opens in new tab)`}
        >
          <span className="browser-bar">
            <span aria-hidden="true">● ● ●</span>
            <span>{project.name}</span>
            <span aria-hidden="true">↗</span>
          </span>
          <img
            src={`./images/${project.image}`}
            srcSet={`./images/${project.id}-640.webp 640w, ./images/${project.image} 1440w`}
            sizes="(max-width: 640px) 75vw, 40vw"
            alt={`${project.name} website preview`}
            width="1440"
            height="1000"
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
}
