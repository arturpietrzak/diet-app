import useDeviceType from "../../../hooks/useDeviceType";

import NavbarDesktop from "./navbarDesktop/NavbarDesktop";
import NavbarPhone from "./navbarPhone/NavbarPhone";
import NavbarTablet from "./navbarTablet/NavbarTablet";

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
