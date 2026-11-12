interface GalleryItem {
  image: string;
  alt: string;
  span: string;
}

const GALLERY: GalleryItem[] = [
  {
    image:
      'https://images.pexels.com/photos/696285/pexels-photo-696285.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: "Coiffure femme réalisée dans le salon Atelier Sépia",
    span: 'lg:row-span-2',
  },
  {
    image:
      'https://images.pexels.com/photos/3992873/pexels-photo-3992873.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: "Coiffeur au travail dans une ambiance chaleureuse",
    span: '',
  },
  {
    image:
      'https://images.pexels.com/photos/6391646/pexels-photo-6391646.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: "Jeune femme avec une coiffure aux boucles ombrées",
    span: '',
  },
  {
    image:
      'https://images.pexels.com/photos/7195803/pexels-photo-7195803.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: "Intérieur élégant du salon de coiffure",
    span: 'lg:row-span-2',
  },
  {
    image:
      'https://images.pexels.com/photos/3993304/pexels-photo-3993304.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: "Coloration appliquée avec précision par un coiffeur",
    span: '',
  },
  {
    image:
      'https://images.pexels.com/photos/32329616/pexels-photo-32329616.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: "Coupe homme contemporaine réalisée au salon",
    span: '',
  },
];

export function Gallery() {
  return (
    <section id="galerie" className="px-6 py-24 md:px-10 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-extra-wide text-copper">
            Galerie
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight md:text-4xl lg:text-5xl text-balance">
            Coiffures & ambiance
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4 lg:grid-rows-3 lg:auto-rows-fr">
          {GALLERY.map((item, i) => (
            <div
              key={i}
              className={`reveal group overflow-hidden ${item.span}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative h-full min-h-[200px]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-deep-brown/0 transition-colors duration-500 group-hover:bg-deep-brown/15" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
