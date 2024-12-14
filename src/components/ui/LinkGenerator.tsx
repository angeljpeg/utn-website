import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  className: string;
  link?: string;
  pdf?: string;
}

export function LinkGenerator({ title, className, link, pdf }: Props) {
  if (link) {
    return (
      <Link className={className} href={link}>
        {title}
      </Link>
    );
  }

  if (pdf) {
    return (
      <a className={className} href={pdf}>
        {title}
      </a>
    );
  }

  return <span className={"className"}>{title}</span>;
}
