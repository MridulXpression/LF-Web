"use client";
import React from "react";
import { Lock, Gift, Package } from "lucide-react";

export default function AnnouncementBar() {
  const announcements = [
    { icon: Lock, text: "100% SECURE SHOPPING" },
    { icon: Gift, text: "FREE GIFT WRAPPING" },
    { icon: Package, text: "EASY & FREE RETURNS" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-zinc-800 overflow-hidden py-3 z-50">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* Duplicate the content multiple times for seamless loop */}
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center">
            {announcements.map((item, index) => (
              <React.Fragment key={`${setIndex}-${index}`}>
                <div className="flex items-center gap-2 mx-8">
                  <div className="w-9 h-9 bg-zinc-300/20 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-neutral-100" />
                  </div>
                  <span className="text-neutral-100 text-sm font-medium uppercase tracking-wide">
                    {item.text}
                  </span>
                </div>
                {index < announcements.length - 1 && (
                  <div className="h-8 w-px bg-neutral-100/30 mx-4" />
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
