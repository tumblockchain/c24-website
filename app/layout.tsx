import type { Metadata } from "next";
import { Raleway, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const raleway = Raleway({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TUM Blockchain Conference 24",
  description:
    "Germany's leading student-run conference exploring the frontiers of blockchain technology",
  openGraph: {
    title: "TUM Blockchain Conference 24",
    description:
      "Germany's leading student-run conference exploring the frontiers of blockchain technology",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://tally.so/widgets/embed.js"></Script>
        <Script
          src={`https://cdn-cookieyes.com/client_data/6331baf83b563ec3150ad4bb/script.js`}
          strategy="beforeInteractive"
        ></Script>
      </head>
      <body className={montserrat.className}>{children}</body>
      <script
        defer
        data-domain="conference.tum-blockchain.com"
        src="https://plausible.rbg.tum-blockchain.com/js/script.js"
      ></script>
    </html>
  );
}
