import { useParams } from "react-router-dom";
import { AvailabilityButtons } from "../components/AvailabilityButtons.jsx";

const fakeSlots = ["Fri · 7:00 PM", "Sat · 6:30 PM", "Sun · 5:00 PM"];

export function JoinEventPage() {
  const { code } = useParams();

  const handleVote = (slot, status) => {
    console.log(`Voted ${status} for`, slot);
  };

  return (
    <div className="space-y-5 max-w-xl">
      <div className="space-y-1">
        <p className="eyebrow-label">PullUp code</p>
        <p className="text-lg font-semibold flex items-center gap-2">
          {code}
          <span className="code-tag">demo</span>
        </p>
      </div>

      <div className="card space-y-4">
        <div className="space-y-1">
          <p className="text-sm font-semibold">Sushi + movie night 🍣🎬</p>
          <p className="text-xs pullup-text-soft">
            Tap for each time to say if you can PullUp, maybe PullUp, or
            can&apos;t make it.
          </p>
        </div>

        <div className="space-y-3">
          {fakeSlots.map((slot) => (
            <div key={slot} className="slot-row">
              <span className="text-xs">{slot}</span>
              <AvailabilityButtons
                onSelect={(status) => handleVote(slot, status)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
