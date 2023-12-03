import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-28">
      <h1 className=" font-display text-5xl md:text-7xl font-bold text-center">
        404
      </h1>
      <h2 className=" font-display text-2xl md:text-4xl font-bold text-center">
        Page Not Found
      </h2>
    </div>
  );
};

export default NotFoundPage;
