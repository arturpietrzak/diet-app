import { PieChart } from "react-minimal-pie-chart";
import styles from "./Analytics.module.scss";

const Analytics = () => {
  return (
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
            animationEasing="ease-out"
            label={({ dataEntry }) => dataEntry.value}
            labelStyle={{
              fontSize: "8px",
              fill: "#FFFFFF",
              fontWeight: "400",
            }}
            data={[
              { title: "One", value: 10, color: "#E38627" },
              { title: "Two", value: 15, color: "#C13C37" },
              { title: "Three", value: 20, color: "#6A2135" },
            ]}
            lineWidth={25}
            radius={50}
            labelPosition={87}
          />
          <div className={styles.pieChartCalories}>
            <span className={styles.label}>Calories</span>
            <span className={styles.number}>100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
