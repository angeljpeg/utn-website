import { NavbarItem } from "@/interfaces/navbar.interface";
import Menu from "./Menu";

interface props {
  subMenu: NavbarItem[];
}

export default function Submenu({ subMenu }: props) {
  return (
    <ul
      className="bg-white absolute top-full left-0 w-max mt-2 p-2 rounded-lg shadow-md opacity-0 invisible 
        group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 group-last:left-auto group-last:right-0"
    >
      {subMenu.map((item, idx) => (
        <li key={`${item.title}-${idx}`} className="w-full">
          <Menu
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-md"
            link={item.link || "/"}
            title={item.title}
          />
        </li>
      ))}
    </ul>
  );
}
