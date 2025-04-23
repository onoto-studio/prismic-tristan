import "./globals.css";
import localFont from 'next/font/local';
import { asText } from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";

import { createClient, repositoryName } from "@/prismicio";
import { Bounded } from "@/components/Bounded";

const satoshi = localFont({
  src: './Satoshi-Variable.ttf',
  display: 'swap',
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={satoshi.className}>
      <body className="overflow-x-hidden antialiased">
        <Header />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");

  return (
    <Bounded as="header" yPadding="sm">
      {/* Grid avec 9 colonnes sur desktop et 4 sur mobile */}
      <div className="grid grid-cols-9 gap-4 px-4 py-4 sm:grid-cols-4">
        {/* Première colonne : le nom */}
        <div className="col-span-1 flex items-center justify-start">
          <PrismicNextLink href="/" className="text-xl font-semibold tracking-tight">
            <PrismicText field={settings.data.siteTitle} />
          </PrismicNextLink>
        </div>

        {/* Colonne vide entre le nom et le menu */}
        <div className="col-span-5"></div>

        {/* Colonnes du menu, sur desktop dans les 3 dernières colonnes */}
        <div className="col-span-1 flex items-center justify-end">
          <PrismicNextLink field={navigation.data?.links[0]?.link}>
            <PrismicText field={navigation.data?.links[0]?.label} />
          </PrismicNextLink>
        </div>

        <div className="col-span-1 flex items-center justify-end">
          <PrismicNextLink field={navigation.data?.links[1]?.link}>
            <PrismicText field={navigation.data?.links[1]?.label} />
          </PrismicNextLink>
        </div>

        <div className="col-span-1 flex items-center justify-end">
          <PrismicNextLink field={navigation.data?.links[2]?.link}>
            <PrismicText field={navigation.data?.links[2]?.label} />
          </PrismicNextLink>
        </div>
      </div>
    </Bounded>
  );
}
