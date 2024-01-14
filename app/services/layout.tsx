"use client";
import { useParams } from "next/navigation";
import React from "react";
const ServiceLayout = ({ children }: { children: React.ReactNode }) => {
  const param = useParams();

  return <div>ServiceLayout asd: {children}</div>;
};

export default ServiceLayout;
