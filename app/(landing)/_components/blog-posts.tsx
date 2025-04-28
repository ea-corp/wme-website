import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - WME Solutions",
  description:
    "Dive into our blog where we share stories of our past events and experiences. Get an insider's look at our journey, milestones, and insights gained along the way. Stay connected and inspired as we take you behind the scenes of our company's growth and achievements.",
};

export default async function Page({ dict, lang }: any) {
  const posts = [
    dict.blog.aWeekOfInnovationAndCollaboration,
    dict.blog.aWeekOfTransformativeCollaborationInOranmore,
    dict.blog.navigatingTheFutureOfAutomation,
    dict.blog.transformingRealEstateManagementInPhuket,
    dict.blog.wmeSolutionsTakesSydney,
  ];

  posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="text-center md:py-16 overflow-x-hidden">
      <div className="min-h-screen pb-8">
        <main className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link key={index} href={`/${lang}/blog/${post.slug}`} passHref>
              <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 h-[600px]">
                <div className="h-[350px] w-full overflow-hidden">
                  <img
                    src={post.bannerImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between p-6 flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
                  </div>
                  <div>
                    <p className="text-lg font-medium">{post.location}</p>
                    <p className="text-lg font-medium">{post.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
}
