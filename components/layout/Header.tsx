"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/como-funciona", label: "Como Funciona" },
  { href: "/planos", label: "Carta Contemplada" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Close mobile menu on Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    },
    [mobileOpen]
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 header-animate transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-xl border-b border-dark-border shadow-lg shadow-dark/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="group" aria-label="Matheus Multiplica — Página inicial">
            <Logo size="sm" />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isActive(link.href)
                      ? "text-brand"
                      : "text-navy-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-brand transition-all duration-300 ${
                      isActive(link.href) ? "w-1/2" : "w-0"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/planos#formulario"
              className="btn-primary inline-flex items-center"
            >
              <span>COMECE SEU PLANO</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              ref={menuButtonRef}
              className="p-2 text-white rounded-lg hover:bg-dark-lighter/50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        role="navigation"
        aria-label="Menu mobile"
        aria-hidden={!mobileOpen}
        className={`lg:hidden bg-dark-card/95 backdrop-blur-xl border-t border-dark-border overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-6 gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                tabIndex={mobileOpen ? 0 : -1}
                className={`block px-4 py-3 text-base font-medium rounded-xl transition-all ${
                  isActive(link.href)
                    ? "bg-brand/10 text-brand border-l-2 border-brand"
                    : "text-navy-300 hover:bg-dark-lighter hover:text-brand"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Link
              href="/planos#formulario"
              onClick={() => setMobileOpen(false)}
              tabIndex={mobileOpen ? 0 : -1}
              className="btn-primary block text-center"
            >
              <span>COMECE SEU PLANO</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
