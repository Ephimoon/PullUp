const variants = {
  yes: "bg-emerald-400 text-slate-950",
  maybe: "bg-amber-300 text-slate-950",
  no: "bg-rose-500 text-slate-50",
};

export function AvailabilityButtons({ onSelect }) {
  return (
    <div className="flex gap-2 text-[11px]">
      {["yes", "maybe", "no"].map((status) => (
        <button
          key={status}
          type="button"
          onClick={() => onSelect(status)}
          className={`px-2.5 py-1 rounded-full font-semibold ${variants[status]}`}
        >
          {status === "yes" && "Yes"}
          {status === "maybe" && "Maybe"}
          {status === "no" && "No"}
        </button>
      ))}
    </div>
  );
}
