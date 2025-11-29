import { Link } from "react-router-dom";

export function CreateTypePage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-semibold">What kind of PullUp?</h1>
      <p className="text-sm pullup-text-soft">
        Choose how you want to bring people together. You can always create
        more than one.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <Link to="/create/rsvp" className="card space-y-2">
          <p className="text-sm font-semibold">Invite card (RSVP)</p>
          <p className="text-xs pullup-text-soft">
            Create a cute event card, send it out, and guests can mark
            <strong> going / maybe / can&apos;t go</strong>.
          </p>
          <p className="text-xs pullup-text-muted">Perfect for one fixed time.</p>
        </Link>

        <Link to="/create/availability" className="card space-y-2">
          <p className="text-sm font-semibold">Plan a PullUp (availability)</p>
          <p className="text-xs pullup-text-soft">
            Drop multiple dates &amp; times and let everyone share when they can
            PullUp. We&apos;ll surface the best option.
          </p>
          <p className="text-xs pullup-text-muted">
            Great for dates, group hangs, and trips.
          </p>
        </Link>
      </div>

      <p className="text-[11px] pullup-text-muted">
        Host accounts help you track your PullUps. Guests never need to log in.
      </p>
    </div>
  );
}
