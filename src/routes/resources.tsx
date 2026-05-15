import { createFileRoute, Link } from "@tanstack/react-router";
import { resources, site } from "@/content/site";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: `Resources · ${site.agentName}` },
      { name: "description", content: `Buyer guides, seller checklists, and trusted local vendors from ${site.agentName}.` },
      { property: "og:title", content: `Resources · ${site.agentName}` },
      { property: "og:description", content: `Free guides for buyers and sellers in ${site.region}.` },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <div className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
            Free for you
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05] mb-6">
            Tools to make this <span className="italic text-primary">easier</span>.
          </h1>
          <p className="text-muted text-lg">
            The same guides and checklists I send my clients — gathered in one place. No email gate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((r) => (
            <article key={r.title} className="bg-card border border-border rounded-[2rem] p-10 flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold">{r.title}</h2>
              <p className="text-muted leading-relaxed flex-1">{r.desc}</p>
              <div>
                <Link to="/contact" className="inline-flex bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold">
                  {r.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
