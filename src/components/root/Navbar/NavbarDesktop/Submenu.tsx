import { NavbarItem } from "@/interfaces/navbar.interface";
import Menu from "./Menu";

interface props {
  subMenu: NavbarItem[];
}

export default function Submenu({ subMenu }: props) {
  return (
    <ul
      className="bg-white absolute top-6 left-1/2 w-full -translate-x-1/2 min-w-fit 
            opacity-0 scale-95 invisible group-hover:visible group-hover:opacity-100 
            group-hover:scale-100 group-hover:translate-y-0 -translate-y-3
            px-2 py-1 rounded-md shadow-lg transition-all duration-300 ease-in-out z-10"
    >
      {subMenu.map((item, idx) => (
        <li key={`${item.title}-${idx}`}>
          <Menu
            className="block px-2 py-1 text-black hover:bg-slate-200 rounded-md"
            link={item.link || "/"}
            title={item.title}
            key={`${item.title}-${idx}`}
          />
        </li>
      ))}
    </ul>
  );
}
