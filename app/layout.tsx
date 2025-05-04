import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1soom - 당신의 한숨에 생기를 불어넣는 팀",
  description:
    "당신의 지친 한숨이 생기 넘치는 한 숨이 되도록. 1soom은 당신이 잠깐 멈추고 싶을 때, 당신 옆에 조용히 앉아 말없이 함께 한숨 쉬어줄 수 있는 팀입니다.",
  keywords: ["1soom", "디스코드 봇", "게임", "개발", "한숨", "휴식"],
  authors: [{ name: "1soom" }],
  creator: "1soom",
  publisher: "1soom",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://1soom.xyz",
    title: "1soom - 당신의 한숨에 생기를 불어넣는 팀",
    description:
      "당신의 지친 한숨이 생기 넘치는 한 숨이 되도록. 1soom은 당신이 잠깐 멈추고 싶을 때, 당신 옆에 조용히 앉아 말없이 함께 한숨 쉬어줄 수 있는 팀입니다.",
    siteName: "1soom",
    images: [
      {
        url: "https://1soom.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "1soom - 당신의 한숨에 생기를 불어넣는 팀",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1soom - 당신의 한숨에 생기를 불어넣는 팀",
    description:
      "당신의 지친 한숨이 생기 넘치는 한 숨이 되도록. 1soom은 당신이 잠깐 멈추고 싶을 때, 당신 옆에 조용히 앉아 말없이 함께 한숨 쉬어줄 수 있는 팀입니다.",
    images: ["https://1soom.xyz/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
  alternates: {
    canonical: "https://1soom.xyz",
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
