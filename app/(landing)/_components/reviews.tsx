import Image from 'next/image';
import React from 'react';


type ReviewCardProps = {
    projectName: string;
    rating: number; // Assuming a scale of 0 to 5
    reviewText: string;
    sourceLogo: string; // URL to the image source
  };
  

export const ReviewCard: React.FC<ReviewCardProps> = ({ projectName, rating, reviewText, sourceLogo }) => {
  const ratingStars = Array.from({ length: 5 }, (_, index) => (
    <span key={index}>{index < rating ? '★' : '☆'}</span>
  ));

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow space-y-2 overflow-x-hidden">
      <div className="text-sm font-semibold">{projectName} </div>
      <div className="text-xs text-green-500">{ratingStars}  <span className="text-gray-800">5.O</span></div>
      <blockquote className="text-sm italic">“{reviewText}”</blockquote>
      <div className="flex justify-end">
        <Image src={sourceLogo} alt="Review source logo" width={100} height={50} />
      </div>
    </div>
  );
};


