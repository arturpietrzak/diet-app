import Link from "next/link";
import styles from "./Suggestion.module.scss";

type SuggestionProps = {
  message: string;
};

const Suggestion = ({ message }: SuggestionProps) => {
  return (
    <div className={styles.suggestion}>
      <div className={styles.header}>{message}</div>
      <Link href="/contact">
        <a className={styles.link}>Contact us here</a>
      </Link>
    </div>
  );
};
export default Suggestion;
