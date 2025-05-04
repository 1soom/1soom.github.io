import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "한숨 - 1soom",
  description: "당신의 지친 한숨이 생기 넘치는 한 숨이 되도록.",
  keywords: ["1soom", "앱", "웹", "개발", "한숨"],
  authors: [{ name: "1soom" }],
  creator: "1soom",
  publisher: "1soom",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://1soom.xyz",
    title: "한숨 - 1soom",
    description: "당신의 지친 한숨이 생기 넘치는 한 숨이 되도록.",
    siteName: "1soom",
    images: [
      {
        url: "https://1soom.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "한숨 - 1soom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "한숨 - 1soom",
    description: "당신의 지친 한숨이 생기 넘치는 한 숨이 되도록.",
    images: ["https://1soom.xyz/og-image.png"],
  },
  robots: {
    index: true,
    follow: false,
    googleBot: {
      index: true,
      follow: false,
      "max-image-preview": "standard",
      "max-snippet": 160,
      "max-video-preview": 0,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
