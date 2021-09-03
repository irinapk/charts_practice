import React from "react";
import { Bar, Chart } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

Chart.defaults.font.size = 25;
Chart.defaults.font.family = "Bebas Neue";

const StackedChart = () => {
  // creating gradient colors and datasets
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    function getGradientColor(ctx, colorTop, colorBottom) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 450);
      gradient.addColorStop(0.6, colorTop);
      gradient.addColorStop(1, colorBottom);
      return gradient;
    }
    return {
      labels: ["One", "Two", "Three"],
      datasets: [
        {
          label: "Votes",
          data: [3, 6, 8],
          backgroundColor: "rgb(242,162,24,0.7)",
          borderWidth: 0,
        },
        {
          label: "Quantity",
          data: [10, 5, 7],
          backgroundColor: "rgba(52,140,78, 0.7)",
        },
        {
          label: "Numbers",
          data: [2, 1, 4],
          backgroundColor: "rgba(133, 92, 92, 0.7)",
        },
      ],
    };
  };

  return (
    <div
      style={{
        width: "800px",
        height: "500px",
      }}
    >
      <h2 style={{ color: "black", fontFamily: "Bebas Neue" }}>
        <u>Stacked Bar Chart</u>
      </h2>
      <Bar
        data={data}
        height={400}
        width={800}
        options={{
          responsive: true,
          scales: {
            y: {
              stacked: true,
              title: {
                display: true,
                text: "Valuesss",
              },
              min: 0,
              max: 20,
              ticks: {
                stepSize: 5,
              },
            },
            x: {
              stacked: true,
              grid: {
                display: false,
              },
              ticks: {
                color: "black",
                font: {
                  size: 20,
                },
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "amazing data",
              color: "#041e40",
              font: {
                size: 40,
                lineHeight: 1.2,
              },
            },
            legend: {
              labels: {
                font: {
                  size: 16,
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

export default StackedChart;
