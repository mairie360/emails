import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emails",
  description: "The web service for Emails",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
