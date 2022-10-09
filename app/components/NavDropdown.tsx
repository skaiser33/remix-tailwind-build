/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
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
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
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
            <NavSubmenuLink
              name={props.menu[1]}
              menuItemId={0}
              route="/meet-our-team"
            />
            <NavSubmenuLink
              name="Support"
              menuItemId={1}
              route="/meet-our-team"
            />
            <NavSubmenuLink
              name="License"
              menuItemId={2}
              route="/meet-our-team"
            />
            {props.name === "Services" && (
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id={`menu-item-${props.menu.length}`}
                >
                  Sign out
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
