import { Post } from "../../../_components/post";

export default function Page() {
    const post = {
        title: "WME Solutions Takes Sydney: A Leap Forward in Monday.com Mastery",
        bannerImage: "/blog/wme-solutions-takes-sydney-a-leap-forward-in-monday-com-mastery/image1.jpg",
        content: `
        <p>This November, the bustling city of Sydney, Australia, became the stage for WME Solutions’ latest advancement. Our founder, Eddy Azoulay, and partner, Bao Nguyen, represented our team at a pivotal professional certification workshop held at the luxurious Four Seasons Hotel. This event wasn’t just another conference; it was a deep dive into the world of Monday.com, focusing on building efficient, collaborative workflows, training proficient users, and ensuring seamless Monday.com integration across organizations.</p>
        <br/>
        <img src="/blog/wme-solutions-takes-sydney-a-leap-forward-in-monday-com-mastery/image1.jpg" />
        <br/>
        <p>The workshop brought together like-minded professionals, all eager to harness the full potential of Monday.com. As Eddy and Bao navigated through intensive sessions, they exchanged insights with fellow attendees, contributing to a rich tapestry of knowledge and experience.</p>
        <br/>
        <img src="/blog/wme-solutions-takes-sydney-a-leap-forward-in-monday-com-mastery/image2.jpg" />
        <br/>
        <p>A highlight of the event was the hands-on approach. Not just observers, our team members were active participants, engaging in real-time problem-solving and scenario-based learning. This approach mirrors WME Solutions’ ethos: learning by doing, a principle we instill in all our client engagements.</p>
        <br/>
        <p>The culmination of this immersive experience was both Eddy and Bao receiving the Core Plus Certification. This achievement isn’t just a badge of honor; it’s a testament to our unwavering commitment to delivering the best Monday.com solutions. With this enhanced expertise, we’re now even better evquipped to tackle your business challenges, optimizing workflows with precision and ease.</p>
        <br/>
        <img src="/blog/wme-solutions-takes-sydney-a-leap-forward-in-monday-com-mastery/image3.jpg" />
<br/>        
<img src="/blog/wme-solutions-takes-sydney-a-leap-forward-in-monday-com-mastery/image4.jpg" />
<br/>
<p>Our journey in Sydney was more than just an educational excursion; it was a reaffirmation of our dedication to continuous improvement and client success. We returned not just as certified professionals, but as enriched advisors, ready to bring our enhanced skills to your business.</p>

        <br/><br/>
<p>Eddy Azoulay, Founder, WME Solutions</p>

    `,
        location: "Sydney, Australia",
        date: "November 2023",
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
