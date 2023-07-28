import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paper Rock Scissors",
  description: "Come and play the Paper Rock Scissors game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} main`}>{children}</body>
    </html>
  );
}
