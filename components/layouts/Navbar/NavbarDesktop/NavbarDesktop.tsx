import Link from "next/link";
import { useRouter } from "next/router";
import { useLayoutEffect, useRef, useEffect, useState } from "react";

import styles from "./NavbarDesktop.module.scss";

import useScrollPosition from "../../../../hooks/useScrollPosition";
import { NavbarProps } from "../Navbar";

const NavbarDesktop: React.FC<NavbarProps> = ({ links }) => {
  const [isTransparent, setIsTransparent] = useState(false);

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    setIsTransparent(scrollPosition <= 0);
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
              <a className={styles.logo}>Logo</a>
            </Link>
          </div>
          <ul className={styles.list}>
            {links.map((link) => {
              return (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className={styles.link}>{link.text}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.account}>
            <Link href="/account">
              <a>Account</a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarDesktop;
