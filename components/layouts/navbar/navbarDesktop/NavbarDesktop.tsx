import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./NavbarDesktop.module.scss";

import useScrollPosition from "../../../../hooks/useScrollPosition";

const NavbarDesktop = ({}) => {
  const [isTransparent, setIsTransparent] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    setIsTransparent(scrollPosition !== 0);
  }, [scrollPosition]);

  return (
    <div>
      <nav
        className={`${styles.navbarWrapper} ${
          !isTransparent ? styles.transparent : ""
        }`}
      >
        <div
          className={`${styles.navbar} ${
            isTransparent ? styles.transparent : ""
          }`}
        >
          <div className={styles.header}>
            <Link href="/">
              <a href="#" className={styles.logo}>
                Logo
              </a>
            </Link>
          </div>
          <ul className={styles.list}>
            <li>
              <Link href="/">
                <a
                  href="sass.html"
                  className={`${styles.link} ${styles.active}`}
                >
                  Sass
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a href="badges.html" className={styles.link}>
                  Components
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a href="collapsible.html" className={styles.link}>
                  JavaScript
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarDesktop;
