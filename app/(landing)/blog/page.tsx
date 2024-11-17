import { Metadata } from "next";
import { getDatabase } from "../../../lib/notion";

async function getPosts() {
  const database = await getDatabase();
  return database;
}

export const metadata: Metadata = {
  title: "Blog - Workflow Made Easy",
  description:
    "Dive into our blog where we share stories of our past events and experiences. Get an insider's look at our journey, milestones, and insights gained along the way. Stay connected and inspired as we take you behind the scenes of our company's growth and achievements.",
};

export default async function Page() {
  let posts: any = await getPosts();

  posts.sort((a: any, b: any) => {
    const dateStringA = a.properties.Date.rich_text[0].text.content;
    const dateStringB = b.properties.Date.rich_text[0].text.content;

    const [monthA, yearA] = dateStringA.split(" ");
    const [monthB, yearB] = dateStringB.split(" ");

    const dateA = new Date(`${monthA} 1, ${yearA}`);
    const dateB = new Date(`${monthB} 1, ${yearB}`);

    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="bg-gray-100 text-center pt-16 pb-6  md:py-16 overflow-x-hidden">
      <h2 className="text-4xl font-semibold">Blog</h2>
      <div className="bg-gray-100 min-h-screen py-8">
        <main className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts
  .filter((post: any) => {
    // Liste des titres à exclure
    const excludedTitles = [
      "Bridging Business and Technology: A Pivotal Week in Bangkok",
      "Transforming Real Estate Management in Phuket: Workflow Made Easy’s On-Site Consultation with Empire Estates"
    ];

    const title =
      post.properties.Title &&
      post.properties.Title.title &&
      post.properties.Title.title[0] &&
      post.properties.Title.title[0].text &&
      post.properties.Title.title[0].text.content;

    // Vérifier si le titre est dans la liste des titres à exclure
    return !excludedTitles.includes(title);
  })
  .slice(0, 20)
  .map((post: any, index: number) => (
    <a
      key={index}
      href={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
      className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
    >
      <div>
        {post.properties &&
          post.properties.BannerImage &&
          post.properties.BannerImage.url && (
            <img
              src={post.properties.BannerImage.url}
              alt={post.properties.Title.title[0].text.content}
              className="w-full h-[350px] object-cover"
            />
          )}
      </div>
      <div className="p-6">
        {post.properties &&
          post.properties.Title &&
          post.properties.Title.title &&
          post.properties.Title.title[0] &&
          post.properties.Title.title[0].text &&
          post.properties.Title.title[0].text.content && (
            <h3 className="text-xl font-semibold mb-4">
              {post.properties.Title.title[0].text.content}
            </h3>
          )}
        {post.properties &&
          post.properties.Location &&
          post.properties.Location.rich_text &&
          post.properties.Location.rich_text[0] &&
          post.properties.Location.rich_text[0].text &&
          post.properties.Location.rich_text[0].text.content && (
            <p className="text-lg font-medium">
              {post.properties.Location.rich_text[0].text.content}
            </p>
          )}
        {post.properties &&
          post.properties.Date &&
          post.properties.Date.rich_text &&
          post.properties.Date.rich_text[0] &&
          post.properties.Date.rich_text[0].text &&
          post.properties.Date.rich_text[0].text.content && (
            <p className="text-lg font-medium">
              {post.properties.Date.rich_text[0].text.content}
            </p>
          )}
      </div>
    </a>
  ))}

        </main>
      </div>{" "}
    </div>
  );
}
