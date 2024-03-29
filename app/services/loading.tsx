import React from "react";

const ServiceLoading = () => {
  return (
    <div role="status" className="w-screen animate-pulse px-[50px]">
      <div className="py-14 px-2 md:px-7 w-full h-[180px] flex flex-col gap-y-3 items-center md:items-start">
        <div className="h-8 bg-gray-200 rounded-full  w-48 mb-4"></div>
        <div className="h-3 bg-gray-200 rounded-full  w-48 mb-2.5"></div>
      </div>
    </div>
  );
};

export default ServiceLoading;
