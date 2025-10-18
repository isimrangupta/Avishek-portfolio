import { serviceData } from "../../assets/assets";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-serif">What I offer</h4>
      <h2 className="text-center text-5xl font-serif text-[purple]">
        My Services
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-serif">
        I provide creative video solutions for clients — including Instagram
        reels, wedding highlights, promotional videos, and social media content.
        If needed, I can also manage and upload content for your social media
        handles. I always focus on making every project unique and engaging,
        ensuring your story or brand is perfectly represented.
      </p>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {serviceData.map(({ title, description,}, index) => (
          <div key={index}
          className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[2px_2px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500"
          >
            <h3 className="text-lg my-5 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
