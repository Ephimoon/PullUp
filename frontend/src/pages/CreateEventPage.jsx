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
    // later: call Supabase here 🎯
    alert("For now this is just UI. Next step: hook this to Supabase!");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Create a PullUp</h1>
      <p className="text-sm text-slate-300 max-w-xl">
        Set up your plan, drop a few time options, and we&apos;ll turn it into a shareable
        link your people can vote on.
      </p>

      <form onSubmit={handleCreate} className="card space-y-5 max-w-xl">
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-200">
            Plan name
          </label>
          <input
            className="w-full rounded-xl bg-slate-900/70 px-3 py-2 text-sm outline-none border border-slate-700 focus:border-pullup-primary focus:ring-1 focus:ring-pullup-primary"
            placeholder="Sushi + movie night, brunch squad, study date…"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-200">
            Description <span className="text-slate-500">(optional)</span>
          </label>
          <textarea
            className="w-full rounded-xl bg-slate-900/70 px-3 py-2 text-sm outline-none border border-slate-700 focus:border-pullup-primary focus:ring-1 focus:ring-pullup-primary min-h-[80px]"
            placeholder="Drop any details, vibe, or location ideas."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-slate-200">
            Time options
          </label>
          <div className="flex gap-2">
            <input
              className="flex-1 rounded-xl bg-slate-900/70 px-3 py-2 text-sm outline-none border border-slate-700 focus:border-pullup-primary focus:ring-1 focus:ring-pullup-primary"
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

          <p className="text-[11px] text-slate-500">
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
