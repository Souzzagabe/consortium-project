interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function LogoIcon({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = { sm: 40, md: 48, lg: 64 };
  const s = sizes[size];
  // Unique gradient IDs per size to avoid collisions when multiple instances render
  const uid = size;

  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Bar gradient: dark green (bottom) → bright green (top) */}
        <linearGradient id={`barG-${uid}`} x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#006B3C" />
          <stop offset="45%" stopColor="#00BF6F" />
          <stop offset="100%" stopColor="#39E680" />
        </linearGradient>
        {/* Arrow gradient: bright green → cyan */}
        <linearGradient id={`arrG-${uid}`} x1="0" y1="1" x2="1" y2="0" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#39E680" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>

      {/* ── House / arch silhouette at base (dark teal) ── */}
      <path d="M2 78 L40 56 L78 78 Z" fill="#0a5f78" />
      {/* Inner ridge lines */}
      <path d="M12 78 L40 62 L68 78" fill="none" stroke="#06b6d4" strokeWidth="1.2" opacity="0.45" />
      <path d="M22 78 L40 67 L58 78" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.3" />

      {/* ── 4 growing bars (share the same bottom baseline y=74) ── */}
      <rect x="8"  y="56" width="10" height="18" rx="1.5" fill={`url(#barG-${uid})`} />
      <rect x="22" y="44" width="10" height="30" rx="1.5" fill={`url(#barG-${uid})`} />
      <rect x="36" y="30" width="10" height="44" rx="1.5" fill={`url(#barG-${uid})`} />
      <rect x="50" y="12" width="10" height="62" rx="1.5" fill={`url(#barG-${uid})`} />

      {/* ── Diagonal arrow ── */}
      <line
        x1="12" y1="58"
        x2="60" y2="10"
        stroke={`url(#arrG-${uid})`}
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Arrowhead */}
      <path
        d="M53 5 L64 8 L61 19"
        fill="none"
        stroke={`url(#arrG-${uid})`}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({
  className = "",
  size = "md",
  showText = true,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoIcon size={size} />
      {showText && (
        <div className="leading-none select-none flex flex-col gap-0.5">
          <span
            className="font-extrabold tracking-tight block"
            style={{
              fontSize: size === "sm" ? "1.15rem" : size === "lg" ? "1.6rem" : "1.35rem",
              background: "linear-gradient(90deg, #0DB8A0 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Patrimônio
          </span>
          <span
            className="font-bold tracking-tight block"
            style={{
              fontSize: size === "sm" ? "1.0rem" : size === "lg" ? "1.4rem" : "1.15rem",
              background: "linear-gradient(90deg, #0DB8A0 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Programado
          </span>
        </div>
      )}
    </div>
  );
}
