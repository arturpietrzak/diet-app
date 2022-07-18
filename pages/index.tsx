import type { NextPage } from "next";
import styles from "./index.module.scss";
import Image from "next/image";
import useDeviceType from "../hooks/useDeviceType";

import backgroundMobile from "../public/images/main-img-phone.png";
import backgroundTablet from "../public/images/main-img-tablet.png";
import backgroundDesktop from "../public/images/main-img-desktop.png";

const getBackgreoundImage = (deviceType: string) => {
  switch (deviceType) {
    case "mobile":
      return backgroundMobile;
    case "tablet":
      return backgroundTablet;
    case "desktop":
      return backgroundDesktop;
    default:
      return backgroundDesktop;
  }
};

const Home: NextPage = () => {
  const deviceType = useDeviceType();

  if (deviceType === "undefined") {
    return <div></div>;
  }

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.headerText}>
          <p>
            Lorem ipsum
            <span className={styles.highlight}> dolor sit </span>
          </p>
          <p>amet consectetur.</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            layout="fill"
            src={getBackgreoundImage(deviceType)}
            priority
            alt="diet"
            placeholder="blur"
          />
        </div>
      </header>
    </div>
  );
};

export default Home;
