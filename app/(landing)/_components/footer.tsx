import Image from "next/image";

export default function Footer() {
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
            alt="Workflow Made Easy Logo"
            width={300}
            height={150}
          />
        </div>
        <div className="flex justify-center items-center flex-wrap space-x-4">
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
          <div className="w-[80px] h-[80px] sm:w-[140px] sm:h-[140px] relative mt-4 md:mt-0">
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
            <a href="/" className="hover:text-[#f4d752]">Home</a>
            <span>|</span>
            <a href="/remote-services" className="hover:text-[#f4d752]">Packages</a>
            <span>|</span>
            <a href="/stories-worth-telling" className="hover:text-[#f4d752]">Stories worth telling</a>
          </div>
          <div className="flex space-x-2">
            <a href="/blog" className="hover:text-[#f4d752]">Blog</a>
            <span>|</span>
            <a href="/portfolio-wme" className="hover:text-[#f4d752]">Portfolio</a>
            <span>|</span>
            <a href="/apps" className="hover:text-[#f4d752]">Apps</a>
          </div>
          <div className="flex space-x-2">
            <a href="/fullfillment-policy" className="hover:text-[#f4d752]">Fullfillment Policy</a>
            <span>|</span>
            <a href="/contact-us" className="hover:text-[#f4d752]">Contact Us</a>
          </div>
        </div>
        <div className="hidden md:flex space-y-2 mt-8 md:mt-0 text-sm">
          <ul className="space-y-2 text-center sm:text-left">
            <li>
              <a href="/" className="hover:text-[#f4d752]">Home</a>
            </li>
            <li>
              <a href="/remote-services" className="hover:text-[#f4d752]">Packages</a>
            </li>
            <li>
              <a href="/stories-worth-telling" className="hover:text-[#f4d752]">Stories worth telling</a>
            </li>
            <li>
              <a href="/blog" className="hover:text-[#f4d752]">Blog</a>
            </li>
            <li>
              <a href="/portfolio-wme" className="hover:text-[#f4d752]">Portfolio</a>
            </li>
            <li>
              <a href="/apps" className="hover:text-[#f4d752]">Apps</a>
            </li>
            <li>
              <a href="/fullfillment-policy" className="hover:text-[#f4d752]">Fullfillment Policy</a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-[#f4d752]">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-center py-4 px-4 text-sm">
          © 2022 Workflow Made Easy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
