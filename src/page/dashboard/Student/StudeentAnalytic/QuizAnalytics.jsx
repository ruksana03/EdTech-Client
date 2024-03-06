/* eslint-disable react-refresh/only-export-components */
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["quiz left", 7],
  ["quiz completed", 5],
  ["Watch Videos", 4],
];

export const options = {
  title: "My Daily Activities",
  is3D: true,
};

const QuizAnalytics = () => {
  return (
    <div className="w-full">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        height={"400px"}
      />
    </div>
  );
};

export default QuizAnalytics;