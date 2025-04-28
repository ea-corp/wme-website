import { getDictionary } from "@/lib/dictionaries";
import { Post } from "../../../_components/post";

export default async function Page({ params }: any) {
    const lang = params.lang;
    const dict = await getDictionary(lang);

    const post = {
        title: dict.blog.aWeekOfTransformativeCollaborationInOranmore.title,
        bannerImage: dict.blog.aWeekOfTransformativeCollaborationInOranmore.bannerImage,
        content: dict.blog.aWeekOfTransformativeCollaborationInOranmore.content,
        location: dict.blog.aWeekOfTransformativeCollaborationInOranmore.location,
        date: dict.blog.aWeekOfTransformativeCollaborationInOranmore.date,
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
