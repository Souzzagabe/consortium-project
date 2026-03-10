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
  const sizes = { sm: 32, md: 40, lg: 56 };
  const s = sizes[size];
  const uid = size;

  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`bgG-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00BF6F" />
          <stop offset="100%" stopColor="#00995A" />
        </linearGradient>
      </defs>
      {/* Rounded square background */}
      <rect width="64" height="64" rx="16" fill={`url(#bgG-${uid})`} />
      {/* "M" letter — clean geometric */}
      <path
        d="M14 48V22l10 14 10-14v26"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Upward trend arrow */}
      <line x1="38" y1="40" x2="52" y2="20" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <polyline points="46,18 53,19 52,26" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Logo({
  className = "",
  size = "md",
  showText = true,
}: LogoProps) {
  const fs = { sm: "0.85rem", md: "1.05rem", lg: "1.35rem" };
  const sub = { sm: "0.38rem", md: "0.45rem", lg: "0.56rem" };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoIcon size={size} />
      {showText && (
        <div className="leading-none select-none">
          <span
            className="font-extrabold tracking-wide text-white block"
            style={{ fontSize: fs[size], lineHeight: 1.2 }}
          >
            MATHEUS
          </span>
          <span
            className="font-extrabold tracking-wide text-white block"
            style={{ fontSize: fs[size], lineHeight: 1.2 }}
          >
            <span className="text-brand">+</span>MULTIPLICA
          </span>
          <span
            className="font-medium text-navy-400 block uppercase"
            style={{
              fontSize: sub[size],
              letterSpacing: "0.12em",
              lineHeight: 1.4,
              marginTop: "2px",
            }}
          >
            Consórcio e Estratégia Patrimonial
          </span>
        </div>
      )}
    </div>
  );
}
