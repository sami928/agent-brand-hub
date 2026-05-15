import { Link } from "@tanstack/react-router";
import { site } from "@/content/site";
import { EhoLogo } from "@/components/site/EhoLogo";

export function ComplianceFooter() {
  return (
    <footer className="py-20 px-6 border-t border-border bg-stone-soft/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="mb-6 flex flex-col">
              <span className="font-display font-semibold text-2xl tracking-tight">{site.agentName}</span>
              <span className="text-[10px] uppercase tracking-widest text-muted mt-1 italic">{site.agentTitle}</span>
            </div>
            <div className="space-y-2 text-sm text-muted">
              <p>{site.address.line1}</p>
              <p>{site.address.line2}</p>
              <p>{site.email}</p>
              <p>{site.phone}</p>
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-xs uppercase tracking-widest mb-6">Brokerage</h5>
            <div className="p-4 border border-border rounded-xl bg-card w-fit">
              <div className="flex items-center gap-3">
                <div className="size-8 bg-stone-soft rounded grid place-items-center text-[8px] border border-black/5 font-mono">
                  LOGO
                </div>
                <span className="text-xs font-bold leading-tight uppercase">
                  {site.brokerage}
                  <br />
                  <span className="font-normal opacity-60 text-[8px] tracking-widest">{site.brokerageTagline}</span>
                </span>
              </div>
            </div>
            <p className="text-[11px] text-muted mt-4">
              License #{site.licenseNumber} · {site.licenseState}
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-xs uppercase tracking-widest mb-6">Explore</h5>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link to="/listings" className="hover:text-primary">Active Listings</Link></li>
              <li><Link to="/neighborhoods" className="hover:text-primary">Neighborhoods</Link></li>
              <li><Link to="/resources" className="hover:text-primary">Buyer & Seller Guides</Link></li>
              <li><Link to="/blog" className="hover:text-primary">Market Updates</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-xs uppercase tracking-widest mb-6">Connect</h5>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              <li><a href={site.social.instagram} className="hover:text-primary">Instagram</a></li>
              <li><a href={site.social.linkedin} className="hover:text-primary">LinkedIn</a></li>
              <li><a href={site.social.facebook} className="hover:text-primary">Facebook</a></li>
            </ul>
          </div>
        </div>

        {/* Compliance strip */}
        <div className="pt-8 border-t border-border flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="max-w-3xl text-[11px] leading-relaxed text-muted space-y-3">
            <p>
              <strong className="text-foreground font-semibold">{site.agentName}</strong> is a licensed real estate agent
              in {site.licenseState} (License #{site.licenseNumber}), affiliated with {site.brokerage}.
            </p>
            <p>{site.reliabilityDisclaimer}</p>
            <p>
              <strong className="text-foreground font-semibold">Equal Housing Opportunity.</strong>{" "}
              {site.fairHousingStatement}
            </p>
            <p className="pt-2">© {new Date().getFullYear()} {site.agentName}. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <div className="flex flex-col items-center gap-1.5 text-muted">
              <EhoLogo className="size-12" />
              <span className="text-[8px] uppercase tracking-widest">Equal Housing</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 text-muted opacity-70">
              <div className="size-12 border border-current grid place-items-center rounded-sm font-display text-[10px] font-semibold">
                R
              </div>
              <span className="text-[8px] uppercase tracking-widest">REALTOR®</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
