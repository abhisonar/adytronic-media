import React from "react";

const ServiceDetails = ({ params }: { params: { slug: string } }) => {
  return <div>ServiceDetails : {params.slug}</div>;
};

export default ServiceDetails;
