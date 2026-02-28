import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function Rickroll() {
  const playerRef = useRef<any>(null);
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        videoId: "dQw4w9WgXcQ",
        playerVars: {
          autoplay: 1,
          mute: 0,
          controls: 0,
          loop: 1,
          playlist: "dQw4w9WgXcQ",
        },
      });
    };
  };

  return (
    <div className="relative w-full h-screen">
      {entered ? (
        <div id="yt-player" className="w-full h-full" />
      ) : (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          <p className="text-sm text-muted-foreground mb-6 tracking-widest uppercase">
            sogeking.kz
          </p>
          <Button onClick={handleEnter} variant="outline">
            Don't click
          </Button>
        </div>
      )}
    </div>
  );
}
