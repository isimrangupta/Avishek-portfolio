import React from "react";
import { FaInstagram } from "react-icons/fa";

const Work = () => {
  // Instagram / City / Personal videos
  const instagramVideos = [
    {
      src: "/videos/reel1.mp4",
      text: "Rohini Waterfall highlights",
      link: "https://www.instagram.com/reel/C-SuxQFy2Qp/",
    },
    {
      src: "/videos/reel2.mp4",
      text: "Bagaicha Farmstay",
      link: "https://www.instagram.com/p/DIOrLhEpD2C/",
    },
    {
      src: "/videos/reel3.mp4",
      text: "Ride the Roads",
      link: "https://www.instagram.com/reel/DKqh8YgyCvL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  ];

  // Wedding / Client / Promotion videos
  const clientsVideos = [
    {
      src: "/videos/reel4.mp4",
      text: "Sangeet highlight reel",
      link: "https://www.instagram.com/reel/DI7GYcKhZ4w/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      src: "/videos/reel5.mp4",
      text: "Wedding moments reel",
      link: "https://www.instagram.com/reel/DHBRz6MTdDk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      src: "/videos/reel6.mp4",
      text: "Cinematic promotional video",
      link: "https://www.instagram.com/reel/DPJH0IfDz9E/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  ];

  // Reusable Video Card
  const VideoCard = ({ video }) => (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4 w-[300px] hover:scale-105 transition-transform duration-300 relative">
      <video
        src={video.src}
        controls
        className="rounded-lg w-full h-[400px] object-cover"
      ></video>

      {/* Text and Icon */}
      <div className="flex items-center justify-center gap-2 mt-2">
        <p className="text-gray-700 font-serif text-center">{video.text}</p>

        {video.link && (
          <a
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 text-xl"
            title="View on Instagram"
          >
            <FaInstagram />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div id="mywork" className="w-full px-6 md:px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-serif">My Portfolio</h4>
      <h2 className="text-center text-5xl font-serif text-[purple] mb-6">
        My Latest Work
      </h2>
      <div className="mb-12">
        <h3 className="text-3xl font-serif text-center mb-6 text-pink-600">
          Instagram & City Highlights
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-8">
          {instagramVideos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-serif text-center mb-6 text-pink-600">
          Wedding & Client Promotions
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-8">
          {clientsVideos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;