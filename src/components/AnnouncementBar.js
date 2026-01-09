"use client";
import React from "react";
import Image from "next/image";
import useAnnouncements from "@/hooks/useAnnouncements";

export default function AnnouncementBar() {
  const { announcements, loading, error } = useAnnouncements();

  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-zinc-800 overflow-hidden py-3 z-30">
      {loading || !announcements.length ? (
        <div className="flex items-center justify-center h-10 text-neutral-100 text-sm">
          {error ? "Error loading announcements" : "Loading..."}
        </div>
      ) : (
        <div className="flex animate-scroll whitespace-nowrap">
          {/* Duplicate the content multiple times for seamless loop */}
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center">
              {announcements.map((item, index) => (
                <React.Fragment key={`${setIndex}-${index}`}>
                  <div className="h-8 w-px bg-neutral-100/30 mx-4" />
                  <div className="flex items-center gap-2 mx-8">
                    <div className="w-7 h-7 bg-zinc-300/20 rounded-full flex items-center justify-center">
                      <Image
                        src={item.iconUrl}
                        alt={item.text}
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-neutral-100 text-sm font-[400] uppercase tracking-wide">
                      {item.text}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      )}

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
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
