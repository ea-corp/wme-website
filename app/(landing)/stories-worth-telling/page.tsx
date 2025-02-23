
import BlogPosts from "../_components/blog-posts";
import { YouTubeVideo } from "../_components/monday-os-video";
import OrganizationUsingMonday from "../_components/organization-using-monday";

export default function ServicePage() {
  return (
    <div className=" px-4">
      <div className="bg-gray-100 text-center py-16">
        <h2 className="text-4xl font-semibold ">Stories worth telling</h2>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="py-12">
          <p className="text-2xl font-semibold px-8 md:px-24">
            WME Stories: Insights from Our Blog
          </p>
        </div>
        <div className="px-8 md:px-24">
          <BlogPosts />
        </div>
        <div className="mt-12 px-8 md:px-24">
          <OrganizationUsingMonday />
        </div>
        <div className="flex items-center justify-center py-12">
          <h2 className="text-2xl font-medium flex items-center px-4">
            Below are some stories worth telling of client using Monday.com to
            leverage their business
          </h2>
        </div>
        <div className="px-8 md:px-24 py-8">
          <div className="flex flex-col md:flex-row">
            <div className="bg-blue-900 py-16 px-4 h-full">
              <h3 className="font-semibold text-xl md:text-2xl text-white text-center">
                <span className="text-center text-4xl">ZIPPO</span>
                <br />
                How <span className="text-blue-500">Zippo</span> Manufacturing
                Company <br /> achieved{" "}
                <span className="text-yellow-400">8x ROI</span> leveraging
                monday.com <br />
                Work OS for project management
                <br />
                <span className="text-sm font-light">
                  Chris Funk | Director of Product Innovation
                </span>
              </h3>
            </div>
            <YouTubeVideo videoId="WMtZ4gWf2uk" />
          </div>
        </div>
        <div className="px-8 md:px-24 py-8">
          <div className="flex flex-col md:flex-row">
            <YouTubeVideo videoId="8NKL_nqSHMo" />
            <div className="bg-gray-200 py-16 px-4 md:px-16 h-full">
              <h3 className="font-semibold text-xl md:text-2xl text-black text-center">
                &ldquo;With monday.com, we&apos;re
                <span className="text-blue-500">
                  30% <br />
                  more more efficient
                </span>{" "}
                at delivering <br /> hundreds of campaigns seen <br /> by millions
                of customers.&rdquo;
                <br />
                <span className="text-sm font-light">
                  Tye Rapley-Hawkins | Head of Delivery at 02 Priority, Telefonica
                </span>
              </h3>
            </div>
          </div>{" "}
        </div>
        <div className="px-8 md:px-24 py-8">
          <div className="flex flex-col md:flex-row">
            <div className="bg-gray-200 py-12 px-4 md:px-20 h-full">
              <h3 className="font-semibold text-xl md:text-2xl text-black text-center">
                &ldquo;We were able to &nbsp;
                <span className="text-blue-500">
                  customize <br /> the CRM on top of <br /> monday.com Work OS
                </span>{" "}
                to fit <br /> the needs of our day-to-day <br /> activites.&rdquo;
                <br />
                <span className="text-sm font-light">
                  Kyle Dorman | Operations Manager at Ray White
                </span>
              </h3>
            </div>
            <YouTubeVideo videoId="TX4kk4OlQfY" />
          </div>
        </div>
        <div className="px-8 md:px-24 py-8">
          <div className="flex flex-col md:flex-row">
            <YouTubeVideo videoId="j4Ttuceu388" />

            <div className="bg-gray-200 py-12 px-4 md:px-20 h-full">
              <h3 className="font-semibold text-xl md:text-2xl text-black text-center">
                &ldquo;Now that we have <br /> monday.com Work OS as the <br />
                <span className="text-red-500">
                  backbone of our organization
                </span>{" "}
                <br /> I feel I have an overview I can <br /> trust.&rdquo;
                <br />
                <span className="text-sm font-light">
                  Charlie MacGregor | Founder & CEO, The Student Hotel
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
