import React from "react";
import { Bar, Chart } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

Chart.defaults.font.size = 25;
Chart.defaults.font.family = "Bebas Neue";

const BarChart = () => {
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
        // first dataset
        {
          label: "# of votes",
          data: [3, 6, 8],
          backgroundColor: [
            getGradientColor(
              ctx,
              "rgba(54, 162, 235, 1)",
              "rgba(242,254,255, 0.3)"
            ),
            getGradientColor(
              ctx,
              "rgba(52,140,78, 1)",
              "rgb(133,255,186, 0.3)"
            ),
            getGradientColor(
              ctx,
              "rgba(133, 92, 92, 1)",
              "rgb(255, 176, 176, 0.3)"
            ),
          ],
          borderWidth: 0,
          borderColor: [
            "rgba(54, 162, 235, 1)",
            "rgba(52,140,78, 1)",
            "rgba(133, 92, 92, 1)",
          ],
        },
        // second dataset
        {
          label: "Quantity",
          data: [10, 5, 7],
          backgroundColor:
            //"#0C2D48",
            getGradientColor(ctx, "rgba(3,35,51, 1)", "rgba(242,254,255, 0.3)"),
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
        <u>Bar Chart</u>
      </h2>
      <Bar
        data={data}
        height={400}
        width={800}
        options={{
          responsive: true,
          //   maintainAspectRatio: true,
          scales: {
            y: {
              title: {
                display: true,
                text: "Value",
              },
              min: 0,
              max: 12,
              ticks: {
                stepSize: 3,
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: "black",
                font: {
                  size: 20,
                  weight: "bold",
                  lineHeight: 1.2,
                },
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "random data",
              color: "#041e40",
              font: {
                // family: "Comic Sans MS",
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

export default BarChart;
