import useDeviceType from "../../../hooks/useDeviceType";

import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarPhone from "./NavbarPhone/NavbarPhone";
import NavbarTablet from "./NavbarTablet/NavbarTablet";

const Navbar = () => {
  const deviceType: string = useDeviceType();
  if (deviceType === "undefined") {
    return null;
  } else if (deviceType === "phone") {
    return <NavbarPhone />;
  } else if (deviceType === "tablet") {
    return <NavbarTablet />;
  }
  return (
    <NavbarDesktop
      links={[
        { href: "/excercises", text: "Excercises" },
        { href: "/diets", text: "Diets" },
        { href: "/about", text: "About" },
      ]}
    />
  );
};

export default Navbar;
