import { getDictionary } from "@/lib/dictionaries";
import { Post } from "../../../_components/post";

export default async function Page({ params }: any) {
    const lang = params.lang;
    const dict = await getDictionary(lang);

    const post = {
        title: dict.blog.transformingRealEstateManagementInPhuket.title,
        bannerImage: dict.blog.transformingRealEstateManagementInPhuket.bannerImage,
        content: dict.blog.transformingRealEstateManagementInPhuket.content,
        location: dict.blog.transformingRealEstateManagementInPhuket.location,
        date: dict.blog.transformingRealEstateManagementInPhuket.date,
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
