import React from "react";

const AboutUsPage = () => {
  return (
    <div className="pt-5 lg:px-10">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between">
        <div
          className="flex flex-col items-center lg:items-start gap-y-2 lg:basis-2/3"
          data-aos="fade-left"
          data-aos-duration="2000">
          <h1 className="text-base font-bold text-warn-default lg:text-xl">About Our Agency</h1>
          <p className="text-sm text-justify lg:text-start lg:w-[70%]">
            Welcome to Adytronic, where we're dedicated to Transforming Visions into Digital
            Victories! At Adytronic, we're inspired by the opportunity to help businesses like yours
            generate leads and achieve sales success online. Our journey is fueled by a passion for
            digital innovation and a commitment to delivering results that matter.
          </p>
        </div>
        <div className="max-w-[350px] overflow-hidden" data-aos="fade-in" data-aos-duration="2000">
          <img src="/assets/about-section/creativity.png" alt="creativity" />
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-between">
        <div
          className="flex flex-col items-center lg:items-start gap-y-2 lg:basis-2/3"
          data-aos="fade-right"
          data-aos-duration="2000">
          <h1 className="text-base font-bold text-primary-default lg:text-xl">
            Who We Are & What We Do
          </h1>
          <p className="text-sm text-justify lg:text-start">
            At Adytronic, we're more than just a digital marketing agency – we're your dedicated
            partner in navigating the ever-evolving digital landscape. With a team of passionate
            experts, we work tirelessly to understand your unique business needs and tailor our
            services to drive tangible results. Our culture is built on collaboration, creativity,
            and a relentless pursuit of excellence. We take pride in working with diverse clients,
            including online news platforms, e-learning/ed-tech platforms, astrologers, traders, and
            local shop owners, to elevate their digital presence and achieve success.
          </p>
        </div>
        <div className="max-w-[350px] overflow-hidden" data-aos="fade-in" data-aos-duration="2000">
          <img src="/assets/about-section/who-we-are.png" alt="creativity" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
