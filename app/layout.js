import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/sections/Footer";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppin",
  weight: "300",
});

export const metadata = {
  title: "My Portfolio",
  description: "Daniel Jimenez – Web Developer & SysAdmin",
  metadataBase: new URL("https://www.jimenez.tech"),
  // openGraph: {
  //images: ["/og-image.png"],
  //},
  twitter: {
    //card: "summary_large_image",
    title: "Daniel Jimenez Portfolio",
    //images: ["/twitter-card.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth font-sans ${poppins.variable}`}>
      <body>
        {" "}
        <Navigation />
        {children} <Analytics />
        <Footer />
      </body>
    </html>
  );
}
