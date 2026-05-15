// Centralized site content. Replace these placeholder values with the real
// agent's information when ready — every page reads from this file.

export const site = {
  agentName: "Katy Redmond",
  agentTitle: "Local Real Estate Guide",
  brokerage: "Oak & Stone Realty",
  brokerageTagline: "Real Estate Group",
  licenseNumber: "0000000",
  licenseState: "ST",
  email: "julianne@oakandstone.example",
  phone: "(555) 124-5678",
  address: {
    line1: "102 Main Street, Suite 400",
    line2: "North Valley, ST 90210",
  },
  social: {
    instagram: "#",
    linkedin: "#",
    facebook: "#",
  },
  region: "the North Valley",
  fairHousingStatement:
    "We are pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity throughout the Nation. We encourage and support an affirmative advertising and marketing program in which there are no barriers to obtaining housing because of race, color, religion, sex, handicap, familial status, or national origin.",
  reliabilityDisclaimer:
    "All information provided is deemed reliable but is not guaranteed and should be independently verified. Property availability, pricing, and details are subject to change without notice.",
};

export type Listing = {
  id: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: string;
  status: "Active" | "Pending" | "Just Listed" | "Sold";
  image: string;
  area: string;
};

import listing1 from "@/assets/listing-1.jpg";
import listing2 from "@/assets/listing-2.jpg";
import listing3 from "@/assets/listing-3.jpg";

export const listings: Listing[] = [
  {
    id: "whispering-pines",
    price: "$1,450,000",
    address: "1242 Whispering Pines Way, North Valley",
    beds: 4, baths: 3.5, sqft: "3,200",
    status: "Active",
    image: listing1,
    area: "Garden District",
  },
  {
    id: "highland-terrace",
    price: "$985,000",
    address: "44 Highland Terrace, Oak Ridge",
    beds: 3, baths: 2.0, sqft: "2,150",
    status: "Pending",
    image: listing2,
    area: "Oak Ridge",
  },
  {
    id: "primrose-lane",
    price: "$2,100,000",
    address: "882 Primrose Lane, Garden District",
    beds: 5, baths: 4.5, sqft: "4,800",
    status: "Just Listed",
    image: listing3,
    area: "Garden District",
  },
  {
    id: "river-bend",
    price: "$725,000",
    address: "17 Riverbend Court, Riverbend",
    beds: 3, baths: 2.0, sqft: "1,820",
    status: "Active",
    image: listing2,
    area: "Riverbend",
  },
  {
    id: "ridge-view",
    price: "$3,400,000",
    address: "9 Ridge View Lane, The Heights",
    beds: 6, baths: 5.5, sqft: "5,400",
    status: "Active",
    image: listing3,
    area: "The Heights",
  },
  {
    id: "oak-cottage",
    price: "$612,000",
    address: "330 Oak Cottage Road, Oak Ridge",
    beds: 2, baths: 2.0, sqft: "1,400",
    status: "Sold",
    image: listing1,
    area: "Oak Ridge",
  },
];

import nGarden from "@/assets/neighborhood-garden.jpg";
import nOakridge from "@/assets/neighborhood-oakridge.jpg";
import nRiverbend from "@/assets/neighborhood-riverbend.jpg";
import nHeights from "@/assets/neighborhood-heights.jpg";

export const neighborhoods = [
  { id: "garden-district", name: "Garden District", tag: "Historic & Charming", image: nGarden,
    blurb: "Brick storefronts, leafy streets, and turn-of-the-century homes a short walk from cafés and bookstores." },
  { id: "oak-ridge", name: "Oak Ridge", tag: "Quiet & Spacious", image: nOakridge,
    blurb: "Wooded acreage and ridge-line views — a favorite for buyers wanting room to breathe and tall trees overhead." },
  { id: "riverbend", name: "Riverbend", tag: "Vibrant & Local", image: nRiverbend,
    blurb: "Family-friendly parks, weekend farmers markets, and a tight-knit feel that draws first-time homebuyers." },
  { id: "the-heights", name: "The Heights", tag: "Modern & Exclusive", image: nHeights,
    blurb: "Architect-designed estates perched above the valley with panoramic sunsets and serious privacy." },
];

export const testimonials = [
  { name: "The Miller Family", area: "Garden District buyers", quote:
    "Katy made us feel like her only clients. She knows every hidden gem in this town and helped us write an offer that actually got accepted." },
  { name: "Daniel & Priya R.", area: "Oak Ridge sellers", quote:
    "Sold above asking in nine days. Katy's prep advice and staging eye made the difference — and she answered every late-night text." },
  { name: "Marcus T.", area: "First-time buyer", quote:
    "I had no idea what I was doing. Katy walked me through inspections, financing, the whole thing — never made me feel like I was asking dumb questions." },
  { name: "The Chen-Hollis Household", area: "Riverbend buyers", quote:
    "We toured with three other agents before meeting Katy. The difference was immediate. She listens." },
  { name: "Eleanor S.", area: "Downsizing seller", quote:
    "After 32 years in our home, selling was emotional. Katy handled it with so much care. She's a friend now." },
  { name: "The Okonkwo Family", area: "The Heights buyers", quote:
    "Negotiated us $80K under list on a home we didn't even know was coming to market. That's local knowledge." },
];

import blogCoffee from "@/assets/blog-coffee.jpg";
import blogMarket from "@/assets/blog-market.jpg";

export const posts = [
  { id: "coffee-spots", title: "The 5 Best Coffee Spots in Riverbend",
    excerpt: "Where the locals go for the best sourdough and espresso, ranked by a slightly biased neighbor.",
    category: "Local Lore", image: blogCoffee, date: "Mar 14, 2025" },
  { id: "spring-forecast", title: "Spring Market Forecast",
    excerpt: "Why this season is different for North Valley buyers — and what sellers should price for.",
    category: "Market Update", image: blogMarket, date: "Feb 28, 2025" },
  { id: "first-home", title: "What I Tell First-Time Buyers Before They Tour Anything",
    excerpt: "A short list of the questions I wish every first-time buyer would ask their lender before opening Zillow.",
    category: "Buyer Guide", image: blogCoffee, date: "Feb 11, 2025" },
  { id: "staging", title: "The Staging Decisions That Actually Move the Needle",
    excerpt: "Forget the throw pillows. These are the five prep items that consistently raise our final sale price.",
    category: "Seller Guide", image: blogMarket, date: "Jan 22, 2025" },
];

export const resources = [
  { title: "First-Time Buyer Guide", desc: "A 12-page walkthrough of the entire process — from pre-approval to closing day.", cta: "Download PDF" },
  { title: "Seller's Prep Checklist", desc: "What to fix, what to skip, and the order to do it in for the highest return.", cta: "Download PDF" },
  { title: "Neighborhood Market Reports", desc: "Quarterly snapshots for every area I serve — pricing trends, days on market, and inventory.", cta: "Subscribe" },
  { title: "Move-In Vendor List", desc: "The plumbers, electricians, and movers I trust enough to send to my own clients.", cta: "Get the List" },
];
