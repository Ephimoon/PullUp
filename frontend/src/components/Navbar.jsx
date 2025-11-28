import { Link, NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-2xl bg-gradient-to-br from-pullup-primary to-pullup-accent shadow-pullup-soft" />
          <span className="text-sm font-semibold tracking-tight">
            Pull<span className="text-pullup-accent">Up</span>
          </span>
        </Link>

        <div className="flex items-center gap-3 text-xs">
          <NavLink
            to="/create"
            className={({ isActive }) =>
              `btn-ghost hidden sm:inline-flex ${
                isActive ? "border-pullup-primary/70 text-pullup-primary" : ""
              }`
            }
          >
            Create a PullUp
          </NavLink>
          <Link to="/create" className="btn-primary">
            New plan
          </Link>
        </div>
      </nav>
    </header>
  );
}
