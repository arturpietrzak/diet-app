import Link from "next/link";
import styles from "./Suggestion.module.scss";

const Suggestion = () => {
  return (
    <div className={styles.suggestion}>
      <div className={styles.header}>Don&apos;t like what you see?</div>
      <Link href="/diets/suggest">
        <a className={styles.link}>Contact us here</a>
      </Link>
    </div>
  );
};
export default Suggestion;
