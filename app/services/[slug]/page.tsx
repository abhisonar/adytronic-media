import { SERVICES_DATA } from "@/shared/data/services.data";
import React from "react";

export function generateStaticParams() {
  return SERVICES_DATA.map((item) => ({ slug: item.slug }));
}

const ServiceDetails = ({ params }: { params: { slug: string } }) => {
  return <div>ServiceDetails : {params.slug}</div>;
};

export default ServiceDetails;
