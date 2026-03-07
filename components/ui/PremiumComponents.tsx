import { ReactNode } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

// ============================================
// CSS-BASED REVEAL (Server Component — no JS)
// ============================================

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`css-reveal ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

// ============================================
// PAGE HERO SECTION
// ============================================

interface PageHeroProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export function PageHero({
  badge,
  title,
  titleHighlight,
  description,
  showCTA = false,
  ctaText = "Simular Agora",
  ctaHref = "/#simulador",
}: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-28 overflow-hidden hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />
      <div className="gradient-orb absolute top-1/4 -left-32 w-96 h-96 bg-brand/20 rounded-full blur-[128px]" aria-hidden="true" />
      <div className="gradient-orb absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[128px]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="hero-animate">
          {badge && (
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              {badge}
            </span>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 sm:mb-6 text-balance">
            {title}{" "}
            {titleHighlight && (
              <span className="gradient-text">{titleHighlight}</span>
            )}
          </h1>

          {description && (
            <p className="text-base sm:text-lg md:text-xl text-navy-300 leading-relaxed max-w-2xl mx-auto text-pretty mb-6 sm:mb-8">
              {description}
            </p>
          )}

          {showCTA && (
            <Link href={ctaHref} className="btn-primary inline-flex items-center gap-2">
              <span className="flex items-center gap-2">
                {ctaText}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION HEADER
// ============================================

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <AnimatedSection className={`mb-10 sm:mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block text-sm font-semibold text-brand uppercase tracking-wider mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance">
        {title}{" "}
        {titleHighlight && (
          <span className="gradient-text">{titleHighlight}</span>
        )}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg text-navy-300 text-pretty ${centered ? "max-w-2xl mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}

// ============================================
// GLASS CARD
// ============================================

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <div
      className={`glass-card rounded-2xl p-5 sm:p-6 lg:p-8 h-full flex flex-col ${hover ? "hover-lift" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

// ============================================
// FEATURE CARD
// ============================================

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  iconBg?: string;
  iconColor?: string;
  delay?: number;
}

export function FeatureCard({
  icon,
  title,
  description,
  iconBg = "bg-brand/10",
  iconColor = "text-brand",
  delay = 0,
}: FeatureCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <GlassCard className="h-full">
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${iconBg} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300`}
        >
          <div className={iconColor}>{icon}</div>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">{title}</h3>
        <p className="text-navy-300 text-sm leading-relaxed flex-grow">{description}</p>
      </GlassCard>
    </AnimatedSection>
  );
}

// ============================================
// GRADIENT CARD
// ============================================

interface GradientCardProps {
  children: ReactNode;
  gradient?: string;
  className?: string;
}

export function GradientCard({
  children,
  gradient = "from-brand to-brand-dark",
  className = "",
}: GradientCardProps) {
  return (
    <AnimatedSection>
      <div
        className="group relative rounded-3xl overflow-hidden hover-scale"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />
        <div className={`relative m-[1px] bg-dark-lighter rounded-3xl ${className}`}>
          {children}
        </div>
      </div>
    </AnimatedSection>
  );
}

// ============================================
// CTA SECTION
// ============================================

interface CTASectionProps {
  title: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
    external?: boolean;
  };
}

export function CTASection({
  title,
  description,
  primaryCTA = { text: "Simular Gratuitamente", href: "/#simulador" },
  secondaryCTA,
}: CTASectionProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-brand opacity-90" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />

      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full animate-float" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white/20 rounded-full animate-float-delayed" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance">
            {title}
          </h2>
          {description && (
            <p className="text-base sm:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto">
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryCTA.href}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-dark font-bold rounded-full hover:bg-navy-100 transition-colors shadow-2xl"
            >
              {primaryCTA.text}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            {secondaryCTA && (
              <a
                href={secondaryCTA.href}
                target={secondaryCTA.external ? "_blank" : undefined}
                rel={secondaryCTA.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors"
              >
                {secondaryCTA.text}
              </a>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ============================================
// STEP CARD
// ============================================

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

export function StepCard({ number, title, description, delay = 0 }: StepCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <div className="relative text-center">
        <div
          className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full gradient-brand flex items-center justify-center shadow-lg shadow-brand/30"
        >
          <span className="text-xl font-bold text-white">{number}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-navy-300 text-sm leading-relaxed">{description}</p>
      </div>
    </AnimatedSection>
  );
}

// ============================================
// ICON BADGE
// ============================================

interface IconBadgeProps {
  icon: ReactNode;
  gradient?: string;
  size?: "sm" | "md" | "lg";
}

export function IconBadge({
  icon,
  gradient = "from-brand to-brand-dark",
  size = "md",
}: IconBadgeProps) {
  const sizes = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  return (
    <div
      className={`${sizes[size]} rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg shadow-brand/30`}
    >
      {icon}
    </div>
  );
}
