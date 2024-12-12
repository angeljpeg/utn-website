import { NavbarItem } from "@/interfaces/navbar.interface";

import { ChevronDown } from "lucide-react";
import Menu from "@/components/root/Navbar/NavbarDesktop/Menu";
import Submenu from "@/components/root/Navbar/NavbarDesktop/Submenu";

interface props {
  menu: NavbarItem;
}

export default function SubmenuGenerator({ menu }: props) {
  if (!menu.subMenu && menu.link) {
    return (
      <Menu
        link={menu.link}
        title={menu.title}
      />
    );
  }
  return (
    <div className="relative">
      {/* Contenedor para menú principal */}
      <span
        className="flex items-center gap-1 cursor-pointer hover:text-green-600 focus:outline-none"
        aria-expanded="false"
        aria-haspopup="true"
      >
        {menu.title} <ChevronDown />
      </span>
      {/* Submenú */}
      {menu.subMenu && <Submenu subMenu={menu.subMenu} />}
    </div>
  );
}

/* 


{NavbarItems.map((item, index) => (
            <li key={`${item.link}-${index}`} className="relative flex group">
              <button
                className="flex items-center"
                aria-haspopup={!!item.subMenu}
                aria-expanded="false"
              >
                {item.title}
                {item.subMenu && (
                  <ChevronDown
                    className="ml-1 group-hover:text-red-400"
                    size={20}
                  />
                )}
              </button>
              {item.subMenu && (
                <ul className="absolute hidden group-hover:block bg-white shadow-lg">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li
                      key={`${subItem.link}-${subIndex}`}
                      className="p-2 hover:bg-gray-200"
                    >
                      <a href={subItem.link} className="block text-gray-700">
                        {subItem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
*/
