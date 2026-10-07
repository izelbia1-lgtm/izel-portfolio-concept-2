import { useState, type FormEvent } from "react";
import { profile } from "../content";
import { Icon } from "./Icon";

export function Contact() {
  const [draft, setDraft] = useState("");
  const [subject, setSubject] = useState("");
  const [status, setStatus] = useState("");
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSubject(`${data.get("topic")} — ${data.get("name")}`);
    setDraft(
      `Hi Izel,\n\n${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`,
    );
    setStatus(
      "Your email draft is ready. Open your email app to review and send it.",
    );
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(draft);
      setStatus("Message copied. You can paste it into an email.");
    } catch {
      setStatus(
        "Copy is unavailable in this browser. Select and copy the message below.",
      );
    }
  }
  return (
    <section id="contact" className="contact section-pad">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">07 / Get in touch</span>
          <h2>
            Good things start
            <br />
            with a <em>conversation.</em>
          </h2>
          <p>
            Have a developer opportunity or a website in mind? Tell me a little
            about it.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            <Icon name="mail" size={20} />
            {profile.email}
          </a>
          <p className="location">
            <Icon name="location" size={16} />
            {profile.location}
          </p>
          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Icon name="github" size={16} />
              GitHub
            </a>
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}
            {profile.whatsapp && (
              <a
                href={`https://wa.me/${profile.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            )}
          </div>
        </div>
        <form onSubmit={prepare} className="contact-form">
          <div className="form-heading">
            <Icon name="mail" size={19} />
            <span>Start a conversation</span>
            <span className="mono">/ hello</span>
          </div>
          <div className="form-row">
            <label>
              Your name
              <input
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                placeholder="Alex Smith"
              />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={200}
                placeholder="alex@example.com"
              />
            </label>
          </div>
          <label>
            I’m getting in touch about
            <select name="topic">
              <option>A website project</option>
              <option>A developer opportunity</option>
              <option>Something else</option>
            </select>
          </label>
          <label>
            Your message
            <textarea
              name="message"
              required
              minLength={10}
              maxLength={3000}
              rows={4}
              placeholder="A little about your project or opportunity…"
            />
          </label>
          <p className="form-note">
            This form prepares an email on your device. Nothing is stored or
            sent automatically.
          </p>
          <button className="button primary" type="submit">
            Prepare email
          </button>
          <p className="form-status" role="status">
            {status}
          </p>
          {draft && (
            <div className="email-draft">
              <label>
                Prepared message
                <textarea readOnly value={draft} rows={7} />
              </label>
              <div className="flex flex-wrap gap-4">
                <a
                  className="button primary"
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(draft)}`}
                >
                  Open email app
                </a>
                <button type="button" className="text-link" onClick={copy}>
                  Copy message
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
