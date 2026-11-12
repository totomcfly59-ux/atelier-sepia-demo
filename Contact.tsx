import { useState } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const HORAIRES = [
  { jour: 'Lundi', heures: 'Fermé' },
  { jour: 'Mardi', heures: '09h00 — 19h00' },
  { jour: 'Mercredi', heures: '09h00 — 19h00' },
  { jour: 'Jeudi', heures: '09h00 — 20h00' },
  { jour: 'Vendredi', heures: '09h00 — 20h00' },
  { jour: 'Samedi', heures: '09h00 — 18h00' },
  { jour: 'Dimanche', heures: 'Fermé' },
];

export function Contact() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section id="contact" className="px-6 py-24 md:px-10 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-extra-wide text-copper">
            Contact
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight md:text-4xl lg:text-5xl text-balance">
            Prenez rendez-vous
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: address & hours */}
          <div className="reveal space-y-10">
            <div className="flex items-start gap-4">
              <MapPin
                strokeWidth={1}
                className="mt-1 h-5 w-5 flex-shrink-0 text-copper"
              />
              <div>
                <h3 className="font-serif text-xl font-light">Adresse</h3>
                <p className="mt-2 text-sm leading-relaxed text-deep-brown/70">
                  24 rue des Métiers (adresse fictive)
                  <br />
                  59000 Lille, France
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone
                strokeWidth={1}
                className="mt-1 h-5 w-5 flex-shrink-0 text-copper"
              />
              <div>
                <h3 className="font-serif text-xl font-light">Téléphone</h3>
                <p className="mt-2 text-sm text-deep-brown/70">
                  03 20 00 00 00 (numéro fictif)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock
                strokeWidth={1}
                className="mt-1 h-5 w-5 flex-shrink-0 text-copper"
              />
              <div className="w-full">
                <h3 className="font-serif text-xl font-light">Horaires</h3>
                <p className="mt-1 text-xs text-deep-brown/50">
                  Horaires fictifs — démonstration
                </p>
                <dl className="mt-4 space-y-2">
                  {HORAIRES.map((h) => (
                    <div
                      key={h.jour}
                      className="flex justify-between border-b border-deep-brown/10 pb-2 text-sm"
                    >
                      <dt className="text-deep-brown/80">{h.jour}</dt>
                      <dd
                        className={
                          h.heures === 'Fermé'
                            ? 'text-deep-brown/40'
                            : 'text-deep-brown/70'
                        }
                      >
                        {h.heures}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Right: booking CTA */}
          <div className="reveal flex flex-col items-center justify-center rounded-sm bg-beige-light/50 p-10 text-center md:p-16">
            <h3 className="font-serif text-2xl font-light leading-snug md:text-3xl">
              Réserver une visite
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-deep-brown/70">
              Offrez-vous un moment de détente et de soin. Choisissez un créneau
              qui vous convient — nous vous accueillons dans un cadre apaisant.
            </p>
            <button
              type="button"
              onClick={() => setShowDemo(true)}
              className="mt-8 bg-deep-brown px-10 py-4 text-xs uppercase tracking-extra-wide text-ivory transition-all duration-400 hover:bg-copper"
            >
              Réserver un rendez-vous
            </button>
            <p className="mt-4 text-xs text-deep-brown/50">
              Bouton de démonstration
            </p>
          </div>
        </div>
      </div>

      {/* Demo modal */}
      {showDemo && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-deep-brown/60 px-6 animate-fade-in"
          onClick={() => setShowDemo(false)}
        >
          <div
            className="max-w-md bg-ivory p-10 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif text-2xl font-light text-deep-brown">
              Démonstration
            </h3>
            <div className="mx-auto mt-4 h-px w-12 bg-copper" />
            <p className="mt-6 text-sm leading-relaxed text-deep-brown/70">
              Atelier Sépia est un salon fictif. Ce site est une démonstration
              de réalisation web : la réservation en ligne n'est pas active et
              aucun rendez-vous ne sera pris.
            </p>
            <button
              type="button"
              onClick={() => setShowDemo(false)}
              className="mt-8 border border-deep-brown/30 px-8 py-3 text-xs uppercase tracking-extra-wide text-deep-brown transition-all duration-300 hover:bg-deep-brown hover:text-ivory"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
