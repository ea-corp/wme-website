import { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";

export const metadata: Metadata = {
  title: "Blog - WME Solutions",
  description:
    "Dive into our blog where we share stories of our past events and experiences. Get an insider's look at our journey, milestones, and insights gained along the way. Stay connected and inspired as we take you behind the scenes of our company's growth and achievements.",
};

export default async function Page({ params }: any) {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  const posts = [
    dict.blog.aWeekOfInnovationAndCollaboration,
    dict.blog.aWeekOfTransformativeCollaborationInOranmore,
    dict.blog.bridgingBusinessAndTechnologyAPivotalWeekInBangkok,
    dict.blog.navigatingTheFutureOfAutomation,
    dict.blog.transformingRealEstateManagementInPhuket,
    dict.blog.wmeSolutionsTakesSydney,
  ];

  // Tri des articles par date
  posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="bg-gray-100 text-center pt-16 pb-6 md:py-16 overflow-x-hidden">
      <h2 className="text-4xl font-semibold">Blog</h2>
      <div className="bg-gray-100 min-h-screen py-8">
        <main className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link key={index} href={`/${lang}/blog/${post.slug}`} passHref>
              <a className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
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
              </a>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
}
