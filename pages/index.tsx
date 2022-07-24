import type { NextPage } from "next";
import styles from "./index.module.scss";
import Image from "next/future/image";
import useDeviceType from "../hooks/useDeviceType";

import backgroundMobile from "../public/images/main-img-phone.png";
import backgroundTablet from "../public/images/main-img-tablet.png";
import backgroundDesktop from "../public/images/main-img-desktop.png";
import sectionImg from "../public/images/section-img.png";

const getBackgroundImage = (deviceType: string) => {
  switch (deviceType) {
    case "phone":
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

  console.log(deviceType);

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
            src={getBackgroundImage(deviceType)}
            priority
            alt="diet"
            placeholder="blur"
          />
        </div>
      </header>
      <section className={styles.purchaseSection}>
        <div className={styles.section}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3 className={styles.planName}>Basic plan</h3>
              <ul>
                <li>Personalized diet</li>
                <li>Access to the community</li>
                <li>1-on-1 consultations with dietician</li>
              </ul>
              <button>Choose this plan</button>
            </div>
            <div className={`${styles.card} ${styles.premium}`}>
              <h3 className={styles.planName}>Premium plan</h3>
              <ul>
                <li>Personalized diet</li>
                <li>Access to the community</li>
                <li>1-on-1 consultations with dietician</li>
                <li>Training plan with instructions</li>
              </ul>
              <button>Choose this plan</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
