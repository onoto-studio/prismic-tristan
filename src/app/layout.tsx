import "./globals.css";
import localFont from 'next/font/local';
import { asText } from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";

import { createClient, repositoryName } from "@/prismicio";
import { Bounded } from "@/components/Bounded";

const switzer = localFont({
  src: './Switzer-Variable.ttf',
  display: 'swap',
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={switzer.className}>
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
      <div className="grid grid-cols-4 md:grid-cols-9 gap-4 px-4 py-4">
  {/* Colonne 1 : Titre du site à gauche sur desktop, reste à gauche sur mobile */}
  <div className="col-span-1 flex items-center justify-start">
    <PrismicNextLink href="/" className="text-xl font-semibold tracking-tight">
      <PrismicText field={settings.data.siteTitle} />
    </PrismicNextLink>
  </div>

  {/* Colonnes 2 à 3 sur mobile : vide, sur desktop col-span-5 */}
  <div className="hidden md:block md:col-span-5" />

  {/* Colonne 2 sur mobile / 7 sur desktop */}
  <div className="col-span-1 flex items-center justify-start">
    <PrismicNextLink field={navigation.data?.links[0]?.link}>
      <PrismicText field={navigation.data?.links[0]?.label} />
    </PrismicNextLink>
  </div>

  {/* Colonne 3 sur mobile / 8 sur desktop */}
  <div className="col-span-1 flex items-center justify-center">
    <PrismicNextLink field={navigation.data?.links[1]?.link}>
      <PrismicText field={navigation.data?.links[1]?.label} />
    </PrismicNextLink>
  </div>

  {/* Colonne 4 sur mobile / 9 sur desktop */}
  <div className="col-span-1 flex items-center justify-end">
    <PrismicNextLink field={navigation.data?.links[2]?.link}>
      <PrismicText field={navigation.data?.links[2]?.label} />
    </PrismicNextLink>
  </div>
</div>
    </Bounded>
  );
}
