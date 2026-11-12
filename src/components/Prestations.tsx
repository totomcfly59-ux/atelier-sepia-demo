interface Prestation {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const PRESTATIONS: Prestation[] = [
  {
    title: 'Coupe Femme',
    description:
      "Un diagnostic capillaire et une coupe sur-mesure qui subliment la nature de vos cheveux, du brushing épuré au style structuré.",
    image:
      'https://images.pexels.com/photos/6502174/pexels-photo-6502174.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: "Coiffeuse réalisant une coupe femme précise aux ciseaux",
  },
  {
    title: 'Coupe Homme',
    description:
      "Des lignes nettes et une finition soignée, adaptées à la forme du visage et à votre quotidien. Coupe classique ou contemporaine.",
    image:
      'https://images.pexels.com/photos/9992819/pexels-photo-9992819.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: "Barber stylisant la coiffure d'un homme avec précision",
  },
  {
    title: 'Coloration',
    description:
      "Une coloration riche et profonde, choisie en harmonie avec votre carnation. Couvre cheveux blancs ou transforme votre teinte.",
    image:
      'https://images.pexels.com/photos/8468036/pexels-photo-8468036.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: "Application soignée d'une coloration dans le salon",
  },
  {
    title: 'Balayage',
    description:
      "Un éclaircissement en douceur, fondu racine, pour un effet naturel lumineux. La signature d'un soleil capturé dans le cheveu.",
    image:
      'https://images.pexels.com/photos/8468126/pexels-photo-8468126.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: "Réalisation d'un balayage avec mèches et feuilles d'aluminium",
  },
  {
    title: 'Soins Capillaires',
    description:
      "Des soins profonds pour nourrir, réparer et raviver l'éclat. Protocoles adaptés aux cheveux secs, sensibilisés ou colorés.",
    image:
      'https://images.pexels.com/photos/3993463/pexels-photo-3993463.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: "Femme profitant d'un soin capillaire relaxant au salon",
  },
];

export function Prestations() {
  return (
    <section id="prestations" className="bg-beige-light/40 px-6 py-24 md:px-10 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-extra-wide text-copper">
            Nos Prestations
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight md:text-4xl lg:text-5xl text-balance">
            Un savoir-faire au service
            <br className="hidden md:block" /> de votre cheveu
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {PRESTATIONS.map((p, i) => (
            <article
              key={p.title}
              className="reveal group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="h-[380px] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-deep-brown/0 transition-colors duration-500 group-hover:bg-deep-brown/10" />
              </div>
              <div className="pt-6">
                <h3 className="font-serif text-2xl font-light text-deep-brown md:text-2xl">
                  {p.title}
                </h3>
                <div className="mt-3 h-px w-10 bg-copper transition-all duration-500 group-hover:w-20" />
                <p className="mt-4 text-sm leading-relaxed text-deep-brown/70">
                  {p.description}
                </p>
              </div>
            </article>
          ))}

          {/* CTA card */}
          <article className="reveal flex flex-col items-start justify-center bg-deep-brown p-10 text-ivory">
            <p className="text-xs uppercase tracking-extra-wide text-beige">
              Sur-mesure
            </p>
            <h3 className="mt-4 font-serif text-2xl font-light leading-snug">
              Une envie particulière ?
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ivory/75">
              Chaque prestation commence par un échange. Venez exprimer vos
              envies — nous construisons la coiffure qui vous convient.
            </p>
            <a
              href="#contact"
              className="mt-8 border border-ivory/40 px-6 py-3 text-xs uppercase tracking-extra-wide text-ivory transition-all duration-400 hover:bg-ivory hover:text-deep-brown"
            >
              Nous rencontrer
            </a>
          </article>
        </div>

        <p className="reveal mt-12 text-center text-xs italic text-deep-brown/50">
          Les prestations présentées sont indicatives et non contractuelles.
        </p>
      </div>
    </section>
  );
}
