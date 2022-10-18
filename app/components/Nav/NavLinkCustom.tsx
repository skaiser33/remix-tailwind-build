import { Link } from "@remix-run/react";

export default function NavLinkCustom(props) {
  return (
    <Link className="px-5" to={props.route}>
      {props.name}
    </Link>
  );
}
