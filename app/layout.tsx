import type { Metadata } from "next";
import { Geist, Geist_Mono, Krona_One, Poppins } from "next/font/google";
import "./globals.css";
import HeaderPage from "@/component/Header/page";
import FooterGlobal from "@/component/Footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kronaOne = Krona_One({
  variable: '--font-krona-one',
  weight: '400',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kronaOne.variable} ${poppins.variable} antialiased`}
      >
        <HeaderPage />
        {children}
        <FooterGlobal />
      </body>
    </html>
  );
}
