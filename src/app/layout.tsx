import type { Metadata } from "next";
import { Inter, Poppins} from "next/font/google";
import "./globals.css";
import HomePage from "@/Components/HomePage";
import About from "@/Components/About";
import Work from "@/Components/Work";
import Navbar from "@/Components/Navbar";
import Skills from "@/Components/Skills";
import Contact from "@/Components/Contact";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-poppins',
})

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
      <body className={`${inter.className} ${poppins.variable} scrollbar-hide`}>
        <div className="max-w-[100%] h-screen overflow-y-scroll overflow-x-hidden scrollbar-hide">
          <Navbar/>
          <HomePage/>
          <About/>
          <Skills/>
          <Work/>
          <Contact/>
        </div>
      </body>
    </html>
  );
}
