import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/sections/Footer";
import localFont from "next/font/local";

export const metadata = {
  title: "Daniel Jimenez | Web Developer",
  description:
    "Web Developer with a passion for creating stunning and functional web applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {" "}
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
