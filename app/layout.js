import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], 
  weight: ["400"]
});

export const metadata = {
  title:"Avi K Creations | Reels & Cinematic Videography",
  description:"Capturing cinematic reels, weddings, and travel stories with creative storytelling and real emotions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${outfit.className} ${ovo.className} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}