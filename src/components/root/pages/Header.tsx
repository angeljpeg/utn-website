import React from "react";

interface props {
    title: string
    subtitle: string
}

export function HeaderPage({title, subtitle} : props) {
  return (
    <>
      <h2 className="mb-2 text-base text-center lg:text-xl md:text-lg text-neutral-500">
        {subtitle}
      </h2>
      <h3 className="mb-10 text-2xl font-medium text-center lg:text-4xl md:text-3xl text-neutral-900">
        {title}
      </h3>
    </>
  );
}
