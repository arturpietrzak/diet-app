import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./NavbarMobile.module.scss";
import Backdrop from "../../Backdrop/Backdrop";
import { NavbarProps } from "../Navbar";
import { useRouter } from "next/router";

const NavbarMobile: React.FC<NavbarProps> = ({ links }) => {
  const [isExtended, setIsExtended] = useState(false);

  useEffect(() => {
    if (isExtended) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isExtended]);

  const router = useRouter();

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
              <a
                href="#"
                className={styles.logo}
                onClick={() => setIsExtended(!isExtended)}
              >
                Logo
              </a>
            </Link>
          </div>
          <ul className={styles.list}>
            {links.map((link) => {
              return (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a
                      className={`${styles.link} ${
                        router.asPath === link.href ? styles.active : ""
                      }`}
                      onClick={() => setIsExtended(!isExtended)}
                    >
                      {link.text}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      {isExtended && <Backdrop onClick={() => setIsExtended(false)} />}
    </div>
  );
};

export default NavbarMobile;
