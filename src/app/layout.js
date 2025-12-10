import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import RazorpayScriptLoader from "@/components/razorpay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LaFetch",
  description: "LaFetch - Your one-stop online shopping destination",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-myfont antialiased`}
      >
        {/* ✅ Load Razorpay script globally */}
        <RazorpayScriptLoader />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
