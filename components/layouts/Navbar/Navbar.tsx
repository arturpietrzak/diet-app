import useDeviceType from "../../../hooks/useDeviceType";

import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarPhone from "./NavbarPhone/NavbarPhone";
import NavbarTablet from "./NavbarTablet/NavbarTablet";

const Navbar = () => {
  const deviceType: string = useDeviceType();

  if (deviceType === "phone") {
    return <NavbarPhone />;
  } else if (deviceType === "tablet") {
    return <NavbarTablet />;
  }
  return <NavbarDesktop />;
};

export default Navbar;
