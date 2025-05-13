"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Check, Package, ScreenShare, Zap } from "lucide-react";
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import ClientFaqComponent from "../../../_components/faq";

const ClientComponent = ({ dict }: { dict: any }) => {
    const {
        subtitle,
        subtitle2,
        paygTitle,
        paygDescription,
        payg_cta_title,
        payg_cta_description,
        other_cta_title,
        other_cta_description,
        implementation_bundles_title,
        implementation_bundles_description,
        requestQuoteButton,
        payg_packages,
        otherPackagesTitle,

        packages,
        otherPackages,
        reviews,
    } = dict.remoteServicesUSD;

    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <div className="mx-auto max-w-7xl px-4">
            <div className="flex text-gray-800 items-center justify-center py-12 font-semibold leading-tight tracking-tight">
                <h2 className="text-2xl flex items-center justify-center text-center">
                    {subtitle}
                    <br />
                    {subtitle2}
                </h2>
            </div>
            <div className="flex flex-col items-center justify-center py-4 md:py-12">
                <h2 className="text-2xl font-medium flex items-center mb-2">
                    <ScreenShare size={35} className="text-[#f4d752]" />
                    &nbsp; {implementation_bundles_title}
                </h2>
                <p>{implementation_bundles_description}</p>
            </div>
            <div className="flex justify-center flex-wrap">
                {packages.map((pkg: any) => (
                    <div
                        key={pkg.name}
                        className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md p-6 m-4"
                    >
                        <div className="flex justify-between">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                {pkg.name}
                                <p className="text-sm text-gray-500">{pkg.description}</p>
                            </h3>
                            <div className="text-right">
                                <p className="text-sm text-gray-400">{pkg.startAt}</p>
                                <p className="text-xl font-semibold">{pkg.price}</p>
                                <p className="text-sm text-gray-400">
                                    {pkg.validity}
                                </p>
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


            <div className="flex flex-col items-center justify-center py-4 md:py-12">
                <h2 className="text-2xl font-medium flex items-center mb-2 text-center">
                    <Zap size={35} className="text-[#f4d752]" />
                    &nbsp; {paygTitle}
                </h2>
                <p>{paygDescription}</p>
            </div>
            <div className="flex justify-center flex-wrap">
                {payg_packages.map((pkg: any) => (
                    <div
                        key={pkg.name}
                        className="w-full max-w-xl bg-white rounded-lg border border-gray-200 shadow-md p-6 mx-4"
                    >
                        <div className="flex justify-between">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                {pkg.name}
                                <p className="text-sm text-gray-500">{pkg.description}</p>
                            </h3>
                            <div className="text-right">
                                <p className="text-sm text-gray-400">{pkg.startAt}</p>
                                <p className="text-xl font-semibold">{pkg.price}</p>
                                <p className="text-sm text-gray-400">
                                    {pkg.validity}
                                </p>
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
            <div className="text-center mb-2 mt-8 flex flex-col items-center space-y-4">
                <div className="text-lg">
                    <p className="font-semibold">{payg_cta_title}</p>
                    <p>{payg_cta_description}</p>
                </div>
                <Link
                    href="contact-us"
                    className="bg-[#f4d752] text-xl py-4 px-6 mt-4 rounded-lg font-semibold"
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
                        className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md p-6 m-4"
                    >
                        <div className="flex justify-between">
                            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                                {pkg.name}
                            </h3>
                            <div className="text-right">
                                <p className="text-xl font-semibold">{pkg.price}</p>
                                <p className="text-sm text-gray-400">{pkg.time}</p>
                            </div>
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
            <div className="text-center mb-16 mt-8 flex flex-col items-center space-y-4">
                <div className="text-lg">
                    <p className="font-semibold">{other_cta_title}</p>
                    <p>{other_cta_description}</p>
                </div>
                <Link
                    href="contact-us"
                    className="bg-[#f4d752] text-xl py-4 px-6 mt-4 rounded-lg font-semibold"
                >
                    {requestQuoteButton}
                </Link>
            </div>

            <div className="flex items-center justify-center mt-16 mb-12">
                {/* === MOBILE : 1 review per slide === */}
                <div className="w-10/12 block sm:hidden">
                    <Carousel
                        plugins={[plugin.current as unknown as any]}
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent>
                            {reviews.map((review: any, idx: any) => (
                                <CarouselItem key={idx} className="p-1">
                                    <ReviewCard {...review} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious aria-label="Previous review" className="-left-20" />
                        <CarouselNext aria-label="Next review" className="-right-20" />
                    </Carousel>
                </div>

                {/* === DESKTOP (>=sm) : 4 reviews per slide === */}
                <div className="w-10/12 hidden sm:block">
                    <Carousel>
                        <CarouselContent>
                            {Array.from({ length: Math.ceil(reviews.length / 4) }).map((_, groupIndex) => (
                                <CarouselItem key={groupIndex} className="grid grid-cols-2 grid-rows-2 gap-4">
                                    {reviews
                                        .slice(groupIndex * 4, groupIndex * 4 + 4)
                                        .map((review: any, index: number) => (
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
            </div>


            <ClientFaqComponent dict={dict} />

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
