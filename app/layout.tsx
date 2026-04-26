import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { inter } from "@/lib/font";

export const metadata: Metadata = {
  title: "Fitlife GYM - Your Ultimate Fitness Destination",
  description:
    "Discover Fitlife GYM, your ultimate fitness destination. We offer state-of-the-art facilities, expert trainers, and a supportive community to help you achieve your health and wellness goals. Join us today and transform your fitness journey with personalized workout plans, group classes, and nutrition guidance. Your path to a healthier lifestyle starts here at Fitlife GYM.",
  openGraph: {
    title: "Fitlife GYM - Your Ultimate Fitness Destination",
    description:
      "Discover Fitlife GYM, your ultimate fitness destination. We offer state-of-the-art facilities, expert trainers, and a supportive community to help you achieve your health and wellness goals. Join us today and transform your fitness journey with personalized workout plans, group classes, and nutrition guidance. Your path to a healthier lifestyle starts here at Fitlife GYM.",
    type: "website",
    url: "https://fitlifebd-vercel.app",
    siteName: "Fitlife GYM",
    images: [
      {
        url: "/banner/socialpreview.png",
        width: 1200,
        height: 630,
        alt: "Fitlife GYM – Your Ultimate Fitness Destination",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitlife GYM - Your Ultimate Fitness Destination",
    description:
      "Discover Fitlife GYM, your ultimate fitness destination. We offer state-of-the-art facilities, expert trainers, and a supportive community to help you achieve your health and wellness goals. Join us today and transform your fitness journey with personalized workout plans, group classes, and nutrition guidance. Your path to a healthier lifestyle starts here at Fitlife GYM.",
    images: ["/banner/socialpreview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body className="font-sans antialiased bg-[radial-gradient(119.18%_183.82%_at_0%_0%,rgba(24,30,40,0.80)_0%,#0A0A0C_40%),radial-gradient(119.18%_183.82%_at_100%_100%,rgba(0,229,255,0.04)_0%,#0A0A0C_40%)]">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
