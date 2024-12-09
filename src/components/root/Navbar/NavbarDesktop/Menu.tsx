import Link from "next/link";

interface props {
  title: string;
  link: string;
  className?: string
}

export default function Menu({ link, title, className }: props) {
  return (
    <Link className={`flex items-center ${className}`} href={link}>
      {title}
    </Link>
  );
}
