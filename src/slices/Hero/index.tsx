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
    <section className="bg-white min-h-[85vh] text-slate-900">
      <Bounded yPadding="lg">
        <div className="grid grid-cols-9 gap-4 items-center">
          {/* Image dans les 6 premières colonnes */}
          {isFilled.image(backgroundImage) && (
            <div className="col-span-6  pr-6">
              <PrismicNextImage
                field={backgroundImage}
                alt=""
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          )}
          </div>
        </div>
      </Bounded>
    </section>
  );
};



export default Hero;
