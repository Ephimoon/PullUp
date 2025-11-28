import { useParams } from "react-router-dom";
import { AvailabilityButtons } from "../components/AvailabilityButtons.jsx";

const fakeSlots = ["Fri · 7:00 PM", "Sat · 6:30 PM", "Sun · 5:00 PM"];

export function JoinEventPage() {
  const { code } = useParams();

  const handleVote = (slot, status) => {
    // later: send to Supabase
    console.log(`Voted ${status} for`, slot);
  };

  return (
    <div className="space-y-5 max-w-xl">
      <div className="space-y-1">
        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
          PullUp code
        </p>
        <p className="text-lg font-semibold flex items-center gap-2">
          {code}
          <span className="px-2 py-0.5 rounded-full bg-slate-900/70 text-[11px] text-slate-400 border border-slate-700">
            demo
          </span>
        </p>
      </div>

      <div className="card space-y-4">
        <div className="space-y-1">
          <p className="text-sm font-semibold">Sushi + movie night 🍣🎬</p>
          <p className="text-xs text-slate-300">
            Tap for each time to say if you can PullUp, maybe PullUp, or can&apos;t make it.
          </p>
        </div>

        <div className="space-y-3">
          {fakeSlots.map((slot) => (
            <div
              key={slot}
              className="flex items-center justify-between rounded-xl bg-slate-900/70 border border-slate-800 px-3 py-2.5"
            >
              <span className="text-xs">{slot}</span>
              <AvailabilityButtons onSelect={(status) => handleVote(slot, status)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
