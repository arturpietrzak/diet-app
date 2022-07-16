import type { NextPage } from "next";
import styles from "./index.module.scss";
import Image from "next/image";
import useDeviceType from "../hooks/useDeviceType";

const Home: NextPage = () => {
  const deviceType = useDeviceType();
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
            src={
              deviceType === "desktop"
                ? "/images/desktop-main-img.png"
                : "/images/mobile-main-img.png"
            }
            alt="diet"
          />
        </div>
      </header>
    </div>
  );
};

export default Home;
