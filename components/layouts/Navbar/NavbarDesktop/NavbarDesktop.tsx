import Link from "next/link";
import { useRouter } from "next/router";
import { useLayoutEffect, useRef, useEffect, useState } from "react";

import styles from "./NavbarDesktop.module.scss";

import useScrollPosition from "../../../../hooks/useScrollPosition";

type NavbarProps = {
  links: { href: string; text: string }[];
};

const NavbarDesktop: React.FC<NavbarProps> = ({ links }) => {
  const [isTransparent, setIsTransparent] = useState(false);
  const [activePosition, setActivePosition] = useState(-1);

  const scrollPosition = useScrollPosition();

  const router = useRouter();

  useEffect(() => {
    links.forEach((link, index) => {
      if (router.asPath === link.href) {
        setActivePosition(index);
      }
    });
  }, []);

  console.log(activePosition);

  useEffect(() => {
    setIsTransparent(scrollPosition > 64);
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
            {links.map((link, index) => {
              return (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a
                      className={`${styles.link} ${
                        router.asPath === link.href ? styles.active : ""
                      }`}
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
    </div>
  );
};

export default NavbarDesktop;
