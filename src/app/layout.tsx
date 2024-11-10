import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "./providers";
import Footer from "@/components/Footer/Footer";
import { ProviderSession } from "./Provider";

export const metadata: Metadata = {
  title: "JJ Constructora",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <ProviderSession>
            {children}
            <Footer />
          </ProviderSession>
        </Providers>
      </body>
    </html>
  );
}
