import { Ear, Palette, Sparkles } from 'lucide-react';

interface Engagement {
  icon: typeof Ear;
  title: string;
  description: string;
}

const ENGAGEMENTS: Engagement[] = [
  {
    icon: Ear,
    title: 'Écoute',
    description:
      "Avant le geste, le mot. Nous prenons le temps de comprendre vos envies, vos doutes et votre quotidien pour poser un diagnostic juste.",
  },
  {
    icon: Palette,
    title: 'Créativité',
    description:
      "Le cheveu comme matière, la coiffure comme signature. Nous proposons une vision personnelle, jamais copiée, toujours adaptée.",
  },
  {
    icon: Sparkles,
    title: 'Détail',
    description:
      "La beauté se cache dans la finition. Chaque mèche, chaque raccord, chaque passage de ciseaux répond à une exigence du détail.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-deep-brown px-6 py-24 text-ivory md:px-10 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-extra-wide text-copper-light">
            L'Expérience Sépia
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight md:text-4xl lg:text-5xl text-balance">
            Trois engagements,
            <br className="hidden md:block" /> une même exigence
          </h2>
        </div>

        <div className="grid gap-16 md:grid-cols-3 md:gap-10 lg:gap-16">
          {ENGAGEMENTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="reveal text-center"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-copper/40">
                  <Icon
                    strokeWidth={1}
                    className="h-6 w-6 text-copper-light"
                  />
                </div>
                <h3 className="mt-8 font-serif text-2xl font-light">
                  {item.title}
                </h3>
                <div className="mx-auto mt-3 h-px w-10 bg-copper/60" />
                <p className="mt-5 text-sm leading-relaxed text-ivory/70">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-20 text-center">
          <p className="font-serif text-xl italic text-ivory/60 md:text-2xl">
            « La coiffure est un art discret, qui se révèle dans la durée. »
          </p>
        </div>
      </div>
    </section>
  );
}
