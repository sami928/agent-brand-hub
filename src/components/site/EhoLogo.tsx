// Equal Housing Opportunity mark — simplified inline SVG
export function EhoLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-label="Equal Housing Opportunity" role="img">
      <rect x="1" y="1" width="62" height="62" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M32 12 L52 28 L46 28 L46 50 L18 50 L18 28 L12 28 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <text x="32" y="44" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fontWeight="700" fill="currentColor">=</text>
    </svg>
  );
}
