import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flovia — Lead Capture & Follow-up Automation",
  description:
    "Flovia helps businesses capture enquiries, organise leads and automate follow-ups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}