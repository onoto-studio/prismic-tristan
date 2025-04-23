import { FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import type { SliceComponentProps, JSXMapSerializer } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h2" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
};

type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;

  return (
    <section className="relative bg-slate-900 text-white">
      {isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=""
          fill={true}
          className="pointer-events-none select-none object-cover opacity-40"
        />
      )}

      <Bounded yPadding="lg" className="relative">
        <div className="grid grid-cols-9 gap-4">
          {/* Colspan 6 pour la partie vide à gauche (laisse l'image visible en fond) */}
          <div className="col-span-6" />

          {/* Colspan 3 pour le contenu textuel à droite */}
          <div className="col-span-3 flex flex-col items-start justify-center space-y-6 text-left">
            <div>
              <PrismicRichText
                field={slice.primary.text}
                components={components}
              />
            </div>
            {isFilled.link(slice.primary.buttonLink) && (
              <PrismicNextLink
                field={slice.primary.buttonLink}
                className="inline-block rounded-sm bg-white px-5 py-3 font-medium text-slate-800"
              >
                {slice.primary.buttonText || "Learn More"}
              </PrismicNextLink>
            )}
          </div>
        </div>
      </Bounded>
    </section>
  );
};


export default Hero;
