import React from "react";

interface props {
    title: string
    subtitle: string
}

export function HeaderPage({title, subtitle} : props) {
  return (
    <>
      <h2 className="mb-2 text-center text-sm text-neutral-500 tracking-wider font-light">
        {subtitle}
      </h2>
      <h3 className="mb-10 font-medium text-center lg:text-4xl text-3xl text-neutral-900">
        {title}
      </h3>
    </>
  );
}
