import { getDictionary } from "@/lib/dictionaries";
import { Post } from "../../../_components/post";

export default async function Page({ params }: any) {
    const lang = params.lang;
    const dict = await getDictionary(lang);

    const post = {
        title: dict.blog.navigatingTheFutureOfAutomation.title,
        bannerImage: dict.blog.navigatingTheFutureOfAutomation.bannerImage,
        content: dict.blog.navigatingTheFutureOfAutomation.content,
        location: dict.blog.navigatingTheFutureOfAutomation.location,
        date: dict.blog.navigatingTheFutureOfAutomation.date,
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
