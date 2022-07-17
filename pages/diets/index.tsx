import type { NextPage } from "next";
import Link from "next/link";
import DietDay from "../../components/diets/DietDropdown/DietDay";

import styles from "./diets.module.scss";

const DietsIndexPage: NextPage = () => {
  return (
    <div className="">
      <h1>Diets page shows diet for this week</h1>
      <div className=""></div>
      <DietDay {...placeholderProps} />
    </div>
  );
};

const placeholderProps = {
  date: new Date(),
  meals: [
    {
      id: "1",
      name: "Oatmeal with strawberries",
      imageUrl: "",
      calories: 300,
    },
    {
      id: "2",
      name: "Quesadilla with tortilla",
      imageUrl: "",
      calories: 400,
    },
    {
      id: "3",
      name: "Chicken with rice",
      imageUrl: "",
      calories: 500,
    },
    {
      id: "4",
      name: "Steak with potatoes",
      imageUrl: "",
      calories: 600,
    },
  ],
};

export default DietsIndexPage;
