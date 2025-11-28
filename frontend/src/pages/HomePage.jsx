import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="grid gap-10 md:grid-cols-[1.3fr,1fr] items-center">
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 text-[11px] text-slate-300 mb-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Stop arguing in the group chat.
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Plan dates & hangouts
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pullup-primary to-pullup-accent mt-1">
            that work for everyone.
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl">
          PullUp lets you create a plan, drop a few time options, and send a link.
          Everyone taps when they&apos;re free. You get the best time automatically.
          No more “what time works for you??” chaos.
        </p>

        <div className="flex flex-wrap gap-3 items-center">
          <Link to="/create" className="btn-primary">
            Create a PullUp
          </Link>
          <button
            type="button"
            className="btn-ghost"
            onClick={() => alert("Later this can open a demo modal ✨")}
          >
            See how it works
          </button>
        </div>

        <p className="text-[11px] text-slate-500">
          No accounts required for guests. Just send the link and let them PullUp.
        </p>
      </section>

      <section className="card space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Live preview
        </p>
        <div className="space-y-3 text-xs">
          <p className="font-semibold text-slate-100">
            Sushi + movie night 🍣🎬
          </p>
          <div className="space-y-2 text-slate-300">
            <p>You dropped 3 possible times:</p>
            <ul className="space-y-1">
              <li className="flex items-center justify-between rounded-lg bg-slate-900/70 px-3 py-2">
                <span>Fri · 7:00 PM</span>
                <span className="text-emerald-400 font-semibold text-[11px]">
                  4 can PullUp
                </span>
              </li>
              <li className="flex items-center justify-between rounded-lg bg-slate-900/70 px-3 py-2">
                <span>Sat · 6:30 PM</span>
                <span className="text-amber-300 font-semibold text-[11px]">
                  3 maybe
                </span>
              </li>
              <li className="flex items-center justify-between rounded-lg bg-slate-900/70 px-3 py-2">
                <span>Sun · 5:00 PM</span>
                <span className="text-rose-400 font-semibold text-[11px]">
                  2 can&apos;t
                </span>
              </li>
            </ul>
          </div>
          <p className="text-[11px] text-slate-400">
            PullUp highlights the best time so you don&apos;t have to do the math.
          </p>
        </div>
      </section>
    </div>
  );
}
