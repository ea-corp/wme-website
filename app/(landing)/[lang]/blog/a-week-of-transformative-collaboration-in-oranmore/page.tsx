import { Post } from "../../../_components/post";

export default function Page() {
    const post = {
        title: "A Week of Transformative Collaboration in Oranmore",
        bannerImage: "/blog/a-week-of-transformative-collaboration-in-oranmore/image1.jpg",
        content: `
      <p>As the founder of WME Solutions, I, Eddy Azoulay, had an enriching week in Galway, diving into the intricacies of optimizing business workflows with a leading fulfillment company. Our mission was to unleash the potential of Monday.com in streamlining their operations.</p>
      <br/>
      <p>Our journey is depicted in a captivating collage, showcasing varied environments – from the lively warehouse scenes to strategic discussions in office spaces, and a delightful team dinner.</p>
      <br/>
        <img src="/blog/a-week-of-transformative-collaboration-in-oranmore/image1.jpg" />
        <br/>
        <p>In the warehouse, we uncovered crucial bottlenecks, providing a clear view of how Monday.com could enhance their workflow. The office sessions, supported remotely by my colleague Kessi, were instrumental in demonstrating the practical applications of Monday.com in a real business setting.</p>
        <br/>
        <p>Beyond the work, the week was enriched by building personal connections, highlighted in our shared meals and discussions. This blend of professional and personal interaction underscored the importance of understanding and meeting our client’s unique needs.</p>
        <br/>
        <p>This experience in Galway was a powerful reminder of WME Solutions’ commitment to not just providing technical solutions, but also fostering relationships and deeply understanding our clients’ challenges.</p>
<br/><br/>
<p>Eddy Azoulay, Founder, WME Solutions</p>

    `,
        location: "Bangkok, Thailand",
        date: "Mars 2023",
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
