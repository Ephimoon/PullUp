import { Navbar } from "./Navbar.jsx";

export function Layout({ children }) {
  return (
    <div className="min-h-screen app-bg">
      <Navbar />
      <main className="max-w-6xl mx-auto px-5 py-0">
        {children}
      </main>
    </div>
  );
}
