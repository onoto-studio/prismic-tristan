import { FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

import { Bounded } from "@/components/Bounded";

type ImageProps = SliceComponentProps<Content.ImageSlice>;

const Image: FC<ImageProps> = ({ slice, index }) => {
  const image = slice.primary.image;

  return (
    <Bounded
      as="section"
      className={clsx("bg-white h-screen", index === 0 && "pt-0 md:pt-0")}
    >
      {isFilled.image(image) && (
        <div>
          <PrismicNextImage field={image} className="w-full h-screen object-cover" />
        </div>
      )}
    </Bounded>
  );
};

export default Image;
