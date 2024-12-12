import Link from "next/link";

interface props {
  title: string;
  link: string;
  className?: string;
}

export default function Menu({ link, title, className }: props) {
  return (
    <Link
      className={`hover:text-green-600 ${className}`}
      href={link}
    >
      {title}
    </Link>
  );
}
