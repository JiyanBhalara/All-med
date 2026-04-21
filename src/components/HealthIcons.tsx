/**
 * Custom healthcare SVG symbols used throughout the site.
 * These add medical credibility and visual warmth beyond generic Lucide icons.
 */

export function MedicalCross({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7V2z" />
    </svg>
  );
}

export function HeartbeatLine({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 40" fill="none" aria-hidden="true">
      <polyline
        points="0,20 40,20 50,20 55,5 60,35 65,10 70,30 75,20 85,20 200,20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ecg-line"
      />
    </svg>
  );
}

export function HeartPulse({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      <line x1="4" y1="12" x2="9" y2="12" stroke="white" strokeWidth="1.5" />
      <polyline points="9,12 10.5,8 12,16 13.5,10 15,12" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="15" y1="12" x2="20" y2="12" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

export function Caduceus({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="2" x2="12" y2="22" />
      <path d="M12 4c2 0 4 1 4 3s-2 3-4 3" />
      <path d="M12 4c-2 0-4 1-4 3s2 3 4 3" />
      <path d="M12 10c2 0 4 1 4 3s-2 3-4 3" />
      <path d="M12 10c-2 0-4 1-4 3s2 3 4 3" />
      <line x1="8" y1="20" x2="12" y2="22" />
      <line x1="16" y1="20" x2="12" y2="22" />
    </svg>
  );
}

export function ShieldMedical({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" opacity="0.15" />
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10.5" y="7" width="3" height="10" rx="0.5" fill="currentColor" />
      <rect x="7" y="10.5" width="10" height="3" rx="0.5" fill="currentColor" />
    </svg>
  );
}

export function DNAHelix({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M6 2c0 4 12 6 12 10s-12 6-12 10 12 6 12 10" strokeLinecap="round" />
      <path d="M18 2c0 4-12 6-12 10s12 6 12 10-12 6-12 10" strokeLinecap="round" />
      <line x1="8" y1="7" x2="16" y2="7" opacity="0.4" />
      <line x1="7" y1="12" x2="17" y2="12" opacity="0.4" />
      <line x1="8" y1="17" x2="16" y2="17" opacity="0.4" />
      <line x1="7" y1="22" x2="17" y2="22" opacity="0.4" />
      <line x1="8" y1="27" x2="16" y2="27" opacity="0.4" />
      <line x1="7" y1="32" x2="17" y2="32" opacity="0.4" />
    </svg>
  );
}

export function StethoscopeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.8 2.3A2 2 0 003 4.3v3a4 4 0 008 0v-3a2 2 0 00-1.8-2" />
      <path d="M8 15a6 6 0 006 6 4 4 0 004-4v-3" />
      <circle cx="18" cy="12" r="2" />
      <path d="M7 8v3a5 5 0 005 5" />
    </svg>
  );
}

export function PulseRing({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-full bg-secondary/20 animate-pulse-ring" />
      <div className="absolute inset-1 rounded-full bg-secondary/30 animate-pulse-ring" style={{ animationDelay: '0.5s' }} />
      <div className="relative rounded-full bg-secondary flex items-center justify-center">
        <MedicalCross className="w-1/2 h-1/2 text-white" />
      </div>
    </div>
  );
}

export function HealthPattern({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      {/* Scattered medical crosses */}
      <g opacity="0.06" fill="currentColor">
        <rect x="8" y="5" width="2" height="6" />
        <rect x="6" y="7" width="6" height="2" />
        <rect x="28" y="25" width="2" height="6" />
        <rect x="26" y="27" width="6" height="2" />
        <rect x="58" y="8" width="2" height="6" />
        <rect x="56" y="10" width="6" height="2" />
        <rect x="78" y="35" width="2" height="6" />
        <rect x="76" y="37" width="6" height="2" />
        <rect x="18" y="55" width="2" height="6" />
        <rect x="16" y="57" width="6" height="2" />
        <rect x="48" y="45" width="2" height="6" />
        <rect x="46" y="47" width="6" height="2" />
        <rect x="88" y="65" width="2" height="6" />
        <rect x="86" y="67" width="6" height="2" />
        <rect x="38" y="75" width="2" height="6" />
        <rect x="36" y="77" width="6" height="2" />
        <rect x="68" y="78" width="2" height="6" />
        <rect x="66" y="80" width="6" height="2" />
        <rect x="8" y="85" width="2" height="6" />
        <rect x="6" y="87" width="6" height="2" />
        <rect x="88" y="15" width="2" height="6" />
        <rect x="86" y="17" width="6" height="2" />
      </g>
    </svg>
  );
}
