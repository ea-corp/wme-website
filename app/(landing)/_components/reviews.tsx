"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


type ReviewCardProps = {
  projectName: string;
  rating: number; // Assuming a scale of 0 to 5
  reviewText: string;
  sourceLogo: string; // URL to the image source
};

export const ReviewCard: React.FC<ReviewCardProps> = ({
  projectName,
  rating,
  reviewText,
  sourceLogo,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const textRef = useRef<HTMLQuoteElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  const ratingStars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={sourceLogo.includes("upwork") ? "text-green-500" : "text-yellow-400"}>
      {index < rating ? "★" : "☆"}
    </span>
  ));

  useEffect(() => {
    if (textRef.current) {
      const textHeight = textRef.current.scrollHeight;
      const maxHeight = 150; // Définissez la hauteur maximale avant la troncature
      if (textHeight > maxHeight) {
        setIsTruncated(true);
      } else {
        setIsTruncated(false);
      }
    }
  }, [reviewText]); // Ajoutez reviewText comme dépendance pour réévaluer si le texte change

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg flex flex-col justify-between shadow space-y-2 overflow-x-hidden h-full">
      <div className="space-y-2">
        <div className="text-sm font-semibold">{projectName}</div>
        <div className="text-xs text-green-500">
          {ratingStars} <span className="text-gray-800">5.0</span>
        </div>
        <blockquote
          className={`text-sm italic ${isExpanded ? "" : "max-h-[150px] overflow-hidden"}`}
          ref={textRef}
        >
          “{reviewText}”
        </blockquote>
        {isTruncated && !isExpanded && (
          <button
            className="text-blue-500 text-xs mt-2"
            onClick={toggleExpand}
          >
            Show more
          </button>
        )}
        {isTruncated && isExpanded && (
          <button
            className="text-blue-500 text-xs mt-2"
            onClick={toggleExpand}
          >
            Show less
          </button>
        )}
      </div>

      <div className="flex justify-end">
        <Image
          src={sourceLogo}
          alt="Review source logo"
          width={sourceLogo.includes("upwork") ? 100 : 180}
          height={50}
        />
      </div>
    </div>
  );
};
