export function AvailabilityButtons({ onSelect }) {
    const variants = {
        yes: "availability-chip availability-yes",
        maybe: "availability-chip availability-maybe",
        no: "availability-chip availability-no",
    };

  return (
    <div className="flex gap-2 text-[11px]">
      {["yes", "maybe", "no"].map((status) => (
        <button
          key={status}
          type="button"
          onClick={() => onSelect(status)}
          className={variants[status]}
        >
          {status === "yes" && "Yes"}
          {status === "maybe" && "Maybe"}
          {status === "no" && "No"}
        </button>
      ))}
    </div>
  );
}
