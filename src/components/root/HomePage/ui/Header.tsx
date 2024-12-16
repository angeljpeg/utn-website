import React from "react";

type props = {
    title: string,
    description: string
}

export default function HeaderSection({title, description} : props) {
  return (
    <>
      <h4 className="text-4xl md:text-6xl font-extrabold mb-3 text-center text-home-title">
        {title}
      </h4>
      <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mb-8">
        {description}
      </p>
    </>
  );
}
