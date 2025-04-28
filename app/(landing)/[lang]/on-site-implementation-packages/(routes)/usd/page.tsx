import { ReviewCard } from "@/app/(landing)/_components/reviews";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Building, Check } from "lucide-react";
import { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import Link from "next/link";

export const metadata: Metadata = {
  title: "On-Site Consulting - WME Solutions",
  description: "Discover our on-site consulting services tailored to optimize your business operations. Our expert consultants work closely with your team to analyze, strategize, and implement tailored solutions that drive efficiency and success.",
};

export default async function ServicePage({ params }: any) {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  const {
    remoteServicesTitle,
    remoteImplementationTitle,
    introText,
    packages,
    reviews,
    pricingText,
    bookFreeCallButton,
  } = dict.onsiteConsultingUSD;

  const posts = [
    dict.blog.aWeekOfInnovationAndCollaboration,
    dict.blog.aWeekOfTransformativeCollaborationInOranmore,
    dict.blog.bridgingBusinessAndTechnologyAPivotalWeekInBangkok,
  ];

  posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="bg-gray-100 text-center py-16">
        <h2 className="text-4xl font-semibold">{remoteServicesTitle}</h2>
      </div>
      <div className="flex items-center justify-center py-12">
        <h2 className="text-2xl font-medium flex items-center">
          <Building size={35} className="text-yellow-400" />
          &nbsp; {remoteImplementationTitle}
        </h2>
      </div>
      <p className="px-8 md:px-20 py-8" dangerouslySetInnerHTML={{ __html: introText }} />
      <div className="flex justify-center flex-wrap">
        {packages.map((pkg: any) => (
          <div
            key={pkg.name}
            className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-md p-6 m-4"
          >
            <div className="flex justify-between flex-col items-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {pkg.name}
              </h3>
              <br />
              <div className="text-right">
                <p className="text-gray-500 text-sm text-center">{pkg.price}</p>
              </div>
            </div>
            <br />
            <p className="text-sm text-center text-gray-500">
              {pkg.description}
            </p>
            <Separator className="my-4" />

            <div className="mt-2 mb-4"></div>
            <ul className="mb-4">
              {pkg.features.map((feature: any, index: any) => (
                <li key={index} className="flex items-center py-2">
                  <Check className="flex-shrink-0 h-6 w-6 text-[#f4d752] mr-4" />
                  <p className="text-medium text-gray-700 flex-1">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(0, 20).map((post, index) => (
          <Link key={index} href={`/${lang}/blog/${post.slug}`} passHref>
            <div className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div>
                <img
                  src={post.bannerImage}
                  alt={post.title}
                  className="w-full h-[350px] object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
                <p className="text-lg font-medium">{post.location}</p>
                <p className="text-lg font-medium">{post.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center mt-16 mb-12">
        <Carousel className="w-10/12">
          <CarouselContent>
            {Array.from({ length: Math.ceil(reviews.length / 4) }).map((_, groupIndex) => (
              <CarouselItem key={groupIndex} className="grid grid-cols-2 grid-rows-2 gap-4">
                {reviews.slice(groupIndex * 4, groupIndex * 4 + 4).map((review: any, index: any) => (
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

      <div className="py-16 flex items-center justify-center flex-col mt-16">
        <h3 className="text-2xl font-medium py-8 text-center" dangerouslySetInnerHTML={{ __html: pricingText }} />
        <div className="flex w-full ml-4 mt-4 justify-center">
          <a
            href="/contact-us"
            target="_blank"
            className="bg-[#f4d752] text-black py-4 px-6 rounded-xl flex"
          >
            <p className="font-bold text-sm">{bookFreeCallButton}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
