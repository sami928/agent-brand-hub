import { createFileRoute, Link } from "@tanstack/react-router";
import { listings, neighborhoods, posts, site, testimonials } from "@/content/site";
import { PropertyCard } from "@/components/site/PropertyCard";
import agentPortrait from "@/assets/agent-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.agentName} · Real Estate in ${site.region}` },
      { name: "description", content: `Helping families find their footing in ${site.region}. Local listings, neighborhood guides, and honest advice from ${site.agentName}.` },
      { property: "og:title", content: `${site.agentName} · Real Estate` },
      { property: "og:description", content: `A personal real estate guide for ${site.region}.` },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = listings.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-12 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
              Your local neighborhood guide
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] mb-8 text-balance">
              Home is where your <span className="italic text-primary">story</span> unfolds.
            </h1>
            <p className="text-lg text-muted max-w-[48ch] mb-10 leading-relaxed">
              Helping families find their footing in {site.region} for over a decade. I don't just sell houses — I introduce you to your future neighbors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/listings" className="bg-foreground text-background px-8 py-4 rounded-full font-semibold">
                View My Listings
              </Link>
              <Link to="/about" className="border border-border px-8 py-4 rounded-full font-semibold hover:bg-card transition-colors">
                Read My Bio
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:200ms]">
            <img
              src={agentPortrait}
              alt={`Portrait of ${site.agentName}`}
              width={1024}
              height={1280}
              className="w-full aspect-[4/5] object-cover rounded-[3rem] ring-1 ring-black/5"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-3xl shadow-xl border border-border max-w-xs">
              <p className="font-display text-lg italic leading-snug text-primary">
                "{testimonials[0].quote.split(".")[0]}."
              </p>
              <p className="text-xs mt-3 font-semibold uppercase tracking-wider">— {testimonials[0].name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-24 bg-stone-soft/40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-4xl font-semibold mb-4">Hand-picked Homes</h2>
              <p className="text-muted">Current opportunities in our favorite corners of the valley.</p>
            </div>
            <Link to="/listings" className="text-primary font-semibold border-b-2 border-primary/20 pb-1">
              View all {listings.length} properties
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((l) => <PropertyCard key={l.id} listing={l} />)}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-semibold mb-4">Explore the Neighborhoods</h2>
            <p className="text-muted">From the historic charm of the Garden District to the quiet peaks of Oak Ridge.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {neighborhoods.map((n) => (
              <Link to="/neighborhoods" key={n.id} className="relative aspect-square rounded-[2rem] overflow-hidden group">
                <img src={n.image} alt={n.name} loading="lazy" width={800} height={800} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-display text-xl">{n.name}</h3>
                  <p className="text-white/80 text-xs">{n.tag}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Snippet */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/3">
            <h2 className="font-display text-4xl font-semibold mb-6">Market Updates & Local Lore</h2>
            <p className="text-muted mb-8">Stay informed about the local real estate trends and find the best hidden coffee shops in town.</p>
            <Link to="/blog" className="text-primary font-bold inline-flex items-center gap-2">Read the Journal →</Link>
          </div>
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
            {posts.slice(0, 2).map((p) => (
              <article key={p.id} className="bg-card p-6 rounded-3xl border border-border shadow-sm">
                <div className="aspect-video rounded-2xl mb-4 overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" width={800} height={450} className="w-full h-full object-cover" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2">{p.category}</p>
                <h3 className="font-display text-xl mb-2">{p.title}</h3>
                <p className="text-sm text-muted">{p.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-primary text-primary-foreground rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8">Let's find your place here.</h2>
          <p className="text-primary-foreground/90 text-lg mb-10 max-w-xl mx-auto italic">
            "{testimonials[3].quote}"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-card text-primary px-10 py-4 rounded-full font-bold shadow-lg">
              Schedule a Coffee
            </Link>
            <Link to="/listings" className="border border-white/30 hover:bg-white/10 px-10 py-4 rounded-full font-bold transition-colors">
              Browse Listings
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
