import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/content/site";
import { ContactForm } from "@/components/site/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact · ${site.agentName}` },
      { name: "description", content: `Get in touch with ${site.agentName} — call, email, or send a note about buying or selling in ${site.region}.` },
      { property: "og:title", content: `Contact ${site.agentName}` },
      { property: "og:description", content: `Reach out about buying or selling in ${site.region}.` },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="px-6 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">
        <div className="lg:col-span-2">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
            Let's talk
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05] mb-6">
            Coffee's <span className="italic text-primary">on me</span>.
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-10">
            Whether you're three months or three years from a move, I'd love to hear what you're thinking. No pressure, no script.
          </p>

          <div className="space-y-5 text-sm">
            <Row icon={<Phone className="size-4" />} label="Phone" value={site.phone} />
            <Row icon={<Mail className="size-4" />} label="Email" value={site.email} />
            <Row
              icon={<MapPin className="size-4" />}
              label="Office"
              value={
                <>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </>
              }
            />
          </div>

          <p className="text-[11px] text-muted mt-10 leading-relaxed border-t border-border pt-6">
            By submitting this form you consent to be contacted by {site.agentName} of {site.brokerage} regarding real estate services. We never share your information.
          </p>
        </div>

        <div className="lg:col-span-3 bg-card border border-border rounded-[2rem] p-8 md:p-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="size-10 rounded-full bg-primary/10 text-primary grid place-items-center shrink-0">{icon}</div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-muted font-semibold">{label}</div>
        <div className="text-foreground mt-1">{value}</div>
      </div>
    </div>
  );
}
