import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./navbarTablet.module.scss";
import Backdrop from "../../Backdrop/Backdrop";

const NavbarTablet = ({}) => {
  const [isExtended, setIsExtended] = useState(false);

  useEffect(() => {
    if (isExtended) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isExtended]);

  const hideBackdrop = () => {
    setIsExtended(false);
  };

  return (
    <div>
      <nav
        className={`${styles.navbarWrapper} ${
          !isExtended ? styles.hidden : ""
        }`}
      >
        <button
          className={styles.hamburger}
          onClick={() => setIsExtended(!isExtended)}
        >
          <FontAwesomeIcon
            icon={faBars}
            className={!isExtended ? styles.backdrop : ""}
          />
        </button>
        <div
          className={`${styles.navbar} ${!isExtended ? styles.notVisible : ""}`}
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
      {isExtended && <Backdrop onClick={hideBackdrop} />}
    </div>
  );
};

export default NavbarTablet;
