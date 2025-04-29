import { FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicText, type SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

import { Bounded } from "@/components/Bounded";

type QuoteProps = SliceComponentProps<Content.QuoteSlice>;

const Quote: FC<QuoteProps> = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-white">
      {isFilled.richText(slice.primary.quote) && (
        <figure className="grid gap-6">
          <blockquote>
            <p
              className={clsx(
                "text-3xl leading-tight md:text-3xl md:leading-tight",
                !isFilled.keyText(slice.primary.source) && "text-center",
              )}
            >
              <span className="-ml-3.5 select-none text-slate-200 md:-ml-3">
                &ldquo;
              </span>
              <PrismicText field={slice.primary.quote} />
              <span className="select-none text-slate-700">&rdquo;</span>
            </p>
          </blockquote>
          {isFilled.keyText(slice.primary.source) && (
            <figcaption className="text-right">
              &mdash; {slice.primary.source}
            </figcaption>
          )}
        </figure>
      )}
    </Bounded>
  );
};

export default Quote;
