import { getDictionary } from "@/lib/dictionaries";
import { Post } from "../../../_components/post";

export default async function Page({ params }: any) {
    const lang = params.lang;
    const dict = await getDictionary(lang);

    const post = {
        title: dict.blog.aWeekOfInnovationAndCollaboration.title,
        bannerImage: dict.blog.aWeekOfInnovationAndCollaboration.bannerImage,
        content: dict.blog.aWeekOfInnovationAndCollaboration.content,
        location: dict.blog.aWeekOfInnovationAndCollaboration.location,
        date: dict.blog.aWeekOfInnovationAndCollaboration.date,
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
