import React from "react";
import { Pie, Chart } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

Chart.defaults.font.size = 25;
Chart.defaults.font.family = "Bebas Neue";

const PieChart = () => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    return {
      labels: ["One", "Two", "Three", "Four", "Five"],
      datasets: [
        {
          label: "# of votes",
          data: [3, 6, 8, 5, 7],
          backgroundColor: [
            "rgba(54, 162, 235, 0.8)",
            "rgba(52,140,78, 0.8)",
            "rgba(133, 92, 92, 0.8)",
            "rgba(212,198,13, 0.7)",
            "rgba(140, 138, 212, 0.7)",
          ],
          borderWidth: 2,
          borderColor: "white",
          hoverBackgroundColor: "#041e40",
          hoverBorderColor: "#041e40",
          hoverBorderWidth: 3,
        },
      ],
    };
  };

  return (
    <div style={{ width: "500px", height: "500px" }}>
      <h2
        style={{
          color: "black",
          fontFamily: "Bebas Neue",
          marginTop: "0",
        }}
      >
        <u>pie chart</u>
      </h2>
      <Pie
        data={data}
        height={100}
        width={100}
        options={{
          responsive: true,
          maintainAspectRatio: true,

          plugins: {
            title: {
              display: true,
              text: "another random data",
              color: "#041e40",
              font: {
                // family: "Comic Sans MS",
                size: 40,
                lineHeight: 1.2,
              },
            },
            legend: {
              position: "bottom",
              labels: {
                font: {
                  size: 20,
                  lineHeight: 1.2,
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
