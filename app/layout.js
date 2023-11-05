import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/sections/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppin",
  weight: "300",
});

export const metadata = {
  title: "Daniel Jimenez | Web Developer",
  description:
    "Web Developer with a passion for creating stunning and functional web applications",
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "<https://nextjs.org>",
    siteName: "Next.js",
    images: [
      {
        url: "<https://example.com/api/preview>",
        width: 1200,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth font-sans ${poppins.variable}`}>
      <body>
        {" "}
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
