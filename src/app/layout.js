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
      <body className={`${myFont.className} bg-slate-100 dark:bg-slate-900 `}>
        <div className={`${materialSymbols.variable} container mx-auto bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 h-[100dvh]`}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
