import { createFileRoute, Link } from "@tanstack/react-router";
import { site, testimonials } from "@/content/site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: `Client Stories · ${site.agentName}` },
      { name: "description", content: `What clients say about working with ${site.agentName}.` },
      { property: "og:title", content: `Client Stories · ${site.agentName}` },
      { property: "og:description", content: `Reviews from buyers and sellers in ${site.region}.` },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <div className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
            Client Stories
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05] mb-6">
            In their <span className="italic text-primary">own words</span>.
          </h1>
          <p className="text-muted text-lg">
            The greatest compliment I receive is a referral. These are some of the families who trusted me with one of the biggest decisions of their lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <figure key={i} className="bg-card border border-border rounded-[2rem] p-10 shadow-sm">
              <blockquote className="font-display italic text-2xl leading-snug text-foreground mb-6">
                "{t.quote}"
              </blockquote>
              <figcaption>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted mt-1">{t.area}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="bg-cream rounded-[3rem] p-12 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">Ready to write yours?</h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            I'd love to hear what you're hoping to find — or sell. Let's start with a no-pressure conversation.
          </p>
          <Link to="/contact" className="inline-flex bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold">
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
