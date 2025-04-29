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
  className={clsx("bg-white h-screen flex items-center justify-center", index === 0 && "pt-0 md:pt-0")}
>
  {isFilled.image(image) && (
    <div className="aspect-[3/2] w-full max-w-5xl bg-gray-100">
      <PrismicNextImage
        field={image}
        sizes="75vw"
        className="w-full h-full object-cover"
      />
    </div>
  )}
</Bounded>
  );
};

export default Image;
