import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { Header } from "@/components/Header/Header";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sou Latina - Moda com Personalidade",
  description: "Descubra a elegância da moda latina contemporânea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfairDisplay.variable} ${montserrat.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
