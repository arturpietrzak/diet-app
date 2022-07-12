import * as React from "react";

import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
