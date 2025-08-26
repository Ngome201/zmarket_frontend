import Image from "next/image";
import Link from "next/link";
import CommonHeader from "../CommonHeader";

const HeaderTop = () => {
  return (
    <>
      <Image
        className="absolute hidden xl:block top-0 left-0 z-10"
        width={131}
        height={454}
        src="/img/primary-hero-el-1.png"
        alt="image"
      />
      <Image
        className="absolute hidden xl:block top-0 right-0 z-10"
        width={251}
        height={151}
        src="/img/primary-hero-el-2.png"
        alt="image"
      />
      <div className="bg-[var(--bg-1)] boder-b-2 border-[var(--border)]">
        <div className="container mx-auto flex justify-between py-3 lg:py-5 gap-1">
          <Image
            src="/img/logo.png"
            className="self-center hidden xl:block"
            width={172}
            height={48}
            alt="logo"
            priority
          />
          <Image
            src="/img/favicon.png"
            className="self-center xl:hidden w-[40px] h-[40px] ml-3"
            width={56}
            height={40}
            alt="logo"
            priority
          />
          
          <CommonHeader/>
          
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
