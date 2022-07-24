import type { NextPage } from "next";
import DietDay from "../../components/diets/DietDropdown/DietDay";

import { dateFormatter } from "../../utils/dateFormatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./diets.module.scss";
import { useState } from "react";

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

      <div className={styles.analyticsContainer}>
        <Analytics
          pastCalories={pastCaloriesPlaceholder}
          calories={1900}
          protein={300}
          fat={200}
          carbs={100}
        />
        <Suggestion message="Don't like what you see?" />
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

const pastCaloriesPlaceholder = [
  { dateTime: new Date(2022, 6, 19).getTime(), calories: 1900 },
  { dateTime: new Date(2022, 6, 18).getTime(), calories: 1930 },
  { dateTime: new Date(2022, 6, 17).getTime(), calories: 1870 },
  { dateTime: new Date(2022, 6, 16).getTime(), calories: 1920 },
  { dateTime: new Date(2022, 6, 15).getTime(), calories: 1700 },
  { dateTime: new Date(2022, 6, 14).getTime(), calories: 1880 },
  { dateTime: new Date(2022, 6, 13).getTime(), calories: 2100 },
  { dateTime: new Date(2022, 6, 12).getTime(), calories: 2050 },
  { dateTime: new Date(2022, 6, 11).getTime(), calories: 1950 },
  { dateTime: new Date(2022, 6, 10).getTime(), calories: 1970 },
  { dateTime: new Date(2022, 6, 9).getTime(), calories: 1940 },
  { dateTime: new Date(2022, 6, 8).getTime(), calories: 1970 },
  { dateTime: new Date(2022, 6, 7).getTime(), calories: 1930 },
  { dateTime: new Date(2022, 6, 6).getTime(), calories: 1940 },
  { dateTime: new Date(2022, 6, 5).getTime(), calories: 1940 },
  { dateTime: new Date(2022, 6, 4).getTime(), calories: 1950 },
  { dateTime: new Date(2022, 6, 3).getTime(), calories: 2000 },
  { dateTime: new Date(2022, 6, 2).getTime(), calories: 1980 },
  { dateTime: new Date(2022, 6, 1).getTime(), calories: 1990 },
  { dateTime: new Date(2022, 6, 0).getTime(), calories: 2000 },
  { dateTime: new Date(2022, 5, 30).getTime(), calories: 2020 },
  { dateTime: new Date(2022, 5, 29).getTime(), calories: 2020 },
  { dateTime: new Date(2022, 5, 28).getTime(), calories: 2040 },
  { dateTime: new Date(2022, 5, 27).getTime(), calories: 2090 },
  { dateTime: new Date(2022, 5, 26).getTime(), calories: 2070 },
  { dateTime: new Date(2022, 5, 25).getTime(), calories: 2090 },
  { dateTime: new Date(2022, 5, 24).getTime(), calories: 2120 },
  { dateTime: new Date(2022, 5, 23).getTime(), calories: 2200 },
];

export default DietsIndexPage;
