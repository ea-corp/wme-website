import { CirclePlay } from "lucide-react";
import React, { useState } from "react";

export const YouTubeVideo: React.FC<{ videoId: string }> = ({ videoId }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  const youtubeThumbnailUrl = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div
      className="w-full aspect-video relative"
      onClick={handleVideoLoad}
      style={{ cursor: "pointer" }}
    >
      {isVideoLoaded ? (
        <iframe
          className="w-full h-full"
          src={youtubeEmbedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          <img
            src={youtubeThumbnailUrl}
            alt="YouTube video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-play md:w-[150px] md:h-[150px]"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
};