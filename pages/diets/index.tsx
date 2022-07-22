import type { NextPage } from "next";
import Link from "next/link";
import DietDay from "../../components/diets/DietDropdown/DietDay";

import { dateFormatter } from "../../utils/dateFormatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./diets.module.scss";
import { useState } from "react";
import Image from "next/future/image";

import backgroundWood from "../../public/images/wood-min.png";
import { PieChart } from "react-minimal-pie-chart";
import Suggestion from "../../components/layouts/Suggestion/Suggestion";
import Analytics from "../../components/diets/Analytics/Analytics";

const DietsIndexPage: NextPage = () => {
  const [dietIndex, setDietIndex] = useState(0);

  const previousDay = (): void => {
    if (canGoPrevious()) {
      setDietIndex(dietIndex - 1);
    }
  };

  const nextDay = (): void => {
    if (canGoNext()) {
      setDietIndex(dietIndex + 1);
    }
  };

  const canGoNext = (): boolean => {
    return dietIndex < placeholderProps.length - 1;
  };

  const canGoPrevious = (): boolean => {
    return dietIndex > 0;
  };

  return (
    <div className={styles.dietsPageContainer}>
      <div className={styles.dietSection}>
        <div className={styles.dietDayContainer}>
          <DietDay {...placeholderProps[dietIndex]} />
        </div>
        <div className={styles.dietDayControls}>
          <button
            disabled={!canGoPrevious()}
            className={styles.button}
            onClick={previousDay}
          >
            {<FontAwesomeIcon icon={faChevronLeft} />}
          </button>
          <h2 className={styles.day}>
            {dateFormatter(placeholderProps[dietIndex].date)}
          </h2>
          <button
            disabled={!canGoNext()}
            className={styles.button}
            onClick={nextDay}
          >
            {<FontAwesomeIcon icon={faChevronRight} />}
          </button>
        </div>
      </div>

      <div>
        <Analytics //protein={300} fat={200} carbs={100}
        />
        <Suggestion />
      </div>
    </div>
  );
};

const placeholderProps = [
  {
    date: new Date(2022, 6, 19),
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
        id: "5",
        name: "Steak with potatoes",
        preparationTime: 35,
        imageUrl: " ",
        calories: 600,
      },
    ],
  },
  {
    date: new Date(2022, 6, 20),
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
        id: "5",
        name: "Steak with potatoes",
        preparationTime: 35,
        imageUrl: " ",
        calories: 600,
      },
    ],
  },
];

export default DietsIndexPage;
