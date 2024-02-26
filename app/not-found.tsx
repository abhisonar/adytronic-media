import Link from "next/link";
import React from "react";

const AppNotFound = () => {
  return (
    <div className="page-not-found">
      <h1 className="error">404</h1>
      <div className="page">Ooops!!! The page you are looking for is not found</div>
      <Link className="back-home" href="/">
        Back to home
      </Link>
    </div>
  );
};

export default AppNotFound;
