const HERO_IMAGE =
  'https://images.pexels.com/photos/7750108/pexels-photo-7750108.jpeg?auto=compress&cs=tinysrgb&w=1600';

export function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Intérieur du salon de coiffure Atelier Sépia à Lille"
          className="h-full w-full object-cover animate-slow-zoom"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-brown/30 via-deep-brown/20 to-deep-brown/60" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 animate-fade-in text-xs uppercase tracking-extra-wide text-ivory/80">
          Salon de coiffure — Lille
        </p>
        <h1 className="max-w-4xl animate-fade-up font-serif text-4xl font-light leading-[1.15] text-ivory text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          La beauté du geste,
          <br />
          l'art du cheveu
        </h1>
        <p className="mt-8 max-w-xl animate-fade-up text-sm leading-relaxed text-ivory/85 md:text-base">
          Un atelier où chaque visite s'inscrit dans une exigence de qualité
          et une attention portée au détail.
        </p>
        <a
          href="#salon"
          className="mt-10 animate-fade-up border border-ivory/60 px-8 py-3.5 text-xs uppercase tracking-extra-wide text-ivory transition-all duration-400 hover:bg-ivory hover:text-deep-brown"
        >
          Découvrir le salon
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
        <div className="flex h-12 w-6 items-start justify-center rounded-full border border-ivory/40 pt-2">
          <span className="h-2 w-px animate-pulse bg-ivory/70" />
        </div>
      </div>
    </section>
  );
}
