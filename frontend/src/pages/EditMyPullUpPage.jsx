export function EditMyPullUpPage() {
  // Later: read auth + fetch this host's PullUps from Supabase
  const fakeEvents = [
    { id: 1, name: "Sushi + movie night", code: "ABC123" },
    { id: 2, name: "Brunch squad", code: "BRNCH1" },
  ];

  return (
    <div className="space-y-6 max-w-xl">
      <h1 className="text-2xl font-semibold">Edit my PullUp</h1>
      <p className="text-sm pullup-text-soft">
        When you&apos;re logged in, this page will show all the PullUps you&apos;ve
        created so you can edit details, see responses, or close a plan.
      </p>

      <div className="card space-y-3 text-sm">
        {fakeEvents.map((event) => (
            <div
            key={event.id}
            className="flex items-center justify-between py-1.5 border-b"
            >
            <div>
              <p className="font-medium">{event.name}</p>
              <p className="text-[11px] pullup-text-muted">
                Code: <span className="font-mono">{event.code}</span>
              </p>
            </div>
            <button
              type="button"
              className="btn-ghost text-[11px] px-3 py-1"
              onClick={() => alert("Later: go to host edit view")}
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      <p className="text-[11px] pullup-text-muted">
        This is just sample data for now — next step is wiring it to Supabase.
      </p>
    </div>
  );
}
