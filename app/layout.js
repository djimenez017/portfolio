import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/sections/Footer";
import localFont from "next/font/local";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Font files can be colocated inside of `app`
const myFont = localFont(
  {
    src: "@/public/fonts/3d0e9b2d-4de0-4c48-a786-9fce71536001.woff",
    display: "swap",
  },
  {
    src: "@/public/fonts/4ced8776-2ebb-4c9a-9bae-1af0da9ca831.woff2",
    display: "swap",
  }
);

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body>
        {" "}
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
