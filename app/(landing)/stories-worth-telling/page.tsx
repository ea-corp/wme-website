import BlogPosts from "../_components/blog-posts"
import OrganizationUsingMonday from "../_components/organization-using-monday"
import ClientSuccessStory from "./components/client-success-story"

export default function ServicePage() {
  return (
    <div className="px-4">
      <div className="bg-gray-100 text-center py-16">
        <p className="text-4xl font-semibold">Stories worth telling</p>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="py-12">
          <div className="relative">
            <h2 className="text-3xl font-bold px-8 md:px-24 py-4 bg-primary text-primary-foreground inline-block">
              Our Recent Activities
            </h2>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
          </div>
        </div>
        <div className="px-8 md:px-24">
          <BlogPosts />
        </div>
        <div className="py-12">
          <div className="relative">
            <h2 className="text-3xl font-bold px-8 md:px-24 py-4 bg-black text-white inline-block">
              Client Success Stories
            </h2>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black" />
          </div>
          <p className="text-2xl mt-12 px-8 md:px-24">
            Below are some stories worth telling of clients using Monday.com to leverage their business and how WME can
            help you achieve the same results.
          </p>
        </div>

        <div className="px-8 md:px-24 py-8 space-y-12">
          {/* ZIPPO Success Story */}
          <ClientSuccessStory
            companyName="ZIPPO"
            achievement="achieved"
            achievementMetric="8x ROI"
            description="By replacing spreadsheets with a dynamic Work OS, they saved three business days per month and cut six months off a major sales expansion."
            contactPerson="Chris Funk"
            contactTitle="Director of Product Innovation"
            backgroundColor="bg-blue-900"
            textColor="text-white"
            accentColor="text-yellow-400"
            videoId="WMtZ4gWf2uk"
          />

          {/* O2 Priority Success Story */}
          <ClientSuccessStory
            companyName="O2 Priority"
            achievement="became"
            achievementMetric="30% more efficient"
            description="At delivering hundreds of campaigns to millions of customers using Monday.com and boosting productivity, O2 transformed their workflow."
            contactPerson="Tye Rapley-Hawkins"
            contactTitle="Head of Delivery at O2 Priority, Telefonica"
            backgroundColor="bg-gray-200"
            textColor="text-black"
            accentColor="text-blue-600"
            isReversed={true}
            videoId="8NKL_nqSHMo"
          />

          {/* Ray White Success Story */}
          <ClientSuccessStory
            companyName="Ray White"
            achievement="boosted efficiency by"
            achievementMetric="70%"
            description="With a custom CRM on Monday.com Work OS using over 1,250 automations to handle 2,000 clients seamlessly."
            contactPerson="Kyle Dorman"
            contactTitle="Operations Manager at Ray White"
            backgroundColor="bg-gray-200"
            textColor="text-black"
            accentColor="text-blue-600"
            videoId="TX4kk4OlQfY"
          />

          {/* The Student Hotel Success Story */}
          <ClientSuccessStory
            companyName="The Student Hotel"
            achievement="enhanced core business processes and gained clarity on"
            achievementMetric="60+ initiatives"
            description="With tailored solutions from WME, your business can enjoy streamlined workflows and improved productivity."
            contactPerson="Charlie MacGregor"
            contactTitle="Founder & CEO, The Student Hotel"
            backgroundColor="bg-gray-200"
            textColor="text-black"
            accentColor="text-blue-600"
            isReversed={true}
            videoId="j4Ttuceu388"
          />
        </div>
      </div>
      <div className="my-12 pb-28 px-8 md:px-24">
        <OrganizationUsingMonday />
      </div>
    </div>
  )
}

