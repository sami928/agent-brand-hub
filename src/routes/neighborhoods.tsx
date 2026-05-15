import { createFileRoute, Link } from "@tanstack/react-router";
import { neighborhoods, site } from "@/content/site";

export const Route = createFileRoute("/neighborhoods")({
  head: () => ({
    meta: [
      { title: `Neighborhoods · ${site.agentName}` },
      { name: "description", content: `Local guides to the neighborhoods of ${site.region}.` },
      { property: "og:title", content: `Neighborhoods of ${site.region}` },
      { property: "og:description", content: `Local guides from ${site.agentName}.` },
      { property: "og:url", content: "/neighborhoods" },
    ],
    links: [{ rel: "canonical", href: "/neighborhoods" }],
  }),
  component: NeighborhoodsPage,
});

function NeighborhoodsPage() {
  return (
    <div className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
            Where I work
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05] mb-6">
            The neighborhoods I know <span className="italic text-primary">block by block</span>.
          </h1>
          <p className="text-muted text-lg">
            Every area has its own rhythm. Here's how I think about each of the four pockets of {site.region} I serve most.
          </p>
        </div>

        <div className="space-y-20">
          {neighborhoods.map((n, i) => (
            <article key={n.id} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div>
                <img src={n.image} alt={n.name} loading="lazy" width={800} height={800}
                     className="w-full aspect-[4/3] object-cover rounded-[2rem] ring-1 ring-black/5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-3">{n.tag}</p>
                <h2 className="font-display text-4xl font-semibold mb-4">{n.name}</h2>
                <p className="text-muted text-lg leading-relaxed mb-6">{n.blurb}</p>
                <Link to="/contact" className="text-primary font-semibold border-b-2 border-primary/20 pb-1">
                  Ask me about {n.name} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
