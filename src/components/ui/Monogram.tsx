interface MonogramProps {
  label?: string;
}

/** Temporary JM identity mark pending final brand and trademark clearance. */
export function Monogram({ label = "JM" }: MonogramProps) {
  return (
    <svg aria-label={label} className="monogram" role="img" viewBox="0 0 48 48">
      <path d="M11 10v20c0 5 3 8 8 8s8-3 8-8V10" />
      <path d="M22 35V14l8 12 8-12v24" />
    </svg>
  );
}
