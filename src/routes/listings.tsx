import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { listings, site, type Listing } from "@/content/site";
import { PropertyCard } from "@/components/site/PropertyCard";

export const Route = createFileRoute("/listings")({
  head: () => ({
    meta: [
      { title: `Listings · ${site.agentName}` },
      { name: "description", content: `Browse active, pending, and recently sold homes represented by ${site.agentName} in ${site.region}.` },
      { property: "og:title", content: `Listings · ${site.agentName}` },
      { property: "og:description", content: `Active and recently sold homes in ${site.region}.` },
      { property: "og:url", content: "/listings" },
    ],
    links: [{ rel: "canonical", href: "/listings" }],
  }),
  component: ListingsPage,
});

const FILTERS: (Listing["status"] | "All")[] = ["All", "Active", "Just Listed", "Pending", "Sold"];

function ListingsPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const filtered = filter === "All" ? listings : listings.filter((l) => l.status === filter);

  return (
    <div className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
            The Portfolio
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05] mb-6">
            Listings & recent <span className="italic text-primary">work</span>.
          </h1>
          <p className="text-muted text-lg">
            A current snapshot of homes I represent across {site.region}. Listings deemed reliable but not guaranteed — please verify all details.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                filter === f
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent border-border text-muted hover:border-foreground/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((l) => <PropertyCard key={l.id} listing={l} />)}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted py-16">No listings in this category right now.</p>
        )}
      </div>
    </div>
  );
}
