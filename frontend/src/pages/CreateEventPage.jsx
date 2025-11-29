import { useState } from "react";
import { TimeSlotChip } from "../components/TimeSlotChip.jsx";

export function CreateEventPage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [slots, setSlots] = useState([]);

  const addSlot = () => {
    if (!timeInput.trim()) return;
    setSlots((prev) => [...prev, timeInput.trim()]);
    setTimeInput("");
  };

  const removeSlot = (slot) => {
    setSlots((prev) => prev.filter((s) => s !== slot));
  };

  const handleCreate = (e) => {
    e.preventDefault();
    // TODO: hook up Supabase
    alert("For now this is just UI. Next step: connect to Supabase!");
  };

  return (
    <div className="space-y-6 max-w-xl">
      <h1 className="text-2xl font-semibold">Plan a PullUp</h1>
      <p className="text-sm pullup-text-soft">
        Pick a plan name, drop a few time options, and we&apos;ll turn it into
        a shareable link your people can vote on.
      </p>

      <form onSubmit={handleCreate} className="card space-y-5">
        <div className="space-y-1">
          <label className="field-label">Plan name</label>
          <input
            className="field-input"
            placeholder="Sushi + movie night, brunch squad, study date…"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label className="field-label">
            Description <span className="pullup-text-muted">(optional)</span>
          </label>
          <textarea
            className="field-textarea"
            placeholder="Drop any details, vibe, or location ideas."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="field-label">Time options</label>
          <div className="flex gap-2">
            <input
              className="field-input flex-1"
              placeholder="e.g. Fri · 7:00 PM"
              value={timeInput}
              onChange={(e) => setTimeInput(e.target.value)}
            />
            <button
              type="button"
              onClick={addSlot}
              className="btn-ghost whitespace-nowrap"
            >
              Add
            </button>
          </div>

          {slots.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {slots.map((slot) => (
                <TimeSlotChip
                  key={slot}
                  label={slot}
                  active
                  onClick={() => removeSlot(slot)}
                />
              ))}
            </div>
          )}

          <p className="text-[11px] pullup-text-muted">
            Later we&apos;ll swap this text input for a proper date/time picker.
          </p>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={!title || slots.length === 0}
          >
            Generate link
          </button>
        </div>
      </form>
    </div>
  );
}
