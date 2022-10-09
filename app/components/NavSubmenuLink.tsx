import { Link } from "@remix-run/react";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function NavSubmenuLink(props) {
  return (
    <Link
      to={props.route}
      className="text-gray-700 block px-4 py-2 text-sm"
      role="menuitem"
      tabIndex={-1}
      id={`menu-item-${props.menuItemId}`}
    >
      {props.name}
    </Link>
  );
}
