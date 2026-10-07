import { profile } from "../content";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-topline">
        <span className="mono">PORTFOLIO / IZEL BIANCHINA</span>
        <span className="mono">
          JOHANNESBURG, ZA <span aria-hidden="true">↗</span>
        </span>
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-role">
            <span className="status-dot" /> Software & Web Developer
          </p>
          <h1>
            Izel
            <br />
            <span>Bianchina<span className="name-dot">.</span></span>
          </h1>
          <p className="hero-headline">
            Good interfaces.
            <br />
            Solid foundations.
          </p>
          <p className="hero-intro">
            I build modern websites, thoughtful interfaces and practical
            full-stack applications. From a business idea to the code that makes
            it work.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              View my work <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button secondary"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="github" size={17} /> GitHub
            </a>
            <a className="text-link" href="#contact">
              Contact me <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div
          className="system-visual"
          aria-label="Developer workspace: interface, application logic and data"
        >
          <div className="system-top">
            <span className="mono">DEVELOPER WORKSPACE</span>
            <Icon name="code" size={18} />
          </div>
          <div className="system-axis" aria-hidden="true">
            <span>01</span>
            <span>02</span>
            <span>03</span>
          </div>
          <div className="system-layer interface-layer">
            <div className="layer-label">
              <Icon name="layers" size={17} />
              <span>Interface</span>
              <span className="mono">.tsx</span>
            </div>
            <div className="ui-wireframe" aria-hidden="true">
              <div className="wire-sidebar">
                <i />
                <i />
                <i />
              </div>
              <div className="wire-main">
                <div className="wire-title" />
                <div className="wire-line" />
                <div className="wire-cards">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="wire-chart">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
            <div className="layer-foot">
              <span>React</span>
              <span>TypeScript</span>
              <span>CSS</span>
            </div>
          </div>
          <div className="system-connector" aria-hidden="true">
            <span /> props / events <span />
          </div>
          <div className="system-layer logic-layer">
            <div className="layer-label">
              <Icon name="code" size={17} />
              <span>Application logic</span>
              <span className="mono">{"{ }"}</span>
            </div>
            <div className="logic-flow">
              <span>request</span>
              <i aria-hidden="true">→</i>
              <span>handler</span>
              <i aria-hidden="true">→</i>
              <span>response</span>
            </div>
            <div className="layer-foot">
              <span>Node.js</span>
              <span>Django</span>
              <span>REST APIs</span>
            </div>
          </div>
          <div className="system-connector" aria-hidden="true">
            <span /> query / result <span />
          </div>
          <div className="system-layer data-layer">
            <Icon name="database" size={24} />
            <div>
              <b>Data layer</b>
              <span>SQL / MongoDB</span>
            </div>
            <span className="data-glyph" aria-hidden="true">
              [ ]
            </span>
          </div>
          <div className="system-bottom">
            <Icon name="branch" size={14} />
            <span>From interface to implementation</span>
            <span className="cursor" aria-hidden="true">
              _
            </span>
          </div>
        </div>
      </div>
      <div className="container hero-foot">
        <span>
          Open to developer opportunities
          <br />
          <b>and small-business website projects.</b>
        </span>
        <a href="./Izel_Bianchina_CV.pdf" download>
          <Icon name="download" size={16} /> Download CV
        </a>
        <a href="#work" className="scroll-link">
          SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
