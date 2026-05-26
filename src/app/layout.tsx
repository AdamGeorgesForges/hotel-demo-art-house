import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Paper Mill House | Arts District Hotel Houston",
  description: "Sleep inside the gallery. A creative boutique hotel in Houston's Arts District, featuring curated artist spaces, live music, and gallery exhibitions.",
  keywords: "art hotel, Houston Arts District hotel, boutique hotel Sawyer Yards, gallery hotel Houston",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
