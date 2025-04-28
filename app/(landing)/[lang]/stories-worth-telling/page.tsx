import { getDictionary } from "@/lib/dictionaries";
import BlogPosts from "../../_components/blog-posts";
import OrganizationUsingMonday from "../../_components/organization-using-monday";
import ClientSuccessStory from "./components/client-success-story";

interface PageProps {
  params: { lang: string };
}

export default async function ServicePage({ params }: PageProps) {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return (
    <div className="px-4">
      <div className="bg-gray-100 text-center py-16">
        <p className="text-4xl font-semibold">{dict.storiesWorthTelling.title}</p>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="py-12">
          <div className="relative">
            <h2 className="text-3xl font-bold px-8 md:px-24 py-4 bg-[#283c99] text-primary-foreground inline-block">
              {dict.storiesWorthTelling.recentActivities}
            </h2>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
          </div>
        </div>
        <div className="md:px-0">
          <BlogPosts dict={dict} lang={lang} />
        </div>
        <div className="py-12">
          <div className="relative">
            <h2 className="text-3xl font-bold px-8 md:px-24 py-4 bg-[#283c99] text-white inline-block">
              {dict.storiesWorthTelling.successStories}
            </h2>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black" />
          </div>
          <p className="text-2xl mt-12 px-8 md:px-24">
            {dict.storiesWorthTelling.description}
          </p>
        </div>

        <div className="px-8 md:px-24 py-8 space-y-12">
          {/* ZIPPO Success Story */}
          <ClientSuccessStory
            companyName="ZIPPO"
            achievement={dict.storiesWorthTelling.zippoAchievement}
            achievementMetric={dict.storiesWorthTelling.zippoAchievementMetric}
            description={dict.storiesWorthTelling.zippoDescription}
            contactPerson="Chris Funk"
            contactTitle="Director of Product Innovation"
            backgroundColor="bg-blue-900"
            textColor="text-white"
            accentColor="text-yellow-400"
            videoId="WMtZ4gWf2uk"
            dictionary={dict.clientSuccessStory}
          />


          {/* O2 Priority Success Story */}
          <ClientSuccessStory
            companyName="O2 Priority"
            achievement={dict.storiesWorthTelling.o2PriorityAchievement}
            achievementMetric={dict.storiesWorthTelling.o2PriorityAchievementMetric}
            description={dict.storiesWorthTelling.o2PriorityDescription}
            contactPerson="Tye Rapley-Hawkins"
            contactTitle="Head of Delivery at O2 Priority, Telefonica"
            backgroundColor="bg-gray-200"
            textColor="text-black"
            accentColor="text-blue-600"
            isReversed={true}
            videoId="8NKL_nqSHMo"
            dictionary={dict.clientSuccessStory}
          />

          {/* Ray White Success Story */}
          <ClientSuccessStory
            companyName="Ray White"
            achievement={dict.storiesWorthTelling.rayWhiteAchievement}
            achievementMetric={dict.storiesWorthTelling.rayWhiteAchievementMetric}
            description={dict.storiesWorthTelling.rayWhiteDescription}
            contactPerson="Kyle Dorman"
            contactTitle="Operations Manager at Ray White"
            backgroundColor="bg-gray-200"
            textColor="text-black"
            accentColor="text-blue-600"
            videoId="TX4kk4OlQfY"
            dictionary={dict.clientSuccessStory}
          />

          {/* The Student Hotel Success Story */}
          <ClientSuccessStory
            companyName="The Student Hotel"
            achievement={dict.storiesWorthTelling.studentHotelAchievement}
            achievementMetric={dict.storiesWorthTelling.studentHotelAchievementMetric}
            description={dict.storiesWorthTelling.studentHotelDescription}
            contactPerson="Charlie MacGregor"
            contactTitle="Founder & CEO, The Student Hotel"
            backgroundColor="bg-gray-200"
            textColor="text-black"
            accentColor="text-blue-600"
            isReversed={true}
            videoId="j4Ttuceu388"
            dictionary={dict.clientSuccessStory}
          />
        </div>
      </div>
      <div className="my-12 pb-28 px-8 md:px-24">
        <OrganizationUsingMonday dictionary={dict.organizationusingmonday} />
      </div>
    </div>
  );
}
