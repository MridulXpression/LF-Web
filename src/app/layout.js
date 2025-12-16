import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import RazorpayScriptLoader from "@/components/razorpay";
import GlobalLoader from "@/components/GlobalLoader";

const clashDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
});

export const metadata = {
  title: "LaFetch",
  description: "LaFetch - Your one-stop online shopping destination",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clashDisplay.variable}>
      <body className={`${clashDisplay.className} antialiased`}>
        <Providers>
          {/* ✅ Global Loading Indicator */}
          <GlobalLoader />
          {/* ✅ Load Razorpay script globally */}
          <RazorpayScriptLoader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
