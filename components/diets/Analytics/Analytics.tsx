import { PieChart } from "react-minimal-pie-chart";
import styles from "./Analytics.module.scss";

export type AnalyticsProps = {
  calories: number;
  carbs: number;
  fat: number;
  protein: number;
};

const Analytics = (props: AnalyticsProps) => {
  return (
    <div className={styles.analytics}>
      <div className={styles.macro}>
        <div className={styles.numbers}>
          <h3 className={styles.header}>Analytics</h3>
          <div className={styles.legend}>
            <div className={styles.carbs}>Fats (grams)</div>
            <div className={styles.fat}>Protein (grams)</div>
            <div className={styles.protein}>Carbs (grams)</div>
          </div>
        </div>
        <div className={styles.pieChart}>
          <PieChart
            animate
            animationEasing="ease-out"
            label={({ dataEntry }) => dataEntry.value}
            labelStyle={{
              fontSize: "8px",
              fill: "#FFFFFF",
              fontWeight: "400",
            }}
            data={[
              { title: "Carbohydrates", value: props.carbs, color: "#4287f5" },
              { title: "Fat", value: props.fat, color: "#d6410f" },
              { title: "Protein", value: props.protein, color: "#6A2135" },
            ]}
            lineWidth={35}
            radius={50}
            labelPosition={82}
          />
          <div className={styles.pieChartCalories}>
            <span className={styles.label}>Calories</span>
            <span className={styles.number}>{props.calories}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
