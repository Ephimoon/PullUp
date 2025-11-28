export function TimeSlotChip({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-xs font-medium border transition ${
        active
          ? "bg-pullup-primary text-slate-950 border-pullup-primary shadow-pullup-soft"
          : "bg-slate-900/70 border-slate-700 text-slate-200 hover:border-slate-500"
      }`}
    >
      {label}
    </button>
  );
}
