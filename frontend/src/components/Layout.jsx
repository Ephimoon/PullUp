import { Navbar } from "./Navbar.jsx";

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 pb-16 pt-24">
        {children}
      </main>
    </div>
  );
}
