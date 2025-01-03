// import React, { useEffect, useRef } from "react";

// declare global {
//   interface Window {
//     YT: any;
//     onYouTubeIframeAPIReady: () => void;
//   }
// }

// interface YouTubePlayerProps {
//   url: string;
//   onEnded?: () => void;
// }

// export function YouTubePlayer({ url, onEnded }: YouTubePlayerProps) {
//   const playerRef = useRef<any>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Load YouTube IFrame API
//     const tag = document.createElement("script");
//     tag.src = "https://www.youtube.com/iframe_api";
//     const firstScriptTag = document.getElementsByTagName("script")[0];
//     firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

//     // Initialize player when API is ready
//     window.onYouTubeIframeAPIReady = () => {
//       const videoId = url.split("v=")[1]?.split("&")[0];
      
//       playerRef.current = new window.YT.Player(containerRef.current, {
//         height: "100%",
//         width: "100%",
//         videoId,
//         playerVars: {
//           autoplay: 1,
//           controls: 1,
//         },
//         events: {
//           onStateChange: (event: any) => {
//             if (event.data === window.YT.PlayerState.ENDED) {
//               onEnded?.();
//             }
//           },
//         },
//       });
//     };

//     return () => {
//       if (playerRef.current) {
//         playerRef.current.destroy();
//       }
//     };
//   }, [url]);

//   return <div ref={containerRef} className="w-full h-full" />;
// }

import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YouTubePlayerProps {
  url: string;
  onEnded?: () => void;
}

export function YouTubePlayer({ url, onEnded }: YouTubePlayerProps) {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const extractVideoId = (url: string): string | null => {
    try {
      const urlObj = new URL(url);

      if (urlObj.hostname.includes("youtube.com")) {
        return urlObj.searchParams.get("v");
      } else if (urlObj.hostname.includes("youtu.be")) {
        return urlObj.pathname.slice(1);
      } else if (urlObj.hostname.includes("youtube-nocookie.com")) {
        return urlObj.pathname.split("/").pop();
      }

      return null;
    } catch (err) {
      console.error("Invalid URL:", err);
      return null;
    }
  };

  useEffect(() => {
    const initializePlayer = () => {
      const videoId = extractVideoId(url);
      if (!videoId) {
        console.error("Invalid YouTube URL");
        return;
      }

      playerRef.current = new window.YT.Player(containerRef.current, {
        height: "100%",
        width: "100%",
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 1,
        },
        events: {
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              onEnded?.();
            }
          },
        },
      });
    };

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = initializePlayer;
    } else {
      initializePlayer();
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [url]);

  return <div ref={containerRef} className="w-full h-full" />;
}
