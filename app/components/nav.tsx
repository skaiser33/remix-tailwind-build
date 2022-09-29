import { Link } from "@remix-run/react";
import { useState } from "react";

export default function Nav() {
  const [showServices, setShowServices] = useState(false);

  return (
    <div className="flex items-center">
      <img src="/img/alogo-4.png" alt="logo" className="max-h-24" />
      <div className="flex absolute right-5 justify-between">
        <Link className="px-5" to="/">
          Home
        </Link>
        <Link className="px-5" to="/meet-our-team">
          Meet Our Team
        </Link>
        {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
        <div
          className="relative inline-block text-left"
          onMouseEnter={() => setShowServices(true)}
          onMouseLeave={() => setShowServices(false)}
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
              Services
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
          {showServices && (
            <div
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                >
                  Account settings
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-2"
                >
                  License
                </a>
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-3"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
