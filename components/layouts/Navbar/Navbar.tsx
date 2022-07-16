import useDeviceType from "../../../hooks/useDeviceType";

import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";

const links = [
  { href: "/diets", text: "Diets" },
  { href: "/community", text: "Community" },
  { href: "/progress", text: "Progress" },
  { href: "/excercises", text: "Excercises" },
];

const Navbar = () => {
  const deviceType: string = useDeviceType();
  if (deviceType === "undefined") {
    return null;
  } else if (deviceType === "phone" || deviceType === "tablet") {
    return <NavbarMobile links={links} />;
  }

  return <NavbarDesktop links={links} />;
};

export type NavbarProps = {
  links: { href: string; text: string }[];
};

export default Navbar;
