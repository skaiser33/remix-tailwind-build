/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import ChevronDown from "../Home/ChevronDown";
// import { ChevronDownIcon } from "@heroicons/react/24/solid";

import NavSubmenuLink from "./NavSubmenuLink";

export default function NavDropdown(props) {
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setShowSubmenu(true)}
    >
      <div>
        <button
          type="button"
          // className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          className="inline-flex focus:ring-offset-gray-100 px-5 items-center"
          // w-full justify-center rounded-md  border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2

          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {props.name}
          {/* <!-- Heroicon name: mini/chevron-down --> */}
          {/* <ChevronDownIcon /> */}

          <ChevronDown />
        </button>
      </div>

      {/* <!--
        Dropdown menu, show/hide based on menu state.

        Entering: "transition ease-out duration-100"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      --> */}
      {showSubmenu && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
          onMouseLeave={() => setShowSubmenu(false)}
        >
          <div className="py-1" role="none">
            {props.menu.map((item, index) => (
              <NavSubmenuLink
                key={item}
                name={item}
                menuItemId={index}
                route="/meet-our-team"
              />
            ))}
            {props.name === "Account" && (
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id={`menu-item-${props.menu.length}`}
                >
                  Sign Out
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
