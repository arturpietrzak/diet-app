import styles from "./Analytics.module.scss";

import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
import { ApexOptions } from "apexcharts";

import { PieChart } from "react-minimal-pie-chart";
import useWindowSize from "../../../hooks/useWindowSize";
import useDeviceType from "../../../hooks/useDeviceType";

export type AnalyticsProps = {
  calories: number;
  carbs: number;
  fat: number;
  protein: number;
  pastCalories: { dateTime: number; calories: number }[];
};

const Analytics = (props: AnalyticsProps) => {
  const today = new Date();
  const priorDate = new Date(new Date().setDate(today.getDate() - 30));

  const series = [
    {
      name: "Calories",
      data: props.pastCalories.map((item) => {
        return {
          x: item.dateTime,

          y: item.calories,
        };
      }),
    },
  ];

  const options: ApexOptions = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      min: priorDate.getTime(),
      tickAmount: 6,
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
      theme: "dark",
      style: {
        fontSize: "1rem",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.8,
        opacityTo: 0.3,
        stops: [0, 100],
      },
    },
  };

  if (true) {
    return (
      <div className={styles.analytics}>
        <div className={styles.macro}>
          <div className={styles.numbers}>
            <h3 className={styles.header}>Macro for today</h3>
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
                {
                  title: "Carbohydrates",
                  value: props.carbs,
                  color: "#4287f5",
                },
                { title: "Fat", value: props.fat, color: "#d6410f" },
                { title: "Protein", value: props.protein, color: "#6A2135" },
              ]}
              lineWidth={35}
              radius={50}
              labelPosition={82}
            />
            <div className={styles.pieChartCalories}>
              <span className={styles.number}>{props.calories}</span>
              <span className={styles.label}>kcal</span>
            </div>
          </div>
        </div>
        <div className={styles.chartContainer}>
          <h3 className={styles.header}>Calories over the past month</h3>
          <ApexCharts
            height={300}
            type="area"
            series={series}
            options={options}
          />
        </div>
      </div>
    );
  }
};

export default Analytics;
