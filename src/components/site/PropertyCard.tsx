import type { Listing } from "@/content/site";

const statusStyles: Record<Listing["status"], string> = {
  Active: "bg-primary text-primary-foreground",
  Pending: "bg-foreground text-background",
  "Just Listed": "bg-primary text-primary-foreground",
  Sold: "bg-muted text-background",
};

export function PropertyCard({ listing }: { listing: Listing }) {
  return (
    <article className="group bg-card rounded-[2rem] overflow-hidden border border-border hover:shadow-xl transition-all">
      <div className="relative">
        <img
          src={listing.image}
          alt={listing.address}
          width={800}
          height={600}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover"
        />
        <span
          className={`absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${statusStyles[listing.status]}`}
        >
          {listing.status}
        </span>
      </div>
      <div className="p-8">
        <h3 className="font-display text-2xl mb-4">{listing.price}</h3>
        <p className="text-sm text-muted mb-6">{listing.address}</p>
        <div className="flex gap-6 border-t border-border pt-6">
          <Stat value={String(listing.beds)} label="Beds" />
          <Stat value={listing.baths.toFixed(1)} label="Baths" />
          <Stat value={listing.sqft} label="SqFt" />
        </div>
      </div>
    </article>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm font-semibold">{value}</span>
      <span className="text-[10px] uppercase tracking-widest text-muted">{label}</span>
    </div>
  );
}
