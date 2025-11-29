import { useParams } from "react-router-dom";

export function EventResultsPage() {
  const { code } = useParams();

  return (
    <div className="space-y-4 max-w-xl">
      <h1 className="text-2xl font-semibold">Best time to PullUp</h1>
      <p className="text-sm pullup-text-soft">
        This is where we&apos;ll show the availability breakdown for{" "}
        <span className="code-tag font-mono">{code}</span> once we hook this up
        to Supabase.
      </p>

      <div className="card space-y-3 text-sm">
        <p
          className="font-semibold"
          style={{ color: "var(--pullup-status-yes-text)" }}
        >
          Fri · 7:00 PM — 4 can PullUp ✅
        </p>
        <p className="text-xs pullup-text-soft">
          You&apos;ll see charts, counts, and a clear “this is the best time”
          banner here.
        </p>
      </div>
    </div>
  );
}
