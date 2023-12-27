import React from "react";
interface IPageLayout {
  children: React.ReactElement;
}
const PageLayout: React.FC<IPageLayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default PageLayout;
