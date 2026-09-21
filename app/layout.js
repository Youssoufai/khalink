import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
export const metadata = {
  title: "Khalil Nur Khalil | Economist & Investment Strategist",
  description:
    "Khalil Nur Khalil, Economic Adviser to the Katsina State Government.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
