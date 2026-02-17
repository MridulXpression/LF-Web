import { Geist } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import RazorpayScriptLoader from "@/components/razorpay";
import GlobalLoader from "@/components/GlobalLoader";
import AnnouncementBar from "@/components/AnnouncementBar";
import FloatingVideoAd from "@/components/FloatingVideoAd";

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
  icons: {
    icon: "/favicon.png",
  },
};

// 👇 ADD THIS
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clashDisplay.variable}>
      <head>
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '708965264792579');
        fbq('track', 'PageView');
      `,
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LJ1BQ15P6B"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LJ1BQ15P6B');
            `,
          }}
        />
      </head>

      <body className={`${clashDisplay.className} antialiased`}>
        {/* Meta Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=708965264792579&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Providers>
          <AnnouncementBar />
          <GlobalLoader />
          <RazorpayScriptLoader />
          {/* <FloatingVideoAd /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
