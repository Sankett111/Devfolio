
"use client";

import { useRef } from "react";

export default function PixelArtVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative aspect-7/5 w-full overflow-hidden">
      <video
        ref={videoRef}
        src="/videos/pixel-art2.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/pixel-art-poster.webp"
        width={700}
        height={400}
        className="absolute h-full w-full object-contain translate-y-5"
      />
    </div>
  );
}
