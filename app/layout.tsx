import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200","300","400", "500", "600", "700", "800", "900"],
});

const euclid = localFont({
  src: '../public/fonts/euclid-circular-a.ttf',
  variable: "--font-euclid",
});

export const metadata: Metadata = {
  title: "CodeXtreme Platfrom | Empowering African Tech Talent and Founders",
  description: "We are the infrastructure upon which African early tech talent and founders are discovered, inspired, nurtured, activated, and accelerated to build the next generation of world-class tech companies to drive impact on the continent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${euclid.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
