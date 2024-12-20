import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTranstition from "@/components/PageTranstition";
import StairTranstition from "@/components/StairTranstition";
import { Toaster } from "@/components/ui/sonner";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: {
    template: "%s | Aniket Jadhav",
    default: "Aniket Jadhav",
  },
  description:
    "Explore the portfolio of Aniket Jadhav, a web developer specializing in Next.js, React, and TypeScript. Discover projects, skills, and experience in modern web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>
        <Header />
        <StairTranstition />
        <PageTranstition>{children}</PageTranstition>
        <Toaster richColors />
      </body>
    </html>
  );
}
