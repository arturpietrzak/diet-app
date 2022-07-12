import useDeviceType from "../../../hooks/useDeviceType";

import NavbarDesktop from "./navbarDesktop/navbarDesktop";
import NavbarPhone from "./navbarPhone/navbarPhone";
import NavbarTablet from "./navbarTablet/navbarTablet";

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
