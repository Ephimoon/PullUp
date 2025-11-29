import { Link, NavLink, useNavigate } from "react-router-dom";

export function Navbar() {
  // TODO: replace this with real Supabase auth
  const isLoggedIn = false;
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out (placeholder)");
    navigate("/");
  };

  const linkClass = ({ isActive }) =>
    ["nav-text-link", isActive ? "nav-text-link-active" : ""]
      .filter(Boolean)
      .join(" ");

  return (
    <header className="nav-shell fixed top-3 inset-x-0 z-20">
      <nav className="nav-pill w-full max-w-[1112px] mx-auto px-5 h-14 flex items-center justify-between">
        {/* Logo / brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="nav-logo-orb h-7 w-7 rounded-full" />
          <span className="nav-brand text-lg font-semibold tracking-tight">
            Pull<span className="nav-brand-accent">Up</span>
          </span>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-4 text-xs">
          {/* Always: Where do I PullUp? */}
          <NavLink to="/where" className={linkClass}>
            Where do I PullUp?
          </NavLink>

          {isLoggedIn ? (
            <>
              {/* Logged in: Edit + Create + Logout */}
              <NavLink to="/edit" className={linkClass}>
                Edit my PullUp
              </NavLink>

              <NavLink
                to="/create"
                className={({ isActive }) =>
                  [
                    "nav-cta-primary",
                    isActive ? "nav-text-link-active" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                Create PullUp
              </NavLink>

              <button
                type="button"
                onClick={handleLogout}
                className="nav-logout-pill"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Not logged in: Create PullUp → login/register */}
              <NavLink
                to="/auth/login"
                className={({ isActive }) =>
                  [
                    "nav-cta-primary",
                    isActive ? "nav-text-link-active" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                Create PullUp
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
