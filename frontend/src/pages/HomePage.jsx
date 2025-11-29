import { useEffect, useState } from "react";

const rotatingNotes = [
  "Create RSVP pages that actually feel fun 🎉",
  "The crew votes on times, PullUp decides 🕒",
  "No logins for guests. Push link, get answers. 💨",
];

export function HomePage() {
  const [noteIndex, setNoteIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setNoteIndex((prev) => (prev + 1) % rotatingNotes.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-page">
      <div className="hero-shell">
        <div className="hero-aurora one" />
        <div className="hero-aurora two" />
        <div className="hero-noise" aria-hidden="true" />

        <div className="hero-content">
          <div className="hero-grid-split">
            <section className="space-y-5 hero-copy-block">
              <h1 className="hero-title hero-title-left">
                Who&apos;s pulling up?
              </h1>
              <h2 className="hero-subtitle-highlight">
                Tap in with an RSVP, or drop times so the whole crew can PullUp.
              </h2>
              <p className="hero-subtitle">
                Hit yes ✅ or nah 🙅‍♀️, drop a couple times, and PullUp calls
                the best one for the crew. One link. No back-and-forth. No &ldquo;So
                guys what are we ACTUALLY doing???&rdquo; chaos.
              </p>
            </section>

            <section className="hero-preview-side">
              <div className="preview-shell space-y-3">
                <div className="preview-header">
                  <div>
                    <p className="eyebrow-label">Live preview</p>
                    <p className="preview-title">Sushi + movie night 🍣🎬</p>
                  </div>
                  <span className="preview-chip">Shareable link</span>
                </div>

                <div className="card space-y-3 text-xs">
                  <div className="space-y-2 pullup-text-soft">
                    <p>You dropped 3 possible times:</p>
                    <ul className="space-y-1">
                      <li className="pill-row">
                        <span>Fri · 7:00 PM</span>
                        <span className="status-label status-text-yes">
                          4 can PullUp
                        </span>
                      </li>
                      <li className="pill-row">
                        <span>Sat · 6:30 PM</span>
                        <span className="status-label status-text-maybe">
                          3 maybe
                        </span>
                      </li>
                      <li className="pill-row">
                        <span>Sun · 5:00 PM</span>
                        <span className="status-label status-text-no">
                          2 can&apos;t
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-[11px] pullup-text-muted">
                    PullUp highlights the best time so you don&apos;t have to do the math.
                  </p>
                </div>
              </div>

              <div className="hero-rotating-note">
                <span className="hero-note-dot" />
                <span key={noteIndex} className="hero-rotating-text">
                  {rotatingNotes[noteIndex]}
                </span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
