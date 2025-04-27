// components/ClientComponent.tsx
"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Check, Package, ScreenShare } from "lucide-react";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Faq from "./faq";

const ClientComponent = ({ dict }: { dict: any }) => {
    const {
        title,
        subtitle,
        requestQuoteButton,
        otherPackagesTitle,
        contactUsMessage,
        bookFreeCallButton,
        packages,
        otherPackages,
        reviews,
    } = dict.remoteServices;

    return (
        <div className="mx-auto max-w-7xl px-4">
            <div className="bg-gray-100 text-center pt-16 pb-6 md:py-16 overflow-x-hidden">
                <h2 className="text-4xl font-semibold">{title}</h2>
            </div>
            <div className="flex items-center justify-center py-12">
                <h2 className="text-2xl font-medium flex items-center">
                    <ScreenShare size={35} className="text-yellow-400" />
                    &nbsp; {subtitle}
                </h2>
            </div>
            <div className="flex justify-center flex-wrap">
                {packages.map((pkg: any) => (
                    <div
                        key={pkg.name}
                        className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-md p-6 m-4"
                    >
                        <div className="flex justify-between">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                {pkg.name}
                            </h3>
                            <div className="text-right">
                                <p className="text-sm text-gray-400">{pkg.validity}</p>
                            </div>
                        </div>
                        <div>
                            <p className="py-2 text-sm">{pkg.info}</p>
                        </div>
                        <Separator className="my-2" />
                        <div className="mt-2 mb-4"></div>
                        <ul className="mb-4">
                            {pkg.features &&
                                pkg.features.map((feature: string, index: number) => (
                                    <li key={index} className="flex items-center py-2">
                                        <Check className="flex-shrink-0 h-6 w-6 text-yellow-400 mr-4" />
                                        <p className="text-medium text-gray-700 flex-1">
                                            {feature}
                                        </p>
                                    </li>
                                ))}
                            <p>{pkg.custom}</p>
                        </ul>
                    </div>
                ))}
            </div>

            <div className="text-center my-16">
                <Link
                    href="contact-us"
                    className="bg-[#f4d752] text-2xl py-4 px-4 rounded-lg font-medium"
                >
                    {requestQuoteButton}
                </Link>
            </div>

            <div className="flex items-center justify-center py-4 md:py-12">
                <h2 className="text-2xl font-medium flex items-center">
                    <Package size={35} className="text-[#f4d752]" />
                    &nbsp; {otherPackagesTitle}
                </h2>
            </div>
            <div className="flex justify-center flex-wrap">
                {otherPackages.map((pkg: any) => (
                    <div
                        key={pkg.name}
                        className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-md p-6 m-4"
                    >
                        <div className="flex justify-between">
                            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                                {pkg.name}
                            </h3>
                        </div>
                        <Separator className="my-2" />
                        <ul className="mb-4">
                            {pkg.features.map((feature: string, index: number) => (
                                <li key={index} className="flex items-center py-2">
                                    <Check className="flex-shrink-0 h-6 w-6 text-yellow-400 mr-4" />
                                    <p className="text-medium text-gray-700 flex-1">{feature}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center mt-16 mb-12">
                <Carousel className="w-10/12">
                    <CarouselContent>
                        {Array.from({ length: Math.ceil(reviews.length / 4) }).map((_, groupIndex) => (
                            <CarouselItem key={groupIndex} className="grid grid-cols-2 grid-rows-2 gap-4">
                                {reviews.slice(groupIndex * 4, groupIndex * 4 + 4).map((review: any, index: number) => (
                                    <div key={index} className="p-1 h-full">
                                        <ReviewCard {...review} />
                                    </div>
                                ))}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious aria-label="Previous review" className="-left-20" />
                    <CarouselNext aria-label="Next review" className="-right-20" />
                </Carousel>
            </div>

            <Faq dict={dict} />
            <div className="py-8 md:py-16 flex items-center justify-center flex-col">
                <h3 className="text-2xl font-medium text-center pb-4">
                    {contactUsMessage}
                </h3>
                <div className="flex w-full ml-4 mt-4 justify-center">
                    <a
                        href="contact-us"
                        target="_blank"
                        className="bg-[#f4d752] text-black py-4 px-6 rounded-xl flex"
                    >
                        <p className="font-bold text-sm">{bookFreeCallButton}</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

type ReviewCardProps = {
    projectName: string;
    rating: number; // Assuming a scale of 0 to 5
    reviewText: string;
    sourceLogo: string; // URL to the image source
};

const ReviewCard: React.FC<ReviewCardProps> = ({
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
            const maxHeight = 150; // Define the maximum height before truncation
            if (textHeight > maxHeight) {
                setIsTruncated(true);
            } else {
                setIsTruncated(false);
            }
        }
    }, [reviewText]); // Add reviewText as a dependency to re-evaluate if the text changes

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

export default ClientComponent;
