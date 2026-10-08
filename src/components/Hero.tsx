import { profile } from "../content";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section id="home" className="hero">
      <picture className="hero-background" aria-hidden="true">
        <source
          media="(max-width: 640px)"
          srcSet="./images/workspace-960.webp"
        />
        <img
          src="./images/workspace.webp"
          alt=""
          width="1536"
          height="1024"
          fetchPriority="high"
        />
      </picture>
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Izel Bianchina · Software & Web Developer</p>
          <h1>
            I build <em>modern</em>
            <br />
            websites & web
            <br />
            applications that
            <br />
            make an <em>impact.</em>
          </h1>
          <p className="hero-intro">
            Thoughtful design. Practical code. Websites and full-stack
            applications for real businesses and ideas.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              View my work <span aria-hidden="true">↗</span>
            </a>
            <a className="button secondary" href="#contact">
              Let’s work together
            </a>
          </div>
          <p className="hero-location">
            <Icon name="location" size={15} />
            {profile.location}
          </p>
        </div>
        <div className="hero-annotation handwritten" aria-hidden="true">
          Design.
          <br />
          Develop.
          <br />
          Bring ideas to life.<span>⤵</span>
        </div>
      </div>
      <div className="container hero-foot">
        <span>
          Available for junior developer opportunities & selected website
          projects
        </span>
        <a href="./Izel_Bianchina_CV.pdf" download>
          <Icon name="download" size={15} /> Download CV
        </a>
        <a href="#work">
          Explore the work <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
