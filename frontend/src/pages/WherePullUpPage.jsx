import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function WherePullUpPage() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleGo = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    try {
      let code = trimmed;

      // If they paste a full URL, try to pull /pull/:code out of it
      if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
        const url = new URL(trimmed);
        const parts = url.pathname.split("/").filter(Boolean);
        const idx = parts.indexOf("pull");
        if (idx !== -1 && parts[idx + 1]) {
          code = parts[idx + 1];
        }
      }

      navigate(`/pull/${code}`);
    } catch (err) {
      console.error(err);
      alert("That link or code doesn't look right. Try again?");
    }
  };

  return (
    <div className="space-y-6 max-w-xl">
      <h1 className="text-2xl font-semibold">Where do I PullUp?</h1>
      <p className="text-sm pullup-text-soft">
        Paste a PullUp link or enter the code to jump straight to the event.
      </p>

      <form onSubmit={handleGo} className="card space-y-4">
        <div className="space-y-1">
          <label className="field-label">PullUp link or code</label>
          <input
            className="field-input"
            placeholder="https://pullup.app/pull/ABC123 or just ABC123"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={!input.trim()}
          >
            Go
          </button>
        </div>
      </form>

      <p className="text-[11px] pullup-text-muted">
        Guests never need an account — they just need the link.
      </p>
    </div>
  );
}
