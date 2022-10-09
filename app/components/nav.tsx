import NavDropdown from "./NavDropdown";
import NavLinkCustom from "./NavLinkCustom";

export default function Nav() {
  return (
    <div className="flex items-center">
      <img
        src="/img/alogo-4.png"
        alt="logo"
        className="max-h-24"
        // onMouseEnter={() => setShowSubmenu(false)}
      />
      <div className="flex absolute right-5 justify-between">
        <NavLinkCustom name="Home" route="/" />
        <NavLinkCustom name="Meet Our Team" route="/meet-our-team" />
        <NavDropdown
          name="Services"
          menu={["Account Settings", "Support", "License"]}
        />
      </div>
    </div>
  );
}
