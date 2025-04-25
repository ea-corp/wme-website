import React from "react";
import { YouTubeVideo } from "./monday-os-video";

type HeroVideoProps = {
    dictionary: {
        title: string;
        description: string;
        videoId: string;
        cta: {
            startTrial: {
                text: string;
                url: string;
            };
            requestDemo: {
                text: string;
                url: string;
            };
        };
    };
};

export default function HeroVideo({ dictionary }: HeroVideoProps) {
    return (
        <div className="flex flex-col items-center bg-gray-100 py-8 md:py-16 px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 px-20">
                {dictionary.title}
            </h2>
            <div className="w-full max-w-4xl px-4 md:px-0">
                <YouTubeVideo videoId={dictionary.videoId} />
            </div>
            <p className="text-center text-base md:text-lg py-8 px-4 md:px-0">
                {dictionary.description}
            </p>
            <div className="flex flex-col md:flex-row gap-4 w-full justify-center px-4 md:px-0">
                <a
                    href={dictionary.cta.startTrial.url}
                    target="_blank"
                    className="bg-[#5949d5] text-white py-3 md:py-4 px-4 md:px-6 rounded-xl flex items-center justify-center text-sm md:text-base"
                >
                    <p className="font-bold">{dictionary.cta.startTrial.text}</p>
                </a>
                <a
                    href={dictionary.cta.requestDemo.url}
                    className="bg-[#f4d752] text-black py-3 md:py-4 px-4 md:px-6 rounded-xl flex items-center justify-center text-sm md:text-base"
                >
                    <p className="font-bold">{dictionary.cta.requestDemo.text}</p>
                </a>
            </div>
        </div>
    );
}