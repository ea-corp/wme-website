import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      height={80}
      width={120}
      alt="WME Solutions Logo"
      src="/images/WME_logo.png"
      className="w-auto h-auto"
    />
  );
};