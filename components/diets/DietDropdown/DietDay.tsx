import Image from "next/image";
import { dateFormatter } from "../../../utils/dateFormatter";
import styles from "./DietDay.module.scss";

import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type DietDayProps = {
  date: Date;
  meals: {
    id: string;
    name: string;
    preparationTime: number;
    imageUrl?: string;
  }[];
};

const imageLoader = (src: string, height: number, width: number) => {
  return `https://picsum.photos/${width}/${height}`;
};

const DietDay = ({ date, meals }: DietDayProps) => {
  return (
    <div className={styles.dietDayContainer}>
      <h2 className={styles.day}>{dateFormatter(date)}</h2>
      <div className={styles.dietDay}>
        {meals.map((meal) => (
          <Link key={meal.id} href={`/diets/${meal.id}`}>
            <div className={styles.meal}>
              <div className={styles.infoContainer}>
                <h3 className={styles.mealName}>{meal.name}</h3>
                <div className={styles.preparationTime}>
                  <FontAwesomeIcon className={styles.icon} icon={faClock} />
                  <span>{meal.preparationTime} min</span>
                </div>
              </div>
              {meal.imageUrl && (
                <Image
                  height="100"
                  width="100%"
                  layout="responsive"
                  loader={() => imageLoader(meal.imageUrl!, 300, 300)}
                  src={meal.imageUrl}
                  alt={meal.name}
                />
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DietDay;
