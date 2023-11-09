import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import localFont from "next/font/local";

const myFont = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "To-Do App",
  description: "Dallin's To-Do App",
};

const materialSymbols = localFont({
  variable: "--font-family-symbols",
  style: "normal",
  src: "../../node_modules/material-symbols/material-symbols-rounded.woff2",
  display: "block",
  weight: "100 700",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <div className={materialSymbols.variable}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
