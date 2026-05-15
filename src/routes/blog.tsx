import { createFileRoute } from "@tanstack/react-router";
import { posts, site } from "@/content/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: `Journal · ${site.agentName}` },
      { name: "description", content: `Market updates, neighborhood guides, and local lore from ${site.agentName}.` },
      { property: "og:title", content: `The ${site.agentName} Journal` },
      { property: "og:description", content: `Real estate market updates and local stories from ${site.region}.` },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [feature, ...rest] = posts;
  return (
    <div className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
            The Journal
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05] mb-6">
            Market updates &amp; <span className="italic text-primary">local lore</span>.
          </h1>
          <p className="text-muted text-lg">
            The honest take on what's happening in {site.region}, plus the small-town finds I can't keep to myself.
          </p>
        </div>

        {/* Feature */}
        <a href="#" className="grid lg:grid-cols-2 gap-10 items-center bg-card border border-border rounded-[2rem] p-6 lg:p-10 mb-16 group">
          <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden">
            <img src={feature.image} alt={feature.title} loading="lazy" width={800} height={600}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-3">{feature.category} · {feature.date}</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4 leading-tight">{feature.title}</h2>
            <p className="text-muted leading-relaxed">{feature.excerpt}</p>
          </div>
        </a>

        <div className="grid md:grid-cols-3 gap-8">
          {rest.map((p) => (
            <a key={p.id} href="#" className="bg-card p-6 rounded-3xl border border-border shadow-sm group">
              <div className="aspect-video rounded-2xl mb-4 overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" width={800} height={450}
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2">{p.category} · {p.date}</p>
              <h3 className="font-display text-xl mb-2">{p.title}</h3>
              <p className="text-sm text-muted">{p.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
