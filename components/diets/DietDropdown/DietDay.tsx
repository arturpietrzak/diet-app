import Image from "next/image";
import { dateFormatter } from "../../../utils/dateFormatter";
import styles from "./DietDay.module.scss";

type DietDayProps = {
  date: Date;
  meals: {
    id: string;
    name: string;
    imageUrl?: string;
    calories: number;
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
          <div key={meal.id} className={styles.meal}>
            <h3 className={styles.mealName}></h3>
            {meal.imageUrl && (
              <Image
                loader={() => imageLoader(meal.imageUrl!, 300, 300)}
                src={meal.imageUrl}
                alt={meal.name}
              />
            )}
            <span className={styles.calories}>{meal.calories}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietDay;
