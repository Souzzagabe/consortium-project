import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "@/components/ui/Logo";

const footerLinks = {
  company: [
    { href: "/", label: "Início" },
    { href: "/servicos", label: "Serviços" },
    { href: "/como-funciona", label: "Como Funciona" },
    { href: "/planos", label: "Planos" },
  ],
  services: [
    "Consórcio Imobiliário",
    "Consórcio de Veículos",
    "Consórcio Empresarial",
    "Estratégia de Lance",
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-dark-card border-t border-dark-border overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px]" aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-10 sm:py-16 lg:py-20 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6" aria-label="Patrimônio Programado — Página inicial">
              <Logo size="sm" />
            </Link>
            <p className="text-navy-300 text-sm leading-relaxed mb-6">
              Tecnologia e crescimento financeiro. Crédito inteligente e planejado para realizar seus sonhos.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { name: "linkedin", label: "LinkedIn" },
                { name: "instagram", label: "Instagram" },
                { name: "facebook", label: "Facebook" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-dark-lighter border border-dark-border flex items-center justify-center hover:border-brand/50 hover:bg-brand/10 transition-all"
                  aria-label={social.label}
                >
                  <span className="text-navy-400 text-xs uppercase font-bold">
                    {social.name.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <nav aria-label="Navegação do rodapé">
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6 text-white">
              Navegação
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 hover:text-brand transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6 text-white">
              Serviços
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-navy-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6 text-white">
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:mateusmutiplica@gmail.com"
                  className="flex items-start gap-3 text-sm text-navy-300 hover:text-brand transition-colors group"
                >
                  <Mail className="w-5 h-5 text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <span>mateusmutiplica@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5551981179752"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-navy-300 hover:text-brand transition-colors"
                >
                  <Phone className="w-5 h-5 text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <span>+55 51 8117-9752</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-navy-300">
                <MapPin className="w-5 h-5 text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <span>Porto Alegre, RS - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-dark-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-navy-500">
          <div>
            <p>© 2026 Patrimônio Programado. Todos os direitos reservados.</p>
            <p className="mt-1 text-xs text-navy-500">
              Desenvolvido por{" "}
              <a
                href="https://instagram.com/souzzagabe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand/80 transition-colors"
              >
                @souzzagabe
              </a>
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-navy-300 transition-colors">
              Privacidade
            </Link>
            <Link href="#" className="hover:text-navy-300 transition-colors">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
