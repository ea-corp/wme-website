import { getDictionary } from "@/lib/dictionaries";
import { Post } from "../../../_components/post";

export default async function Page({ params }: any) {
    const lang = params.lang;
    const dict = await getDictionary(lang);

    const post = {
        title: dict.blog.wmeSolutionsTakesSydney.title,
        bannerImage: dict.blog.wmeSolutionsTakesSydney.bannerImage,
        content: dict.blog.wmeSolutionsTakesSydney.content,
        location: dict.blog.wmeSolutionsTakesSydney.location,
        date: dict.blog.wmeSolutionsTakesSydney.date,
    };

    return (
        <Post
            title={post.title}
            bannerImage={post.bannerImage}
            content={post.content}
            location={post.location}
            date={post.date}
        />
    );
}
