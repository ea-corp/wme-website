import Image from "next/image";

export default function Footer({ dict, lang }: any) {
  // Tailles définies pour les images, modifiez selon vos besoins
  const imageSize = {
    width: 500,
    height: 400,
  };

  return (
    <footer className="bg-gray-800 text-white px-2 py-6">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap justify-around items-center">
        <div className="mb-4 md:mb-0 ml-8 md:ml-0">
          <Image
            src="/images/monday-bronze-partner.png"
            alt="WME Solutions Logo"
            width={300}
            height={150}
          />
        </div>
        <div className="flex justify-center items-center flex-wrap space-x-1">
          <div className="w-[80px] h-[80px] sm:w-[140px] sm:h-[140px] relative">
            <Image
              src="/images/product-certified-badge.png"
              alt="Monday.com Product certified badge"
              width={imageSize.width}
              height={imageSize.height}
            />
          </div>
          <div className="w-[80px] h-[80px] sm:w-[140px] sm:h-[140px] relative">
            <Image
              src="/images/master-badge.png"
              alt="Monday.com master certified badge"
              width={imageSize.width}
              height={imageSize.height}
            />
          </div>
          <div className="w-[80px] h-[80px] sm:w-[140px] sm:h-[140px] relative">
            <Image
              src="/images/advanced-workflow-badge.png"
              alt="Monday.com Advanced workflow certified badge"
              width={imageSize.width}
              height={imageSize.height}
            />
          </div>
          <div className="w-[80px] h-[80px] sm:w-[140px] sm:h-[140px] relative md:mt-0">
            <Image
              src="/images/certified-partner-badge.png"
              alt="Monday.com Certified partner badge"
              width={imageSize.width}
              height={imageSize.height}
            />
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2 mt-8 md:mt-0 text-sm md:hidden">
          <div className="flex space-x-2">
            <a href={`/${lang}`} className="hover:text-[#f4d752]">{dict.footer.navigationLinks.home}</a>
            <span>|</span>
            <a href={`/${lang}/remote-services`} className="hover:text-[#f4d752]">{dict.footer.navigationLinks.packages}</a>
            <span>|</span>
            <a href="/stories-worth-telling" className="hover:text-[#f4d752]">{dict.footer.navigationLinks.storiesWorthTelling}</a>
          </div>
          <div className="flex space-x-2">
            <a href={`/${lang}/portfolio-wme`} className="hover:text-[#f4d752]">{dict.footer.navigationLinks.portfolio}</a>
            <span>|</span>
            <a href="/apps" className="hover:text-[#f4d752]">Apps</a>
          </div>
          <div className="flex space-x-2">
            <a href={`/${lang}/fullfillment-policy`} className="hover:text-[#f4d752]">{dict.footer.navigationLinks.fullfillmentPolicy}</a>
            <span>|</span>
            <a href="/contact-us" className="hover:text-[#f4d752]"> {dict.footer.navigationLinks.contactUs}</a>
          </div>
        </div>
        <div className="hidden md:flex space-y-2 mt-8 md:mt-0 text-sm">
          <ul className="space-y-2 text-center sm:text-left">
            <li>
              <a href={`/${lang}`} className="hover:text-[#f4d752]">{dict.footer.navigationLinks.home}</a>
            </li>
            <li>
              <a href={`/${lang}/remote-services`} className="hover:text-[#f4d752]">{dict.footer.navigationLinks.packages}</a>
            </li>
            <li>
              <a href={`/${lang}/stories-worth-telling`} className="hover:text-[#f4d752]">{dict.footer.navigationLinks.storiesWorthTelling}</a>
            </li>
            <li>
              <a href={`/${lang}/portfolio-wme`} className="hover:text-[#f4d752]">{dict.footer.navigationLinks.portfolio}</a>
            </li>
            <li>
              <a href={`/${lang}/apps`} className="hover:text-[#f4d752]">{dict.footer.navigationLinks.apps}</a>
            </li>
            <li>
              <a href={`/${lang}/fullfillment-policy`} className="hover:text-[#f4d752]">{dict.footer.navigationLinks.fullfillmentPolicy}</a>
            </li>
            <li>
              <a href={`/${lang}/contact-us`} className="hover:text-[#f4d752]">{dict.footer.navigationLinks.contactUs}</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-center py-4 px-4 text-sm">
          {dict.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
