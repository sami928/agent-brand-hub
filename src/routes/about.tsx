import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/content/site";
import agentPortrait from "@/assets/agent-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${site.agentName} · ${site.brokerage}` },
      { name: "description", content: `Meet ${site.agentName} — a decade of helping families buy and sell homes in ${site.region}.` },
      { property: "og:title", content: `About ${site.agentName}` },
      { property: "og:description", content: `Meet ${site.agentName} — local real estate guide.` },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="px-6 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 items-start">
        <div className="lg:col-span-2 lg:sticky lg:top-28">
          <img src={agentPortrait} alt={site.agentName} loading="lazy" width={1024} height={1280}
               className="w-full aspect-[4/5] object-cover rounded-[3rem] ring-1 ring-black/5" />
        </div>
        <div className="lg:col-span-3">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
            About me
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05] mb-8 text-balance">
            Real estate is a <span className="italic text-primary">people</span> business — I never forgot that.
          </h1>

          <div className="prose prose-lg max-w-none text-muted space-y-6 leading-relaxed">
            <p>
              I grew up two streets over from the Garden District, learned to ride a bike on Highland Terrace, and bought my first home in Riverbend when I was 28. {site.region} is not a market I work — it's the place I live.
            </p>
            <p>
              I started in real estate twelve years ago after a career in design and project management. Those years taught me how to listen carefully, manage complicated timelines, and stay calm when the inspection report comes back ugly. They also taught me that the best transactions are the ones where everybody — buyer, seller, lender, inspector — feels respected.
            </p>
            <p>
              My practice is intentionally small. I take on a limited number of clients each season so I can be reachable, prepared, and present. If you call me, I will pick up. If you text me at 9pm because you saw something on Zillow, I will text back.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-14 pt-10 border-t border-border">
            <Stat value="12+" label="Years in practice" />
            <Stat value="180+" label="Families served" />
            <Stat value="4.9★" label="Average rating" />
          </div>

          <div className="mt-14">
            <h2 className="font-display text-2xl font-semibold mb-4">Credentials</h2>
            <ul className="text-sm text-muted space-y-2">
              <li>· Licensed Real Estate Salesperson, {site.licenseState} (License #{site.licenseNumber})</li>
              <li>· Member, National Association of REALTORS®</li>
              <li>· Affiliated with {site.brokerage}</li>
              <li>· Accredited Buyer's Representative (ABR®)</li>
              <li>· Seller Representative Specialist (SRS)</li>
            </ul>
          </div>

          <Link to="/contact" className="mt-12 inline-flex bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold">
            Let's talk →
          </Link>
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-primary mb-1">{value}</div>
      <div className="text-[10px] uppercase tracking-widest text-muted font-semibold">{label}</div>
    </div>
  );
}
