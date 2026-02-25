"use client";
import React from "react";
import Image from "next/image";
import useAnnouncements from "@/hooks/useAnnouncements";

export default function AnnouncementBar() {
  const { announcements, loading, error } = useAnnouncements();

  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-zinc-800 overflow-hidden py-1 z-30">
      {loading || !announcements.length ? (
        <div className="flex items-center justify-center h-10 text-neutral-100 text-sm">
          {error ? "Error loading announcements" : "Loading..."}
        </div>
      ) : (
        <div className="flex overflow-hidden">
          <div className="flex whitespace-nowrap animate-scroll">
            {/* Duplicate announcements once for seamless loop */}
            {[...announcements, ...announcements].map((item, index) => (
              <React.Fragment key={index}>
                <div className="h-8 w-px bg-neutral-100/30 mx-4" />
                <div className="flex items-center gap-2 mx-8">
                  <div className="w-6 h-6 bg-zinc-300/20 rounded-full flex items-center justify-center">
                    {item.iconUrl && item.iconUrl.trim() !== "" && (
                      <Image
                        src={item.iconUrl}
                        alt={item.text}
                        width={10}
                        height={10}
                        className="w-4 h-4"
                      />
                    )}
                  </div>
                  <span className="text-neutral-100 text-[12px] font-[400] uppercase tracking-wide">
                    {item.text}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
          will-change: transform;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
