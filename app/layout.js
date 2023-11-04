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
