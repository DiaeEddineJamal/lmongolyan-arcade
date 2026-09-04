import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lmogolyan Arcade",
  description: "A retro-futuristic multiplayer arcade portal.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en"><body>{children}</body></html>
  );
}
