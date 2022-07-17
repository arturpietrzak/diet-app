import type { NextPage } from "next";
import Link from "next/link";
import DietDay from "../../components/diets/DietDropdown/DietDay";

import styles from "./diets.module.scss";

const DietsIndexPage: NextPage = () => {
  return (
    <div className={styles.dietsPageContainer}>
      <div className={styles.dietDayContainer}>
        <DietDay {...placeholderProps} />
      </div>
    </div>
  );
};

const placeholderProps = {
  date: new Date(),
  meals: [
    {
      id: "1",
      name: "Oatmeal with strawberries",
      preparationTime: 10,
      imageUrl: " ",
      calories: 300,
    },
    {
      id: "2",
      name: "Quesadilla with tortilla",
      preparationTime: 20,
      imageUrl: " ",
      calories: 400,
    },
    {
      id: "3",
      name: "Chicken with rice",
      preparationTime: 15,
      imageUrl: " ",
      calories: 500,
    },
    {
      id: "4",
      name: "Steak with potatoes",
      preparationTime: 35,
      imageUrl: " ",
      calories: 600,
    },
    {
      id: "4",
      name: "Steak with potatoes",
      preparationTime: 35,
      imageUrl: " ",
      calories: 600,
    },
  ],
};

export default DietsIndexPage;
