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
  const defaultLabelStyle = {
    fontSize: "8px",
  };

  return (
    <div className={styles.dietsPageContainer}>
      <div className={styles.dietDayContainer}>
        <DietDay {...placeholderProps[dietIndex]} />
        <div className={styles.dietDayControlsContainer}>
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
      </div>

      <div className={styles.analytics}>
        <div className={styles.macro}>
          <div className={styles.numbers}>
            <h3 className={styles.header}>Analytics</h3>
            <div className={styles.data}>Calories: </div>
            <div className={styles.data}>Fats: </div>
            <div className={styles.data}>Protein: </div>
            <div className={styles.data}>Carbs: </div>
          </div>
          <div className={styles.pieChart}>
            <PieChart
              animate
              label={({ dataEntry }) => dataEntry.value}
              labelStyle={{
                ...defaultLabelStyle,
              }}
              data={[
                { title: "One", value: 10, color: "#E38627" },
                { title: "Two", value: 15, color: "#C13C37" },
                { title: "Three", value: 20, color: "#6A2135" },
              ]}
            />
          </div>
        </div>
      </div>

      <div className={styles.suggestion}>
        <div className={styles.text}>
          <div className={styles.header}>Don&apos;t like what you see?</div>
          <Link href="/diets/suggest">
            <a className={styles.link}>Contact us here</a>
          </Link>
        </div>
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
