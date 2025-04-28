import { Post } from "../../../_components/post";

export default function Page() {
    const post = {
        title: "Bridging Business and Technology: A Pivotal Week in Bangkok",
        bannerImage: "/blog/bridging-business-and-technology-a-pivotal-week-in-bangkok/image1.jpg",
        content: `
      <p>The bustling heart of Central Bangkok was the backdrop for a transformative week where we, the Workflow Made Easy (WME) team, spearheaded a project to streamline operations for one of Thailand's largest real estate companies.</p>
      <br/>
        <p><b>The Challenge </b></p>
        <p>Fresh off their latest acquisition, our client was facing the daunting task of integrating a new company's processes into their existing framework. The complexity was compounded by a myriad of forms and tools, causing opacity for stakeholders and missed opportunities for automation.</p>
        <br/>
        <p><b>The Solution </b></p>
        <p>Our mandate was clear: harness the power of Monday.com to create a seamless, automated workflow conducive to the demands of their expanding enterprise.</p>
        <br/>
        <p><b>The Journey </b></p>
        <p>This wasn't just another project. It was a last-minute mission that saw Kessi from our European office joining me, Eddy, the founder of WME, in an urgent flight to Bangkok. The goal was to not only deliver solutions but to bridge the geographical and cultural gaps that only on-site presence could close.</p>
        <br/>
        <img src="/blog/bridging-business-and-technology-a-pivotal-week-in-bangkok/image1.jpg" />
        <br/>
        <p><b>The People </b></p>
        <p>We delved deep into the company's core, working alongside their finance director, founder, and operations manager, whose names, though not mentioned here, were instrumental in every phase of the process.</p>
        <br/>
        <p><b>The Visuals </b></p>
        <p>The images of our collaboration may show just moments, but they represent the cornerstone of trust and understanding we built throughout our visit.</p>
        <br/>
        <p><b>The Impact </b></p>
        <p>By the week's end, we had forged a tailored strategy with Monday.com, aligning the client’s expanded team with their new workflows, proving that in-person collaboration has an unmatched value.</p>
        <br/>
        <p><b>Reflecting Forward </b></p>
        <p>This experience solidified a fundamental truth: personal engagement accelerates understanding and solution development exponentially. What we achieved together in one week might have taken months in a remote setup due to the complex nature of their business evolution.</p>
        <br/>
        <p>As we continue to navigate the ever-evolving landscape of business process optimization, WME reaffirms its commitment to not just responding to calls for help but to being a proactive partner in our clients' journeys towards streamlined success.</p>
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
