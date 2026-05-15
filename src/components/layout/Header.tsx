import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";

const nav = [
  { to: "/about", label: "About" },
  { to: "/listings", label: "Listings" },
  { to: "/neighborhoods", label: "Neighborhoods" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Journal" },
  { to: "/resources", label: "Resources" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col" onClick={() => setOpen(false)}>
          <span className="font-display font-semibold text-xl tracking-tight leading-none">{site.agentName}</span>
          <span className="text-[10px] uppercase tracking-widest text-muted mt-1">{site.brokerage}</span>
        </Link>
        <div className="hidden md:flex gap-7 text-sm font-medium text-muted">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 transition-all"
          >
            Contact
          </Link>
          <button
            className="md:hidden p-2 -mr-2"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-base text-foreground" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <Link to="/contact" className="text-base text-primary font-semibold" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
