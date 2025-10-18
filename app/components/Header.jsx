import Image from "next/image";
import headerBg from "../../public/header_bg.avif"
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${headerBg.src})` }}
    >
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 text-gray-100">
        <div>
          <Image
            src={assets.profile_img}
            alt=""
            className="rounded-full w-32 mt-20"
          />
        </div>
        <h3 className="flex items-end gap-2 text-xl md:text-2xl  pt-11 text-pink-200">
          Hi, I'm Avishek Gupta
          <Image src={assets.hand_icon} alt="" className="w-6" />
        </h3>
        <h6 className="text-3xl sm:text-6xl lg:text-[66px] font-sans text-gray-300">
          Creative Videographer | Reel Creator | Editor
        </h6>
        <p className="max-w-2xl mx-auto  font-sans text-gray-200">
          I'm a creative videographer and editor who adds perfect color, smooth
          transitions, and beats that match the rhythm. I create cinematic
          reels, wedding highlights, and promo videos that truly stand out.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="#contact"
            className="px-10 py-3 bg-[#5c1e61] rounded-full flex items-center gap-2 border border-gray-500 active:bg-[#b064b0]"
          >
            Contact me
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </a>

          <a
            href="#mywork"
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2  bg-[#5c1e61] active:bg-[#b064b0]"
          >
            My work
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
