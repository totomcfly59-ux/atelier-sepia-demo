const FOOTER_NAV = [
  { label: 'Le Salon', href: '#salon' },
  { label: 'Prestations', href: '#prestations' },
  { label: 'Galerie', href: '#galerie' },
  { label: "L'Expérience", href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="bg-deep-brown px-6 py-16 text-ivory md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl tracking-[0.15em]">ATELIER SÉPIA</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">
              Salon de coiffure à Lille. La beauté du geste, l'art du cheveu.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs uppercase tracking-extra-wide text-copper-light">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ivory/70 transition-colors hover:text-copper-light"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mentions */}
          <div>
            <p className="text-xs uppercase tracking-extra-wide text-copper-light">
              Informations
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ivory/70">
              <li>Site de démonstration — Salon fictif</li>
              <li>Les informations présentées sont fictives.</li>
              <li>Aucun rendez-vous réel ne peut être pris.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 md:flex-row">
          <p className="text-xs text-ivory/50">
            © {new Date().getFullYear()} Atelier Sépia — Démonstration
          </p>
          <p className="text-xs text-ivory/50">
            Site statique · React · Vite · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
