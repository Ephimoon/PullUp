import { useParams } from "react-router-dom";

export function EventResultsPage() {
  const { code } = useParams();

  return (
    <div className="space-y-4 max-w-xl">
      <h1 className="text-2xl font-semibold">Best time to PullUp</h1>
      <p className="text-sm text-slate-300">
        This is where we&apos;ll show the availability breakdown for{" "}
        <span className="font-mono text-pullup-accent text-xs">{code}</span>{" "}
        once we hook this up to Supabase.
      </p>

      <div className="card space-y-3 text-sm">
        <p className="font-semibold text-emerald-300">
          Fri · 7:00 PM — 4 can PullUp ✅
        </p>
        <p className="text-slate-300 text-xs">
          You&apos;ll see charts, counts, and a clear “this is the best time” banner here.
        </p>
      </div>
    </div>
  );
}
