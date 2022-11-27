import { ArcElement, Chart as ChartJS } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function Score({ score800 }) {
  ChartJS.register(ArcElement);

  const score = ((score800 - 350) / 450) * 100;

  const options = {
    responsive: true,
  };

  const data = {
    datasets: [
      {
        data: [100 - score, score],
        backgroundColor: ["transparent", "#fff"],
        borderWidth: 0,
        cutout: "80%",
        borderRadius: "90",
      },
    ],
  };
  const dataBg = {
    datasets: [
      {
        data: [1],
        backgroundColor: ["rgba(255, 255, 255, .4)"],
        borderWidth: 0,
        cutout: "80%",
        borderRadius: "0",
        options: { animation: false },
      },
    ],
  };
  return (
    <div className="chart score">
      <Doughnut data={data} options={options} />
      <div className="bg">
        <Doughnut data={dataBg} options={options} />
      </div>
      <div className="blur">
        <Doughnut data={data} options={options} />
      </div>
      <div className="number">{score * 4.5 + 350}</div>
    </div>
  );
}
