export function TimeSlotChip({ label, active, onClick }) {
  const stateClass = active
    ? "timeslot-chip-active"
    : "timeslot-chip-inactive";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`timeslot-chip ${stateClass}`}
    >
      {label}
    </button>
  );
}
