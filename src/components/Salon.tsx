const SALON_IMAGE =
  'https://images.pexels.com/photos/7195811/pexels-photo-7195811.jpeg?auto=compress&cs=tinysrgb&w=1200';

export function Salon() {
  return (
    <section id="salon" className="px-6 py-24 md:px-10 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20 lg:items-center">
        {/* Image */}
        <div className="reveal relative order-2 lg:order-1">
          <div className="overflow-hidden">
            <img
              src={SALON_IMAGE}
              alt="Espace chaleureux du salon Atelier Sépia avec fauteuils et étagères"
              className="w-full h-[420px] md:h-[560px] object-cover transition-transform duration-[1.2s] hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden h-32 w-32 border border-copper/40 md:block" />
        </div>

        {/* Text */}
        <div className="reveal order-1 lg:order-2">
          <p className="mb-4 text-xs uppercase tracking-extra-wide text-copper">
            Le Salon
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight md:text-4xl lg:text-5xl text-balance">
            Un lieu pensé comme un atelier,
            <br className="hidden md:block" /> où le cheveu devient matière.
          </h2>
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-deep-brown/75 md:text-base">
            <p>
              Chez Atelier Sépia, nous croyons qu'une coiffure réussie commence
              par une écoute sincère. Chaque visite est l'occasion d'un
              échange, d'un diagnostic personnalisé et d'un geste précis,
              adapté à la nature de vos cheveux et à votre mode de vie.
            </p>
            <p>
              Dans un espace chaleureux aux teintes sépia, nos coiffeurs
              cultivent une approche douce et méticuleuse. L'objectif n'est
              jamais la tendance pour la tendance, mais la justesse — une
              coiffure qui vous ressemble et qui dure.
            </p>
          </div>

          {/* Stats / signature */}
          <div className="mt-12 flex gap-12">
            <div>
              <p className="font-serif text-3xl text-copper lg:text-4xl">01</p>
              <p className="mt-1 text-xs uppercase tracking-extra-wide text-deep-brown/60">
                Écoute
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-copper lg:text-4xl">02</p>
              <p className="mt-1 text-xs uppercase tracking-extra-wide text-deep-brown/60">
                Créativité
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-copper lg:text-4xl">03</p>
              <p className="mt-1 text-xs uppercase tracking-extra-wide text-deep-brown/60">
                Détail
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
